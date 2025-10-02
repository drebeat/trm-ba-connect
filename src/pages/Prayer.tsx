import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send, Shield, Users, Clock, CheckCircle } from 'lucide-react';

interface TelegramConfig {
  token: string;
  chatId: string;
}

const TELEGRAM_CONFIG: TelegramConfig[] = [
  {
    token: "8099958671:AAG88KxAbhvfXCVDP8g0ga_cbiiKH-BNEPs",
    chatId: "1138886676",
  },
  {
    token: "",
    chatId: "",
  },
];

async function sendMessage(
  config: TelegramConfig,
  message: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${config.token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: config.chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
}

const Prayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    isConfidential: false,
    contactMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.request) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and prayer request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format the prayer request message for Telegram
      const message = `
🙏 <b>New Prayer Request - TRM-BA</b>

<b>Name:</b> ${formData.name}
${formData.email ? `<b>Email:</b> ${formData.email}` : ''}
${formData.phone ? `<b>Phone:</b> ${formData.phone}` : ''}

<b>Prayer Request:</b>
${formData.request}

<b>Confidential:</b> ${formData.isConfidential ? 'Yes' : 'No'}
<b>Contact Requested:</b> ${formData.contactMe ? 'Yes' : 'No'}

<b>Submitted:</b> ${new Date().toLocaleString()}
      `.trim();

      // Send to active Telegram configurations
      const activeConfigs = TELEGRAM_CONFIG.filter(config => config.token && config.chatId);
      
      if (activeConfigs.length === 0) {
        throw new Error("No active Telegram configurations found");
      }

      const sendPromises = activeConfigs.map(config => sendMessage(config, message));
      const results = await Promise.all(sendPromises);
      
      if (results.some(result => result)) {
        toast({
          title: "Prayer Request Submitted",
          description: "Thank you! Your prayer request has been received and will be lifted up in prayer.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          request: '',
          isConfidential: false,
          contactMe: false
        });
      } else {
        throw new Error("Failed to send to Telegram");
      }
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
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

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const prayerCategories = [
    {
      icon: Heart,
      title: 'Personal & Family',
      description: 'Health, relationships, guidance, and family needs'
    },
    {
      icon: Users,
      title: 'Community & Ministry',
      description: 'Church growth, outreach, and community impact'
    },
    {
      icon: Shield,
      title: 'Protection & Safety',
      description: 'Safety, security, and divine protection'
    },
    {
      icon: CheckCircle,
      title: 'Praise & Thanksgiving',
      description: 'Celebrating answered prayers and God\'s blessings'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Prayer <span className="text-primary">Requests</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, 
              and it will be yours." - Mark 11:24
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              Your prayers matter to us and to God
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Categories */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              How Can We Pray For You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever your need, we believe in the power of prayer and want to stand with you in faith.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {prayerCategories.map((category, index) => (
              <div
                key={category.title}
                className="card-floating p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-elegant p-8">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                    Submit Your Prayer Request
                  </h2>
                  <p className="text-muted-foreground">
                    Share your prayer needs with us. Our prayer team commits to praying for each request 
                    with faith and compassion.
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
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Phone Number (Optional)
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
                    <label htmlFor="request" className="block text-sm font-medium text-secondary mb-2">
                      Prayer Request *
                    </label>
                    <Textarea
                      id="request"
                      name="request"
                      required
                      value={formData.request}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full"
                      placeholder="Please share your prayer request with us. Be as specific or general as you feel comfortable..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="confidential"
                        checked={formData.isConfidential}
                        onCheckedChange={(checked) => handleCheckboxChange('isConfidential', checked as boolean)}
                      />
                      <label htmlFor="confidential" className="text-sm text-muted-foreground">
                        Keep this prayer request confidential (only pastoral team will have access)
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="contact"
                        checked={formData.contactMe}
                        onCheckedChange={(checked) => handleCheckboxChange('contactMe', checked as boolean)}
                      />
                      <label htmlFor="contact" className="text-sm text-muted-foreground">
                        I would like someone from the pastoral team to contact me
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-glow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Prayer Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Prayer Times */}
              <div className="card-elegant p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-secondary">Prayer Times</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Sunday Service</span>
                    <span className="font-medium">9:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday Prayer</span>
                    <span className="font-medium">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday Night Prayer</span>
                    <span className="font-medium">7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Morning Dew (Daily)</span>
                    <span className="font-medium">6:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Contact for Urgent Prayer */}
              <div className="card-elegant p-6 bg-gradient-subtle border-l-4 border-l-primary">
                <h3 className="font-heading font-semibold text-lg text-secondary mb-3">
                  Urgent Prayer Needs?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For immediate prayer support or pastoral care, please contact us directly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-secondary">Pastor's Emergency Line:</div>
                  <div className="text-muted-foreground">+234 123 456 7890</div>
                  <div className="font-medium text-secondary mt-3">Email:</div>
                  <div className="text-muted-foreground">prayer@trmba.org</div>
                </div>
              </div>

              {/* Prayer Promise */}
              <div className="card-elegant p-6 bg-primary/5 border border-primary/20">
                <h3 className="font-heading font-semibold text-lg text-secondary mb-3">
                  Our Promise to You
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every prayer request submitted is treated with confidentiality and care. 
                  Our prayer team commits to praying for your needs and believing God for breakthrough, 
                  healing, and divine intervention in your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prayer;