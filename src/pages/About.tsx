import Layout from '@/components/Layout';
import { Target, Eye, Heart, Star, Users, Award } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      letter: 'H',
      word: 'Holiness',
      description: 'Living set apart for God, pursuing righteousness in all aspects of life.',
      icon: Star
    },
    {
      letter: 'E',
      word: 'Excellence',
      description: 'Striving for the highest standards in worship, service, and character.',
      icon: Award
    },
    {
      letter: 'L',
      word: 'Love',
      description: 'Demonstrating Christ\'s unconditional love to one another and our community.',
      icon: Heart
    },
    {
      letter: 'I',
      word: 'Integrity',
      description: 'Being honest, authentic, and consistent in our words and actions.',
      icon: Target
    },
    {
      letter: 'C',
      word: 'Community',
      description: 'Building strong relationships and supporting one another in faith.',
      icon: Users
    },
    {
      letter: 'A',
      word: 'Apostolic',
      description: 'Following the foundational teachings and practices of the early church.',
      icon: Eye
    },
    {
      letter: 'S',
      word: 'Service',
      description: 'Serving God and others with humility, dedication, and joy.',
      icon: Heart
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              About <span className="text-primary">TRM-BA</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              The Renewed Minds Believers' Assembly is a vibrant Christian community 
              dedicated to transforming lives through the power of God's Word and the 
              fellowship of believers committed to spiritual growth and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision */}
            <div className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To build a generation of believers with renewed minds, transformed by the Word of God, 
                walking in divine purpose, and impacting their communities and the world with the 
                love and power of Christ.
              </p>
            </div>

            {/* Mission */}
            <div className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To teach, equip, and empower believers through sound biblical doctrine, 
                passionate worship, genuine fellowship, and practical application of God's Word, 
                fostering spiritual maturity and kingdom advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - HELICAS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              <strong className="text-primary">HELICAS</strong> represents the foundational principles 
              that guide our community and shape our approach to faith, fellowship, and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.letter}
                className="card-floating p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-white font-heading font-bold text-xl">{value.letter}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                  {value.word}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Background */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in faith and built on the solid foundation of God's Word, 
                TRM-BA has been a beacon of hope and transformation in our community.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-secondary mb-2">The Beginning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Started as a small fellowship group with a vision to see lives transformed 
                        through authentic biblical teaching and genuine Christian community. 
                        Our founders were passionate about creating a space where believers could 
                        grow in their faith and discover their God-given purpose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-burgundy-foreground font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Growth & Expansion</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As the community grew, we expanded our programs to include weekly teachings, 
                        daily devotionals (Morning Dew), and annual conferences that have touched 
                        thousands of lives. Our commitment to excellence in teaching and genuine 
                        care for each member has been the foundation of our growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-slate rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-slate-foreground font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Present Day</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Today, TRM-BA continues to be a place where individuals encounter God, 
                        families are strengthened, and communities are transformed. We remain 
                        committed to our core values while embracing innovative ways to share 
                        the Gospel and minister to a changing world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Emphasis & Leadership Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Ministry Emphasis */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                Ministry Emphasis
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-secondary mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Every aspect of our ministry is grounded in the authority and truth of Scripture, 
                      ensuring that our teaching, worship, and practices align with God's Word.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-secondary mb-2">Spiritual Growth</h3>
                    <p className="text-muted-foreground">
                      We are committed to fostering an environment where believers can mature in their faith, 
                      develop their spiritual gifts, and discover their calling in God's kingdom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-secondary mb-2">Community Impact</h3>
                    <p className="text-muted-foreground">
                      Our ministry extends beyond the church walls as we actively engage in community 
                      service, outreach programs, and initiatives that demonstrate Christ's love in action.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Culture */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                Leadership Culture
              </h2>
              <div className="space-y-6">
                <div className="card-elegant p-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3">Servant Leadership</h3>
                  <p className="text-muted-foreground">
                    Our leaders model the servant leadership of Christ, prioritizing the needs of 
                    others and leading with humility, integrity, and genuine care for those they serve.
                  </p>
                </div>

                <div className="card-elegant p-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3">Empowerment & Mentorship</h3>
                  <p className="text-muted-foreground">
                    We believe in raising up the next generation of leaders through intentional 
                    mentorship, training programs, and opportunities for growth and development.
                  </p>
                </div>

                <div className="card-elegant p-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3">Collaborative Ministry</h3>
                  <p className="text-muted-foreground">
                    Our leadership approach emphasizes teamwork, shared vision, and the recognition 
                    that every member has valuable gifts to contribute to the body of Christ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;