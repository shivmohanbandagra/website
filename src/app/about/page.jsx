import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Shiv Mohan Band and Events — Our Legacy Since 1980 | Agra",
  description: "Learn about Shiv Mohan Band and Events — Agra's trusted wedding band since 1980. Our history, legacy, services and commitment to making every baraat a royal celebration.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/about/" },
  openGraph: {
    title: "About Shiv Mohan Band — Our Legacy Since 1980 | Agra",
    description: "Shiv Mohan Band and Events has been creating unforgettable wedding baraats in Agra since 1980. Discover our story.",
    url: "https://www.shivmohanbandagra.com/about/",
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
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-20 px-6 text-center border-b border-gold/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-5 py-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md">
              <span className="font-subheading text-gold tracking-widest text-xs uppercase">Trusted Since 1980</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-ivory mb-6">
              Shiv Mohan Band and Events<br />
              <span className="text-gold italic">Our Legacy Since 1980</span>
            </h1>
            <p className="font-sans text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              For over 45 years, Shiv Mohan Band and Events has been the most trusted name for wedding bands, baraat entertainment and royal wedding experiences in Agra, Uttar Pradesh. We are more than a wedding band — we are a tradition.
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
                  Shiv Mohan Band and Events was founded in 1980 in Agra, Uttar Pradesh. What began as a small wedding band has grown into one of Agra's most recognized and trusted names for wedding baraat entertainment, serving hundreds of families across the region over more than four decades.
                </p>
                <p>
                  Our team of experienced musicians, performers and event specialists have dedicated themselves to one goal: making every baraat a royal, unforgettable celebration. From the thundering beats of Punjabi Dhol and Nashik Dhol to the soul-stirring melody of shehnai, every performance is crafted with passion and professionalism.
                </p>
                <p>
                  We have been trusted by generations of Agra families — parents who booked us for their own weddings have returned to book us for their children's weddings. That continuity of trust is our greatest achievement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "45+", label: "Years of Experience" },
                { number: "250+", label: "Google Reviews" },
                { number: "4.9★", label: "Average Rating" },
                { number: "12+", label: "Services Offered" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-charcoal/40 border border-gold/20 rounded-sm text-center">
                  <div className="font-heading text-3xl text-gold mb-2">{stat.number}</div>
                  <div className="font-sans text-ivory/60 text-sm">{stat.label}</div>
                </div>
              ))}
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
                <span className="font-subheading text-gold tracking-widest uppercase text-xs">Established</span>
                <span className="font-sans text-ivory">1980</span>
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
