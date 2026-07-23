"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Ornamentation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="font-subheading text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-6xl text-foreground mb-6"
          >
            Begin Your <span className="text-gold italic">Royal Journey</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-foreground/60 font-light max-w-2xl mx-auto mb-12 text-sm md:text-base"
          >
            From the grand Baraat entry to the final farewell, let us make your celebration
            unforgettable. Reach out to our event coordinator today.
          </motion.p>

          {/* Contact Info Row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold bg-gold/5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-subheading uppercase tracking-widest text-[10px] text-foreground/50 block">
                  Call Us
                </span>
                <a
                  href="tel:+919457500318"
                  className="font-sans text-base text-foreground hover:text-gold transition-colors"
                >
                  +91 94575 00318
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold bg-gold/5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-subheading uppercase tracking-widest text-[10px] text-foreground/50 block">
                  Working Hours
                </span>
                <span className="font-sans text-base text-foreground">10 AM - 8 PM (Daily)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold bg-gold/5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-subheading uppercase tracking-widest text-[10px] text-foreground/50 block">
                  Head Office
                </span>
                <span className="font-sans text-base text-foreground">Bodla, Agra, UP</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+919457500318"
              className="group relative px-10 py-4 bg-gold text-white font-subheading uppercase tracking-widest text-sm font-semibold transition-all hover:bg-gold/90 flex items-center justify-center gap-3 rounded-sm"
            >
              Book a Callback
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/919457500318"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-gold/40 text-foreground font-subheading uppercase tracking-widest text-sm font-semibold transition-all hover:border-gold hover:text-gold flex items-center justify-center gap-3 rounded-sm"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}