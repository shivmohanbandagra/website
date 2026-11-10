import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import ReviewDirectoryLinks from "@/components/review-directory-links";

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
              Wedding band, live music and baraat services for celebrations in Agra and nearby areas.
            </p>
            <ReviewDirectoryLinks className="mt-3 flex flex-wrap gap-2" />
          </div>

          {/* 2. Services */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-ivory/70">
              <li><Link href="/wedding-band-agra/" className="hover:text-gold transition-colors">Wedding Band in Agra</Link></li>
              <li><Link href="/brass-band-agra/" className="hover:text-gold transition-colors">Brass Band in Agra</Link></li>
              <li><Link href="/punjabi-dhol-agra/" className="hover:text-gold transition-colors">Punjabi Dhol in Agra</Link></li>
              <li><Link href="/nashik-dhol-agra/" className="hover:text-gold transition-colors">Nashik Dhol in Agra</Link></li>
              <li><Link href="/baraat-services-agra/" className="hover:text-gold transition-colors">Baraat Services</Link></li>
              <li><Link href="/dj-on-wheels-agra/" className="hover:text-gold transition-colors">DJ on Wheels</Link></li>
              <li><Link href="/ghori-baggi-agra/" className="hover:text-gold transition-colors">Ghori &amp; Baggi</Link></li>
              <li><Link href="/vintage-car-rental-agra/" className="hover:text-gold transition-colors">Vintage Car Rental</Link></li>
              <li><Link href="/shehnai-player-agra/" className="hover:text-gold transition-colors">Shehnai Player</Link></li>
              <li><Link href="/wedding-decoration-agra/" className="hover:text-gold transition-colors">Wedding Decoration</Link></li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-ivory/70">
              <li><Link href="/about/" className="hover:text-gold transition-colors">About Shiv Mohan Band</Link></li>
              <li><Link href="/#gallery" className="hover:text-gold transition-colors">Photo Gallery</Link></li>
              <li><Link href="/faq/" className="hover:text-gold transition-colors">Wedding Band FAQ</Link></li>
              <li><Link href="/contact/" className="hover:text-gold transition-colors">Book Your Baraat Date</Link></li>
              <li><Link href="/dhol-player-agra/" className="hover:text-gold transition-colors">Dhol Player in Agra</Link></li>
              <li><Link href="/live-band-agra/" className="hover:text-gold transition-colors">Live Band in Agra</Link></li>
              <li><Link href="/wedding-band-agra-guide/" className="hover:text-gold transition-colors">Wedding Band Guide</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="flex flex-col">
            <h4 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-light">Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla, Agra, Uttar Pradesh 282007</span>
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
            &copy; {currentYear} Shiv Mohan Band and Events. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-ivory/40 font-light">
          </div>
        </div>

      </div>
    </footer>
  );
}