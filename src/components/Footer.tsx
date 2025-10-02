import { Link } from "react-router-dom";
import {
  Cross,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Prayer Request", href: "/prayer" },
  ];

  const programs = [
    { name: "Sunday Services", href: "/programs" },
    { name: "Morning Dew Devotionals", href: "/programs" },
    { name: "Annual Conferences", href: "/programs" },
    { name: "Weekly Meetings", href: "/programs" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo2.jpeg"
                alt="The Renewed Minds Believers' Assembly Logo"
                className="w-24 h-24 object-contain"
              />
              <div>
                <div className="font-heading font-bold text-lg">TRM-BA</div>
                <div className="text-xs text-secondary-foreground/70">
                  Renewed Minds
                </div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-6 leading-relaxed">
              Building renewed minds and transformed lives through the power of
              God's Word. Join us in our journey of faith, fellowship, and
              spiritual growth.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-3">Stay Connected</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-background/10 border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-secondary-foreground/50"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-light text-primary-foreground text-sm rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  Ogbomoso, Oyo State
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  +234706 085 9550 <span className="text-sm px-2">or</span>+234706 662 0020
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                 therenewedmindspro@gmail.com
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/178iceedh6/"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/therenewedminds_ba?igsh=MXhtdTdxenA4a2RtMw=="
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@therenewedminds?si=gy6c24U1wv5JFd_b"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                 <a
                  href="https://t.me/therenewedmindz"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
                >
                   <Send className="w-5 h-5" />
                </a> 
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              © {currentYear} The Renewed Minds Believers' Assembly. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm text-secondary-foreground/60">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
