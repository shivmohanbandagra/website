import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "How to Plan the Perfect Baraat in Agra — Step-by-Step Guide",
  description: "Complete step-by-step guide to planning a perfect royal baraat in Agra. From booking your wedding band, dhol and DJ to arranging ghori, baggi, vintage cars and baraat lighting.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/how-to-plan-baraat-in-agra/" },
  openGraph: {
    title: "How to Plan the Perfect Baraat in Agra — Step-by-Step Guide",
    url: "https://www.shivmohanbandagra.com/blog/how-to-plan-baraat-in-agra/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Plan the Perfect Baraat in Agra: Step-by-Step Guide",
  description: "Complete step-by-step guide to planning a royal baraat in Agra — wedding band, dhol, DJ, ghori, baggi and vintage cars.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/how-to-plan-baraat-in-agra/" },
  datePublished: "2026-09-01",
};

const steps = [
  {
    num: "01",
    title: "Set Your Baraat Date & Venue",
    body: "The first step in planning a baraat in Agra is to lock in your wedding date and venue. Once you have these confirmed, you can start booking your baraat services. The muhurat (auspicious date) determines everything — so get this from your pandit first before reaching out to vendors.",
  },
  {
    num: "02",
    title: "Book Your Wedding Band",
    body: "Reach out to a trusted wedding band in Agra as early as possible — ideally 3–6 months in advance for peak wedding season (November–February, May–June). Shiv Mohan Band and Events has been providing wedding bands and baraat entertainment in Agra since 1980. WhatsApp or call us to check availability for your date.",
  },
  {
    num: "03",
    title: "Choose Your Dhol Type",
    body: "Decide between Punjabi Dhol (deep, booming individual performance), Nashik Dhol (powerful group performance with 4–12 players), or both. Nashik Dhol creates a spectacular visual impact during the baraat procession. Punjabi Dhol keeps energy high and is perfect for Bhangra-style celebrations.",
  },
  {
    num: "04",
    title: "Add DJ on Wheels",
    body: "For a modern, high-energy baraat, add a DJ on wheels to your package. The DJ plays non-stop Bollywood hits while the live band and dhol create the traditional atmosphere. Together they create an extraordinary baraat experience. DJ on wheels is now a standard part of most baraats in Agra.",
  },
  {
    num: "05",
    title: "Arrange Ghori or Baggi for the Groom",
    body: "Decide if the groom will ride a Ghori (decorated horse) or travel in a Baggi (horse-drawn carriage). Both are traditional, royal and create stunning visual moments for photography. Many grooms choose to start on horseback and later move to the Baggi. Vintage cars are also popular for a modern, cinematic entry.",
  },
  {
    num: "06",
    title: "Plan Baraat Lighting & Decoration",
    body: "Baraat lighting — LED lights, fire torches and decorative illuminations — transforms the evening baraat procession into a spectacular visual display. Plan your lighting setup early and coordinate with your band to ensure everything is synchronized with the music.",
  },
  {
    num: "07",
    title: "Plan the Route & Timing",
    body: "Plan your baraat route carefully — from the groom's home or starting point to the wedding venue. Consider road width (for the band and ghori), estimated walking time, and timing. Most baraats in Agra begin after 7 PM. Coordinate the route with local authorities if needed.",
  },
  {
    num: "08",
    title: "Brief the Band on Special Requests",
    body: "Share your favourite songs, music preferences, key moments (groom's entry, special dances) and any special requests with Shiv Mohan Band in advance. We can customize the performance based on your preferences — specific Bollywood songs, traditional songs, or family favorites.",
  },
];

export default function HowToPlanBaraatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">How to Plan Baraat</span></li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Planning Guide</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              How to Plan the Perfect Baraat in Agra
            </h1>
            <p className="font-sans text-ivory/70 font-light">Step-by-step guide by Shiv Mohan Band and Events, Agra — since 1980</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto">
          <p className="font-sans text-ivory/80 text-lg leading-relaxed mb-12">
            A baraat is the groom's grand wedding procession — one of the most important and joyful moments of an Indian wedding. Planning a perfect baraat in Agra requires careful coordination of your wedding band, dhol, DJ, ghori, decoration and logistics. Here's our complete step-by-step guide based on 45+ years of experience.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 p-6 bg-charcoal/20 border border-gold/10 rounded-sm">
                <div className="font-heading text-3xl text-gold/30 shrink-0 leading-none">{step.num}</div>
                <div>
                  <h2 className="font-heading text-xl text-ivory mb-3">{step.title}</h2>
                  <p className="font-sans text-ivory/70 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
            <h2 className="font-heading text-2xl text-ivory mb-4">Plan Your Baraat with Shiv Mohan Band</h2>
            <p className="font-sans text-ivory/70 mb-6">Shiv Mohan Band and Events has been planning and performing at wedding baraats in Agra since 1980. Contact us to check availability and build the perfect baraat package for your wedding.</p>
            <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20plan%20my%20baraat%20in%20Agra.%20Can%20you%20help?" target="_blank" rel="noopener noreferrer" id="baraat-guide-cta-whatsapp" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us to Plan Your Baraat
            </a>
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-xl text-ivory mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Punjabi Dhol vs Nashik Dhol", href: "/blog/punjabi-dhol-vs-nashik-dhol/" },
                { label: "Wedding Band Guide for Agra", href: "/wedding-band-agra-guide/" },
                { label: "Wedding Band in Agra", href: "/wedding-band-agra/" },
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
