import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

interface AppStoreButtonProps {
  store: 'apple' | 'google';
}

export function AppStoreButton({ store }: AppStoreButtonProps) {
  const isApple = store === 'apple';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 bg-white text-foreground px-5 py-3 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
    >
      {isApple ? (
        <Apple className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6 fill-current" />
      )}
      <div className="text-left">
        <p className="text-xs text-muted-foreground">Download on the</p>
        <p className="text-sm font-semibold">{isApple ? 'App Store' : 'Google Play'}</p>
      </div>
    </motion.button>
  );
}
