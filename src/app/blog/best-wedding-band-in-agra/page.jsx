import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "How to Choose the Best Wedding Band in Agra — 5 Key Factors",
  description: "5 key factors to consider when choosing a wedding band in Agra — experience, reviews, service range, availability and customization. Expert advice from Shiv Mohan Band and Events.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/" },
  openGraph: {
    title: "How to Choose the Best Wedding Band in Agra",
    url: "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Best Wedding Band in Agra for Your Baraat",
  description: "5 key factors to evaluate when choosing the best wedding band in Agra — experience, reviews, service range, availability and customization.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/best-wedding-band-in-agra/" },
  datePublished: "2026-08-15",
};

const factors = [
  {
    num: "01",
    title: "Experience & Track Record",
    body: "Look for a wedding band in Agra with a proven, long-standing track record. How many years have they been in business? Have they performed at weddings across Agra? A band that has been serving Agra families for decades — like Shiv Mohan Band since 1980 — has the experience to handle any situation, any venue and any family preference.",
    tip: "Ask: How many years have you been performing in Agra? Can you share references from recent weddings?",
  },
  {
    num: "02",
    title: "Google Reviews & Ratings",
    body: "Before booking any wedding band in Agra, check their Google Business Profile reviews. Look for: overall star rating (4.5+ is excellent), number of reviews (more reviews = more trust), recency of reviews, and specific mentions of the band's performance and professionalism. Shiv Mohan Band has 250+ Google reviews with a 4.9★ rating.",
    tip: "Check Google Maps reviews for 'Shiv Mohan Band Agra' to see genuine customer feedback.",
  },
  {
    num: "03",
    title: "Range of Services",
    body: "The best wedding bands in Agra offer a complete range of baraat services under one roof — wedding band, brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ on wheels, ghori, baggi, vintage cars and baraat decoration. Booking everything from one trusted vendor simplifies coordination and reduces risk.",
    tip: "Ask for a complete service list and whether all services can be combined in one package.",
  },
  {
    num: "04",
    title: "Availability for Your Date",
    body: "The best wedding bands in Agra book up quickly — especially during peak wedding season (November to February and May to June). After shortlisting your options, check availability for your specific date immediately. Availability is often the deciding factor during peak season.",
    tip: "Book 3–6 months in advance. During peak season, good bands book up even earlier.",
  },
  {
    num: "05",
    title: "Customization & Flexibility",
    body: "Every wedding is different. The best wedding band for your baraat in Agra will listen to your preferences, accommodate song requests, work with your timeline and customize the package based on your needs and budget. Ask whether they can create a custom package combining exactly the services you need.",
    tip: "Ask: Can I customize my package? Can you perform specific song requests? How flexible are you with timing?",
  },
];

export default function BestWeddingBandAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Best Wedding Band in Agra</span></li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Tips</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              How to Choose the Best Wedding Band in Agra
            </h1>
            <p className="font-sans text-ivory/70 font-light">5 key factors — from the experts at Shiv Mohan Band and Events, Agra</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto space-y-8">
          <p className="font-sans text-ivory/80 text-lg leading-relaxed">
            Choosing the right wedding band for your baraat in Agra is one of the most important wedding decisions you'll make. The band sets the energy, atmosphere and memories of the baraat procession. Here are the 5 key factors to evaluate before booking.
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
            <p className="font-sans text-ivory/70 mb-6">Shiv Mohan Band and Events checks all 5 boxes: 45+ years experience, 250+ 5-star Google reviews, complete range of baraat services, quick availability confirmation, and fully customizable packages. Based in Agra since 1980.</p>
            <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20book%20the%20best%20wedding%20band%20in%20Agra%20for%20my%20wedding." target="_blank" rel="noopener noreferrer" id="best-band-blog-cta" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
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
