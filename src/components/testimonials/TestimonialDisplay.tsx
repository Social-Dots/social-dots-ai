import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { supabase } from '@/components/auth/AuthProvider';
import { motion } from 'framer-motion';

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
}

export const TestimonialDisplay: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      // Try to fetch from Supabase if available
      if (supabase) {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_featured', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (!error && data) {
          setTestimonials(data);
          setLoading(false);
          return;
        }
      }

      // Fallback to mock data if Supabase isn't available
      const mockTestimonials = [
        {
          id: '1',
          name: 'Sarah Johnson',
          company: 'TechCorp Inc.',
          role: 'CEO',
          content: 'Social Dots transformed our customer service with their AI concierge. We\'ve seen a 50% reduction in response time and our customers love the 24/7 availability.',
          rating: 5,
          photo_url: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
          metrics: '50% faster response time',
          is_featured: true,
        },
        {
          id: '2',
          name: 'Mike Chen',
          company: 'Digital Solutions',
          role: 'Operations Manager',
          content: 'The AI business assistant has automated so many of our routine tasks. It\'s like having a super-efficient team member who never sleeps.',
          rating: 5,
          photo_url: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
          metrics: '80% time saved on admin tasks',
          is_featured: true,
        },
        {
          id: '3',
          name: 'Lisa Rodriguez',
          company: 'Growth Marketing Co.',
          role: 'Marketing Director',
          content: 'Their lead generation AI has been incredible. We\'ve tripled our qualified leads while reducing our marketing costs significantly.',
          rating: 5,
          photo_url: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
          metrics: '300% increase in qualified leads',
          is_featured: true,
        }
      ];
      setTestimonials(mockTestimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-social-dots-blue text-white">
            Customer Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Canadian Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions are helping businesses work smarter and grow faster
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Quote className="w-6 h-6 text-social-dots-blue opacity-50" />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {testimonial.photo_url && (
                      <img
                        src={testimonial.photo_url}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-social-dots-blue font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {testimonial.metrics && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {testimonial.metrics}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};