import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "Significance of Shehnai in Indian Weddings — Tradition & Meaning",
  description: "Why shehnai is the most auspicious instrument for Hindu weddings in India. History, cultural significance and how to include shehnai in your wedding ceremony in Agra.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/shehnai-in-indian-weddings/" },
  openGraph: {
    title: "The Significance of Shehnai in Indian Weddings",
    url: "https://www.shivmohanbandagra.com/blog/shehnai-in-indian-weddings/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Significance of Shehnai in Indian Weddings — Tradition, Melody & Meaning",
  description: "Why shehnai is considered the most auspicious instrument for Hindu weddings. History, significance and how to include shehnai in your wedding ceremony.",
  author: { "@type": "Organization", name: "Shiv Mohan Band and Events" },
  publisher: { "@type": "Organization", name: "Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.shivmohanbandagra.com/blog/shehnai-in-indian-weddings/" },
  datePublished: "2026-08-10",
};

export default function ShehnaiInWeddingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Shehnai in Indian Weddings</span></li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full inline-block mb-6">Culture & Tradition</span>
            <h1 className="font-heading text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              The Significance of Shehnai<br />
              <span className="text-gold italic">in Indian Weddings</span>
            </h1>
            <p className="font-sans text-ivory/70 font-light">Tradition, melody and meaning — by Shiv Mohan Band and Events, Agra</p>
          </div>
        </section>

        <article className="py-16 px-6 max-w-3xl mx-auto space-y-8 font-sans text-ivory/80 leading-relaxed">
          <p className="text-lg">
            Of all the musical instruments played at Indian weddings, the shehnai holds a special place in the hearts and traditions of Hindu families across North India. Its haunting, soul-stirring sound is considered supremely auspicious — the sound of divine blessings. In cities like Agra, no traditional wedding ceremony is complete without the shehnai.
          </p>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">What is Shehnai?</h2>
            <p className="mb-4">
              Shehnai (also spelled shahnai or shenai) is a double-reed wind instrument from India. It belongs to the oboe family and produces a penetrating, melodious sound that carries well in open spaces — making it perfect for outdoor wedding ceremonies, baraat processions and temple rituals.
            </p>
            <p>
              The instrument has a conical bore with a flared bell at the end. It is typically 45–60 cm long, made of wood, and played by a skilled musician who uses circular breathing to sustain long, continuous musical phrases.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">Why is Shehnai Considered Auspicious?</h2>
            <p className="mb-4">
              In Hindu tradition, shehnai is considered <em>mangalkar</em> — a creator of auspiciousness. Its music is believed to invite divine blessings, ward off evil spirits and create a sacred atmosphere for important ceremonies. The shehnai was traditionally played at temple entrances, royal courts and important religious celebrations.
            </p>
            <p>
              The great shehnai maestro Ustad Bismillah Khan, who was awarded the Bharat Ratna in 2001, popularized the shehnai on the world stage. His devotion to Goddess Saraswati and his commitment to performing at Varanasi's Vishwanath temple reinforced the instrument's divine associations in the public imagination.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">Shehnai in Wedding Ceremonies</h2>
            <p className="mb-4">
              In North Indian wedding ceremonies — especially in cities like Agra, Varanasi, Lucknow and Allahabad — shehnai is traditionally played at:
            </p>
            <ul className="space-y-2 mb-4">
              {["Baraat procession — welcoming the groom's party", "Dwaar puja / milni — the formal greeting of families", "Jaimala — the exchange of garlands between bride and groom", "Pheras — the sacred fire rituals", "Vidaai — the bride's farewell ceremony"].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1 shrink-0">♪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The shehnai transforms these moments into sacred, emotionally resonant experiences. Many wedding guests and family members report that the sound of shehnai immediately brings tears of joy — it is the sound of tradition, continuity and divine blessing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-ivory mb-4">Shehnai in Modern Indian Weddings</h2>
            <p className="mb-4">
              Even in the era of DJ music, Bollywood bands and LED light shows, the shehnai remains a beloved and important part of traditional Indian weddings. Many modern couples choose to use shehnai for specific ceremony moments — the baraat entry, the jaimala, or the pheras — while using DJ and live band for the general celebrations.
            </p>
            <p>
              This thoughtful combination honors tradition while embracing modern celebration styles. A shehnai player is often considered the spiritual heartbeat of a wedding ceremony, while the DJ and band provide the high-energy entertainment.
            </p>
          </section>

          <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
            <h2 className="font-heading text-2xl text-ivory mb-3">Book a Shehnai Player in Agra</h2>
            <p className="text-ivory/70 mb-6">Shiv Mohan Band and Events provides experienced shehnai players for wedding ceremonies and baraat processions in Agra. Contact us to book a shehnai player for your wedding.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919457500318?text=Hello!%20I%20want%20to%20book%20a%20shehnai%20player%20for%20my%20wedding%20in%20Agra." target="_blank" rel="noopener noreferrer" id="shehnai-blog-cta" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
                <MessageCircle className="w-4 h-4" /> Book Shehnai Player
              </a>
              <Link href="/shehnai-player-agra/" className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-ivory font-subheading uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors">
                View Shehnai Service →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
