import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Complete Guide to Hiring a Wedding Band in Agra | Shiv Mohan Band",
  description: "Everything you need to know before hiring a wedding band in Agra. Band types, pricing, booking timeline, Punjabi Dhol vs Nashik Dhol, DJ vs live band — complete guide by Shiv Mohan Band and Events.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/wedding-band-agra-guide/" },
  openGraph: {
    title: "Complete Guide to Hiring a Wedding Band in Agra",
    description: "Complete guide to wedding bands, baraat services, dhol, DJ and booking in Agra. Expert advice from Shiv Mohan Band and Events since 1980.",
    url: "https://www.shivmohanbandagra.com/wedding-band-agra-guide/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Band Guide", item: "https://www.shivmohanbandagra.com/wedding-band-agra-guide/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Guide to Hiring a Wedding Band in Agra",
  description: "Everything you need to know before hiring a wedding band in Agra — band types, dhol options, DJ vs live band, booking timeline and pricing.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/wedding-band-agra-guide/" },
  datePublished: "2026-09-01",
  dateModified: new Date().toISOString().split("T")[0],
};

export default function WeddingBandGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen">

        {/* Breadcrumb */}
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Wedding Band Guide</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Expert Guide</p>
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-4 leading-tight">
              Complete Guide to Hiring a<br />
              <span className="text-gold italic">Wedding Band in Agra</span>
            </h1>
            <p className="font-sans text-ivory/70 font-light leading-relaxed">
              Everything you need to know before booking a wedding band in Agra — band types, dhol options, pricing, booking timelines and how to choose the right package for your baraat. By Shiv Mohan Band and Events, Agra since 1980.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose-custom">
            <div className="space-y-12 font-sans text-ivory/80 leading-relaxed">

              {/* Section 1 */}
              <section>
                <h2 className="font-heading text-3xl text-ivory mb-4">What Does a Wedding Band in Agra Include?</h2>
                <p className="mb-4">A wedding band for a baraat typically combines several elements to create a complete celebratory experience. When most people in Agra say "wedding band," they mean a live brass band — a group of musicians playing brass instruments (trumpets, trombones, tubas) and percussion that leads the baraat procession.</p>
                <p className="mb-4">A complete wedding band package from Shiv Mohan Band and Events in Agra can include:</p>
                <ul className="space-y-2 mb-4">
                  {["Live brass band with 15–30 musicians", "Punjabi Dhol player(s) for high-energy beats", "Nashik Dhol group (4–12 players) for synchronized power", "Shehnai player for traditional, auspicious melodies", "DJ on wheels with professional sound system", "Decorative lighting and LED effects", "Floral chattar (flower umbrella)", "Ghori — decorated horse for the groom", "Baggi — horse-drawn carriage", "Vintage cars for the wedding entry"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Not every wedding needs all of these — the right combination depends on your venue, baraat size, budget and personal preferences.</p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-heading text-3xl text-ivory mb-4">Wedding Band vs DJ for Baraat — What to Choose?</h2>
                <p className="mb-4">One of the most common questions families in Agra ask is whether to go with a live wedding band, DJ on wheels, or both for their baraat.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-5 bg-charcoal/30 border border-gold/20 rounded-sm">
                    <h3 className="font-subheading text-gold text-sm tracking-widest uppercase mb-3">Live Wedding Band</h3>
                    <ul className="space-y-2 text-sm">
                      {["Authentic, traditional baraat experience", "Visual spectacle — uniformed musicians", "Traditional + folk music", "Auspicious and ceremonially appropriate", "Preferred for more traditional families"].map(p => <li key={p} className="flex items-start gap-2"><span className="text-gold mt-1">✓</span><span>{p}</span></li>)}
                    </ul>
                  </div>
                  <div className="p-5 bg-charcoal/30 border border-gold/20 rounded-sm">
                    <h3 className="font-subheading text-gold text-sm tracking-widest uppercase mb-3">DJ on Wheels</h3>
                    <ul className="space-y-2 text-sm">
                      {["Modern Bollywood hits", "Non-stop music from a playlist", "Highly customizable song selection", "Better for dance-heavy baraats", "Works well alongside live band"].map(p => <li key={p} className="flex items-start gap-2"><span className="text-gold mt-1">✓</span><span>{p}</span></li>)}
                    </ul>
                  </div>
                </div>
                <p className="font-medium text-ivory">Our recommendation: The best baraats in Agra combine both — a live band leading the procession with the DJ energizing it. The live band creates the ceremonial atmosphere while the DJ keeps the energy high with Bollywood hits.</p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-heading text-3xl text-ivory mb-4">Punjabi Dhol vs Nashik Dhol — Which is Right for Your Baraat?</h2>
                <p className="mb-4">Both Punjabi Dhol and Nashik Dhol are extremely popular for wedding baraats in Agra. Here's how they differ:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm mb-4">
                    <thead>
                      <tr className="border-b border-gold/20">
                        <th className="text-left py-3 px-4 font-subheading text-gold tracking-wide text-xs uppercase">Feature</th>
                        <th className="text-left py-3 px-4 font-subheading text-gold tracking-wide text-xs uppercase">Punjabi Dhol</th>
                        <th className="text-left py-3 px-4 font-subheading text-gold tracking-wide text-xs uppercase">Nashik Dhol</th>
                      </tr>
                    </thead>
                    <tbody className="text-ivory/70">
                      {[
                        ["Origin", "Punjab", "Maharashtra (Nashik)"],
                        ["Players", "1–2 players", "4–12 players (group)"],
                        ["Sound", "Deep, booming, folk", "Powerful, synchronized"],
                        ["Visual Impact", "Moderate", "Very high (group performance)"],
                        ["Best For", "Folk dance, Bhangra energy", "Spectacular visual performance"],
                        ["Style", "Individual/traditional", "Group/synchronized"],
                      ].map(([feat, p, n]) => (
                        <tr key={feat} className="border-b border-gold/10">
                          <td className="py-3 px-4 font-medium text-ivory/90">{feat}</td>
                          <td className="py-3 px-4">{p}</td>
                          <td className="py-3 px-4">{n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>Shiv Mohan Band and Events provides both Punjabi Dhol and Nashik Dhol for wedding baraats in Agra. Many families choose a combination of both for maximum impact.</p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-heading text-3xl text-ivory mb-4">How Early Should You Book a Wedding Band in Agra?</h2>
                <p className="mb-4">This is extremely important. Wedding band availability in Agra — especially during peak season — is limited. Popular bands book up months in advance. Here's what we recommend:</p>
                <div className="space-y-3 my-6">
                  {[
                    { timeline: "6+ months ahead", advice: "Ideal for peak season (November–February, May–June). Book as early as possible to secure your exact date." },
                    { timeline: "3–6 months ahead", advice: "Good window for most dates. Contact us early to check availability and lock in your package." },
                    { timeline: "1–3 months ahead", advice: "Possible but limited options may be available. Some dates may already be taken during peak season." },
                    { timeline: "Less than 1 month", advice: "Urgent booking — contact us immediately on WhatsApp. We will do our best to accommodate last-minute requests." },
                  ].map((item) => (
                    <div key={item.timeline} className="flex items-start gap-4 p-4 bg-charcoal/20 border border-gold/10 rounded-sm">
                      <span className="font-subheading text-gold text-xs tracking-widest uppercase shrink-0 mt-0.5">{item.timeline}</span>
                      <p className="text-sm">{item.advice}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-heading text-3xl text-ivory mb-4">How to Choose the Right Wedding Band Package in Agra</h2>
                <p className="mb-4">When choosing your wedding band package in Agra, consider these factors:</p>
                <div className="space-y-4">
                  {[
                    { title: "1. Baraat Size & Route", desc: "Larger baraats with longer procession routes benefit from bigger band setups with more musicians, dhol groups and DJ support." },
                    { title: "2. Venue & Logistics", desc: "Consider the road width, distance from venue to mandap, and whether a horse/vintage car can navigate the route." },
                    { title: "3. Musical Preferences", desc: "Traditional families may prefer a brass band with shehnai, while families wanting high energy may want Nashik Dhol + DJ combination." },
                    { title: "4. Budget", desc: "Packages can be customized based on budget. Contact us to discuss what's possible within your range." },
                    { title: "5. Experience & Reviews", desc: "Choose a band with proven experience, genuine reviews and a track record in Agra. Shiv Mohan Band has 250+ Google reviews and 4.9★ rating." },
                  ].map((item) => (
                    <div key={item.title} className="p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                      <h3 className="font-sans text-ivory font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-ivory/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* About Shiv Mohan Band */}
              <section className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm">
                <h2 className="font-heading text-2xl text-ivory mb-4">About Shiv Mohan Band and Events</h2>
                <p className="mb-4">Shiv Mohan Band and Events is a wedding band and baraat entertainment service based in Agra, Uttar Pradesh. We have been providing wedding bands, brass bands, Punjabi Dhol, Nashik Dhol, shehnai, DJ services, live music, vintage cars and royal baraat arrangements in Agra since 1980.</p>
                <p className="mb-6">Located at Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla, Agra, UP 282007. Phone: +91 94575 00318.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/919457500318?text=Hello!%20I%20read%20your%20wedding%20band%20guide%20and%20want%20to%20book%20for%20my%20wedding%20in%20Agra." target="_blank" rel="noopener noreferrer" id="guide-cta-whatsapp" className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
                    <MessageCircle className="w-4 h-4" /> Check Your Baraat Date
                  </a>
                  <Link href="/wedding-band-agra/" className="inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-ivory font-subheading uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gold" /> View Wedding Band Services
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* Related Links */}
        <section className="py-12 px-6 bg-charcoal/30 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl text-ivory mb-6 text-center">Explore More</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Wedding Band", href: "/wedding-band-agra/" },
                { label: "Brass Band", href: "/brass-band-agra/" },
                { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/" },
                { label: "Nashik Dhol", href: "/nashik-dhol-agra/" },
                { label: "DJ on Wheels", href: "/dj-on-wheels-agra/" },
                { label: "Baraat Services", href: "/baraat-services-agra/" },
                { label: "FAQ", href: "/faq/" },
                { label: "Contact Us", href: "/contact/" },
              ].map(link => (
                <Link key={link.href} href={link.href} className="p-3 bg-charcoal/40 border border-gold/20 rounded-sm text-center hover:border-gold/50 transition-colors group">
                  <span className="font-sans text-ivory/80 text-sm group-hover:text-gold transition-colors">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
