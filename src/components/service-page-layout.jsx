import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  AudioLines,
  Camera,
  CarFront,
  CheckCircle,
  Crown,
  Drum,
  Flower2,
  Headphones,
  Heart,
  Lightbulb,
  MapPin,
  MessageCircle,
  Mic2,
  Music2,
  Palette,
  PartyPopper,
  Phone,
  Shirt,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import FAQItem from "@/components/faq-item";

const featureIcons = {
  audio: AudioLines,
  camera: Camera,
  car: CarFront,
  crown: Crown,
  drum: Drum,
  flower: Flower2,
  heart: Heart,
  headphones: Headphones,
  lightbulb: Lightbulb,
  "map-pin": MapPin,
  microphone: Mic2,
  music: Music2,
  audio: AudioLines,
  palette: Palette,
  party: PartyPopper,
  shirt: Shirt,
  sparkles: Sparkles,
  star: Star,
  zap: Zap,
};

function FeatureIcon({ name, className = "h-5 w-5" }) {
  const Icon = featureIcons[name] || Music2;
  return <Icon className={className} aria-hidden="true" />;
}

// Reusable booking CTA section
export function BookingCTA({ service = "wedding band" }) {
  return (
    <section className="bg-gradient-to-br from-charcoal via-maroon/20 to-charcoal py-16 px-6 text-center border-t border-gold/20">
      <div className="max-w-2xl mx-auto">
        <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Book Now</p>
        <h2 className="font-heading text-4xl text-ivory mb-4">
          Check Your Baraat Date
        </h2>
        <p className="font-sans text-ivory/70 mb-8 font-light">
          Limited dates available for the wedding season. Check availability for your {service} in Agra now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20check%20availability%20for%20my%20wedding%20baraat."
            target="_blank"
            rel="noopener noreferrer"
            id="service-cta-whatsapp"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Check Availability on WhatsApp
          </a>
          <a
            href="tel:+919457500318"
            id="service-cta-call"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-ivory font-subheading uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            +91 94575 00318
          </a>
        </div>
      </div>
    </section>
  );
}

// Main service page layout
export default function ServicePageLayout({
  title,
  subtitle,
  description,
  heroLabel,
  features = [],
  whyChooseItems = [],
  faqs = [],
  relatedServices = [],
  breadcrumbs = [],
  service,
}) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-charcoal/50 px-10 py-3 mt-20 relative " aria-label="Breadcrumb">
        <div className="max-w-6xl">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-gold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-gold/15 bg-charcoal px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          quality={65}
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-35"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal" />
        <div className="absolute -right-24 top-0 -z-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-gold/35 bg-charcoal/55 px-4 py-2 backdrop-blur-sm sm:mb-6 sm:px-5">
            <span className="font-subheading text-xs uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-widest">{heroLabel || "Agra's Premier Wedding Band"}</span>
          </div>
          <h1 className="mb-5 font-heading text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.05] text-ivory sm:mb-6">
            {title}
            {subtitle && (
              <span className="mt-1 block text-gold italic">{subtitle}</span>
            )}
          </h1>
          <p className="mx-auto mb-7 max-w-2xl font-sans text-base font-light leading-relaxed text-ivory/80 sm:mb-8 sm:text-lg">
            {description}
          </p>
          <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20check%20availability%20for%20my%20wedding%20baraat."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-page-cta-whatsapp"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-6 py-4 font-subheading text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory sm:px-8"
            >
              <span>Check Your Baraat Date</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919457500318"
              id="hero-page-cta-call"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-gold/40 px-6 py-4 font-subheading text-sm uppercase tracking-widest text-ivory transition-colors hover:bg-gold/10 sm:px-8"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call Us
            </a>
          </div>
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-xs text-ivory/65 sm:mt-10 sm:gap-x-6 sm:text-sm">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
              4.9/5 Google Rating
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              250+ Weddings Served
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              Trusted Since 1980
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="p-6 border border-gold/20 rounded-sm bg-charcoal/20 hover:border-gold/40 transition-colors"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <FeatureIcon name={feat.icon} />
                  </div>
                  <h3 className="font-subheading text-gold tracking-wide text-sm uppercase mb-2">{feat.title}</h3>
                  <p className="font-sans text-ivory/70 text-sm leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseItems.length > 0 && (
        <section className="py-16 px-6 bg-charcoal/30 border-y border-gold/10">
          <div className="max-w-4xl mx-auto">
            <p className="font-subheading text-gold tracking-widest uppercase text-sm text-center mb-3">Why Families Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ivory text-center mb-12">
              Why Choose Shiv Mohan Band?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-charcoal/40 rounded-sm border border-gold/10">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-sans text-ivory font-medium mb-1">{item.title}</h3>
                    <p className="font-sans text-ivory/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA Mid-Page */}
      <BookingCTA service={service} />

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="font-subheading text-gold tracking-widest uppercase text-sm text-center mb-3">Have Questions?</p>
            <h2 className="font-heading text-3xl text-ivory text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-6 bg-charcoal/30 border-t border-gold/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-2xl text-ivory text-center mb-8">
              Explore More Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedServices.map((svc, i) => (
                <Link
                  key={i}
                  href={svc.href}
                  className="p-4 bg-charcoal/40 border border-gold/20 rounded-sm text-center hover:border-gold/60 hover:bg-charcoal/60 transition-all group"
                >
                  <div className="mb-2 flex justify-center text-gold">
                    <FeatureIcon name={svc.icon} />
                  </div>
                  <span className="font-sans text-ivory/80 text-sm group-hover:text-gold transition-colors">{svc.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <BookingCTA service={service} />
    </div>
  );
}
