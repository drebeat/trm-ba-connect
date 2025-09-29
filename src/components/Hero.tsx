import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
    <iframe
  src="https://www.youtube-nocookie.com/embed/fLeJJPxua3E?autoplay=1&mute=1&loop=1&playlist=fLeJJPxua3E&controls=0&modestbranding=1&rel=0"
  className="absolute inset-0 w-full h-full object-cover"
  style={{
    width: '100vw',
    height: '100vh',
    minWidth: '100%',
    minHeight: '100%',
  }}
  allow="autoplay; encrypted-media"
  allowFullScreen
  frameBorder="0"
/>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Welcome to Our Spiritual Family
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow animate-fade-in-up">
              Building
              <span className="text-primary"> Renewed Minds</span>
              <br />
              for Christ
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up">
              Join us in our journey of faith, fellowship, and spiritual growth. 
              Experience the transforming power of God's Word in a loving community 
              that embraces growth through His teachings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-light text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/prayer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:shadow-large hover:-translate-y-1"
              >
                Submit Prayer Request
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading font-bold text-2xl text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3 mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading font-bold text-2xl text-white mb-1">15+</div>
                <div className="text-white/70 text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading font-bold text-2xl text-white mb-1">1000+</div>
                <div className="text-white/70 text-sm">Lives Touched</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-large">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-burgundy/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                    <BookOpen className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">God's Word</h3>
                  <p className="text-white/80 max-w-sm">
                    "Therefore, if anyone is in Christ, the new creation has come: 
                    The old has gone, the new is here!"
                  </p>
                  <p className="text-primary font-semibold mt-2">- 2 Corinthians 5:17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
