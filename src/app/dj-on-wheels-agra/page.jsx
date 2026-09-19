import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "DJ on Wheels in Agra | Wedding DJ Services | Shiv Mohan Band",
  description: "Professional DJ on wheels for wedding baraats in Agra. Shiv Mohan Band and Events provides high-energy DJ on wheels service with modern sound systems for royal baraat processions in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/dj-on-wheels-agra/" },
  openGraph: { title: "DJ on Wheels in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/dj-on-wheels-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "DJ on Wheels in Agra", item: "https://www.shivmohanbandagra.com/dj-on-wheels-agra/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is DJ on wheels for a baraat?", acceptedAnswer: { "@type": "Answer", text: "DJ on wheels is a mobile DJ setup mounted on a decorated vehicle or cart that accompanies the baraat procession. It plays high-energy Bollywood songs, wedding tracks and dance music while moving with the procession, keeping the energy high throughout the baraat." } },
    { "@type": "Question", name: "Can I have DJ and wedding band together for my baraat in Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band and Events offers combined packages with DJ on wheels + wedding band + Punjabi Dhol + Nashik Dhol for a complete, high-energy baraat experience. The DJ complements the live band to create a dynamic, continuous musical performance." } },
    { "@type": "Question", name: "What music does the DJ play at a baraat in Agra?", acceptedAnswer: { "@type": "Answer", text: "Our DJ plays popular Bollywood wedding tracks, dance songs, dhol beats, folk songs and any specific songs you request for your baraat. We can customize the playlist based on your preferences." } },
  ],
};

export default function DJonWheelsAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="DJ on Wheels in Agra"
        subtitle="High-Energy DJ for Wedding Baraats"
        heroLabel="Professional Wedding DJ Service — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides high-energy DJ on wheels service for wedding baraats in Agra. Our mobile DJ setup with professional sound system and decorative lighting keeps the baraat procession energetic and celebratory from start to finish."
        service="DJ"
        breadcrumbs={[{ label: "DJ on Wheels in Agra", href: "/dj-on-wheels-agra/" }]}
        features={[
          { icon: "🎧", title: "Mobile DJ Setup", description: "Professional DJ equipment mounted on a decorated mobile unit that moves seamlessly with the baraat procession." },
          { icon: "🔊", title: "High-Quality Sound System", description: "Powerful professional speakers and sound system ensuring crystal-clear music throughout the baraat route." },
          { icon: "💡", title: "Decorative LED Lighting", description: "Colorful LED lighting and visual effects on the DJ unit creating a spectacular visual display during the baraat." },
          { icon: "🎵", title: "Custom Playlist", description: "Bollywood hits, wedding songs, folk tracks and your personal song requests — all curated for your baraat." },
          { icon: "🥁", title: "Perfect with Live Band", description: "DJ on wheels complements the live band and dhol for a dynamic, multi-layered baraat entertainment experience." },
          { icon: "⚡", title: "Non-Stop Energy", description: "The DJ ensures there are no dull moments during your baraat — continuous high-energy music throughout the procession." },
        ]}
        whyChooseItems={[
          { title: "Professional DJ Equipment", description: "High-quality, professional DJ equipment ensuring excellent sound quality throughout your baraat." },
          { title: "Custom Song Requests", description: "We play your favourite wedding songs, Bollywood hits and folk tracks based on your preferences." },
          { title: "Combine with Live Band", description: "DJ on wheels works perfectly alongside our wedding band, brass band and dhol for a complete baraat experience." },
          { title: "Trusted Since 1980", description: "Shiv Mohan Band has been providing baraat entertainment including DJ services in Agra for over 45 years." },
        ]}
        faqs={[
          { q: "What is DJ on wheels for a baraat?", a: "DJ on wheels is a mobile DJ setup on a decorated vehicle accompanying the baraat procession, playing high-energy Bollywood songs and wedding tracks while moving with the procession to keep energy high throughout." },
          { q: "Can I have DJ and wedding band together for my baraat?", a: "Yes. Shiv Mohan Band offers combined packages with DJ on wheels + wedding band + Punjabi Dhol + Nashik Dhol for a complete, high-energy baraat experience." },
          { q: "What music does the DJ play at a baraat?", a: "Our DJ plays popular Bollywood wedding tracks, dance songs, dhol beats, folk songs and any specific songs you request for your baraat. We can fully customize the playlist." },
          { q: "Does the DJ service cover all areas of Agra?", a: "Yes. Our DJ on wheels service covers all venues and locations across Agra and surrounding areas." },
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
