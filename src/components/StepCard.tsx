import { motion } from 'framer-motion';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  index?: number;
  isLast?: boolean;
}

export function StepCard({ number, title, description, index = 0, isLast = false }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connecting line */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 origin-left"
        />
      )}
      
      {/* Step number */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-primary/30"
      >
        {number.toString().padStart(2, '0')}
      </motion.div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </motion.div>
  );
}
