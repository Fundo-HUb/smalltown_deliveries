import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, MapPin, Clock, CheckCircle, Truck } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TrackingModalProps {
  open: boolean;
  onClose: () => void;
}

interface TrackingStep {
  status: string;
  location: string;
  time: string;
  completed: boolean;
  current: boolean;
}

const mockTrackingData: TrackingStep[] = [
  { status: 'Order Placed', location: 'Online', time: 'Today, 9:30 AM', completed: true, current: false },
  { status: 'Order Confirmed', location: 'System', time: 'Today, 9:32 AM', completed: true, current: false },
  { status: 'Picked Up', location: 'Local Store', time: 'Today, 10:15 AM', completed: true, current: false },
  { status: 'In Transit', location: 'On the way', time: 'Today, 10:45 AM', completed: true, current: true },
  { status: 'Out for Delivery', location: 'Your area', time: 'Estimated 11:30 AM', completed: false, current: false },
  { status: 'Delivered', location: 'Your doorstep', time: 'Pending', completed: false, current: false },
];

export function TrackingModal({ open, onClose }: TrackingModalProps) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setTrackingNumber('');
      setShowResults(false);
      setIsSearching(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Track Your Delivery
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter tracking number (e.g., 2847)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
            />
            <Button onClick={handleTrack} disabled={isSearching || !trackingNumber.trim()}>
              {isSearching ? 'Tracking...' : 'Track'}
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Order #{trackingNumber || '2847'}</span>
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      On the way
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery: Today, 11:30 AM
                  </p>
                </div>

                <div className="space-y-0">
                  {mockTrackingData.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed
                              ? 'bg-primary text-white'
                              : step.current
                              ? 'bg-primary/20 text-primary border-2 border-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : step.current ? (
                            <Truck className="w-4 h-4" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-current" />
                          )}
                        </div>
                        {index < mockTrackingData.length - 1 && (
                          <div
                            className={`w-0.5 flex-1 my-1 ${
                              step.completed ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        )}
                      </div>
                      <div className="pb-6 flex-1">
                        <p className={`font-medium ${step.current ? 'text-primary' : 'text-foreground'}`}>
                          {step.status}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {step.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
