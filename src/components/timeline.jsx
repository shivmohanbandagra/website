"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageSquare,
  Coffee,
  CheckCircle,
  Settings,
  Music,
  Heart,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Initial Inquiry",
    description:
      "Reach out via WhatsApp or phone. We check availability for your auspicious date and understand your initial vision.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Vision Discussion",
    description:
      "A detailed consultation to curate the perfect ensemble—from vintage cars and royal lighting to the exact size of the band and Dhol crew.",
    icon: Coffee,
  },
  {
    id: 3,
    title: "Secure Booking",
    description:
      "Review transparent pricing and finalize the contract. A booking advance secures our team exclusively for your dates.",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Preparation & Logistics",
    description:
      "Our event managers coordinate with your venue and planners to ensure seamless entry timings, permits, and route planning.",
    icon: Settings,
  },
  {
    id: 5,
    title: "The Wedding Day",
    description:
      "Our artists arrive early in immaculate professional uniforms, equipment tested and ready to create the perfect Royal Baraat atmosphere.",
    icon: Music,
  },
  {
    id: 6,
    title: "The Celebration",
    description:
      "Unforgettable energy, timeless traditions, and memories that your family will cherish for generations.",
    icon: Heart,
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  // Track the scroll progress of the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map the scroll progress (0 to 1) to a CSS height percentage
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="py-32 bg-background relative overflow-x-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-subheading text-gold tracking-[0.2em] uppercase text-sm"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-foreground mt-4"
          >
            How Booking <span className="text-gold italic">Works</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background Track (Faded) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/10 md:-translate-x-1/2" />

          {/* Animated Gold Progress Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gold md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-24 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // Determine if item should be on the left or right on desktop
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Empty space for the opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Center Node (Icon) */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full border-2 border-background bg-gold text-charcoal flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`pl-20 md:pl-0 md:w-1/2 flex flex-col ${isEven ? "md:pl-16 md:items-start md:text-left" : "md:pr-16 md:items-end md:text-right"}`}
                  >
                    <div className="p-8 rounded-sm bg-foreground/5 border border-gold/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-500 relative group overflow-hidden">
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <span className="font-subheading text-gold text-sm tracking-widest uppercase mb-2 block relative z-10">
                        Step 0{step.id}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="font-sans text-foreground/70 leading-relaxed font-light relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
