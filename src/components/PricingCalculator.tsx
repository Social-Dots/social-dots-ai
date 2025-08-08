import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import CalendarButton from '@/components/CalendarButton';
import { Calculator, DollarSign, Clock, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCalculatorProps {
  className?: string;
}

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  multiplier: number;
  description: string;
}

const services: ServiceOption[] = [
  { 
    id: 'ai-concierge', 
    name: 'AI Concierge',
    basePrice: 2500,
    multiplier: 1.2,
    description: '24/7 customer service automation'
  },
  { 
    id: 'ai-business-assistant', 
    name: 'AI Business Assistant',
    basePrice: 3500,
    multiplier: 1.5,
    description: 'Intelligent business process automation'
  },
  { 
    id: 'web-development', 
    name: 'Web Development',
    basePrice: 5000,
    multiplier: 1.0,
    description: 'Modern responsive websites'
  },
  { 
    id: 'digital-marketing', 
    name: 'Digital Marketing',
    basePrice: 2000,
    multiplier: 0.8,
    description: 'SEO, social media, and content marketing'
  },
  { 
    id: 'ai-integration', 
    name: 'AI Integration',
    basePrice: 4000,
    multiplier: 1.3,
    description: 'Custom AI solutions integration'
  }
];

const complexityLevels = [
  { value: 1, label: 'Basic', multiplier: 1.0 },
  { value: 2, label: 'Standard', multiplier: 1.3 },
  { value: 3, label: 'Advanced', multiplier: 1.6 },
  { value: 4, label: 'Enterprise', multiplier: 2.0 }
];

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ className }) => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [complexity, setComplexity] = useState<number[]>([2]);
  const [timeline, setTimeline] = useState<number[]>([8]);
  const [teamSize, setTeamSize] = useState<number[]>([3]);
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  useEffect(() => {
    if (selectedService) {
      calculatePrice();
    }
  }, [selectedService, complexity, timeline, teamSize]);

  const calculatePrice = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return;

    const complexityMultiplier = complexityLevels.find(c => c.value === complexity[0])?.multiplier || 1;
    const timelineMultiplier = timeline[0] < 4 ? 1.5 : timeline[0] < 8 ? 1.2 : 1.0;
    const teamMultiplier = teamSize[0] > 5 ? 1.3 : teamSize[0] > 3 ? 1.1 : 1.0;

    const basePrice = service.basePrice;
    const totalPrice = basePrice * complexityMultiplier * timelineMultiplier * teamMultiplier * service.multiplier;
    
    setEstimatedPrice(Math.round(totalPrice));
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const complexityLevel = complexityLevels.find(c => c.value === complexity[0]);

  return (
    <section className={`py-16 bg-gradient-to-br from-background to-muted/30 ${className}`} id="pricing-calculator">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pricing Calculator
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your project. Customize the parameters to see how different factors affect pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Configure Your Project
                </CardTitle>
                <CardDescription>
                  Select your requirements to get a customized estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{service.name}</span>
                            <span className="text-sm text-muted-foreground">{service.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedService && (
                  <>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Project Complexity</Label>
                        <div className="px-4">
                          <Slider
                            value={complexity}
                            onValueChange={setComplexity}
                            max={4}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>Basic</span>
                            <span>Standard</span>
                            <span>Advanced</span>
                            <span>Enterprise</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2">
                          {complexityLevel?.label}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Timeline (weeks)
                        </Label>
                        <div className="px-4">
                          <Slider
                            value={timeline}
                            onValueChange={setTimeline}
                            max={16}
                            min={2}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>2</span>
                            <span>8</span>
                            <span>16+</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2">
                          {timeline[0]} weeks
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Team Size
                        </Label>
                        <div className="px-4">
                          <Slider
                            value={teamSize}
                            onValueChange={setTeamSize}
                            max={8}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>1</span>
                            <span>4</span>
                            <span>8+</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2">
                          {teamSize[0]} {teamSize[0] === 1 ? 'person' : 'people'}
                        </Badge>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-secondary" />
                  Project Estimate
                </CardTitle>
                <CardDescription>
                  Based on your requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedService ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
                      <div className="text-4xl font-bold text-primary mb-2">
                        ${estimatedPrice.toLocaleString()}
                      </div>
                      <p className="text-muted-foreground">
                        Estimated project cost
                      </p>
                    </div>

                    {selectedServiceData && (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Project Summary</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Service:</span>
                            <span className="font-medium">{selectedServiceData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Complexity:</span>
                            <span className="font-medium">{complexityLevel?.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Timeline:</span>
                            <span className="font-medium">{timeline[0]} weeks</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Team Size:</span>
                            <span className="font-medium">{teamSize[0]} {teamSize[0] === 1 ? 'person' : 'people'}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        This is an estimate based on typical project requirements. 
                        Final pricing may vary based on specific needs and scope.
                      </p>
                      
                      <div className="flex flex-col gap-2">
                        <CalendarButton 
                          label="Schedule Consultation"
                          className="w-full"
                        />
                        <Button 
                          variant="outline" 
                          onClick={() => setShowBreakdown(!showBreakdown)}
                          className="w-full"
                        >
                          {showBreakdown ? 'Hide' : 'Show'} Price Breakdown
                        </Button>
                      </div>
                    </div>

                    {showBreakdown && selectedServiceData && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 text-sm border-t pt-4"
                      >
                        <h5 className="font-semibold mb-2">Price Breakdown</h5>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Base Price:</span>
                            <span>${selectedServiceData.basePrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Complexity ({complexityLevel?.label}):</span>
                            <span>×{complexityLevel?.multiplier}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Timeline ({timeline[0]} weeks):</span>
                            <span>×{timeline[0] < 4 ? '1.5' : timeline[0] < 8 ? '1.2' : '1.0'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Team Size ({teamSize[0]}):</span>
                            <span>×{teamSize[0] > 5 ? '1.3' : teamSize[0] > 3 ? '1.1' : '1.0'}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select a service to see pricing estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;