import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory pt-24 pb-12 border-t border-gold/20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand & Trust */}
          <div className="flex flex-col">
            <Link href="/" className="flex flex-col group mb-6 inline-block w-max">
              <span className="font-heading text-3xl tracking-wide text-ivory transition-colors">
                SHIV MOHAN
              </span>
              <span className="font-subheading text-gold text-[10px] tracking-[0.3em] uppercase mt-0.5 group-hover:text-gold/80 transition-colors">
                Band & Events
              </span>
            </Link>
            <p className="font-sans text-ivory/70 text-sm leading-relaxed mb-6 font-light max-w-xs">
              Making Royal Baraats memorable since 1980. The most trusted name for luxury wedding experiences across Agra and beyond.
            </p>
            
            {/* Google Reviews Trust Badge */}
            <div className="flex items-center gap-3 p-3 rounded-sm bg-white/5 border border-white/10 w-max">
              <div className="flex bg-white p-1 rounded-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" />
                  ))}
                </div>
                <span className="font-sans text-[10px] text-ivory/60 mt-0.5 block">
                  4.9/5 from 250+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-ivory/70">
              <li><Link href="/about-us" className="hover:text-gold transition-colors">Our Legacy</Link></li>
              <li><Link href="/#services" className="hover:text-gold transition-colors">Premium Services</Link></li>
              <li><Link href="/#gallery" className="hover:text-gold transition-colors">Featured Gallery</Link></li>
              <li><Link href="/#timeline" className="hover:text-gold transition-colors">How Booking Works</Link></li>
              <li><Link href="/#testimonials" className="hover:text-gold transition-colors">Client Stories</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-light">Shop No, 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla, Agra, Uttar Pradesh 282007</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919457500318" className="hover:text-gold transition-colors font-light">+91 94575 00318</a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:bookings@shivmohanband.com" className="hover:text-gold transition-colors font-light">bookings@shivmohanband.com</a>
              </li> */}
            </ul>
          </div>

          {/* 4. Working Hours & Social */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Hours</h4>
            <ul className="flex flex-col gap-2 font-sans text-sm text-ivory/70 font-light mb-8">
              <li className="flex justify-between border-b border-ivory/10 pb-2">
                <span>Daily</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pt-2 text-gold">
                <span>Event Support</span>
                <span>24/7 Available</span>
              </li>
            </ul>
{/* 
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div> */}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-ivory/40 font-light text-center md:text-left">
            &copy; {currentYear} Shiv Mohan Band & Events. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-ivory/40 font-light">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}