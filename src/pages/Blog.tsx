
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Get the newest blog post for the featured post section (the new post with id '6')
  const featuredPost = blogPosts.find(post => post.id === '6') || blogPosts[0];
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Social Dots - Latest Updates on AI Solutions" 
        description="Stay updated with the latest news and insights about AI automation, voice agents, and digital solutions from Social Dots."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={['AI automation', 'voice agents', 'digital solutions', 'business automation', 'AI technology', 'smart business']}
        type="website"
      />
      
      <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Newspaper size={20} className="text-black" />
                <span className="text-black font-medium">Our Blog</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Updates</h1>
              <p className="text-gray-800 max-w-xl">
                Explore our latest insights on AI automation, voice agents, industry trends, and innovation.
              </p>
            </div>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogPostCard 
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
                date={post.date}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>
          
          {/* Show all posts section */}
          {blogPosts.length > 3 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center">All Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(3).map((post) => (
                  <BlogPostCard 
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
