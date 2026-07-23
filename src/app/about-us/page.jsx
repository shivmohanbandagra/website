"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Crown, Music } from "lucide-react";
import FeaturedGallery from "@/components/gallery";
import ContactCTA from "@/components/contactcta";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      {/* 1. Hero Section */}
      <section className="relative px-6 container mx-auto mb-24 md:mb-32">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-subheading text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl leading-tight mb-8"
          >
            A Legacy of <span className="text-gold italic">Royal</span> Celebrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-foreground/70 max-w-2xl text-lg font-light leading-relaxed"
          >
            Since 1980, Shiv Mohan Band has been the heartbeat of Agra’s most prestigious weddings, transforming traditional Baraats into unforgettable royal processions.
          </motion.p>
        </div>
      </section>

      {/* 2. The Story (Image & Text Split) */}
      <section className="container mx-auto px-6 mb-24 md:mb-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[1/1] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-sm bg-charcoal">
              {/* Replace with a high-quality historical or premium band photo */}
              <Image
                src="/images/services/car.jpeg" 
                alt="Shiv Mohan Band performing in Agra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Decorative Gold Frame */}
              <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl mb-6 text-foreground">
              From 1980 to <br />
              <span className="text-gold italic">Generations of Trust</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="font-sans text-foreground/70 font-light leading-relaxed mb-6">
              What began over four decades ago in Agra has grown into a premier musical institution. We understood early on that a wedding is not just an event; it is a family's proudest moment. 
            </motion.p>
            
            <motion.p variants={fadeUp} className="font-sans text-foreground/70 font-light leading-relaxed mb-10">
              Our philosophy is simple: uncompromising elegance. From the intricate detailing of our artists' uniforms to the flawless synchronization of our brass and dhol ensembles, we ensure that every groom feels like a king, and every family's prestige is elevated.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-gold/10">
              <div>
                <span className="block font-heading text-4xl text-foreground mb-2">1980</span>
                <span className="font-subheading text-xs tracking-widest uppercase text-gold">Established</span>
              </div>
              <div>
                <span className="block font-heading text-4xl text-foreground mb-2">Agra</span>
                <span className="font-subheading text-xs tracking-widest uppercase text-gold">Headquarters</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Pillars of Excellence (Why people love us based on real reviews) */}
      <section className="bg-charcoal text-ivory py-24 md:py-32 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl">The Shiv Mohan <span className="text-gold italic">Standard</span></h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Pillar 1 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                <Crown className="w-6 h-6 text-gold group-hover:text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-subheading text-lg uppercase tracking-widest mb-3">Impeccable Attire</h3>
              <p className="font-sans text-sm text-ivory/60 font-light leading-relaxed max-w-xs">
                Renowned for our vibrant, intricately designed royal costumes that add unparalleled grandeur and color to your procession.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                <Music className="w-6 h-6 text-gold group-hover:text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-subheading text-lg uppercase tracking-widest mb-3">Flawless Harmony</h3>
              <p className="font-sans text-sm text-ivory/60 font-light leading-relaxed max-w-xs">
                Highly trained professionals delivering perfectly synchronized performances that keep the energy alive and the guests mesmerized.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                <Award className="w-6 h-6 text-gold group-hover:text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-subheading text-lg uppercase tracking-widest mb-3">Unwavering Reliability</h3>
              <p className="font-sans text-sm text-ivory/60 font-light leading-relaxed max-w-xs">
                Punctual, professional, and courteous. We handle the logistics of the Baraat so your family can focus purely on the celebration.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Visual Collage Section */}
      <section className="py-24 container mx-auto px-6">
      <FeaturedGallery />

      </section>
      <ContactCTA />
    </main>
  );
}