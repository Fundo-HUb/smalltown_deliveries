import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin, Clock, Shield, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatsCounter } from '@/components/StatsCounter';
import { FloatingCard } from '@/components/FloatingCard';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface HeroSectionProps {
  onOpenContact: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[72px] flex items-center bg-white bg-grid-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now Serving Your Neighborhood
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
            >
              Your Local Delivery{' '}
              <span className="text-primary">Made Simple</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-foreground mb-4"
            >
              Tap. <span className="text-primary">Track</span> & Enjoy.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              From groceries to packages, we deliver everything you need right to your doorstep. Fast, reliable, and always with a smile.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                onClick={onOpenContact}
                className="group"
              >
                Order Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              <StatsCounter
                value={50}
                suffix="+"
                label="Towns Covered"
                icon={MapPin}
              />
              <StatsCounter
                value={30}
                suffix="min"
                label="Avg. Delivery"
                icon={Clock}
              />
              <StatsCounter
                value={99}
                suffix="%"
                label="Satisfaction"
                icon={Shield}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Visuals */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Floating Order Card */}
            <FloatingCard className="top-10 right-10" delay={0.4}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Order #2847</p>
                  <p className="text-xs text-primary">On the way</p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Customers Card */}
            <FloatingCard className="bottom-20 right-0" delay={0.6}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white bg-primary/20">
                    <AvatarFallback className="text-xs bg-primary text-white">J</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white bg-primary/30">
                    <AvatarFallback className="text-xs bg-primary/80 text-white">M</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white bg-primary/40">
                    <AvatarFallback className="text-xs bg-primary/60 text-white">+</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-sm font-semibold">2k+</p>
                  <p className="text-xs text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </FloatingCard>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
