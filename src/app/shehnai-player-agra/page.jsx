import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Shehnai Player in Agra | Shiv Mohan Band and Events",
  description: "Classical shehnai player in Agra for wedding ceremonies and celebrations. Shiv Mohan Band and Events provides professional shehnai players for traditional Hindu wedding ceremonies in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/shehnai-player-agra/" },
  openGraph: { title: "Shehnai Player in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/shehnai-player-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Shehnai Player in Agra", item: "https://www.shivmohanbandagra.com/shehnai-player-agra/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is shehnai and why is it played at weddings?", acceptedAnswer: { "@type": "Answer", text: "Shehnai is a traditional Indian wind instrument with a rich, melodic sound considered auspicious for weddings and religious ceremonies. Its soulful notes create a spiritual and ceremonial atmosphere, making it a cherished tradition at Hindu weddings. Shehnai is typically played during wedding rituals, baraat arrival and festive moments." } },
    { "@type": "Question", name: "Do you provide shehnai player for wedding ceremonies in Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band and Events provides professional shehnai players for wedding ceremonies, baraat processions and festive occasions in Agra. Contact us at +91 94575 00318 to book." } },
    { "@type": "Question", name: "Can shehnai be combined with the wedding band?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shehnai can be included as part of a complete baraat package alongside the wedding band, brass band, Punjabi Dhol, Nashik Dhol and DJ on wheels." } },
  ],
};

export default function ShehnaiPlayerAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Shehnai Player in Agra"
        subtitle="Classical Music for Wedding Ceremonies"
        heroLabel="Traditional Shehnai — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides professional shehnai players for wedding ceremonies and baraat celebrations in Agra. The soul-stirring melody of shehnai adds a sacred and auspicious dimension to your wedding, creating an atmosphere of devotion and joy."
        service="shehnai"
        breadcrumbs={[{ label: "Shehnai Player in Agra", href: "/shehnai-player-agra/" }]}
        features={[
          { icon: "🎷", title: "Authentic Shehnai Performance", description: "Professional shehnai players delivering the traditional, auspicious melody that has been part of Indian weddings for centuries." },
          { icon: "🕉️", title: "Auspicious Wedding Atmosphere", description: "The melodic tones of shehnai create a sacred, ceremonial atmosphere for Hindu wedding rituals." },
          { icon: "🎵", title: "Traditional Wedding Ragas", description: "Experienced players performing traditional wedding ragas and auspicious compositions during ceremonies." },
          { icon: "🌸", title: "Ceremony & Baraat", description: "Shehnai for both the wedding ceremony (phere, kanyadaan) and baraat procession for a complete traditional touch." },
          { icon: "🎺", title: "Combine with Band & Dhol", description: "Include shehnai alongside the wedding band, brass band and dhol for a complete multi-dimensional baraat experience." },
          { icon: "📍", title: "All Agra Venues", description: "Available at any wedding venue, marriage hall or mandap across Agra and surrounding areas." },
        ]}
        whyChooseItems={[
          { title: "Professional Shehnai Players", description: "Our shehnai players are experienced musicians with expertise in traditional wedding ragas and ceremonial compositions." },
          { title: "Auspicious Tradition", description: "Shehnai has been an integral part of Indian weddings for generations — we carry this tradition forward with authenticity." },
          { title: "Part of Complete Baraat Package", description: "Book shehnai as a standalone service or as part of your complete baraat package with band, dhol and DJ." },
          { title: "45+ Years Experience", description: "Shiv Mohan Band has been providing shehnai and live music for weddings in Agra since 1980." },
        ]}
        faqs={[
          { q: "What is shehnai and why is it played at weddings?", a: "Shehnai is a traditional Indian wind instrument with a rich, melodic sound considered auspicious for weddings. Its soulful notes create a spiritual and ceremonial atmosphere, making it a cherished tradition at Hindu weddings — played during rituals, baraat arrival and festive moments." },
          { q: "Do you provide shehnai for wedding ceremonies in Agra?", a: "Yes. Shiv Mohan Band and Events provides professional shehnai players for wedding ceremonies, baraat processions and festive occasions in Agra. Contact us at +91 94575 00318 to book." },
          { q: "Can shehnai be combined with the wedding band?", a: "Yes. Shehnai can be included as part of a complete baraat package alongside the wedding band, brass band, Punjabi Dhol, Nashik Dhol and DJ on wheels." },
          { q: "When during the wedding is shehnai played?", a: "Shehnai is traditionally played during wedding rituals such as the baraat arrival, kanyadaan, phere (wedding vows), and during festive and auspicious moments throughout the celebration." },
        ]}
        relatedServices={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Live Band in Agra", href: "/live-band-agra/", icon: "🎶" },
        ]}
      />
    </>
  );
}
