import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_CV_BUCKET } from 'astro:env/server';

let client: SupabaseClient | null = null;

export function isStorageConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
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
}

/** Uploads the CV to the private bucket, then inserts the application row. */
export async function saveApplication(record: ApplicationRecord, cv: File): Promise<string> {
  const id = crypto.randomUUID();
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
