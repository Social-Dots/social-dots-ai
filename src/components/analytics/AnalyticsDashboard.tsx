import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell 
} from 'recharts';
import { 
  Users, 
  MousePointer, 
  Eye, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Target 
} from 'lucide-react';
import { supabase } from '@/components/auth/AuthProvider';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface AnalyticsData {
  page_views: number;
  unique_visitors: number;
  bounce_rate: number;
  avg_session_duration: number;
  conversion_rate: number;
  period: string;
}

interface ABTest {
  id: string;
  name: string;
  status: 'draft' | 'running' | 'completed';
  variant_a: string;
  variant_b: string;
  conversion_a: number;
  conversion_b: number;
  visitors_a: number;
  visitors_b: number;
  confidence: number;
  created_at: string;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];

export const AnalyticsDashboard: React.FC = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [abTests, setABTests] = useState<ABTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    if (user) {
      fetchAnalytics();
      fetchABTests();
    }
  }, [user, timeRange]);

  const fetchAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from('analytics_data')
        .select('*')
        .order('period', { ascending: true })
        .limit(30);

      if (error) throw error;
      setAnalytics(data || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast.error('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  const fetchABTests = async () => {
    try {
      const { data, error } = await supabase
        .from('ab_tests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setABTests(data || []);
    } catch (error) {
      console.error('Error fetching A/B tests:', error);
    }
  };

  const trackEvent = async (eventName: string, properties: any = {}) => {
    try {
      await supabase.from('user_events').insert([{
        event_name: eventName,
        properties,
        user_id: user?.id,
        session_id: sessionStorage.getItem('session_id') || crypto.randomUUID(),
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
      }]);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'visitors': return <Users className="w-4 h-4" />;
      case 'views': return <Eye className="w-4 h-4" />;
      case 'clicks': return <MousePointer className="w-4 h-4" />;
      case 'time': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getTestStatus = (test: ABTest) => {
    if (test.status === 'running') {
      return test.confidence > 95 ? 'Significant' : 'Collecting Data';
    }
    return test.status;
  };

  const getTestWinner = (test: ABTest) => {
    if (test.conversion_a > test.conversion_b) return 'A';
    if (test.conversion_b > test.conversion_a) return 'B';
    return 'Tie';
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please login to view analytics.</p>
      </div>
    );
  }

  const mockAnalytics = [
    { period: '2024-01-01', page_views: 1200, unique_visitors: 800, bounce_rate: 35, avg_session_duration: 180, conversion_rate: 3.2 },
    { period: '2024-01-02', page_views: 1350, unique_visitors: 900, bounce_rate: 32, avg_session_duration: 195, conversion_rate: 3.8 },
    { period: '2024-01-03', page_views: 1180, unique_visitors: 750, bounce_rate: 38, avg_session_duration: 165, conversion_rate: 2.9 },
    { period: '2024-01-04', page_views: 1450, unique_visitors: 950, bounce_rate: 30, avg_session_duration: 210, conversion_rate: 4.1 },
    { period: '2024-01-05', page_views: 1600, unique_visitors: 1100, bounce_rate: 28, avg_session_duration: 225, conversion_rate: 4.5 },
  ];

  const mockABTests = [
    {
      id: '1',
      name: 'CTA Button Color Test',
      status: 'running' as const,
      variant_a: 'Blue Button',
      variant_b: 'Orange Button',
      conversion_a: 3.2,
      conversion_b: 4.1,
      visitors_a: 1250,
      visitors_b: 1180,
      confidence: 87,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      name: 'Hero Section Layout',
      status: 'completed' as const,
      variant_a: 'Original Layout',
      variant_b: 'Video Background',
      conversion_a: 2.8,
      conversion_b: 3.9,
      visitors_a: 2000,
      visitors_b: 2000,
      confidence: 98,
      created_at: '2024-01-01'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="behavior">User Behavior</TabsTrigger>
          <TabsTrigger value="abtests">A/B Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6,780</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  +12.5% from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,590</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  +8.2% from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.7%</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  +0.3% from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3m 15s</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingDown className="inline w-3 h-3 mr-1" />
                  -5s from last period
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Views Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="page_views" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversion_rate" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Behavior Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => trackEvent('cta_click', { button: 'primary' })}>
                  Track CTA Click
                </Button>
                <Button onClick={() => trackEvent('page_scroll', { depth: '50%' })}>
                  Track Scroll Event
                </Button>
              </div>
              
              <div className="text-sm text-gray-600">
                Events are automatically tracked and stored for analysis. Use the buttons above to test event tracking.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abtests" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">A/B Tests</h3>
            <Button>Create New Test</Button>
          </div>

          <div className="grid gap-4">
            {mockABTests.map((test) => (
              <Card key={test.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{test.name}</CardTitle>
                    <Badge 
                      className={
                        test.status === 'running' ? 'bg-blue-500' :
                        test.status === 'completed' ? 'bg-green-500' : 'bg-gray-500'
                      }
                    >
                      {getTestStatus(test)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Variant A: {test.variant_a}</h4>
                      <p className="text-sm text-gray-600">
                        {test.visitors_a} visitors
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        {test.conversion_a}% conversion
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Variant B: {test.variant_b}</h4>
                      <p className="text-sm text-gray-600">
                        {test.visitors_b} visitors
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        {test.conversion_b}% conversion
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Results</h4>
                      <p className="text-sm text-gray-600">
                        {test.confidence}% confidence
                      </p>
                      <p className="text-lg font-bold">
                        Winner: Variant {getTestWinner(test)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};