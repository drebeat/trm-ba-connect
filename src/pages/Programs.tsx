import Layout from '@/components/Layout';
import { Calendar, Clock, MapPin, Users, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const weeklyPrograms = [
    {
      title: 'Sunday Main Service',
      time: '9:00 AM - 12:00 PM',
      description: 'Join us for worship, biblical teaching, and fellowship as we gather to honor God and grow in our faith together.',
      location: 'Main Sanctuary',
      audience: 'All Ages',
      highlight: true
    },
    {
      title: 'Wednesday Bible Study',
      time: '6:00 PM - 8:00 PM',
      description: 'Deep dive into God\'s Word with systematic Bible study, discussion, and practical application for daily living.',
      location: 'Fellowship Hall',
      audience: 'Adults & Youth',
      highlight: false
    },
    {
      title: 'Friday Prayer Night',
      time: '7:00 PM - 9:00 PM',
      description: 'Corporate prayer, intercession, and seeking God\'s face together for personal and community breakthrough.',
      location: 'Prayer Chapel',
      audience: 'All Ages',
      highlight: false
    },
    {
      title: 'Morning Dew Devotionals',
      time: '6:00 AM - 6:30 AM (Daily)',
      description: 'Start your day with God through daily devotional readings, prayer, and meditation on His Word.',
      location: 'Online & On-site',
      audience: 'All Ages',
      highlight: false
    }
  ];

  const monthlyPrograms = [
    {
      title: 'First Friday Vigil',
      frequency: 'First Friday of every month',
      time: '10:00 PM - 6:00 AM',
      description: 'All-night prayer and worship session for spiritual breakthrough and divine encounters.',
      nextDate: 'April 5, 2024'
    },
    {
      title: 'Family Sunday',
      frequency: 'Last Sunday of every month',
      time: '9:00 AM - 2:00 PM',
      description: 'Special family-focused service with activities for children, family dedications, and fellowship meal.',
      nextDate: 'March 31, 2024'
    },
    {
      title: 'Youth Explosion',
      frequency: 'Third Saturday of every month',
      time: '4:00 PM - 8:00 PM',
      description: 'High-energy youth service with contemporary worship, relevant teaching, and fun activities.',
      nextDate: 'March 16, 2024'
    }
  ];

  const annualEvents = [
    {
      title: 'Annual Conference',
      date: 'July 15-21, 2024',
      description: 'Our flagship event featuring renowned speakers, workshops, and life-transforming sessions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Christmas Carol Service',
      date: 'December 24, 2024',
      description: 'Celebrate the birth of our Savior with beautiful carols, dramatic presentations, and festive fellowship.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
      featured: false
    },
    {
      title: 'Easter Celebration',
      date: 'March 31, 2024',
      description: 'Rejoice in the resurrection of Jesus Christ with special services and community celebration.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      featured: false
    },
    {
      title: 'Leadership Retreat',
      date: 'September 20-22, 2024',
      description: 'Annual retreat for church leaders focused on spiritual growth and ministry development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      date: 'MAR 24',
      title: 'Palm Sunday Service',
      time: '9:00 AM',
      type: 'Special Service'
    },
    {
      date: 'MAR 31',
      title: 'Easter Celebration',
      time: '9:00 AM',
      type: 'Major Event'
    },
    {
      date: 'APR 05',
      title: 'First Friday Vigil',
      time: '10:00 PM',
      type: 'Prayer Night'
    },
    {
      date: 'APR 14',
      title: 'Baptism Service',
      time: '11:00 AM',
      type: 'Special Service'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Programs & <span className="text-primary">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Join us throughout the week for worship, fellowship, learning, and spiritual growth. 
              There's something for everyone in our TRM-BA family.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Programs */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Weekly Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Regular gatherings that form the heartbeat of our community life and spiritual growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeklyPrograms.map((program, index) => (
              <div
                key={program.title}
                className={`card-floating p-8 ${program.highlight ? 'border-2 border-primary bg-primary/5' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {program.highlight && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-primary mr-2" />
                    <span className="text-primary font-semibold text-sm">Main Service</span>
                  </div>
                )}
                
                <h3 className="font-heading font-bold text-xl text-secondary mb-3">
                  {program.title}
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{program.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{program.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary">{program.audience}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Monthly Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Special monthly gatherings designed to strengthen our community bonds and spiritual focus.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {monthlyPrograms.map((program, index) => (
              <div
                key={program.title}
                className="card-floating p-6 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-secondary mb-2">
                  {program.title}
                </h3>
                
                <p className="text-primary font-medium text-sm mb-2">{program.frequency}</p>
                <p className="text-muted-foreground text-sm mb-4">{program.time}</p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-secondary font-medium text-sm">Next Event:</p>
                  <p className="text-primary font-semibold">{program.nextDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Annual Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major celebrations and conferences that mark significant moments in our church calendar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {annualEvents.map((event, index) => (
              <div
                key={event.title}
                className={`card-floating overflow-hidden group ${event.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`aspect-[16/10] ${event.featured ? 'lg:aspect-[2/1]' : ''} overflow-hidden`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  {event.featured && (
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      <span className="text-primary font-semibold text-sm">Featured Event</span>
                    </div>
                  )}
                  
                  <h3 className="font-heading font-semibold text-lg text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">{event.date}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Sidebar */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                Get Involved
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elegant p-8">
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-4">
                    Join Our Ministry Teams
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Use your gifts and talents to serve in various ministry areas including worship, 
                    children's ministry, hospitality, and outreach.
                  </p>
                  <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                    Explore Opportunities
                  </Button>
                </div>

                <div className="card-elegant p-8">
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-4">
                    Connect with a Group
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Build meaningful relationships through our cell groups, bible study groups, 
                    and fellowship circles designed for spiritual growth.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Find a Group
                  </Button>
                </div>
              </div>
            </div>

            {/* Upcoming Events Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-elegant p-6">
                <h3 className="font-heading font-semibold text-lg text-secondary mb-6">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={event.title} className="flex items-start space-x-3 p-3 hover:bg-muted rounded-lg transition-colors duration-200">
                      <div className="bg-primary rounded-lg p-2 text-primary-foreground text-center min-w-[3rem]">
                        <div className="text-xs font-medium">{event.date}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-secondary text-sm leading-tight mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">{event.time}</span>
                          <span className="text-primary text-xs font-medium">{event.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary-dark">
                  View All Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;