import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index?: number;
  accentColor?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index = 0,
  accentColor = 'bg-primary/10',
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-lg ${accentColor} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </motion.button>
    </motion.div>
  );
}
