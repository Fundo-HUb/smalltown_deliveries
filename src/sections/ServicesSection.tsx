import { motion } from 'framer-motion';
import { ShoppingCart, Utensils, Package, FileText, Building2, Stethoscope, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: ShoppingCart,
    title: 'Grocery Delivery',
    description: 'Fresh produce, pantry staples, and everyday essentials delivered from your favorite local stores.',
    features: ['Same-day delivery', 'Fresh guarantee', 'Store pickup option'],
    accentColor: 'bg-green-100',
  },
  {
    icon: Utensils,
    title: 'Food Delivery',
    description: 'Hot meals from local restaurants delivered to your door while they\'re still fresh and delicious.',
    features: ['Live order tracking', 'No minimum order', 'Group ordering'],
    accentColor: 'bg-orange-100',
  },
  {
    icon: Package,
    title: 'Package Delivery',
    description: 'Send or receive packages of all sizes. We handle everything with care and deliver on time.',
    features: ['Insurance included', 'Signature required', 'Scheduled delivery'],
    accentColor: 'bg-blue-100',
  },
  {
    icon: FileText,
    title: 'Document Courier',
    description: 'Important documents delivered securely and confidentially. Perfect for business and legal papers.',
    features: ['Confidential handling', 'Proof of delivery', 'Rush service'],
    accentColor: 'bg-purple-100',
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Custom delivery solutions for local businesses. From inventory to customer deliveries, we\'ve got you covered.',
    features: ['Bulk discounts', 'API integration', 'Dedicated support'],
    accentColor: 'bg-indigo-100',
  },
  {
    icon: Stethoscope,
    title: 'Medical Delivery',
    description: 'Prescriptions and medical supplies delivered with extra care and temperature control when needed.',
    features: ['HIPAA compliant', 'Temperature control', 'Priority handling'],
    accentColor: 'bg-red-100',
  },
];

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="What We Deliver"
          description="From daily essentials to special deliveries, we handle it all with the same level of care and professionalism."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              accentColor={service.accentColor}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Need something else delivered? We&apos;re flexible!</p>
          <Button variant="outline" onClick={onOpenContact} className="group">
            Contact us for custom solutions
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
