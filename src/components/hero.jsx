// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, MessageCircle } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// // Staggered animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.5,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

// // Lightweight floating particles component
// const FloatingParticles = () => {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     // Generate random starting positions only on client to avoid hydration mismatch
//     const newParticles = Array.from({ length: 20 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 3 + 1,
//       duration: Math.random() * 10 + 10,
//       delay: Math.random() * 5,
//     }));
//     setParticles(newParticles);
//   }, []);

//   return (
//     <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full bg-gold/60 blur-[1px]"
//           style={{
//             width: p.size,
//             height: p.size,
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//           }}
//           animate={{
//             y: ["0%", "-100%"],
//             x: ["0%", "20%", "-20%", "0%"],
//             opacity: [0, 0.8, 0],
//           }}
//           transition={{
//             duration: p.duration,
//             repeat: Infinity,
//             ease: "linear",
//             delay: p.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Hero() {
//   return (
//     <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-charcoal">
//       {/* 1. Cinematic Background Zoom */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.15 }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "linear",
//         }}
//       >
//         {/* Replace src with your actual premium photography */}
//         <Image
//           src="/images/hero.jpg"
//           alt="Royal Indian Baraat Celebration"
//           fill
//           priority
//           className="object-cover object-center opacity-40"
//         />
//       </motion.div>

//       {/* 2. Premium Overlays */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal/40 via-maroon/40 to-charcoal/90 mix-blend-multiply" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

//       {/* 3. Golden Embers */}
//       <FloatingParticles />

//       {/* 4. Content */}
//       <div className="container relative z-20 px-6 mx-auto text-center flex flex-col items-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-4xl mx-auto flex flex-col items-center"
//         >
//           {/* Glassmorphism Badge */}
//           <motion.div 
//             variants={itemVariants}
//             className="mb-8 px-6 py-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md"
//           >
//             <span className="font-subheading text-gold tracking-[0.2em] text-sm uppercase">
//               Agra&apos;s Premium Wedding Choice
//             </span>
//           </motion.div>

//           <motion.h1 
//             variants={itemVariants}
//             className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-6"
//           >
//             Making Royal Baraats <br className="hidden md:block" />
//             <span className="text-gold italic">Memorable Since 1980</span>
//           </motion.h1>

//           <motion.p 
//             variants={itemVariants}
//             className="font-sans text-lg md:text-xl text-ivory/80 max-w-2xl mb-12 font-light"
//           >
//             Trusted by generations of families across India for unforgettable, luxury wedding experiences.
//           </motion.p>

//           {/* CTA Group */}
// {/* CTA Group */}
// <motion.div 
//   variants={itemVariants}
//   className="flex flex-col sm:flex-row items-center gap-6"
// >
//   <a 
//     href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20am%20inquiring%20about%20a%20booking."
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="group relative px-8 py-4 bg-gold text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-ivory hover:text-gold flex items-center gap-3 overflow-hidden"
//   >
//     <span className="relative z-10 font-semibold">Book Your Date</span>
//     <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
//   </a>
  
//   <a 
//     href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20have%20a%20quick%20question."
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-ivory/20 text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-success/20 hover:border-success/50 hover:text-success flex items-center gap-3"
//   >
//     <MessageCircle className="w-4 h-4" />
//     <span>WhatsApp Us</span>
//   </a>
// </motion.div>
//         </motion.div>
//       </div>

//       {/* 5. Scroll Indicator */}
//       {/* <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
//       >
//         <span className="font-subheading text-gold/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
//         <div className="w-[1px] h-12 bg-gold/20 relative overflow-hidden">
//           <motion.div
//             className="absolute top-0 left-0 w-full h-1/2 bg-gold"
//             animate={{ y: ["-100%", "200%"] }}
//             transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
//           />
//         </div>
//       </motion.div> */}
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Portrait videos used in the desktop/tablet strips.
// Pulled from public/videos/ — swap/reorder freely, just keep them portrait.
// ---------------------------------------------------------------------------
const heroVideos = [
  "/videos/liveband.mp4",
  "/videos/nashikdhol.mp4",
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
  "/videos/7.mp4",
  "/videos/8.mp4",
  "/videos/9.mp4",
  "/videos/10.mp4",
  "/videos/11.mp4",
  "/videos/12.mp4",
  "/videos/13.mp4",
];

// Split into two alternating strips
const stripLeft = heroVideos.filter((_, i) => i % 2 === 0);
const stripRight = heroVideos.filter((_, i) => i % 2 === 1);

// Single source of truth for the gap between tiles — used by both the
// Tailwind class and the GSAP loop-height math so the seam is invisible.
const STRIP_GAP_PX = 16; // matches Tailwind's gap-4

// Staggered animation variants (shared)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Lightweight floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/60 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ["0%", "-100%"],
            x: ["0%", "20%", "-20%", "0%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// LazyVideo — fetches nothing until it scrolls near the strip's viewport,
// pauses the instant it scrolls out. No click handling — ambient only.
// ---------------------------------------------------------------------------
function LazyVideo({ src }) {
  const videoRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loadedRef.current) {
            el.src = src;
            el.load();
            loadedRef.current = true;
          }
          el.play().catch(() => {});
        } else if (loadedRef.current) {
          el.pause();
        }
      },
      { threshold: 0.1, rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      className="w-full aspect-[9/16] object-cover rounded-md bg-charcoal/40"
    />
  );
}

// ---------------------------------------------------------------------------
// VideoStrip — GSAP ticker drives a single `y` value per frame and wraps it
// with a modulo once it exceeds one loop's height. This is deliberately NOT
// a CSS keyframe animation: keyframes reset to their `from` value whenever a
// duration changes mid-flight, causing a visible jump on hover. Reading a
// ref every frame lets hover change speed instantly with zero jump and zero
// re-renders — the only state React manages here is the ref itself.
// ---------------------------------------------------------------------------
function VideoStrip({ videos, direction, isSlowRef }) {
  const stripRef = useRef(null);
  const loopHeightRef = useRef(0);
  const yRef = useRef(0);

  const looped = [...videos, ...videos]; // duplicate once for a seamless loop

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const measure = () => {
      // scrollHeight covers both copies; one loop is exactly half.
      loopHeightRef.current = el.scrollHeight / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    yRef.current = direction === "down" ? -loopHeightRef.current : 0;

    const BASE_SPEED = 120; // px per second at normal speed

    const tick = (_time, deltaTimeMs) => {
      if (prefersReducedMotion || !loopHeightRef.current) return;

      const dt = deltaTimeMs / 1000;
      const speedFactor = isSlowRef.current ? 0.15 : 1;
      const delta = BASE_SPEED * speedFactor * dt;

      if (direction === "up") {
        yRef.current -= delta;
        if (yRef.current <= -loopHeightRef.current) {
          yRef.current += loopHeightRef.current;
        }
      } else {
        yRef.current += delta;
        if (yRef.current >= 0) {
          yRef.current -= loopHeightRef.current;
        }
      }

      gsap.set(el, { y: yRef.current });
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      resizeObserver.disconnect();
    };
  }, [direction, isSlowRef]);

  return (
    <div
      ref={stripRef}
      className="flex flex-col will-change-transform"
      style={{ gap: `${STRIP_GAP_PX}px` }}
    >
      {looped.map((src, i) => (
        <div key={`${src}-${i}`} className="flex-shrink-0">
          <LazyVideo src={src} />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const isSlowRef = useRef(false);

  return (
    <section className="relative w-full min-h-screen bg-charcoal overflow-hidden">
      {/* =====================================================================
          MOBILE — unchanged from the original design
      ===================================================================== */}
      <div className="md:hidden relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Royal Indian Baraat Celebration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover object-center opacity-40"
          />
        </motion.div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal/40 via-maroon/40 to-charcoal/90 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

        <FloatingParticles />

        <div className="container relative z-20 px-6 mx-auto text-center flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 px-6 py-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md"
            >
              <span className="font-subheading text-ivory tracking-[0.2em] text-sm uppercase">
                Agra&apos;s Premium Wedding Choice
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-6"
            >
              Making Royal Baraats <br className="hidden md:block" />
              <span className="text-gold italic">Memorable Since 1980</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-lg md:text-xl text-ivory/80 max-w-2xl mb-12 font-light"
            >
              Trusted by generations of families across India for unforgettable, luxury wedding experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20am%20inquiring%20about%20a%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gold text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-ivory hover:text-gold flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 font-semibold">Book Your Date</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20have%20a%20quick%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-ivory/20 text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-success/20 hover:border-success/50 hover:text-success flex items-center gap-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          TABLET / DESKTOP — copy left, two infinite video strips right
      ===================================================================== */}
      <div className="hidden md:flex relative w-full min-h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-charcoal via-charcoal to-maroon/30" />
        <FloatingParticles />

        <div className="relative z-20 w-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT — Typography + CTAs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start text-left"
            >
              <motion.div
                variants={itemVariants}
                className="mb-8 px-6 py-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md"
              >
                <span className="font-subheading text-ivory tracking-[0.2em] text-sm uppercase">
                  Agra&apos;s Premium Wedding Choice
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-heading text-5xl lg:text-6xl xl:text-7xl text-ivory leading-tight mb-6"
              >
                Making Royal Baraats <br />
                <span className="text-gold italic">Memorable Since 1980</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-lg lg:text-xl text-ivory/80 max-w-lg mb-12 font-light"
              >
                Trusted by generations of families across India for unforgettable, luxury wedding experiences.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-6">
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20am%20inquiring%20about%20a%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gold text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-ivory hover:text-gold flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 font-semibold">Book Your Date</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20have%20a%20quick%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-ivory/20 text-ivory font-subheading uppercase tracking-widest text-sm transition-all hover:bg-success/20 hover:border-success/50 hover:text-success flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Two infinite vertical video strips */}
            <div
              className="relative h-[80vh] max-h-[820px] flex gap-4 lg:gap-6"
              onMouseEnter={() => {
                isSlowRef.current = true;
              }}
              onMouseLeave={() => {
                isSlowRef.current = false;
              }}
            >
              <div className="relative flex-1 h-full overflow-hidden rounded-lg [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <VideoStrip videos={stripLeft} direction="up" isSlowRef={isSlowRef} />
              </div>
              <div className="relative flex-1 h-full overflow-hidden rounded-lg [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <VideoStrip videos={stripRight} direction="down" isSlowRef={isSlowRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}