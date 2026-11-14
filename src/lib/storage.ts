import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_CV_BUCKET,
  SUPABASE_CONTACT_BUCKET,
} from 'astro:env/server';

/**
 * Data access for applications, contact requests and job offers.
 * - Production: Supabase (service-role key, server only; tables have RLS with no policy).
 * - Local development without Supabase: an in-memory store, so forms and the admin area can
 *   be tried end to end. Nothing is persisted and uploaded files are discarded.
 */

let client: SupabaseClient | null = null;

export function isStorageConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

/** True when data can be read and written (Supabase, or the dev in-memory store). */
export function isStorageAvailable(): boolean {
  return isStorageConfigured() || import.meta.env.DEV;
}

function supabase(): SupabaseClient {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error('Supabase is not configured');
  client ??= createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

export interface ApplicationRecord {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  domain: string;
  languages: string;
  message: string | null;
  locale: string;
  consent_at: string;
  job_offer_id: string | null;
  job_title: string | null;
}
export interface StoredApplication extends ApplicationRecord {
  id: string;
  created_at: string;
  cv_path: string | null;
}

export interface ContactRecord {
  requester_type: string;
  company: string;
  full_name: string;
  job_title: string | null;
  email: string;
  phone: string | null;
  country: string;
  trades: string[];
  message: string;
  locale: string;
  consent_at: string;
}
export interface StoredContact extends ContactRecord {
  id: string;
  created_at: string;
  attachment_path: string | null;
  handled_at: string | null;
}

export interface JobOfferInput {
  title: string;
  location: string;
  contract: string;
  domain: string;
  description: string;
  published: boolean;
}
export interface JobOffer extends JobOfferInput {
  id: string;
  created_at: string;
}

// ---------------------------------------------------------------------------------------------
// Dev-only in-memory store
// ---------------------------------------------------------------------------------------------
const memory = {
  applications: [] as StoredApplication[],
  contacts: [] as StoredContact[],
  jobs: [] as JobOffer[],
};
const useMemory = () => !isStorageConfigured() && import.meta.env.DEV;
const newest = <T extends { created_at: string }>(rows: T[]) =>
  [...rows].sort((a, b) => b.created_at.localeCompare(a.created_at));

// ---------------------------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------------------------

/** Uploads the CV to the private bucket, then inserts the application row. */
export async function saveApplication(record: ApplicationRecord, cv: File): Promise<string> {
  const id = crypto.randomUUID();
  if (useMemory()) {
    memory.applications.push({ id, created_at: new Date().toISOString(), cv_path: null, ...record });
    console.warn('[apply] Supabase non configuré — candidature gardée en mémoire (mode dev).');
    return id;
  }
  const ext = cv.name.split('.').pop()?.toLowerCase() ?? 'pdf';
  const cvPath = `${id}/cv.${ext}`;

  const { error: uploadError } = await supabase()
    .storage.from(SUPABASE_CV_BUCKET)
    .upload(cvPath, cv, { contentType: cv.type || undefined, upsert: false });
  if (uploadError) throw uploadError;

  const { error: insertError } = await supabase()
    .from('applications')
    .insert({ id, ...record, cv_path: cvPath });
  if (insertError) {
    await supabase().storage.from(SUPABASE_CV_BUCKET).remove([cvPath]);
    throw insertError;
  }
  return id;
}

export async function listApplications(): Promise<StoredApplication[]> {
  if (useMemory()) return newest(memory.applications);
  const { data, error } = await supabase()
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);
  if (error) throw error;
  return data as StoredApplication[];
}

/** Erases an application and its CV (GDPR right to erasure). */
export async function deleteApplication(id: string): Promise<void> {
  if (useMemory()) {
    memory.applications = memory.applications.filter((a) => a.id !== id);
    return;
  }
  const { data } = await supabase().from('applications').select('cv_path').eq('id', id).maybeSingle();
  if (data?.cv_path) await supabase().storage.from(SUPABASE_CV_BUCKET).remove([data.cv_path]);
  const { error } = await supabase().from('applications').delete().eq('id', id);
  if (error) throw error;
}

// ---------------------------------------------------------------------------------------------
// Contact requests
// ---------------------------------------------------------------------------------------------

/** Uploads the optional attachment, then inserts the contact request row. */
export async function saveContactRequest(record: ContactRecord, attachment?: File): Promise<string> {
  const id = crypto.randomUUID();
  if (useMemory()) {
    memory.contacts.push({ id, created_at: new Date().toISOString(), attachment_path: null, handled_at: null, ...record });
    console.warn('[contact] Supabase non configuré — demande gardée en mémoire (mode dev).');
    return id;
  }
  let attachmentPath: string | null = null;

  if (attachment) {
    attachmentPath = `${id}/attachment.pdf`;
    const { error } = await supabase()
      .storage.from(SUPABASE_CONTACT_BUCKET)
      .upload(attachmentPath, attachment, { contentType: 'application/pdf', upsert: false });
    if (error) throw error;
  }

  const { error } = await supabase()
    .from('contact_requests')
    .insert({ id, ...record, attachment_path: attachmentPath });
  if (error) {
    if (attachmentPath) await supabase().storage.from(SUPABASE_CONTACT_BUCKET).remove([attachmentPath]);
    throw error;
  }
  return id;
}

export async function listContactRequests(): Promise<StoredContact[]> {
  if (useMemory()) return newest(memory.contacts);
  const { data, error } = await supabase()
    .from('contact_requests')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);
  if (error) throw error;
  return data as StoredContact[];
}

export async function setContactHandled(id: string, handled: boolean): Promise<void> {
  const handled_at = handled ? new Date().toISOString() : null;
  if (useMemory()) {
    const row = memory.contacts.find((c) => c.id === id);
    if (row) row.handled_at = handled_at;
    return;
  }
  const { error } = await supabase().from('contact_requests').update({ handled_at }).eq('id', id);
  if (error) throw error;
}

export async function deleteContactRequest(id: string): Promise<void> {
  if (useMemory()) {
    memory.contacts = memory.contacts.filter((c) => c.id !== id);
    return;
  }
  const { data } = await supabase().from('contact_requests').select('attachment_path').eq('id', id).maybeSingle();
  if (data?.attachment_path) await supabase().storage.from(SUPABASE_CONTACT_BUCKET).remove([data.attachment_path]);
  const { error } = await supabase().from('contact_requests').delete().eq('id', id);
  if (error) throw error;
}

// ---------------------------------------------------------------------------------------------
// Files
// ---------------------------------------------------------------------------------------------

/** Short-lived download link for a stored file; null when the file does not exist. */
export async function signedFileUrl(kind: 'cv' | 'attachment', id: string): Promise<string | null> {
  if (useMemory()) return null;
  const table = kind === 'cv' ? 'applications' : 'contact_requests';
  const column = kind === 'cv' ? 'cv_path' : 'attachment_path';
  const bucket = kind === 'cv' ? SUPABASE_CV_BUCKET : SUPABASE_CONTACT_BUCKET;
  const { data: row } = await supabase().from(table).select(column).eq('id', id).maybeSingle();
  const path = (row as Record<string, string | null> | null)?.[column];
  if (!path) return null;
  const { data, error } = await supabase().storage.from(bucket).createSignedUrl(path, 60);
  if (error) throw error;
  return data.signedUrl;
}

// ---------------------------------------------------------------------------------------------
// Job offers
// ---------------------------------------------------------------------------------------------

export async function listJobs(options: { publishedOnly?: boolean } = {}): Promise<JobOffer[]> {
  if (useMemory()) {
    return newest(memory.jobs).filter((j) => !options.publishedOnly || j.published);
  }
  let query = supabase().from('job_offers').select('*').order('created_at', { ascending: false }).limit(200);
  if (options.publishedOnly) query = query.eq('published', true);
  const { data, error } = await query;
  if (error) throw error;
  return data as JobOffer[];
}

export async function getJob(id: string): Promise<JobOffer | null> {
  if (useMemory()) return memory.jobs.find((j) => j.id === id) ?? null;
  const { data, error } = await supabase().from('job_offers').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return (data as JobOffer | null) ?? null;
}

/** Creates a job offer, or updates it when `id` is given. */
export async function saveJob(input: JobOfferInput, id?: string): Promise<string> {
  if (useMemory()) {
    const existing = id ? memory.jobs.find((j) => j.id === id) : undefined;
    if (existing) {
      Object.assign(existing, input);
      return existing.id;
    }
    const job = { id: crypto.randomUUID(), created_at: new Date().toISOString(), ...input };
    memory.jobs.push(job);
    return job.id;
  }
  if (id) {
    const { error } = await supabase().from('job_offers').update(input).eq('id', id);
    if (error) throw error;
    return id;
  }
  const newId = crypto.randomUUID();
  const { error } = await supabase().from('job_offers').insert({ id: newId, ...input });
  if (error) throw error;
  return newId;
}

export async function setJobPublished(id: string, published: boolean): Promise<void> {
  if (useMemory()) {
    const job = memory.jobs.find((j) => j.id === id);
    if (job) job.published = published;
    return;
  }
  const { error } = await supabase().from('job_offers').update({ published }).eq('id', id);
  if (error) throw error;
}

export async function deleteJob(id: string): Promise<void> {
  if (useMemory()) {
    memory.jobs = memory.jobs.filter((j) => j.id !== id);
    return;
  }
  const { error } = await supabase().from('job_offers').delete().eq('id', id);
  if (error) throw error;
}
