-- Create contact_submissions table for all Velorian sites
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  timeline TEXT NOT NULL DEFAULT 'consulting',
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'velorian', -- 'velorian', '30days', '60days'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from the website forms)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read submissions
CREATE POLICY "Authenticated users can read" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create an index on created_at for efficient querying
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_source ON contact_submissions(source);

-- Email notification function (triggered on new submission)
-- This sends the contact form data to the configured email via Supabase Edge Functions
-- To enable email notifications:
-- 1. Deploy the send-contact-email Edge Function
-- 2. Uncomment the trigger below
--
-- CREATE OR REPLACE FUNCTION notify_new_contact()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   PERFORM net.http_post(
--     url := current_setting('app.settings.edge_function_url') || '/send-contact-email',
--     body := json_build_object(
--       'name', NEW.name,
--       'email', NEW.email,
--       'company', NEW.company,
--       'timeline', NEW.timeline,
--       'message', NEW.message,
--       'source', NEW.source
--     )::text,
--     headers := json_build_object('Content-Type', 'application/json')::jsonb
--   );
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;
--
-- CREATE TRIGGER on_new_contact_submission
--   AFTER INSERT ON contact_submissions
--   FOR EACH ROW
--   EXECUTE FUNCTION notify_new_contact();
