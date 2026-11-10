import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "How to Choose a Wedding Band in Agra | 5 Booking Factors",
  description: "Five practical factors to compare when choosing a wedding band in Agra: event experience, public feedback, service options, date availability and booking flexibility.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/" },
  openGraph: {
    title: "How to Choose a Wedding Band in Agra: 5 Booking Factors",
    url: "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a Wedding Band in Agra: 5 Booking Factors",
  description: "Five practical factors to compare when choosing a wedding band in Agra: event experience, public feedback, service options, date availability and booking flexibility.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/" },
  datePublished: "2026-08-15",
};

const factors = [
  {
    num: "01",
    title: "Experience & Track Record",
    body: "Ask each wedding band how long it has performed in Agra and whether it can share relevant, recent event examples. Confirm how the proposed ensemble and route plan fit your venue and family preferences rather than relying on a general claim of experience.",
    tip: "Ask: How many years have you been performing in Agra? Can you share references from recent weddings?",
  },
  {
    num: "02",
    title: "Google Reviews & Ratings",
    body: "Read recent reviews on each provider's public profile. Look for detailed comments about the service, communication and event-day coordination you need, and consider how recent and relevant the feedback is.",
    tip: "Check Google Maps reviews for 'Shiv Mohan Band Agra' to see genuine customer feedback.",
  },
  {
    num: "03",
    title: "Range of Services",
    body: "Services vary by provider. Ask whether you can book brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ on wheels, ghori, baggi, vintage cars or baraat decoration together, and clarify which team is responsible for coordinating them.",
    tip: "Ask for a complete service list and whether all services can be combined in one package.",
  },
  {
    num: "04",
    title: "Availability for Your Date",
    body: "Availability depends on the provider and your date. Contact shortlisted providers early, particularly for popular wedding dates, and ask whether a date hold or deposit is required.",
    tip: "Share your event date, venue and expected timings when you first enquire.",
  },
  {
    num: "05",
    title: "Customization & Flexibility",
    body: "Every wedding is different. Ask how the band handles song requests, event timing and package changes, and confirm any agreed customization in writing.",
    tip: "Ask: Can I customize my package? Can you perform specific song requests? How flexible are you with timing?",
  },
];

export default function BestWeddingBandAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen pt-16 sm:pt-20">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Choosing a Wedding Band</span></li>
            </ol>
          </div>
        </nav>

        <section className="editorial-hero bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Tips</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              How to Choose a Wedding Band in Agra
            </h1>
            <p className="font-sans text-ivory/70 font-light">5 key factors — from the experts at Shiv Mohan Band and Events, Agra</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto space-y-8">
          <p className="font-sans text-ivory/80 text-lg leading-relaxed">
            Choosing the right wedding band for your baraat in Agra is one of the most important wedding decisions you&apos;ll make. The band sets the energy, atmosphere and memories of the baraat procession. Here are the 5 key factors to evaluate before booking.
          </p>

          <div className="space-y-6">
            {factors.map((f) => (
              <div key={f.num} className="p-6 bg-charcoal/20 border border-gold/10 rounded-sm">
                <div className="flex items-start gap-4">
                  <span className="font-heading text-2xl text-gold/40 shrink-0">{f.num}</span>
                  <div className="flex-grow">
                    <h2 className="font-heading text-xl text-ivory mb-3">{f.title}</h2>
                    <p className="font-sans text-ivory/70 text-sm leading-relaxed mb-4">{f.body}</p>
                    <div className="p-3 bg-gold/10 border border-gold/20 rounded-sm">
                      <p className="font-sans text-gold text-xs italic">{f.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
            <h2 className="font-heading text-2xl text-ivory mb-3">Why Choose Shiv Mohan Band?</h2>
            <p className="font-sans text-ivory/70 mb-6">Shiv Mohan Band and Events lists wedding band, brass band, Dhol, DJ and other baraat services in Agra. Ask about current availability, the proposed lineup and written booking terms to decide whether the service fits your event.</p>
            <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20enquire%20about%20wedding%20band%20services%20in%20Agra." target="_blank" rel="noopener noreferrer" id="best-band-blog-cta" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
              <MessageCircle className="w-4 h-4" /> Check Availability Now
            </a>
          </div>

          <div>
            <h2 className="font-heading text-xl text-ivory mb-4">Explore Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Wedding Band in Agra", href: "/wedding-band-agra/" },
                { label: "Brass Band in Agra", href: "/brass-band-agra/" },
                { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/" },
                { label: "Baraat Services", href: "/baraat-services-agra/" },
                { label: "FAQ", href: "/faq/" },
                { label: "Contact Us", href: "/contact/" },
              ].map(link => (
                <Link key={link.href} href={link.href} className="p-3 bg-charcoal/30 border border-gold/20 rounded-sm hover:border-gold/50 transition-colors font-sans text-ivory/80 text-sm hover:text-gold">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
