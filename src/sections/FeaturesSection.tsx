import { motion } from 'framer-motion';
import { Zap, MapPin, Shield, Heart, Clock, Smartphone, Package, Store, Users, Star } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FeatureCard } from '@/components/FeatureCard';
import { useCountUp } from '@/hooks/useCountUp';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get your deliveries in 30 minutes or less. Our local network ensures speedy service every time.',
  },
  {
    icon: MapPin,
    title: 'Live Tracking',
    description: 'Track your delivery in real-time. Know exactly when your package will arrive at your door.',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your packages are handled with care. Insured deliveries and verified drivers for peace of mind.',
  },
  {
    icon: Heart,
    title: 'Local Love',
    description: 'Supporting local businesses and creating jobs in your community. We\'re neighbors helping neighbors.',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Need something delivered at midnight? We\'ve got you covered around the clock, every day.',
  },
  {
    icon: Smartphone,
    title: 'Easy Ordering',
    description: 'Order with just a few taps on our app. Simple, intuitive, and designed for everyone.',
  },
];

function BigStat({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: typeof Package }) {
  const { formattedCount, elementRef } = useCountUp({
    end: value,
    suffix,
    duration: 2000,
  });

  return (
    <div ref={elementRef} className="text-center">
      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
      <p className="text-3xl md:text-4xl font-bold text-foreground">{formattedCount}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Delivering More Than Packages"
          description="We combine cutting-edge technology with a personal touch to bring you the best delivery experience in town."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Big Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <BigStat value={10000} suffix="+" label="Deliveries Made" icon={Package} />
            <BigStat value={50} suffix="+" label="Local Partners" icon={Store} />
            <BigStat value={100} suffix="+" label="Delivery Heroes" icon={Users} />
            <BigStat value={4.9} suffix="" label="App Rating" icon={Star} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
