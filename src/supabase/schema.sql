-- Create testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  photo_url TEXT,
  metrics TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'in_progress', 'review', 'completed')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  start_date DATE,
  end_date DATE,
  client_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create project updates table
CREATE TABLE project_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT DEFAULT 'update' CHECK (type IN ('update', 'milestone', 'deliverable')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create project messages table
CREATE TABLE project_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES auth.users(id),
  sender_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create resources table
CREATE TABLE resources (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size BIGINT DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  is_public BOOLEAN DEFAULT true,
  requires_login BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics tables
CREATE TABLE user_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name TEXT NOT NULL,
  properties JSONB,
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT,
  page_url TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE ab_tests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'running', 'completed')),
  variant_a TEXT NOT NULL,
  variant_b TEXT NOT NULL,
  conversion_a DECIMAL DEFAULT 0,
  conversion_b DECIMAL DEFAULT 0,
  visitors_a INTEGER DEFAULT 0,
  visitors_b INTEGER DEFAULT 0,
  confidence DECIMAL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('testimonials', 'testimonials', true),
('resources', 'resources', true);

-- Set up RLS policies
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE ab_tests ENABLE ROW LEVEL SECURITY;

-- Public read access for testimonials and public resources
CREATE POLICY "Public testimonials are viewable by everyone" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public resources are viewable by everyone" ON resources FOR SELECT USING (is_public = true);

-- Users can view their own projects and related data
CREATE POLICY "Users can view own projects" ON projects FOR SELECT USING (auth.uid() = client_id);
CREATE POLICY "Users can view updates for their projects" ON project_updates FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = project_updates.project_id AND projects.client_id = auth.uid())
);
CREATE POLICY "Users can view messages for their projects" ON project_messages FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = project_messages.project_id AND projects.client_id = auth.uid())
);

-- Admin users can manage all data (you'll need to set up admin role)
CREATE POLICY "Admins can manage testimonials" ON testimonials FOR ALL USING (
  EXISTS (SELECT 1 FROM auth.users WHERE auth.users.id = auth.uid() AND auth.users.email LIKE '%@socialdots.ca')
);