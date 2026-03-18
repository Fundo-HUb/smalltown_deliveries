import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { AppStoreButton } from '@/components/AppStoreButton';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-green-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Download our app today and experience the easiest way to get everything delivered. Your first delivery is on us!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full"
          >
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">First Delivery FREE - Use code: SMALLTOWN</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
