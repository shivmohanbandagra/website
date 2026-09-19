import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Wedding Decoration in Agra | Shiv Mohan Band and Events",
  description: "Complete wedding decoration services in Agra. Shiv Mohan Band and Events provides wedding decoration, haldi decoration, mehndi decoration, floral chattar and lighting for weddings across Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/wedding-decoration-agra/" },
  openGraph: { title: "Wedding Decoration in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/wedding-decoration-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Decoration in Agra", item: "https://www.shivmohanbandagra.com/wedding-decoration-agra/" },
  ],
};

export default function WeddingDecorationAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Wedding Decoration in Agra"
        subtitle="Haldi, Mehndi, Baraat & Reception Decor"
        heroLabel="Complete Wedding Decoration — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides complete wedding decoration services in Agra for every wedding function. From baraat lighting and floral chattar to haldi and mehndi decoration — we create beautiful, memorable setups for every moment of your wedding celebration."
        service="wedding decoration"
        breadcrumbs={[{ label: "Wedding Decoration in Agra", href: "/wedding-decoration-agra/" }]}
        features={[
          { icon: "💡", title: "Baraat Lighting", description: "Spectacular LED lighting setups, decorative lights and illuminations that make your baraat procession visually stunning." },
          { icon: "🌸", title: "Floral Chattar", description: "Traditional and decorative floral chattar (flower umbrella) carried during the baraat for an elegant, festive look." },
          { icon: "💛", title: "Haldi Decoration", description: "Bright, cheerful and traditional decoration for haldi ceremonies with flowers, marigolds and colourful accents." },
          { icon: "🎨", title: "Mehndi Decoration", description: "Vibrant, festive decoration for mehndi night celebrations with colourful fabrics, flowers and lights." },
          { icon: "🌹", title: "Floral Arrangements", description: "Fresh flower arrangements and floral installations for mandap, stage, baraat and reception decoration." },
          { icon: "✨", title: "Custom Wedding Themes", description: "Custom decoration themes based on your wedding colour palette, style and vision." },
        ]}
        whyChooseItems={[
          { title: "Complete Wedding Decoration", description: "One-stop decoration service for all wedding functions — baraat, haldi, mehndi, ceremony and reception." },
          { title: "Experienced Decoration Team", description: "Professional decorators with years of experience creating beautiful wedding setups across Agra." },
          { title: "Fresh Flower Arrangements", description: "Fresh, high-quality flowers used for all our floral arrangements and decoration setups." },
          { title: "Combine with Baraat Services", description: "Book wedding decoration alongside our baraat services — band, dhol, DJ, ghori and vintage car — for a complete package." },
        ]}
        faqs={[
          { q: "What wedding decoration services do you provide in Agra?", a: "Shiv Mohan Band and Events provides baraat lighting, floral chattar, haldi decoration, mehndi night decoration, floral arrangements, mandap decoration and custom wedding theme setups across Agra." },
          { q: "Do you provide decoration for haldi and mehndi in Agra?", a: "Yes. We provide vibrant, traditional decoration for haldi ceremonies and mehndi nights in Agra with flowers, marigolds, colourful fabrics and lights." },
          { q: "Can I book decoration with the wedding band?", a: "Yes. Our wedding decoration services can be combined with wedding band, brass band, dhol, DJ, ghori and vintage car services for a complete wedding package." },
          { q: "Do you provide baraat lighting in Agra?", a: "Yes. We provide spectacular LED lighting and decorative light setups for baraat processions that make your baraat visually stunning, especially at night." },
        ]}
        relatedServices={[
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Wedding Band", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Ghori & Baggi", href: "/ghori-baggi-agra/", icon: "🐎" },
          { label: "Vintage Car", href: "/vintage-car-rental-agra/", icon: "🚗" },
          { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
        ]}
      />
    </>
  );
}
