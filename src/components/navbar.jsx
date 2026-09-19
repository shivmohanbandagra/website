"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Wedding Band", href: "/wedding-band-agra/" },
  { name: "Services", href: "/baraat-services-agra/" },
  { name: "Blog", href: "/blog/" },
  { name: "FAQ", href: "/faq/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const navBg = scrolled
    ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gold/10"
    : "bg-transparent";

  const textColor = scrolled ? "text-ivory" : "text-ivory";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18 lg:h-20">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 relative z-50 group shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-11 w-11 shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Shiv Mohan Band and Events — Wedding Band Agra"
              fill
              sizes="44px"
              className="object-contain rounded-sm"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading text-lg sm:text-xl lg:text-2xl tracking-wide whitespace-nowrap transition-colors duration-500 ${textColor}`}
            >
              SHIV MOHAN
            </span>
            <span className="font-subheading text-gold text-[7px] sm:text-[8px] lg:text-[9px] tracking-[0.25em] uppercase mt-0.5 whitespace-nowrap">
              Band &amp; Events — Since 1980
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-subheading text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold relative group ${
                  isActive ? "text-gold" : textColor
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <a
            href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20book%20for%20my%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-cta-whatsapp"
            className="flex items-center gap-2 font-subheading text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-gold text-ivory"
          >
            <MessageCircle className="w-4 h-4 text-gold shrink-0" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2 text-ivory hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-16 sm:top-18 bg-charcoal/98 backdrop-blur-xl z-40 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-heading text-3xl sm:text-4xl transition-colors duration-200 hover:text-gold ${
                        isActive ? "text-gold" : "text-ivory"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-4"
              >
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20book%20for%20my%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-nav-cta-whatsapp"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm font-semibold hover:bg-ivory transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
