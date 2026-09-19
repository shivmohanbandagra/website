import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "Punjabi Dhol vs Nashik Dhol — Which is Right for Your Wedding?",
  description: "Complete comparison of Punjabi Dhol and Nashik Dhol for wedding baraats. Sound, energy, visual impact, player count, origin and which to choose. By Shiv Mohan Band and Events Agra.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/punjabi-dhol-vs-nashik-dhol/" },
  openGraph: {
    title: "Punjabi Dhol vs Nashik Dhol — Which is Right for Your Wedding?",
    url: "https://www.shivmohanbandagra.com/blog/punjabi-dhol-vs-nashik-dhol/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Punjabi Dhol vs Nashik Dhol — Which is Right for Your Wedding?",
  description: "Complete comparison of Punjabi Dhol and Nashik Dhol for wedding baraats — sound, energy, visual impact and which one to choose.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/punjabi-dhol-vs-nashik-dhol/" },
  datePublished: "2026-09-01",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the difference between Punjabi Dhol and Nashik Dhol?", acceptedAnswer: { "@type": "Answer", text: "Punjabi Dhol originates from Punjab and is played by individual drummers, known for deep booming beats associated with Bhangra. Nashik Dhol originates from Maharashtra and is played in synchronized groups of 4-12 players, producing powerful, rhythmic patterns. Both create high energy at weddings but differ in sound, visual impact and playing style." } },
    { "@type": "Question", name: "Which dhol is better for a wedding baraat — Punjabi or Nashik?", acceptedAnswer: { "@type": "Answer", text: "Both are excellent for wedding baraats. Punjabi Dhol provides authentic North Indian wedding energy and is perfect for Bhangra dancing. Nashik Dhol provides a spectacular visual performance with synchronized group drumming. Many families in Agra choose both for maximum impact." } },
    { "@type": "Question", name: "How many Nashik Dhol players are needed for a baraat?", acceptedAnswer: { "@type": "Answer", text: "Nashik Dhol is typically performed in groups of 4-12 players. Larger groups create more impact. For a standard baraat in Agra, 6-8 Nashik Dhol players is a popular choice. Shiv Mohan Band offers Nashik Dhol groups of various sizes based on your requirements." } },
  ],
};

export default function PunjabiVsNashikDholPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Punjabi vs Nashik Dhol</span></li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Service Guide</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              Punjabi Dhol vs Nashik Dhol<br />
              <span className="text-gold italic">Which is Right for Your Wedding?</span>
            </h1>
            <p className="font-sans text-ivory/70 font-light">A complete comparison by Shiv Mohan Band and Events, Agra</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto space-y-10">
          <p className="font-sans text-ivory/80 text-lg leading-relaxed">
            One of the most common questions wedding planners and families ask Shiv Mohan Band is: <em>"Should we book Punjabi Dhol or Nashik Dhol for our baraat?"</em> Both are excellent — but they're very different experiences. Here's the complete guide to help you choose.
          </p>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">What is Punjabi Dhol?</h2>
            <p className="font-sans text-ivory/70 leading-relaxed mb-4">
              Punjabi Dhol is a large two-headed drum originating from the Punjab region. It is the signature percussion instrument of Bhangra music and North Indian wedding celebrations. A single dhol player creates powerful, rhythmic beats by striking both heads of the drum — one producing deep bass tones, the other sharp high notes.
            </p>
            <p className="font-sans text-ivory/70 leading-relaxed">
              Punjabi Dhol is the heartbeat of a traditional North Indian baraat. The sound is raw, authentic and instantly recognizable — it makes guests want to dance and creates a traditional wedding atmosphere.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">What is Nashik Dhol?</h2>
            <p className="font-sans text-ivory/70 leading-relaxed mb-4">
              Nashik Dhol originates from Nashik, Maharashtra. Unlike Punjabi Dhol, Nashik Dhol is always performed in groups — typically 4 to 12 drummers playing in perfect synchronization. The result is an incredibly powerful, pulsating rhythm that can be felt physically.
            </p>
            <p className="font-sans text-ivory/70 leading-relaxed">
              The visual spectacle of a Nashik Dhol group — uniformed drummers moving in formation — makes it one of the most visually dramatic elements of any baraat. It has become extremely popular across North India, including Agra.
            </p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="font-heading text-3xl text-ivory mb-6">Punjabi Dhol vs Nashik Dhol — Complete Comparison</h2>
            <div className="overflow-x-auto rounded-sm border border-gold/20">
              <table className="w-full text-sm">
                <thead className="bg-charcoal/50">
                  <tr>
                    <th className="text-left py-4 px-5 font-subheading text-gold tracking-wide text-xs uppercase border-b border-gold/20">Feature</th>
                    <th className="text-left py-4 px-5 font-subheading text-gold tracking-wide text-xs uppercase border-b border-gold/20">Punjabi Dhol</th>
                    <th className="text-left py-4 px-5 font-subheading text-gold tracking-wide text-xs uppercase border-b border-gold/20">Nashik Dhol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 font-sans text-ivory/70">
                  {[
                    ["Origin", "Punjab, North India", "Nashik, Maharashtra"],
                    ["Typical Players", "1–2 players", "4–12 players (group)"],
                    ["Sound Character", "Deep, booming, folk", "Powerful, synchronized, rhythmic"],
                    ["Visual Impact", "Moderate — individual", "Very high — group formation"],
                    ["Energy Style", "Traditional, authentic", "Modern, dramatic, spectacular"],
                    ["Best for Dancing", "Bhangra, folk dance", "All types of celebration"],
                    ["Cost", "Lower", "Moderate to higher (group)"],
                    ["Popularity in Agra", "Very high (traditional)", "Very high (trending)"],
                    ["Best Used For", "Traditional North Indian baraat", "Visual spectacle, modern baraat"],
                  ].map(([feat, p, n]) => (
                    <tr key={feat} className="hover:bg-charcoal/20">
                      <td className="py-3 px-5 font-medium text-ivory/90">{feat}</td>
                      <td className="py-3 px-5">{p}</td>
                      <td className="py-3 px-5">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">Which Should You Choose?</h2>
            <div className="space-y-4">
              <div className="p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                <h3 className="font-sans text-ivory font-semibold mb-2">Choose Punjabi Dhol if:</h3>
                <ul className="space-y-1 font-sans text-ivory/70 text-sm">
                  {["You want an authentic, traditional North Indian baraat", "Your family loves Bhangra and folk-style celebration", "You want 1–2 dedicated dhol players", "Budget is a consideration"].map(p => <li key={p} className="flex items-start gap-2"><span className="text-gold">✓</span>{p}</li>)}
                </ul>
              </div>
              <div className="p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                <h3 className="font-sans text-ivory font-semibold mb-2">Choose Nashik Dhol if:</h3>
                <ul className="space-y-1 font-sans text-ivory/70 text-sm">
                  {["You want a visually spectacular group performance", "You want maximum energy and impact during the baraat", "Great wedding photography and video is a priority", "You want something modern and trending"].map(p => <li key={p} className="flex items-start gap-2"><span className="text-gold">✓</span>{p}</li>)}
                </ul>
              </div>
              <div className="p-5 bg-gold/10 border border-gold/30 rounded-sm">
                <h3 className="font-sans text-ivory font-semibold mb-2">Our Recommendation:</h3>
                <p className="font-sans text-ivory/80 text-sm">Many Agra families book <strong>both Punjabi Dhol and Nashik Dhol together</strong> for their baraat — the Punjabi Dhol creates the authentic traditional energy while the Nashik Dhol group creates a spectacular visual performance. Together they are unstoppable.</p>
              </div>
            </div>
          </section>

          <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
            <h2 className="font-heading text-2xl text-ivory mb-4">Book Punjabi or Nashik Dhol in Agra</h2>
            <p className="font-sans text-ivory/70 mb-6">Shiv Mohan Band and Events provides both Punjabi Dhol and Nashik Dhol for wedding baraats in Agra. Contact us to check availability and discuss the right dhol package for your wedding.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20book%20dhol%20for%20my%20baraat%20in%20Agra." target="_blank" rel="noopener noreferrer" id="dhol-blog-cta" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
                <MessageCircle className="w-4 h-4" /> Book Dhol for Your Baraat
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-heading text-xl text-ivory mb-4">Explore Dhol Services</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/" },
                { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/" },
                { label: "Dhol Player in Agra", href: "/dhol-player-agra/" },
                { label: "Baraat Services in Agra", href: "/baraat-services-agra/" },
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
