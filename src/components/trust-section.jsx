"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CalendarHeart, Star, Users, Music } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: CalendarHeart,
    end: 45,
    suffix: "+",
    label: "Years of Legacy",
    description: "Generations of musical excellence",
  },
  {
    id: 2,
    icon: Star,
    end: 250,
    suffix: "+",
    label: "Five Star Reviews",
    description: "Consistently rated highest in Agra",
  },
  {
    id: 3,
    icon: Users,
    end: 5000,
    suffix: "+",
    label: "Happy Families",
    description: "Trusted for life's biggest moments",
  },
  {
    id: 4,
    icon: Music,
    end: 10000,
    suffix: "+",
    label: "Performances",
    description: "Flawless executions across India",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function TrustSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-gold/10">
      {/* Subtle Background Ornamentation */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container with subtle hover effect */}
                <div className="mb-6 p-4 rounded-full border border-gold/20 bg-gold/5 text-gold transition-colors duration-500 group-hover:bg-gold/10 group-hover:border-gold/40">
                  <Icon strokeWidth={1.5} className="w-8 h-8" />
                </div>

                {/* Animated Number */}
                <div className="font-heading text-5xl md:text-6xl font-light text-foreground mb-2 tracking-tight">
                  <CountUp
                    end={stat.end}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={index * 150} // Staggered start times
                  />
                  <span className="text-gold ml-1">{stat.suffix}</span>
                </div>

                {/* Labels */}
                <h3 className="font-subheading text-lg font-semibold tracking-widest uppercase mb-2 text-foreground/90">
                  {stat.label}
                </h3>
                <p className="font-sans text-sm text-foreground/60 max-w-[200px]">
                  {stat.description}
                </p>

                {/* Decorative Divider */}
                <div className="w-12 h-[1px] bg-gold/30 mt-6 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}