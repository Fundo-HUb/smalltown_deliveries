import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index?: number;
}

export function TestimonialCard({ quote, author, role, index = 0 }: TestimonialCardProps) {
  const initials = author.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300"
    >
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      
      <p className="text-foreground leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
      
      <div className="flex items-center">
        <Avatar className="w-10 h-10 mr-3 bg-primary/10">
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
