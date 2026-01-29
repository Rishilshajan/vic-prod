-- Create the resources table
CREATE TABLE public.resources (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    title TEXT,
    author TEXT,
    date DATE,
    excerpt TEXT,
    content TEXT,
    category TEXT,
    tags TEXT,
    
    cover_image TEXT,
    cover_position TEXT DEFAULT '50% 50%',
    
    status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft'
);

-- Enable Row Level Security
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Create Policy: Allow read access to everyone for PUBLISHED resources
CREATE POLICY "Public resources are viewable by everyone"
ON public.resources FOR SELECT
USING (status = 'published');

-- Create Policy: Allow ALL access to authenticated users (Admins)
CREATE POLICY "Admins can do everything"
ON public.resources FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create Policy for Drafts (Optional, if you want only auth users to see drafts)
-- The "Admins can do everything" policy covers this, but being explicit is good.
