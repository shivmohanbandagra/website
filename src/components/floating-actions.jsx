"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Phone, MessageCircle, CalendarHeart } from "lucide-react";

export default function FloatingActions() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility when scroll progress passes 30%
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest > 0.08);
  });

  return (
    <>
      {/* --- DESKTOP: Floating Booking CTA (Bottom Right) --- */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-4 p-2 pl-6 bg-charcoal/90 backdrop-blur-xl border border-gold/30 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.15)]"
          >
            <div className="flex flex-col pr-2">
              <span className="font-subheading text-ivory text-xs tracking-widest uppercase">
                Secure Your Date
              </span>
              <span className="font-sans text-ivory/80 text-xs font-light mt-0.5">
                Limited availability for 2026
              </span>
            </div>

            {/* <button className="group relative px-6 py-3 bg-gold text-charcoal rounded-full transition-all hover:bg-ivory flex items-center gap-2 overflow-hidden">
              <CalendarHeart className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-subheading uppercase tracking-widest text-xs font-semibold">
                Book Now
              </span>
           
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[sweep_1s_ease-in-out]" />
            </button> */}

            <a
              href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20secure%20my%20wedding%20date."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-gold text-ivory rounded-full transition-all hover:bg-ivory hover:text-gold flex items-center gap-2 overflow-hidden"
            >
              <CalendarHeart className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-subheading uppercase tracking-widest text-xs font-semibold">
                Book Now
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[sweep_1s_ease-in-out]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE: Sticky Bottom Bar --- */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-gold/20 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center justify-between p-2 px-4 gap-3">
              {/* Call Action */}
              <button className="flex-1 flex flex-col items-center justify-center py-2 text-foreground/70 hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 mb-1" strokeWidth={1.5} />
                <span className="text-[9px] font-subheading uppercase tracking-widest">
                  Call
                </span>
              </button>

{/* Primary Center Action (Book) */}
<a 
  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20book%20a%20Baraat."
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-[1.5] flex items-center justify-center py-3.5 px-2 bg-gold text-ivory rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-gold/90 transition-colors"
>
  <span className="font-subheading uppercase tracking-widest text-[11px] font-semibold">
    Book Now
  </span>
</a>

{/* WhatsApp Action */}
<a 
  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!"
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1 flex flex-col items-center justify-center py-2 text-[#16A34A] hover:text-[#16A34A]/80 transition-colors"
>
  <MessageCircle className="w-5 h-5 mb-1" strokeWidth={1.5} />
  <span className="text-[9px] font-subheading uppercase tracking-widest">WhatsApp</span>
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
