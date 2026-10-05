import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Headphones,
  MessageCircle,
  Music2,
  Phone,
  Route,
} from "lucide-react";

const canonicalUrl =
  "https://www.shivmohanbandagra.com/blog/best-dj-on-wheels-in-agra/";

export const metadata = {
  title: "Best DJ on Wheels in Agra | Baraat DJ Booking Guide",
  description:
    "Find the best DJ on wheels in Agra for your baraat. Compare sound, playlist, setup and coordination, and learn how to plan a DJ with dhol or a live band.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How to Choose the Best DJ on Wheels in Agra",
    description:
      "A practical guide to choosing a baraat DJ in Agra, from the mobile setup and sound system to music and procession coordination.",
    url: canonicalUrl,
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Best DJ on Wheels in Agra for Your Baraat",
  description:
    "A practical guide to comparing DJ on wheels services in Agra, including the mobile setup, sound, playlist and coordination with other baraat performers.",
  author: {
    "@type": "Organization",
    name: "Shiv Mohan Band and Events",
    url: "https://www.shivmohanbandagra.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Shiv Mohan Band and Events",
    url: "https://www.shivmohanbandagra.com/",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  datePublished: "2026-10-05",
  dateModified: "2026-10-05",
  inLanguage: "en-IN",
  articleSection: "Wedding Entertainment",
};

const considerations = [
  {
    icon: AudioLines,
    title: "Sound that suits your procession",
    description:
      "Ask about the sound setup and how it will be positioned along your route. A good fit depends on the procession size, venue and surrounding area—not just maximum volume.",
  },
  {
    icon: Music2,
    title: "A playlist shaped around your celebration",
    description:
      "Share the songs and styles your family wants to hear, from Bollywood wedding tracks to dance favourites. Confirm how requests and any must-play moments will be handled.",
  },
  {
    icon: Route,
    title: "A setup that can move with the baraat",
    description:
      "Discuss the planned route, starting point, timings and access in advance. Check that the mobile DJ arrangement can travel with the procession and coordinate its stops.",
  },
  {
    icon: Headphones,
    title: "Clear coordination with your other performers",
    description:
      "If you are booking dhol or a live wedding band as well, agree how the music will be coordinated. This helps the performances complement each other instead of competing for attention.",
  },
];

const checklist = [
  "Confirm the event date, venue, start time and planned baraat route.",
  "Discuss the sound setup and the size of the procession.",
  "Share preferred songs, family favourites and important moments.",
  "Confirm how DJ, dhol and live band performances will coordinate.",
  "Ask what is included in the booking and who to contact on the event day.",
];

export default function BestDjOnWheelsAgraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background pt-16 text-foreground sm:pt-20">
        <nav
          className="border-b border-gold/10 bg-charcoal/50 px-5 py-3 sm:px-6"
          aria-label="Breadcrumb"
        >
          <div className="mx-auto max-w-4xl">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href="/blog/" className="transition-colors hover:text-gold">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-gold">Best DJ on Wheels in Agra</span>
              </li>
            </ol>
          </div>
        </nav>

        <header className="editorial-hero border-b border-gold/10 bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 px-5 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-gold/30 px-3 py-1 font-subheading text-xs uppercase tracking-widest text-gold">
              Service Guide
            </span>
            <h1 className="mb-4 font-heading text-[clamp(2rem,7vw,3.5rem)] leading-tight text-ivory">
              How to Choose the Best DJ on Wheels in Agra
            </h1>
            <p className="font-sans font-light leading-relaxed text-ivory/70">
              A practical guide to choosing baraat music, sound and setup for
              your wedding procession.
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-3xl space-y-10 px-5 py-12 font-sans leading-relaxed text-ivory/80 sm:px-6 sm:py-16">
          <p className="text-lg">
            A DJ on wheels brings recorded music along with the baraat instead
            of keeping the music in one place. When choosing a wedding DJ in
            Agra, look beyond the equipment: the right service should suit your
            route, playlist, procession and the other performers you have
            booked.
          </p>

          <section aria-labelledby="choose-dj">
            <p className="mb-3 text-center font-subheading text-sm uppercase tracking-widest text-gold">
              What to compare
            </p>
            <h2
              id="choose-dj"
              className="mb-7 text-center font-heading text-3xl text-ivory sm:text-4xl"
            >
              What Makes a DJ on Wheels Right for Your Baraat?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {considerations.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-sm border border-gold/15 bg-charcoal/30 p-5 sm:p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl text-ivory">
                    {title}
                  </h3>
                  <p className="text-sm text-ivory/70">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="booking-checklist">
            <h2
              id="booking-checklist"
              className="mb-5 font-heading text-3xl text-ivory"
            >
              DJ on Wheels Booking Checklist
            </h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="combine-entertainment"
            className="rounded-sm border border-gold/15 bg-charcoal/30 p-5 sm:p-7"
          >
            <h2
              id="combine-entertainment"
              className="mb-3 font-heading text-2xl text-ivory"
            >
              DJ, Dhol and Live Band Together
            </h2>
            <p>
              A DJ can be booked on its own or coordinated with live dhol and a
              wedding band. Tell each provider about the plan and the key
              moments in your route so the music can be arranged around your
              baraat rather than treated as separate performances.
            </p>
            <p className="mt-4">
              Explore{" "}
              <Link
                href="/dj-on-wheels-agra/"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                DJ on Wheels in Agra
              </Link>
              ,{" "}
              <Link
                href="/punjabi-dhol-agra/"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                Punjabi Dhol
              </Link>{" "}
              and{" "}
              <Link
                href="/wedding-band-agra/"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                wedding band services
              </Link>{" "}
              to compare the options for your event.
            </p>
          </section>

          <section className="rounded-sm border border-gold/25 bg-gradient-to-br from-gold/10 to-charcoal/40 p-6 text-center sm:p-8">
            <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">
              Planning a Baraat in Agra?
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-ivory/70 sm:text-base">
              Share your date, venue and music preferences to discuss a DJ on
              wheels for your wedding procession.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20enquire%20about%20DJ%20on%20wheels%20for%20my%20baraat."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 py-3 font-subheading text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+919457500318"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold/35 px-6 py-3 font-subheading text-sm uppercase tracking-widest text-ivory transition-colors hover:bg-gold/10"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                +91 94575 00318
              </a>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
