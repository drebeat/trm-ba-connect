import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, BookOpen, Heart, Users, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Devotionals', count: 12, active: false },
    { name: 'Teachings', count: 8, active: false },
    { name: 'Testimonies', count: 3, active: false },
    { name: 'News & Events', count: 1, active: false }
  ];

  const featuredPost = {
    title: "Understanding God's Purpose for Your Life",
    excerpt: "Discover how to walk in your divine calling and fulfill the unique purpose God has designed for your life. This comprehensive study explores biblical principles for finding and living out your God-given destiny.",
    date: "March 18, 2024",
    author: "Pastor John Doe",
    category: "Teaching",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      title: "Walking in Faith: Lessons from Abraham's Journey",
      excerpt: "Discover how Abraham's unwavering faith teaches us about trusting God's promises in uncertain times.",
      date: "March 15, 2024",
      author: "Pastor Sarah Johnson",
      category: "Teaching",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "The Power of Morning Devotionals",
      excerpt: "Start your day with God's Word and experience the transformative power of daily communion with Him.",
      date: "March 12, 2024",
      author: "Minister Grace Adebayo",
      category: "Devotional",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop"
    },
    {
      title: "Building Stronger Families Through Faith",
      excerpt: "Learn practical ways to strengthen family bonds and create a Christ-centered home environment.",
      date: "March 10, 2024",
      author: "Pastor Michael Thompson",
      category: "Family",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop"
    },
    {
      title: "Testimony: From Darkness to Light",
      excerpt: "A powerful testimony of transformation and God's redemptive power in one member's life journey.",
      date: "March 8, 2024",
      author: "Sister Mary Okafor",
      category: "Testimonies",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "The Art of Biblical Meditation",
      excerpt: "Explore the spiritual discipline of meditation and how it deepens our relationship with God.",
      date: "March 5, 2024",
      author: "Pastor David Olumide",
      category: "Devotional",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "Preparing for Our Annual Conference",
      excerpt: "Everything you need to know about our upcoming annual conference and how to register.",
      date: "March 3, 2024",
      author: "Admin Team",
      category: "News & Events",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Devotionals':
        return Heart;
      case 'Teachings':
        return BookOpen;
      case 'Testimonies':
        return Star;
      case 'News & Events':
        return Users;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Teaching':
        return 'bg-primary/10 text-primary';
      case 'Devotional':
        return 'bg-accent-burgundy/10 text-accent-burgundy';
      case 'Testimonies':
        return 'bg-success/10 text-success';
      case 'News & Events':
        return 'bg-accent-slate/10 text-accent-slate';
      case 'Family':
        return 'bg-primary-light/10 text-primary-light';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Insights, devotionals, and teachings to strengthen your faith journey 
              and deepen your relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Search */}
            <div className="lg:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, devotionals, and teachings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-3 text-lg"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="lg:col-span-1">
              <div className="card-elegant p-6">
                <h3 className="font-heading font-semibold text-lg text-secondary mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = getCategoryIcon(category.name);
                    return (
                      <button
                        key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          category.active
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          category.active 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Article
            </h2>
            <p className="text-lg text-muted-foreground">
              Our latest featured content to inspire and encourage your faith journey.
            </p>
          </div>

          <article className="card-floating overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4 hover:text-primary transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </article>

          {/* Regular Posts Grid */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
              Recent Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.title}
                  className="card-floating overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg text-secondary mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <Button variant="outline" disabled className="px-6">
              Previous
            </Button>
            <div className="flex space-x-2">
              <Button variant="default" className="w-10 h-10 p-0">1</Button>
              <Button variant="outline" className="w-10 h-10 p-0">2</Button>
              <Button variant="outline" className="w-10 h-10 p-0">3</Button>
            </div>
            <Button variant="outline" className="px-6">
              Next
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;