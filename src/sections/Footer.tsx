import { Package, Mail, Phone, MapPin, Heart } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Blog', href: '#' },
];

const serviceLinks = [
  { label: 'Grocery Delivery', href: '#services' },
  { label: 'Food Delivery', href: '#services' },
  { label: 'Package Delivery', href: '#services' },
  { label: 'Business Solutions', href: '#services' },
];

const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Track Order', href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Accessibility', href: '#' },
];

interface FooterProps {
  onOpenTracking: () => void;
  onOpenContact: () => void;
}

export function Footer({ onOpenTracking, onOpenContact }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    if (label === 'Track Order') {
      e.preventDefault();
      onOpenTracking();
    } else if (label === 'Contact Us') {
      e.preventDefault();
      onOpenContact();
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">
                Smalltown<span className="text-primary">Deliveries</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your trusted local delivery partner. Fast, reliable, and always with a smile. Serving our community with pride.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@smalltowndeliveries.com" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@smalltowndeliveries.com
              </a>
              <a href="tel:1-800-SMALLTOWN" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                1-800-SMALLTOWN
              </a>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                Serving 50+ towns nationwide
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Smalltown Deliveries. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for small towns everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
