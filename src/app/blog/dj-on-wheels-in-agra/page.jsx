import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const canonicalUrl = "https://www.shivmohanbandagra.com/blog/dj-on-wheels-in-agra/";
const publishedAt = "2026-11-11";
const imageUrl = "https://www.shivmohanbandagra.com/images/services/dj.jpeg";

export const metadata = {
  title: "DJ on Wheels in Agra: Baraat Setup & Booking Guide",
  description:
    "Learn how DJ on Wheels works for an Agra baraat, what to ask about sound, music and route planning, and how to coordinate a DJ with live dhol or band.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "DJ on Wheels in Agra: A Baraat Planning Guide",
    description:
      "A practical guide to mobile DJ setups, sound, music, route coordination and pairing a wedding DJ with live performers in Agra.",
    url: canonicalUrl,
    type: "article",
    images: [{ url: imageUrl, alt: "DJ on Wheels service for a wedding baraat in Agra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ on Wheels in Agra: Baraat Setup & Booking Guide",
    description:
      "Plan a mobile baraat DJ setup, compare key details and coordinate music with dhol or a live wedding band.",
    images: [imageUrl],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DJ on Wheels in Agra: The Ultimate Guide to a High-Energy Wedding Baraat",
  description:
    "How a mobile DJ setup works for a baraat, how to plan sound and music, and what to discuss before booking.",
  image: imageUrl,
  author: {
    "@type": "Organization",
    name: "Shiv Mohan Band & Events",
    url: "https://www.shivmohanbandagra.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Shiv Mohan Band & Events",
    url: "https://www.shivmohanbandagra.com/",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  datePublished: publishedAt,
  dateModified: publishedAt,
  inLanguage: "en-IN",
  articleSection: "Wedding Entertainment",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.shivmohanbandagra.com/blog/" },
    { "@type": "ListItem", position: 3, name: "DJ on Wheels in Agra", item: canonicalUrl },
  ],
};

const faqs = [
  {
    question: "What is DJ on Wheels?",
    answer:
      "DJ on Wheels is a mobile DJ setup that travels with a procession, so recorded music can accompany the baraat along its route rather than playing from one fixed location.",
  },
  {
    question: "Can I book a DJ and Dhol together in Agra?",
    answer:
      "They can be planned together. Share the route, timing and preferred music with both providers in advance so the DJ and drummers can coordinate their parts.",
  },
  {
    question: "How much does DJ on Wheels cost in Agra?",
    answer:
      "The price depends on the equipment and lighting, event duration, route, date and any accompanying performers. Request a written quote that lists exactly what is included.",
  },
  {
    question: "How early should I book a baraat DJ?",
    answer:
      "Contact providers as soon as the wedding date and venue are known. Availability varies by date, so confirm the booking and event-day contact in writing.",
  },
];

export default function DjOnWheelsGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />
      <main className="min-h-screen bg-background pt-16 text-foreground sm:pt-20">
        <nav className="border-b border-gold/10 bg-charcoal/50 px-5 py-3 sm:px-6" aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-2 font-sans text-sm text-ivory/50">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog/" className="hover:text-gold">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gold" aria-current="page">DJ on Wheels in Agra</li>
          </ol>
        </nav>

        <header className="editorial-hero border-b border-gold/10 bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 px-5 py-14 text-center sm:px-6 sm:py-16">
          <p className="mb-4 font-subheading text-xs uppercase tracking-widest text-gold">Baraat Planning Guide</p>
          <h1 className="mx-auto mb-4 max-w-4xl font-heading text-3xl leading-tight text-ivory sm:text-5xl">
            DJ on Wheels in Agra: A Guide to Planning Your Baraat
          </h1>
          <p className="mx-auto max-w-2xl font-sans font-light leading-relaxed text-ivory/70">
            Understand the mobile setup, plan the music and route, and coordinate a DJ with live performers before you book.
          </p>
          <p className="mt-5 font-sans text-sm text-ivory/55">
            By Shiv Mohan Band &amp; Events <span aria-hidden="true">·</span>{" "}
            <time dateTime={publishedAt}>November 11, 2026</time>
          </p>
        </header>

        <article className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden bg-charcoal">
            <Image
              src="/images/services/dj.jpeg"
              alt="Mobile DJ setup for a wedding baraat in Agra"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mx-auto max-w-3xl space-y-9 font-sans leading-relaxed text-ivory/80">
            <p className="text-lg">
              A DJ on Wheels is a mobile sound setup that moves with a wedding baraat. It brings a curated playlist and DJ-led music to the procession, while a traditional band or dhol group can add live performance. The right arrangement depends on your route, venue, music preferences and event schedule—not simply the loudest speakers.
            </p>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">How does a mobile baraat DJ work?</h2>
              <p>
                The DJ and sound equipment travel with the procession, playing selected or requested tracks as the baraat moves. Before the event, agree on the start point, route, stops, timing and who will coordinate with the family or venue. Ask the provider how the equipment is powered and operated while moving, and what happens if the route or schedule changes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">Sound, lights and playlist: what to confirm</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ask what sound equipment and lighting are included, and whether the setup suits your procession and venue.</li>
                <li>Share preferred Bollywood, Punjabi and family-favourite tracks, plus any songs or content to avoid.</li>
                <li>Confirm who takes music requests and how key moments, announcements or breaks are handled.</li>
                <li>Discuss safe equipment placement, access, power arrangements and any venue or route restrictions.</li>
                <li>Get the event duration, setup time, travel plan and any additional charges in writing.</li>
              </ul>
              <p className="mt-4">
                There is no single speaker configuration that suits every wedding. Ask the provider to recommend equipment for your route and gathering, and confirm any sound limits with the venue or relevant local authority.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">DJ on Wheels versus a live wedding band</h2>
              <p>
                A DJ offers recorded tracks and a playlist that can shift between styles quickly. A live band adds musicians performing during the procession. Families can choose either format or book both; consider your preferred sound, the route and how the performers will coordinate. See the{" "}
                <Link className="text-gold underline underline-offset-4" href="/wedding-band-agra/">wedding band in Agra</Link>{" "}
                and{" "}
                <Link className="text-gold underline underline-offset-4" href="/baraat-services-agra/">baraat service</Link>{" "}
                options before deciding.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">Pair a DJ with Punjabi or Nashik Dhol</h2>
              <p>
                Live drumming can complement recorded music when the sequence is planned in advance. Tell each provider when the DJ should play and when the drummers should lead, and identify one person to coordinate transitions. Compare{" "}
                <Link className="text-gold underline underline-offset-4" href="/punjabi-dhol-agra/">Punjabi Dhol</Link>{" "}
                and{" "}
                <Link className="text-gold underline underline-offset-4" href="/nashik-dhol-agra/">Nashik Dhol</Link>{" "}
                based on the performance style and scale that suit your celebration.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">What affects DJ on Wheels pricing?</h2>
              <p>
                Quotes can vary with the date, event duration, route and travel, sound and lighting equipment, setup requirements, and whether live Dhol or a band is included. Ask for an itemized quote that states what is supplied, the schedule, payment terms and cancellation or weather arrangements. No reliable price can be given without those details.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">A simple booking checklist</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Share your date, venue, route and estimated procession time.</li>
                <li>Describe your music preferences and whether you want live band or Dhol too.</li>
                <li>Confirm equipment, operator, setup time, travel and total price in writing.</li>
                <li>Choose an event-day contact and agree how schedule changes will be communicated.</li>
              </ol>
              <p className="mt-4">
                Shiv Mohan Band &amp; Events lists DJ on Wheels, Punjabi Dhol, Nashik Dhol, live band and baraat services in Agra. To compare arrangements, visit the{" "}
                <Link className="text-gold underline underline-offset-4" href="/dj-on-wheels-agra/">DJ on Wheels service page</Link>{" "}
                or{" "}
                <Link className="text-gold underline underline-offset-4" href="/blog/best-dj-on-wheels-in-agra/">read the DJ selection checklist</Link>.
              </p>
            </section>

            <section aria-labelledby="dj-faqs">
              <h2 id="dj-faqs" className="mb-5 font-heading text-2xl text-ivory sm:text-3xl">DJ on Wheels FAQs</h2>
              <div className="space-y-5">
                {faqs.map(({ question, answer }) => (
                  <div key={question}>
                    <h3 className="mb-1 font-semibold text-ivory">{question}</h3>
                    <p>{answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-sm border border-gold/25 bg-charcoal/40 p-6 text-center sm:p-8">
              <h2 className="mb-3 font-heading text-2xl text-ivory">Planning a baraat in Agra?</h2>
              <p className="mb-6">Share your wedding date, venue and preferred setup to ask about availability and a tailored quote.</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band%20%26%20Events%2C%20I%20would%20like%20to%20ask%20about%20DJ%20on%20Wheels%20for%20a%20baraat."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 py-3 font-subheading text-sm font-semibold uppercase tracking-widest text-charcoal"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="tel:+919457500318" className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold/35 px-6 py-3 font-subheading text-sm text-ivory">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> Call +91 94575 00318
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
