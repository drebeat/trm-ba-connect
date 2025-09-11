import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, BookOpen, Users, Heart, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Biblical Teaching',
      description: 'Dive deep into God\'s Word with our expository teaching and daily devotionals.',
      link: '/blog'
    },
    {
      icon: Users,
      title: 'Community Fellowship',
      description: 'Connect with believers and grow together in faith through our various programs.',
      link: '/programs'
    },
    {
      icon: Heart,
      title: 'Prayer Support',
      description: 'Submit your prayer requests and experience the power of collective prayer.',
      link: '/prayer'
    },
    {
      icon: Calendar,
      title: 'Events & Programs',
      description: 'Join our weekly services, conferences, and special events throughout the year.',
      link: '/programs'
    }
  ];

  const recentPosts = [
    {
      title: "Walking in Faith: Lessons from Abraham's Journey",
      excerpt: "Discover how Abraham's unwavering faith teaches us about trusting God's promises in uncertain times.",
      date: "March 15, 2024",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "The Power of Morning Devotionals",
      excerpt: "Start your day with God's Word and experience the transformative power of daily communion with Him.",
      date: "March 12, 2024",
      category: "Devotional",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "Building Stronger Families Through Faith",
      excerpt: "Learn practical ways to strengthen family bonds and create a Christ-centered home environment.",
      date: "March 10, 2024",
      category: "Family",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Experience Faith in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community dedicated to spiritual growth, biblical truth, and transformed lives through Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="card-floating p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-muted-foreground">
                Insights, devotionals, and teachings to strengthen your faith journey.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group mt-4 md:mt-0"
            >
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article
                key={post.title}
                className="card-floating overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{post.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-secondary mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Whether you're seeking prayer, looking to grow in faith, or wanting to connect with our community, 
              we're here to walk alongside you in your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-light text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
              >
                Learn About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-secondary-foreground/10 text-secondary-foreground font-semibold rounded-lg border border-secondary-foreground/20 transition-all duration-300 hover:shadow-large hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
