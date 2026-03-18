import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { NewsletterForm } from '@/components/NewsletterForm';
import { SocialIcon } from '@/components/SocialIcon';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function NewsletterSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive offers, new service announcements, and local delivery tips.
          </p>

          <NewsletterForm />

          <p className="text-xs text-muted-foreground mt-4 mb-6">
            No spam, ever. Unsubscribe anytime.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Or connect with us:</span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
