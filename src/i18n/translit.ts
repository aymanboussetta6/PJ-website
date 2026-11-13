/**
 * Serbian Latin → Cyrillic transliteration (one-to-one, as defined by Vuk's alphabet).
 * Placeholders like {brand}, e-mail addresses, URLs, file formats (PDF, DOCX)
 * and words containing q/w/x/y are left untouched.
 * Note: a few loanwords spell "nj"/"dž" as two letters (e.g. "injekcija");
 * have the Cyrillic version proofread by a native speaker before launch.
 */
const DIGRAPHS: Record<string, string> = {
  LJ: 'Љ', Lj: 'Љ', lj: 'љ',
  NJ: 'Њ', Nj: 'Њ', nj: 'њ',
  DŽ: 'Џ', Dž: 'Џ', dž: 'џ',
};

const LETTERS: Record<string, string> = {
  A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ', E: 'Е', F: 'Ф', G: 'Г', H: 'Х',
  I: 'И', J: 'Ј', K: 'К', L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П', R: 'Р', S: 'С', Š: 'Ш',
  T: 'Т', U: 'У', V: 'В', Z: 'З', Ž: 'Ж',
};
for (const [lat, cyr] of Object.entries(LETTERS)) LETTERS[lat.toLowerCase()] = cyr.toLowerCase();

const PROTECTED =
  /(\{[^}]+\}|[\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/\S+|\b(?:PDF|DOCX?)\b|\b\w*[QWXYqwxy]\w*\b)/g;

function translitPlain(text: string): string {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const pair = text.slice(i, i + 2);
    if (DIGRAPHS[pair]) {
      out += DIGRAPHS[pair];
      i++;
    } else {
      out += LETTERS[text[i]] ?? text[i];
    }
  }
  return out;
}

export function latinToCyrillic(text: string): string {
  return text
    .split(PROTECTED)
    .map((part, i) => (i % 2 === 1 ? part : translitPlain(part)))
    .join('');
}

/** Recursively transliterates every string of a dictionary object. */
export function transliterateDeep<T>(value: T): T {
  if (typeof value === 'string') return latinToCyrillic(value) as T;
  if (Array.isArray(value)) return value.map(transliterateDeep) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, transliterateDeep(v)]),
    ) as T;
  }
  return value;
}
