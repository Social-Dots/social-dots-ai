import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DemoVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  features: string[];
}

interface DemoVideosProps {
  className?: string;
}

const demoVideos: DemoVideo[] = [
  {
    id: 'ai-concierge-demo',
    title: 'AI Concierge in Action',
    description: 'See how our AI Concierge handles customer inquiries, bookings, and support requests with natural conversation.',
    duration: '2:30',
    category: 'AI Services',
    thumbnailUrl: '/hero-ai-customer-service.jpg',
    videoUrl: '/lovable-uploads/video_1751292840840_1751292842546.mp4',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'CRM Integration']
  },
  {
    id: 'business-assistant-demo',
    title: 'AI Business Assistant Demo',
    description: 'Watch our AI Business Assistant streamline operations, manage tasks, and provide intelligent insights.',
    duration: '3:15',
    category: 'AI Services',
    thumbnailUrl: '/business-automation-ai.jpg',
    videoUrl: '#', // Placeholder
    features: ['Task Automation', 'Data Analysis', 'Report Generation', 'Workflow Optimization']
  },
  {
    id: 'web-development-showcase',
    title: 'Modern Web Development',
    description: 'Explore our responsive, AI-enhanced websites with cutting-edge design and functionality.',
    duration: '2:45',
    category: 'Web Development',
    thumbnailUrl: '/web-development-ai.jpg',
    videoUrl: '#', // Placeholder
    features: ['Responsive Design', 'SEO Optimization', 'Performance', 'AI Integration']
  },
  {
    id: 'digital-marketing-results',
    title: 'Digital Marketing Success',
    description: 'Real results from our AI-powered digital marketing campaigns and social media strategies.',
    duration: '1:50',
    category: 'Digital Marketing',
    thumbnailUrl: '/digital-marketing-ai.jpg',
    videoUrl: '#', // Placeholder
    features: ['AI Content Creation', 'Analytics Dashboard', 'ROI Tracking', 'Audience Targeting']
  }
];

const DemoVideos: React.FC<DemoVideosProps> = ({ className }) => {
  const [selectedVideo, setSelectedVideo] = useState<DemoVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: string]: boolean }>({});

  const togglePlay = (videoId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const toggleMute = (videoId: string) => {
    setIsMuted(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const categories = Array.from(new Set(demoVideos.map(video => video.category)));

  return (
    <section className={`py-16 bg-background ${className}`} id="demo-videos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Solutions in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real demonstrations of our AI services, web development, and digital marketing solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category, index) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  {/* Thumbnail */}
                  <div 
                    className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="relative z-10 h-16 w-16 rounded-full bg-white/90 hover:bg-white text-primary hover:scale-110 transition-all duration-300"
                          onClick={() => setSelectedVideo(video)}
                        >
                          <Play className="h-6 w-6 ml-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <DialogHeader>
                          <DialogTitle>{video.title}</DialogTitle>
                          <DialogDescription>{video.description}</DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                          {video.videoUrl === '#' ? (
                            <div className="text-center text-white">
                              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                              <p>Demo video coming soon</p>
                            </div>
                          ) : (
                            <video
                              controls
                              className="w-full h-full rounded-lg"
                              poster={video.thumbnailUrl}
                            >
                              <source src={video.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                    <Badge variant="secondary">
                      {video.category}
                    </Badge>
                  </div>

                  {/* Controls Overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      onClick={() => toggleMute(video.id)}
                    >
                      {isMuted[video.id] ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                  <CardDescription>
                    {video.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-sm">Key Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {video.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="flex-1"
                            onClick={() => setSelectedVideo(video)}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Watch Demo
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                      
                      <Button variant="outline" size="sm" className="px-3">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold">Ready to Get Started?</h3>
              <p className="text-muted-foreground">
                Schedule a personalized demo to see how our solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">
                  Schedule Personal Demo
                </Button>
                <Button variant="outline" size="lg">
                  View All Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideos;