-- Create atlas_events table
CREATE TABLE IF NOT EXISTS public.atlas_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  session_id uuid REFERENCES public.atlas_sessions(id) ON DELETE SET NULL,
  event text NOT NULL,
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Note: No RLS policies are added because tracking is strictly done via backend server client.
-- The table should not be exposed to the public API directly for inserts without backend validation.
ALTER TABLE public.atlas_events ENABLE ROW LEVEL SECURITY;
