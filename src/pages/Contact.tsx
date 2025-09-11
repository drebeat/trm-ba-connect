import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Faith Avenue', 'Victoria Island, Lagos', 'Nigeria'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 123 456 7890', '+234 987 654 3210'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@trmba.org', 'pastor@trmba.org'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: After Service'],
      action: null
    }
  ];

  const serviceSchedule = [
    {
      day: 'Sunday',
      service: 'Main Service',
      time: '9:00 AM - 12:00 PM',
      description: 'Worship, Teaching & Fellowship'
    },
    {
      day: 'Wednesday',
      service: 'Bible Study',
      time: '6:00 PM - 8:00 PM',
      description: 'In-depth Bible Study'
    },
    {
      day: 'Friday',
      service: 'Prayer Night',
      time: '7:00 PM - 9:00 PM',
      description: 'Corporate Prayer & Intercession'
    },
    {
      day: 'Daily',
      service: 'Morning Dew',
      time: '6:00 AM - 6:30 AM',
      description: 'Daily Devotional'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We'd love to hear from you. Whether you have questions, prayer requests, 
              or want to learn more about our community, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="card-floating p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <button className="text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200">
                    {info.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+234 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Please share your message with us..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="card-elegant p-0 overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-primary/20 to-accent-burgundy/20 flex items-center justify-center relative">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="font-medium text-secondary text-sm">123 Faith Avenue</p>
                      <p className="text-muted-foreground text-xs">Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Schedule */}
              <div className="card-elegant p-6">
                <h3 className="font-heading font-semibold text-xl text-secondary mb-6">
                  Service Schedule
                </h3>
                <div className="space-y-4">
                  {serviceSchedule.map((schedule, index) => (
                    <div key={schedule.day} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium text-secondary">{schedule.day}</div>
                        <div className="text-sm text-muted-foreground">{schedule.service}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-secondary text-sm">{schedule.time}</div>
                        <div className="text-xs text-muted-foreground">{schedule.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="card-elegant p-6">
                <h3 className="font-heading font-semibold text-xl text-secondary mb-6">
                  Follow Us Online
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-200 group"
                  >
                    <Facebook className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200 mb-2" />
                    <span className="text-sm font-medium text-secondary">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-200 group"
                  >
                    <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200 mb-2" />
                    <span className="text-sm font-medium text-secondary">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-200 group"
                  >
                    <Youtube className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200 mb-2" />
                    <span className="text-sm font-medium text-secondary">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;