
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import EnhancedBlogContent from '@/components/EnhancedBlogContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - WRLDS`}
        description={post.metaDescription || post.excerpt}
        imageUrl={post.imageUrl}
        keywords={post.keywords}
        isBlogPost={true}
        publishDate={new Date(post.date).toISOString()}
        author={post.author}
        category={post.category}
        type="article"
      />
      
      <article className="w-full pt-16 pb-16">
        {/* Hero Section - Taller to accommodate text content */}
        <div className="banner-container h-96 sm:h-[450px] md:h-[500px] lg:h-[550px] relative">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          
          <div className="banner-overlay">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-start md:justify-center">
              <div className="w-full max-w-4xl mx-auto text-left md:text-center">
                <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors text-sm">
                  <ArrowLeft className="mr-2 h-3 w-3" />
                  Back to Blog
                </Link>
                
                {/* Mobile-optimized title */}
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words max-w-full">
                  {post.title}
                </h1>
                
                {/* Compact mobile metadata */}
                <div className="flex flex-col gap-3 text-gray-300 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start md:justify-center gap-2 sm:gap-6">
                    <div className="flex items-center text-xs sm:text-base">
                      <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-base">
                      <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-start md:justify-center">
                    <div className="px-3 py-1 sm:px-4 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/20">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                {/* Mobile-optimized excerpt */}
                <p className="text-gray-200 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <EnhancedBlogContent content={post.content} />
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostDetail;
