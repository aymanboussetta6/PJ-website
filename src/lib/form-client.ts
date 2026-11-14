import { isInputError } from 'astro:actions';

type ActionResult = { error?: { message: string; fields?: Record<string, unknown> } | unknown };

interface FileRule {
  name: string;
  required: boolean;
  maxBytes: number;
  pattern: RegExp;
}

/**
 * Progressive enhancement shared by the site forms: client validation, submit through an
 * Astro action, accessible status message. Texts come from the form's data-messages attribute.
 */
export function enhanceForm(form: HTMLFormElement, submit: (data: FormData) => Promise<ActionResult>, file?: FileRule) {
  const msg = JSON.parse(form.dataset.messages ?? '{}') as Record<string, string>;
  const status = form.querySelector<HTMLElement>('[role=status]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]')!;

  const show = (text: string, ok: boolean) => {
    status.textContent = text;
    status.className = `rounded-xl px-4 py-3 text-sm sm:col-span-2 ${ok ? 'bg-sky-light/60 text-ink' : 'bg-red-50 text-red-800'}`;
  };
  const markInvalid = (name: string) => form.querySelector(`[name="${name}"]`)?.setAttribute('aria-invalid', 'true');

  // Clear the error state of a field as soon as the visitor edits it.
  const clear = (event: Event) => (event.target as Element | null)?.removeAttribute?.('aria-invalid');
  form.addEventListener('input', clear);
  form.addEventListener('change', clear);

  let openedAt = performance.now();
  form.addEventListener('reset', () => (openedAt = performance.now()));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));

    if (!form.checkValidity()) {
      form.querySelectorAll(':invalid').forEach((el) => el.setAttribute('aria-invalid', 'true'));
      form.querySelector<HTMLElement>(':invalid')?.focus();
      return show(msg.errorInvalid, false);
    }
    if (file) {
      const f = (form.elements.namedItem(file.name) as HTMLInputElement).files?.[0];
      const bad = f ? f.size > file.maxBytes || !file.pattern.test(f.name) : file.required;
      if (bad) {
        markInvalid(file.name);
        return show(msg.errorFile, false);
      }
    }

    // Time trap (see src/lib/antispam.ts): how long the form has been open.
    const elapsed = form.elements.namedItem('elapsed') as HTMLInputElement | null;
    if (elapsed) elapsed.value = String(Math.round(performance.now() - openedAt));

    button.disabled = true;
    button.textContent = msg.sending;
    try {
      const { error } = await submit(new FormData(form));
      if (!error) {
        form.reset();
        form.dispatchEvent(new Event('change'));
        return show(msg.success, true);
      }
      if (isInputError(error)) {
        Object.keys(error.fields).forEach(markInvalid);
        return show(file && file.name in error.fields ? msg.errorFile : msg.errorInvalid, false);
      }
      const reason = (error as { message?: string }).message;
      show(reason === 'captcha' ? msg.errorCaptcha : reason === 'rate_limited' ? msg.errorRate : msg.errorGeneric, false);
    } catch {
      show(msg.errorGeneric, false);
    } finally {
      button.disabled = false;
      button.textContent = msg.submit;
      (window as { turnstile?: { reset: () => void } }).turnstile?.reset();
    }
  });
}
