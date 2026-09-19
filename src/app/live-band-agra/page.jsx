import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Live Band in Agra | Wedding & Sangeet Night | Shiv Mohan Band",
  description: "Live band in Agra for weddings, sangeet nights and special celebrations. Shiv Mohan Band and Events provides professional live band performances for wedding events across Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/live-band-agra/" },
  openGraph: { title: "Live Band in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/live-band-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Live Band in Agra", item: "https://www.shivmohanbandagra.com/live-band-agra/" },
  ],
};

export default function LiveBandAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Live Band in Agra"
        subtitle="For Weddings, Sangeet & Special Celebrations"
        heroLabel="Professional Live Band Performance — Agra"
        description="Shiv Mohan Band and Events provides professional live band performances for weddings, sangeet nights, mehndi ceremonies and special celebrations in Agra. Our experienced live band creates an electric, memorable atmosphere for every event."
        service="live band"
        breadcrumbs={[{ label: "Live Band in Agra", href: "/live-band-agra/" }]}
        features={[
          { icon: "🎶", title: "Live Music Performance", description: "Professional live musicians performing Bollywood hits, traditional songs, ghazals and folk music for your event." },
          { icon: "🎤", title: "Sangeet Night Performance", description: "High-energy live band performances for sangeet nights — perfect for getting guests dancing and celebrating." },
          { icon: "🎺", title: "Multiple Instruments", description: "Full band with brass, percussion, woodwind and other instruments for a rich, layered musical performance." },
          { icon: "🎵", title: "Customizable Setlist", description: "Perform your favourite songs, wedding classics, Bollywood hits and traditional wedding music based on your preferences." },
          { icon: "🌟", title: "Professional Performers", description: "Experienced musicians and performers who create the perfect atmosphere for wedding celebrations." },
          { icon: "📍", title: "All Agra Events", description: "Available for weddings, sangeet nights, mehndi ceremonies, receptions and special events across Agra." },
        ]}
        whyChooseItems={[
          { title: "Experienced Live Musicians", description: "Our live band musicians have years of experience performing at weddings and special events across Agra." },
          { title: "Sangeet Night Specialists", description: "We specialize in live band performances for sangeet nights — the highlight of every multi-day wedding celebration." },
          { title: "Custom Song Requests", description: "We learn and perform your favourite songs, wedding hits and traditional music based on your song requests." },
          { title: "Complete Wedding Entertainment", description: "Book live band for sangeet night alongside our wedding band, dhol and baraat services for comprehensive entertainment." },
        ]}
        faqs={[
          { q: "Do you provide live band for sangeet nights in Agra?", a: "Yes. Shiv Mohan Band and Events specializes in live band performances for sangeet nights in Agra. Our energetic live band makes sangeet nights unforgettable for guests." },
          { q: "What kind of music does the live band perform?", a: "Our live band performs Bollywood hits, traditional wedding songs, folk music, ghazals and any specific song requests for your event." },
          { q: "Can I request specific songs for the live band?", a: "Yes. We accommodate song requests and can prepare a custom setlist based on your preferences and wedding theme." },
          { q: "Do you provide live band for events outside Agra?", a: "Yes. We travel to nearby areas outside Agra for special events and weddings. Contact us at +91 94575 00318 for availability." },
        ]}
        relatedServices={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Shehnai Player", href: "/shehnai-player-agra/", icon: "🎷" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Wedding Decoration", href: "/wedding-decoration-agra/", icon: "🌸" },
        ]}
      />
    </>
  );
}
