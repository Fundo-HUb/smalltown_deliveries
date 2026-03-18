import { useCountUp } from '@/hooks/useCountUp';
import type { LucideIcon } from 'lucide-react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
}

export function StatsCounter({ value, suffix = '', prefix = '', label, icon: Icon }: StatsCounterProps) {
  const { formattedCount, elementRef } = useCountUp({
    end: value,
    suffix,
    prefix,
    duration: 1500,
  });

  return (
    <div ref={elementRef} className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">{formattedCount}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
