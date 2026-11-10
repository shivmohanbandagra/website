import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Shiv Mohan Band & Events | Agra Wedding Entertainment",
  description: "Learn about Shiv Mohan Band & Events, its listed wedding band and baraat services in Agra, and how to get in touch about your event.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/about/" },
  openGraph: {
    title: "About Shiv Mohan Band & Events | Agra",
    description: "Learn about the wedding band, live music and baraat services listed by Shiv Mohan Band & Events in Agra.",
    url: "https://www.shivmohanbandagra.com/about/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shiv Mohan Band & Events | Agra",
    description: "Learn about the wedding band and baraat services listed by Shiv Mohan Band & Events.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.shivmohanbandagra.com/about/" },
  ],
};

const services = [
  { name: "Wedding Band in Agra", href: "/wedding-band-agra/" },
  { name: "Brass Band in Agra", href: "/brass-band-agra/" },
  { name: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/" },
  { name: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/" },
  { name: "Shehnai Player in Agra", href: "/shehnai-player-agra/" },
  { name: "DJ on Wheels in Agra", href: "/dj-on-wheels-agra/" },
  { name: "Baraat Services in Agra", href: "/baraat-services-agra/" },
  { name: "Ghori & Baggi in Agra", href: "/ghori-baggi-agra/" },
  { name: "Vintage Car for Wedding", href: "/vintage-car-rental-agra/" },
  { name: "Wedding Decoration", href: "/wedding-decoration-agra/" },
  { name: "Live Band in Agra", href: "/live-band-agra/" },
  { name: "Dhol Player in Agra", href: "/dhol-player-agra/" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-background text-foreground min-h-screen">



        {/* Hero */}
        <section className="editorial-hero bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-20 px-6 text-center border-b border-gold/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-5 py-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md">
              <span className="font-subheading text-gold tracking-widest text-xs uppercase">Agra Wedding Entertainment</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-ivory mb-6">
              Shiv Mohan Band and Events<br />
              <span className="text-gold italic">Wedding Band &amp; Baraat Services</span>
            </h1>
            <p className="font-sans text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Shiv Mohan Band &amp; Events is based in Agra and lists wedding band, live music and baraat services for local celebrations. Contact the team to discuss your event requirements and confirm current availability.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Our Story</p>
              <h2 className="font-heading text-3xl text-ivory mb-6">A Legacy Built on Music, Trust & Royal Celebrations</h2>
              <div className="space-y-4 font-sans text-ivory/75 leading-relaxed">
                <p>
                  The business lists wedding band and baraat entertainment services in Agra, including brass band, Punjabi and Nashik Dhol, shehnai and DJ on Wheels. Families can ask about individual services or whether a combined arrangement is available for their date.
                </p>
                <p>
                  A baraat plan can include live musicians, percussion or recorded music. The suitable combination depends on the procession route, schedule, venue and the music the family wants.
                </p>
                <p>
                  Ask for a written quote showing the performers, event duration, travel or setup costs and booking terms. Reviewing these details makes it easier to compare providers on the same requirements.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gold/20 bg-charcoal/40 p-6">
                <h3 className="mb-2 font-heading text-xl text-ivory">Music options</h3>
                <p className="font-sans text-sm leading-relaxed text-ivory/65">Wedding band, brass band, Dhol, shehnai and live band services are listed for Agra events.</p>
              </div>
              <div className="border border-gold/20 bg-charcoal/40 p-6">
                <h3 className="mb-2 font-heading text-xl text-ivory">Baraat arrangements</h3>
                <p className="font-sans text-sm leading-relaxed text-ivory/65">Ask about DJ on Wheels, Ghori, Baggi, vintage cars and decoration for your event.</p>
              </div>
              <div className="border border-gold/20 bg-charcoal/40 p-6">
                <h3 className="mb-2 font-heading text-xl text-ivory">Booking information</h3>
                <p className="font-sans text-sm leading-relaxed text-ivory/65">Confirm availability, the service lineup, route, timing and full quote before booking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Entity Information — explicitly for AI/Google */}
        <section className="py-12 px-6 bg-charcoal/30 border-y border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl text-ivory mb-8 text-center">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Business Name</span>
                <span className="font-sans text-ivory">Shiv Mohan Band and Events</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Type</span>
                <span className="font-sans text-ivory">Wedding Band / Entertainment Service</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Location</span>
                <span className="font-sans text-ivory">Bodla, Agra, Uttar Pradesh 282007</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Phone</span>
                <a href="tel:+919457500318" className="font-sans text-ivory hover:text-gold transition-colors">+91 94575 00318</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Area Served</span>
                <span className="font-sans text-ivory">Agra, Uttar Pradesh & surrounding areas</span>
              </div>
            </div>
            <p className="font-sans text-ivory/50 text-xs mt-6 text-center">
              Full address: Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla, Agra, Uttar Pradesh 282007
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl text-ivory text-center mb-10">Our Services in Agra</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((svc) => (
              <Link key={svc.href} href={svc.href} className="p-4 bg-charcoal/30 border border-gold/20 rounded-sm hover:border-gold/50 hover:bg-charcoal/50 transition-all group text-center">
                <span className="font-sans text-ivory/80 text-sm group-hover:text-gold transition-colors">{svc.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-charcoal via-maroon/20 to-charcoal py-16 px-6 text-center border-t border-gold/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl text-ivory mb-4">Book Your Wedding Band in Agra</h2>
            <p className="font-sans text-ivory/70 mb-8">Join hundreds of Agra families who have trusted Shiv Mohan Band and Events for their royal baraat celebrations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20check%20availability%20for%20my%20wedding." target="_blank" rel="noopener noreferrer" id="about-cta-whatsapp" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
                <MessageCircle className="w-4 h-4" /> Check Availability
              </a>
              <Link href="/contact/" id="about-cta-contact" className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-ivory font-subheading uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors">
                <ArrowRight className="w-4 h-4 text-gold" /> Book Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
