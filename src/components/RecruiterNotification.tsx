import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function RecruiterNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Show after 30 seconds
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  if (hasDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] max-w-sm"
        >
          <div className="bg-[#16181C] border border-[#D7E2EA]/20 shadow-2xl rounded-2xl p-5 sm:p-6 text-[#D7E2EA] relative overflow-hidden backdrop-blur-md">
            {/* Subtle gradient background effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accentPurple/20 blur-[50px] rounded-full pointer-events-none" />
            
            <button 
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => setHasDismissed(true), 300);
              }}
              className="absolute top-3 right-3 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
            
            <p className="text-sm sm:text-base font-light leading-relaxed mb-4 pr-4">
              You've already spent more time here than most recruiters do. Let's collaborate.
            </p>
            
            <a 
              href="#contact" 
              onClick={() => {
                // If they click contact, we can also dismiss the notification
                setIsVisible(false);
                setTimeout(() => setHasDismissed(true), 300);
              }}
              className="inline-block bg-[#D7E2EA] text-[#0C0C0C] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
