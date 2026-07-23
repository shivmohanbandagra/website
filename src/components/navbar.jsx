// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
// import { Menu, X, Phone, MessageCircle } from "lucide-react";
// import ThemeToggle from "./theme-toggle";



// const navLinks = [
//   { name: "About", href: "/about-us" },
//   { name: "Services", href: "/#services" },
//   { name: "Gallery", href: "/#gallery" },
//   { name: "Experience", href: "/#timeline" },
//   { name: "Testimonials", href: "/#testimonials" },
//   { name: "Contact", href: "/#contact-us" },
// ];



// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { scrollY } = useScroll();
//   const pathname = usePathname();

//   // Check if we are on the home page
//   const isHomePage = pathname === "/";

//   // Trigger glassmorphism state on scroll
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50);
//   });

//   // Dynamic Navbar Styling based on scroll and current route
//   const navbarBg = !isHomePage || isScrolled
//     ? "bg-background/80 backdrop-blur-xl border-b border-gold/10 py-4 shadow-sm"
//     : "bg-transparent border-b border-transparent py-6";

//   const textColor = !isHomePage || isScrolled || mobileMenuOpen
//     ? "text-foreground"
//     : "text-ivory";

//   const navLinkColor = !isHomePage || isScrolled
//     ? "text-foreground/80"
//     : "text-ivory/90";

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
          
//           {/* Logo */}
//           <Link href="/" className="flex flex-col relative z-50 group" onClick={() => setMobileMenuOpen(false)}>
//             <span className={`font-heading text-2xl md:text-3xl tracking-wide transition-colors duration-500 ${textColor}`}>
//               SHIV MOHAN
//             </span>
//             <span className="font-subheading text-gold text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-0.5 group-hover:text-gold/80 transition-colors">
//               Band & Events
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 href={link.href}
//                 className={`font-subheading text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold relative group ${navLinkColor}`}
//               >
//                 {link.name}
//                 <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA & Theme Toggle */}
//           <div className="hidden md:flex items-center gap-6">
//             <ThemeToggle />
//            <a 
//   href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className={`flex items-center gap-2 font-subheading text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor}`}
// >
//   <MessageCircle className="w-4 h-4 text-gold" />
//   <span>WhatsApp Us</span>
// </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden relative z-50 p-2 -mr-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6 text-foreground transition-colors" />
//             ) : (
//               <Menu className={`w-6 h-6 transition-colors duration-500 ${textColor}`} />
//             )}
//           </button>
//         </div>
//       </motion.header>

//       {/* Mobile Fullscreen Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: "-100%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "-100%" }}
//             transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-20"
//           >
//             <nav className="flex flex-col items-center gap-8 w-full px-6">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
//                 >
//                   <Link 
//                     href={link.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="font-heading text-3xl text-foreground hover:text-gold transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
              
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className="mt-8 w-full max-w-xs border-t border-gold/20 pt-8 flex flex-col items-center gap-4"
//               >
//                 <span className="font-subheading text-gold tracking-widest uppercase text-xs">Get in touch</span>
//                 <a 
//   href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!"
//   target="_blank" 
//   rel="noopener noreferrer"
//   onClick={() => setMobileMenuOpen(false)}
//   className="px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm w-full text-center block"
// >
//   Book Now
// </a>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import ThemeToggle from "./theme-toggle";



const navLinks = [
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Experience", href: "/#timeline" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact-us" },
];



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Check if we are on the home page
  const isHomePage = pathname === "/";

  // Trigger glassmorphism state on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Dynamic Navbar Styling based on scroll and current route
  const navbarBg = !isHomePage || isScrolled
    ? "bg-background/80 backdrop-blur-xl border-b border-gold/10 py-4 shadow-sm"
    : "bg-transparent border-b border-transparent py-6";

  const textColor = !isHomePage || isScrolled || mobileMenuOpen
    ? "text-foreground"
    : "text-ivory";

  const navLinkColor = !isHomePage || isScrolled
    ? "text-foreground/80"
    : "text-ivory/90";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col relative z-50 group shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <span className={`font-heading text-xl sm:text-2xl lg:text-3xl tracking-wide whitespace-nowrap transition-colors duration-500 ${textColor}`}>
              SHIV MOHAN
            </span>
            <span className="font-subheading text-gold text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.3em] uppercase mt-0.5 whitespace-nowrap group-hover:text-gold/80 transition-colors">
              Band & Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-subheading text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-gold relative group ${navLinkColor}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <ThemeToggle />
            <a
              href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-subheading text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-gold ${textColor}`}
            >
              <MessageCircle className="w-4 h-4 text-gold shrink-0" />
              <span className="hidden xl:inline">WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground transition-colors" />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-500 ${textColor}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-20 overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-6 sm:gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-2xl sm:text-3xl text-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 sm:mt-8 w-full max-w-xs border-t border-gold/20 pt-8 flex flex-col items-center gap-4"
              >
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Get in touch</span>
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm w-full text-center block"
                >
                  Book Now
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}