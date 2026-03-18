import { motion } from 'framer-motion';
import { Check, MapPin, Bell, MessageSquare, Camera } from 'lucide-react';
import { Smartphone } from 'lucide-react';

const features = [
  { icon: MapPin, text: 'Real-time GPS tracking' },
  { icon: Bell, text: 'Instant notifications' },
  { icon: MessageSquare, text: 'Direct driver messaging' },
  { icon: Camera, text: 'Delivery photo confirmation' },
];

export function AppDownloadSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 flex justify-center">
                    <div className="w-20 h-4 bg-slate-900 rounded-b-xl" />
                  </div>
                  
                  {/* App UI */}
                  <div className="pt-10 px-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Smalltown</span>
                    </div>
                    
                    <div className="bg-primary/10 rounded-xl p-3 mb-3">
                      <p className="text-xs text-primary font-medium mb-1">Active Delivery</p>
                      <p className="text-sm font-semibold">Order #2847</p>
                      <p className="text-xs text-muted-foreground">Arriving in 12 min</p>
                    </div>
                    
                    {/* Map Placeholder */}
                    <div className="bg-slate-100 rounded-xl h-32 mb-3 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-primary/40" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>Driver is 0.8 miles away</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-primary/30" />
                        <span className="text-muted-foreground">Your location</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Download Our App
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Track Your Delivery in Real-Time
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our intuitive app puts you in control. Track your delivery driver, get notified when they&apos;re nearby, and communicate directly if needed. It&apos;s like having a personal delivery assistant in your pocket.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground flex items-center gap-2">
                    <feature.icon className="w-4 h-4 text-primary" />
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
