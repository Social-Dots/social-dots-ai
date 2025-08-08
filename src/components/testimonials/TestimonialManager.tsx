import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, Upload, Trash2, Edit, Plus } from 'lucide-react';
import { supabase } from '@/components/auth/AuthProvider';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  photo_url?: string;
  metrics?: string;
  is_featured: boolean;
  created_at: string;
}

export const TestimonialManager: React.FC = () => {
  const { user } = useAuth();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5,
    metrics: '',
    is_featured: false,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  const uploadPhoto = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `testimonial-${Date.now()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('testimonials')
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('testimonials')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast.error('Failed to upload photo');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let photoUrl = editingTestimonial?.photo_url || null;
      
      if (photoFile) {
        photoUrl = await uploadPhoto(photoFile);
      }

      const testimonialData = {
        ...formData,
        photo_url: photoUrl,
      };

      if (editingTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', editingTestimonial.id);
        
        if (error) throw error;
        toast.success('Testimonial updated successfully!');
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([testimonialData]);
        
        if (error) throw error;
        toast.success('Testimonial added successfully!');
      }

      resetForm();
      setIsDialogOpen(false);
      fetchTestimonials();
    } catch (error) {
      console.error('Error saving testimonial:', error);
      toast.error('Failed to save testimonial');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Testimonial deleted successfully!');
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast.error('Failed to delete testimonial');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      role: '',
      content: '',
      rating: 5,
      metrics: '',
      is_featured: false,
    });
    setPhotoFile(null);
    setEditingTestimonial(null);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      company: testimonial.company,
      role: testimonial.role,
      content: testimonial.content,
      rating: testimonial.rating,
      metrics: testimonial.metrics || '',
      is_featured: testimonial.is_featured,
    });
    setEditingTestimonial(testimonial);
    setIsDialogOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please login to manage testimonials.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Testimonials</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Customer Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role/Title</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metrics">Success Metrics (Optional)</Label>
                <Input
                  id="metrics"
                  value={formData.metrics}
                  onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                  placeholder="e.g., 50% increase in leads, 80% time saved"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <select
                  id="rating"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full p-2 border rounded-md"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="photo">Customer Photo</Label>
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                />
                <Label htmlFor="featured">Featured Testimonial</Label>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : editingTestimonial ? 'Update' : 'Add'} Testimonial
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading testimonials...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              {testimonial.is_featured && (
                <Badge className="absolute top-2 right-2 bg-yellow-500">Featured</Badge>
              )}
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {testimonial.photo_url && (
                    <img
                      src={testimonial.photo_url}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{testimonial.content}</p>
                {testimonial.metrics && (
                  <Badge variant="secondary" className="mb-3">
                    {testimonial.metrics}
                  </Badge>
                )}
                <div className="flex justify-end space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(testimonial)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};