import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "When to Book a Wedding Band in Agra — Complete Booking Timeline",
  description: "How early to book your wedding band, dhol and baraat services in Agra. Peak season guide, off-season tips and what happens if you book last minute. By Shiv Mohan Band.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/wedding-band-booking-timeline/" },
  openGraph: {
    title: "When to Book a Wedding Band in Agra — Booking Timeline Guide",
    url: "https://www.shivmohanbandagra.com/blog/wedding-band-booking-timeline/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When Should You Book a Wedding Band in Agra? The Complete Timeline",
  description: "How early to book your wedding band, dhol and baraat services in Agra — peak season, off-season and last-minute booking guide.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/wedding-band-booking-timeline/" },
  datePublished: "2026-07-20",
};

const seasons = [
  {
    season: "Peak Season: November – February",
    emoji: "❄️",
    desc: "This is the busiest wedding season in Agra and North India. Auspicious muhurats fall frequently in these months, and most families prefer cooler weather for outdoor baraats. Wedding bands, dhol groups and all baraat services book up very quickly during this period.",
    advice: "Book 6+ months in advance for peak season dates. For November–December weddings, try to confirm your band by May–June at the latest.",
    urgency: "high",
  },
  {
    season: "Second Peak: May – June (Summer)",
    emoji: "☀️",
    desc: "Despite the summer heat, May and June have many auspicious wedding dates and are popular for weddings. Demand for wedding bands is high, especially around akha teej and other major wedding muhurats.",
    advice: "Book 4–6 months in advance. For summer weddings, December–January is a good time to start reaching out.",
    urgency: "high",
  },
  {
    season: "Moderate Season: August – October",
    emoji: "🌧️",
    desc: "Post-monsoon months tend to have fewer weddings in North India, but auspicious dates do occur. Demand is moderate and you may have more flexibility in booking.",
    advice: "Book 2–4 months in advance. More options are typically available.",
    urgency: "medium",
  },
  {
    season: "Off Season: March – April & July",
    emoji: "🌿",
    desc: "These months have fewer auspicious wedding muhurats and see lower booking demand. However, this is an excellent time to plan future weddings and lock in preferred vendors for upcoming peak season dates.",
    advice: "Even in off-season, confirm your band early. Use this time to finalize your baraat package and preferences.",
    urgency: "low",
  },
];

export default function WeddingBandBookingTimelinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Booking Timeline</span></li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Planning Guide</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              When Should You Book a Wedding Band in Agra?
            </h1>
            <p className="font-sans text-ivory/70 font-light">The complete booking timeline — by Shiv Mohan Band and Events, Agra since 1980</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto space-y-8 font-sans text-ivory/80 leading-relaxed">
          <p className="text-lg">
            One of the most common mistakes families make when planning a wedding in Agra is booking their wedding band too late. Agra has many excellent wedding bands — but the best ones book up months in advance, especially during peak wedding season. Here's everything you need to know about when to book.
          </p>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-6">Wedding Season Calendar in Agra</h2>
            <div className="space-y-4">
              {seasons.map((s) => {
                const border = s.urgency === "high" ? "border-red-500/30" : s.urgency === "medium" ? "border-yellow-500/30" : "border-green-500/30";
                const badge = s.urgency === "high" ? "bg-red-500/20 text-red-300" : s.urgency === "medium" ? "bg-yellow-500/20 text-yellow-300" : "bg-green-500/20 text-green-300";
                const badgeText = s.urgency === "high" ? "Book ASAP" : s.urgency === "medium" ? "Book Early" : "Flexible";
                return (
                  <div key={s.season} className={`p-6 bg-charcoal/20 border ${border} rounded-sm`}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-sans text-ivory font-semibold">{s.emoji} {s.season}</h3>
                      <span className={`font-subheading text-xs tracking-widest uppercase px-2 py-1 rounded-full ${badge} shrink-0`}>{badgeText}</span>
                    </div>
                    <p className="text-sm text-ivory/70 mb-3">{s.desc}</p>
                    <p className="text-sm text-gold italic">{s.advice}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">What Happens if You Book Late?</h2>
            <p className="mb-4">If you book a wedding band in Agra too late, you may face:</p>
            <ul className="space-y-2 mb-4">
              {["Your preferred date may already be taken by another wedding", "Fewer options available — you may have to settle for a less experienced band", "Less time to customize your package and song requests", "Difficulty coordinating multiple services (band, dhol, DJ, ghori) at short notice", "Potential price increases for last-minute bookings"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 mt-1 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>The solution is simple: <strong className="text-ivory">book early, confirm your date, and secure your package</strong>. If your wedding date isn't fixed yet, reach out to discuss tentative availability and put your requirements on record.</p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">The Recommended Booking Timeline</h2>
            <div className="space-y-3">
              {[
                { time: "6–12 months before", action: "First contact, discuss requirements, check tentative availability" },
                { time: "4–6 months before", action: "Confirm date, finalize package, make booking deposit" },
                { time: "2–3 months before", action: "Finalize song list, share venue details, confirm logistics" },
                { time: "1 month before", action: "Final briefing, confirm timing, route and special requests" },
                { time: "1 week before", action: "Reconfirm all details, share schedule and any last changes" },
                { time: "Wedding day", action: "Shiv Mohan Band arrives at agreed time, fully prepared" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-charcoal/20 border border-gold/10 rounded-sm">
                  <span className="font-subheading text-gold text-xs tracking-widest uppercase shrink-0 mt-0.5 w-32">{item.time}</span>
                  <p className="text-sm text-ivory/70">{item.action}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
            <h2 className="font-heading text-2xl text-ivory mb-3">Check Your Date Availability Now</h2>
            <p className="text-ivory/70 mb-6">Don't wait. Check availability for your wedding date with Shiv Mohan Band and Events today. We respond quickly on WhatsApp.</p>
            <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20check%20availability%20for%20my%20wedding%20date%20in%20Agra.%20Date%3A%20[your%20date]" target="_blank" rel="noopener noreferrer" id="timeline-blog-cta" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
              <MessageCircle className="w-4 h-4" /> Check Your Baraat Date
            </a>
          </div>

          <div>
            <h2 className="font-heading text-xl text-ivory mb-4">More Guides</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "How to Plan a Baraat in Agra", href: "/blog/how-to-plan-baraat-in-agra/" },
                { label: "Best Wedding Band in Agra", href: "/blog/best-wedding-band-in-agra/" },
                { label: "Wedding Band FAQ", href: "/faq/" },
                { label: "Contact & Booking", href: "/contact/" },
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
