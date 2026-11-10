import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const canonicalUrl =
  "https://www.shivmohanbandagra.com/blog/why-shiv-mohan-band-is-one-of-the-best-wedding-bands-in-agra/";
const publishedAt = "2026-11-11";
const imageUrl = "https://www.shivmohanbandagra.com/images/services/brassband.jpeg";

export const metadata = {
  title: "Wedding Band in Agra: Shiv Mohan Band Services & Booking",
  description:
    "Searching for the best wedding band in Agra? Compare baraat services, music options and booking details, then ask Shiv Mohan Band & Events about your date.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "A Guide to Booking Shiv Mohan Band & Events in Agra",
    description:
      "A factual guide to the wedding band, live music and baraat services listed by Shiv Mohan Band & Events in Agra.",
    url: canonicalUrl,
    type: "article",
    images: [{ url: imageUrl, alt: "Brass band musicians for a wedding baraat in Agra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Band in Agra: Services & Booking Guide",
    description:
      "Review the service options and booking details to discuss when planning a baraat with Shiv Mohan Band & Events.",
    images: [imageUrl],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Choosing a Wedding Band in Agra: Shiv Mohan Band & Events Services",
  description:
    "An overview of the wedding band and baraat services listed by Shiv Mohan Band & Events, with practical questions to ask before booking.",
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
  articleSection: "Wedding Band Services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.shivmohanbandagra.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Wedding Band Services & Booking", item: canonicalUrl },
  ],
};

const services = [
  {
    name: "Wedding and brass band",
    description: "Live band options for a baraat procession.",
    href: "/wedding-band-agra/",
  },
  {
    name: "Punjabi Dhol",
    description: "Dhol performance for a celebratory procession.",
    href: "/punjabi-dhol-agra/",
  },
  {
    name: "Nashik Dhol",
    description: "A group percussion option for wedding events.",
    href: "/nashik-dhol-agra/",
  },
  {
    name: "DJ on Wheels",
    description: "Mobile DJ music for a baraat route.",
    href: "/dj-on-wheels-agra/",
  },
  {
    name: "Shehnai",
    description: "Traditional shehnai music for wedding moments.",
    href: "/shehnai-player-agra/",
  },
  {
    name: "Ghori, Baggi and vintage cars",
    description: "Transport and entry arrangements to discuss for the event.",
    href: "/ghori-baggi-agra/",
  },
  {
    name: "Wedding decoration",
    description: "Decoration services for wedding celebrations.",
    href: "/wedding-decoration-agra/",
  },
];

const questions = [
  "Which musicians, instruments and services are included in the quote?",
  "What are the confirmed performance hours, route and setup requirements?",
  "Who is the event-day contact, and how will schedule changes be handled?",
  "What are the payment, cancellation and additional travel terms?",
];

export default function ShivMohanBandGuidePage() {
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
            <li className="text-gold" aria-current="page">Wedding Band Services &amp; Booking</li>
          </ol>
        </nav>

        <header className="editorial-hero border-b border-gold/10 bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 px-5 py-14 text-center sm:px-6 sm:py-16">
          <p className="mb-4 font-subheading text-xs uppercase tracking-widest text-gold">Local Service Guide</p>
          <h1 className="mx-auto mb-4 max-w-4xl font-heading text-3xl leading-tight text-ivory sm:text-5xl">
            Wedding Band Services in Agra: A Guide to Shiv Mohan Band &amp; Events
          </h1>
          <p className="mx-auto max-w-2xl font-sans font-light leading-relaxed text-ivory/70">
            Explore the service options listed by the Agra-based business and the practical details to confirm before choosing a baraat package.
          </p>
          <p className="mt-5 font-sans text-sm text-ivory/55">
            By Shiv Mohan Band &amp; Events <span aria-hidden="true">·</span>{" "}
            <time dateTime={publishedAt}>November 11, 2026</time>
          </p>
        </header>

        <article className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden bg-charcoal">
            <Image
              src="/images/services/brassband.jpeg"
              alt="Brass band musicians preparing for a wedding baraat in Agra"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mx-auto max-w-3xl space-y-9 font-sans leading-relaxed text-ivory/80">
            <p className="text-lg">
              Choosing a wedding band is about more than a name or a search result. Families planning a baraat in Agra can compare the live music, procession plan, available services, written terms and communication they receive before booking. This guide describes the services Shiv Mohan Band &amp; Events lists and offers questions to help you decide whether the arrangements fit your event.
            </p>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">A range of baraat and wedding services</h2>
              <p className="mb-5">
                Depending on availability and your requirements, the site lists the following services. Confirm the exact lineup, equipment, schedule and price directly for your date; a service listing is not a guarantee of availability or a fixed package.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service.name} className="rounded-sm border border-gold/15 bg-charcoal/30 p-5">
                    <h3 className="mb-2 font-heading text-xl text-ivory">{service.name}</h3>
                    <p className="mb-3 text-sm text-ivory/70">{service.description}</p>
                    <Link href={service.href} className="text-sm text-gold underline underline-offset-4">
                      View service details
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">Plan the music around your procession</h2>
              <p>
                Think about the route length, start time, venue access and the atmosphere you want. A live brass band provides musicians performing as the baraat moves; a DJ uses recorded tracks; Punjabi or Nashik Dhol can add live percussion. If you want more than one, ask how the performance order and transitions will be coordinated. The{" "}
                <Link className="text-gold underline underline-offset-4" href="/baraat-services-agra/">baraat services page</Link>{" "}
                and{" "}
                <Link className="text-gold underline underline-offset-4" href="/wedding-band-agra-guide/">wedding band planning guide</Link>{" "}
                provide more details.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">Questions to ask before booking</h2>
              <ul className="list-disc space-y-2 pl-6">
                {questions.map((question) => <li key={question}>{question}</li>)}
              </ul>
              <p className="mt-4">
                Request a written quote that identifies each service, performance duration, travel or setup charges, payment schedule and cancellation terms. Ask for recent event photos or videos if you want to review the actual setup; make sure any examples shared are from the service being quoted.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-2xl text-ivory sm:text-3xl">How to compare wedding bands in Agra</h2>
              <p className="mb-3">
                If you are searching for the “best wedding band in Agra,” compare providers using the same event details rather than relying on unsupported rankings or review totals. Check the proposed ensemble, availability, route plan, song preferences, written price and the person responsible on the day. Read recent feedback on the provider’s public profiles and decide whether it reflects the service you need.
              </p>
              <p>
                Shiv Mohan Band &amp; Events lists its base in Bodla, Agra, and publishes the phone number{" "}
                <a className="text-gold underline underline-offset-4" href="tel:+919457500318">+91 94575 00318</a>. Contact the team to confirm service coverage, availability and current package details for your wedding.
              </p>
            </section>

            <section aria-labelledby="booking-faqs">
              <h2 id="booking-faqs" className="mb-5 font-heading text-2xl text-ivory sm:text-3xl">Booking FAQs</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 font-semibold text-ivory">Can I book a band, DJ and Dhol together?</h3>
                  <p>These services are listed separately. Ask whether they can be combined for your date and request confirmation of the performers, timing and total quote.</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-ivory">How much does a wedding band cost in Agra?</h3>
                  <p>Pricing depends on the lineup, duration, date, location and selected services. Share your event details for a current quote rather than relying on a generic estimate.</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-ivory">Does the business serve every Agra neighbourhood?</h3>
                  <p>Confirm your exact location and route directly with the team. Service coverage and any travel costs should be part of the written booking confirmation.</p>
                </div>
              </div>
            </section>

            <aside className="rounded-sm border border-gold/25 bg-charcoal/40 p-6 text-center sm:p-8">
              <h2 className="mb-3 font-heading text-2xl text-ivory">Ask about your wedding date</h2>
              <p className="mb-6">Share your event location, route and preferred services to discuss availability and a written quote.</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band%20%26%20Events%2C%20I%20would%20like%20to%20ask%20about%20wedding%20band%20services%20in%20Agra."
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
