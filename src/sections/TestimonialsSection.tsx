import { motion } from 'framer-motion';
import { Star, Apple, Play } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { TestimonialCard } from '@/components/TestimonialCard';
import { useCountUp } from '@/hooks/useCountUp';

const testimonials = [
  {
    quote: "Smalltown Deliveries has been a lifesaver! As a working mom, I don't always have time to run errands. Their grocery delivery is fast, and the produce is always fresh. Highly recommend!",
    author: 'Sarah Johnson',
    role: 'Busy Mom',
  },
  {
    quote: "We use their business delivery service for our restaurant supplies. They're reliable, professional, and always on time. It's helped us streamline our operations significantly.",
    author: 'Mike Peterson',
    role: 'Local Business Owner',
  },
  {
    quote: "The app is super easy to use, and I love being able to track my delivery in real-time. The drivers are always friendly, and the prices are reasonable for a student budget!",
    author: 'Emily Chen',
    role: 'College Student',
  },
  {
    quote: "I was hesitant to try delivery services, but Smalltown Deliveries made it so easy. Their customer service walked me through the app, and now I use them weekly. Fantastic service!",
    author: 'Robert Williams',
    role: 'Retired Teacher',
  },
  {
    quote: "After long shifts at the hospital, the last thing I want to do is grocery shopping. Smalltown Deliveries brings everything I need right to my door. Absolute game-changer!",
    author: 'Lisa Martinez',
    role: 'Healthcare Worker',
  },
  {
    quote: "Their document courier service is top-notch. Secure, fast, and professional. I trust them with all my important business deliveries. They're an essential part of my business now.",
    author: 'David Thompson',
    role: 'Small Business Owner',
  },
];

function RatingBadge({ icon: Icon, rating, label }: { icon: typeof Apple; rating: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-8 h-8" />
      <div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-lg">{rating}</span>
          <Star className="w-4 h-4 fill-current text-yellow-400" />
        </div>
        <p className="text-xs text-white/70">{label}</p>
      </div>
    </div>
  );
}

function HappyCustomers() {
  const { formattedCount, elementRef } = useCountUp({
    end: 10,
    suffix: 'K+',
    duration: 2000,
  });

  return (
    <div ref={elementRef} className="text-center">
      <p className="text-3xl font-bold">{formattedCount}</p>
      <p className="text-sm text-white/70">Happy Customers</p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Customers Say"
          description="Don't just take our word for it. Here's what people in our community have to say about their experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>

        {/* App Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <RatingBadge icon={Apple} rating="4.9" label="App Store" />
            <RatingBadge icon={Play} rating="4.8" label="Google Play" />
            <HappyCustomers />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
