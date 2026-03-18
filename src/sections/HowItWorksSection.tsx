import { SectionHeader } from '@/components/SectionHeader';
import { StepCard } from '@/components/StepCard';

const steps = [
  {
    number: 1,
    title: 'Tap to Order',
    description: 'Open our app, browse local stores, and select what you need. It takes less than a minute to place your order.',
  },
  {
    number: 2,
    title: 'We Pack It',
    description: 'Our team carefully picks and packs your items. We double-check everything to ensure quality and accuracy.',
  },
  {
    number: 3,
    title: 'Track Delivery',
    description: 'Watch your delivery in real-time on the map. You\'ll know exactly when your package will arrive.',
  },
  {
    number: 4,
    title: 'Enjoy at Home',
    description: 'Receive your delivery at your doorstep with a smile. Fresh, fast, and exactly what you ordered.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Simple Process"
          title="How It Works"
          description="Getting your deliveries has never been easier. Four simple steps stand between you and your package."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
