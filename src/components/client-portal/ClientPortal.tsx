import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Upload,
  Download,
  Send 
} from 'lucide-react';
import { supabase } from '@/components/auth/AuthProvider';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'review' | 'completed';
  progress: number;
  start_date: string;
  end_date: string;
  client_id: string;
  created_at: string;
}

interface ProjectUpdate {
  id: string;
  project_id: string;
  title: string;
  content: string;
  type: 'update' | 'milestone' | 'deliverable';
  created_at: string;
}

interface Message {
  id: string;
  project_id: string;
  sender_id: string;
  sender_name: string;
  content: string;
  created_at: string;
}

export const ClientPortal: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  useEffect(() => {
    if (selectedProject) {
      fetchProjectUpdates(selectedProject.id);
      fetchProjectMessages(selectedProject.id);
    }
  }, [selectedProject]);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
      if (data && data.length > 0) {
        setSelectedProject(data[0]);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const fetchProjectUpdates = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from('project_updates')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUpdates(data || []);
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  };

  const fetchProjectMessages = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from('project_messages')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedProject) return;

    try {
      const { error } = await supabase
        .from('project_messages')
        .insert([{
          project_id: selectedProject.id,
          sender_id: user?.id,
          sender_name: user?.user_metadata?.full_name || user?.email,
          content: newMessage,
        }]);

      if (error) throw error;
      
      setNewMessage('');
      fetchProjectMessages(selectedProject.id);
      toast.success('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-blue-500';
      case 'in_progress': return 'bg-yellow-500';
      case 'review': return 'bg-purple-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning': return <Clock className="w-4 h-4" />;
      case 'in_progress': return <AlertCircle className="w-4 h-4" />;
      case 'review': return <FileText className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please login to access your client portal.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-8">Loading your projects...</div>;
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
        <p className="text-gray-600">Your projects will appear here once they're created.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Client Portal</h2>
        <Badge variant="outline">
          {projects.length} Active Project{projects.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Project Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedProject?.id === project.id 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium truncate">{project.name}</h4>
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusIcon(project.status)}
                    </Badge>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <p className="text-sm text-gray-500 mt-1">{project.progress}% Complete</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2">
          {selectedProject && (
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{selectedProject.name}</CardTitle>
                      <Badge className={getStatusColor(selectedProject.status)}>
                        {selectedProject.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{selectedProject.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-1">Start Date</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedProject.start_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">End Date</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedProject.end_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Progress</h4>
                      <Progress value={selectedProject.progress} className="h-3" />
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedProject.progress}% Complete
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="updates">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {updates.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">No updates yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {updates.map((update) => (
                          <div key={update.id} className="border-l-4 border-blue-500 pl-4 py-2">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">{update.title}</h4>
                              <Badge variant="outline">{update.type}</Badge>
                            </div>
                            <p className="text-gray-600 text-sm">{update.content}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(update.created_at).toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`p-3 rounded-lg ${
                            message.sender_id === user?.id
                              ? 'bg-blue-100 ml-8'
                              : 'bg-gray-100 mr-8'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">{message.sender_name}</span>
                            <span className="text-xs text-gray-500">
                              {new Date(message.created_at).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        rows={2}
                      />
                      <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};