import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Download, 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  Eye 
} from 'lucide-react';
import { supabase } from '@/components/auth/AuthProvider';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  file_url: string;
  file_name: string;
  file_size: number;
  download_count: number;
  is_public: boolean;
  requires_login: boolean;
  created_at: string;
}

const CATEGORIES = [
  'Templates',
  'Guides',
  'Whitepapers',
  'Case Studies',
  'Checklists',
  'Tools',
  'Presentations',
  'Other'
];

export const ResourceLibrary: React.FC = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    is_public: true,
    requires_login: false,
  });

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedCategory]);

  const fetchResources = async () => {
    try {
      let query = supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false });

      // If user is not logged in, only show public resources
      if (!user) {
        query = query.eq('is_public', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to load resources');
    } finally {
      setLoading(false);
    }
  };

  const filterResources = () => {
    let filtered = resources;

    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    setFilteredResources(filtered);
  };

  const uploadResourceFile = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `resource-${Date.now()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('resources')
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('resources')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload file');
      return null;
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) {
      toast.error('Please select a file to upload');
      return;
    }

    setLoading(true);

    try {
      const fileUrl = await uploadResourceFile(uploadFile);
      if (!fileUrl) return;

      const { error } = await supabase
        .from('resources')
        .insert([{
          ...formData,
          file_url: fileUrl,
          file_name: uploadFile.name,
          file_size: uploadFile.size,
          download_count: 0,
        }]);

      if (error) throw error;

      toast.success('Resource uploaded successfully!');
      setIsUploadDialogOpen(false);
      resetForm();
      fetchResources();
    } catch (error) {
      console.error('Error uploading resource:', error);
      toast.error('Failed to upload resource');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (resource: Resource) => {
    try {
      // Check if login is required
      if (resource.requires_login && !user) {
        toast.error('Please login to download this resource');
        return;
      }

      // Increment download count
      await supabase
        .from('resources')
        .update({ download_count: resource.download_count + 1 })
        .eq('id', resource.id);

      // Track download event
      if (user) {
        await supabase.from('user_events').insert([{
          event_name: 'resource_download',
          properties: { resource_id: resource.id, resource_title: resource.title },
          user_id: user.id,
          timestamp: new Date().toISOString(),
        }]);
      }

      // Trigger download
      const link = document.createElement('a');
      link.href = resource.file_url;
      link.download = resource.file_name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Download started!');
      fetchResources(); // Refresh to show updated download count
    } catch (error) {
      console.error('Error downloading resource:', error);
      toast.error('Failed to download resource');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      is_public: true,
      requires_login: false,
    });
    setUploadFile(null);
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Resource Library</h2>
        {user && (
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Upload New Resource</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file">File</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.is_public}
                      onChange={(e) => setFormData({ ...formData, is_public: e.target.checked })}
                    />
                    <span className="text-sm">Public (visible to all users)</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.requires_login}
                      onChange={(e) => setFormData({ ...formData, requires_login: e.target.checked })}
                    />
                    <span className="text-sm">Requires login to download</span>
                  </label>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Resource'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Resources Grid */}
      {loading ? (
        <div className="text-center py-8">Loading resources...</div>
      ) : filteredResources.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No resources found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                  <Badge variant="secondary">{resource.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm line-clamp-3">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatFileSize(resource.file_size)}</span>
                  <span>{resource.download_count} downloads</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {!resource.is_public && (
                    <Badge variant="outline" className="text-xs">Private</Badge>
                  )}
                  {resource.requires_login && (
                    <Badge variant="outline" className="text-xs">Login Required</Badge>
                  )}
                </div>
                
                <Button 
                  onClick={() => handleDownload(resource)}
                  className="w-full"
                  disabled={resource.requires_login && !user}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};