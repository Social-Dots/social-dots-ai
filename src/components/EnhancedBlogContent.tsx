
import React from 'react';
import { ContentSection } from '@/data/blogPosts';
import { DollarSign, Users, TrendingUp, Shield, Zap, Settings, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface EnhancedBlogContentProps {
  content: ContentSection[];
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  Database
};

const EnhancedBlogContent: React.FC<EnhancedBlogContentProps> = ({ content }) => {
  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-3xl font-bold mb-6 text-black border-b-2 border-black pb-2">
            {section.content}
          </h2>
        );
      
      case 'subheading':
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4 text-black">
            {section.content}
          </h3>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-gray-800 mb-6 leading-relaxed text-lg">
            {section.content}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-800 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      
      case 'icon-list':
        return (
          <div key={index} className="grid gap-4 mb-8">
            {section.items?.map((item, itemIndex) => {
              const icons = [Shield, Zap, Settings, Database];
              const IconComponent = icons[itemIndex % icons.length];
              return (
                <Card key={itemIndex} className="border-2 border-black">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-black p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-800 leading-relaxed flex-1">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );

      case 'bibliography':
        return (
          <div key={index} className="mb-8">
            <ol className="list-none space-y-3">
              {section.items?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-800 leading-relaxed text-sm bg-gray-50 p-3 rounded border-l-4 border-black">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );
      
      case 'stats':
        return (
          <div key={index} className="grid md:grid-cols-3 gap-6 mb-8">
            {section.statsData?.map((stat, statIndex) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || TrendingUp;
              return (
                <Card key={statIndex} className="border-2 border-black text-center">
                  <CardContent className="p-6">
                    <div className="bg-black p-3 rounded-full inline-block mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );
      
      case 'chart':
        if (!section.chartData) return null;
        
        const colors = ['#000000', '#666666', '#999999', '#CCCCCC'];
        
        return (
          <Card key={index} className="border-2 border-black mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4 text-black text-center">
                {section.chartData.title}
              </h4>
              <div className="h-64 w-full">
                {section.chartData.title.includes('Market Growth') ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={section.chartData.data}>
                      <XAxis dataKey="name" stroke="#000" />
                      <YAxis stroke="#000" />
                      <Bar dataKey="value" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={section.chartData.data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                      >
                        {section.chartData.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        );
      
      case 'table':
        if (!section.tableData) return null;
        return (
          <Card key={index} className="border-2 border-black mb-8 overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    {section.tableData.headers.map((header, headerIndex) => (
                      <th key={headerIndex} className="p-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 border-b border-gray-200">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        );
      
      case 'quote':
        return (
          <Card key={index} className="border-2 border-black bg-black text-white mb-8">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl italic font-medium">
                "{section.content}"
              </blockquote>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((section, index) => renderContent(section, index))}
    </div>
  );
};

export default EnhancedBlogContent;
