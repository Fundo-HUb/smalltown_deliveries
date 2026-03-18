import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/Navbar';
import { TrackingModal } from '@/components/TrackingModal';
import { ContactModal } from '@/components/ContactModal';
import { HeroSection } from '@/sections/HeroSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { AppDownloadSection } from '@/sections/AppDownloadSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { CTASection } from '@/sections/CTASection';
import { NewsletterSection } from '@/sections/NewsletterSection';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import './App.css';

function App() {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      
      <Navbar
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      
      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <FeaturesSection />
        <HowItWorksSection />
        <AppDownloadSection />
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />
        <TestimonialsSection />
        <CTASection />
        <NewsletterSection />
      </main>
      
      <Footer
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      
      <ScrollToTop />
      
      <TrackingModal open={isTrackingOpen} onClose={() => setIsTrackingOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
