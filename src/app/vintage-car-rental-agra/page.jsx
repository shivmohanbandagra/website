import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Vintage Car for Wedding in Agra | Shiv Mohan Band and Events",
  description: "Luxury vintage car rental for weddings in Agra. Shiv Mohan Band and Events provides beautifully decorated vintage cars for grand wedding entries and baraat processions in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/vintage-car-rental-agra/" },
  openGraph: { title: "Vintage Car for Wedding in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/vintage-car-rental-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Baraat Services in Agra", item: "https://www.shivmohanbandagra.com/baraat-services-agra/" },
    { "@type": "ListItem", position: 3, name: "Vintage Car for Wedding", item: "https://www.shivmohanbandagra.com/vintage-car-rental-agra/" },
  ],
};

export default function VintageCarRentalAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Vintage Car for Wedding in Agra"
        subtitle="Grand Entry & Baraat Procession"
        heroLabel="Luxury Vintage Car Wedding Service — Agra"
        description="Shiv Mohan Band and Events provides luxury vintage cars for grand wedding entries and baraat processions in Agra. Our beautifully decorated vintage cars create a cinematic, elegant and unforgettable entry that sets the tone for a truly royal wedding celebration."
        service="vintage car"
        breadcrumbs={[
          { label: "Baraat Services in Agra", href: "/baraat-services-agra/" },
          { label: "Vintage Car for Wedding", href: "/vintage-car-rental-agra/" },
        ]}
        features={[
          { icon: "🚗", title: "Classic Vintage Cars", description: "Beautiful vintage and classic cars that add elegance and a cinematic quality to your wedding entry and baraat procession." },
          { icon: "🌸", title: "Floral Decoration", description: "Cars decorated with fresh flowers and ornamental details matching your wedding colour scheme." },
          { icon: "📸", title: "Perfect for Photography", description: "Vintage cars create stunning photo opportunities for wedding photography and cinematic videography." },
          { icon: "👑", title: "Royal Grand Entry", description: "Create a truly royal, memorable wedding entry that guests will talk about for years." },
          { icon: "🎺", title: "Complete with Band & Dhol", description: "Vintage car combined with wedding band, dhol and DJ creates the ultimate royal baraat procession in Agra." },
          { icon: "📍", title: "All Agra Venues", description: "Available for weddings at any venue, marriage garden or banquet hall across Agra and surrounding areas." },
        ]}
        whyChooseItems={[
          { title: "Elegant Vintage Cars", description: "Carefully maintained vintage and classic cars that add timeless elegance to your wedding procession." },
          { title: "Beautifully Decorated", description: "Professionally decorated with fresh flowers and ornamental details to match your wedding theme." },
          { title: "Part of Complete Baraat Package", description: "Book vintage car as part of a complete baraat package with band, dhol, DJ, ghori and baggi." },
          { title: "45+ Years of Experience", description: "Shiv Mohan Band has been providing vintage car services for weddings in Agra since 1980." },
        ]}
        faqs={[
          { q: "Why use a vintage car for a wedding in Agra?", a: "A vintage car adds elegance, cinema-quality aesthetics and timeless charm to your wedding entry or baraat procession. It creates stunning photo and video opportunities and makes the groom's entry truly unforgettable." },
          { q: "Can I book a vintage car with the wedding band?", a: "Yes. Shiv Mohan Band offers vintage car as part of complete baraat packages including wedding band, brass band, Punjabi Dhol, Nashik Dhol, DJ, ghori and baggi." },
          { q: "Is the vintage car decorated for the wedding?", a: "Yes. Our vintage cars are professionally decorated with fresh flowers and ornamental details that can match your wedding colour scheme and aesthetic." },
          { q: "Do you provide vintage car services across Agra?", a: "Yes. Our vintage car service is available for weddings at any venue across Agra and surrounding areas." },
        ]}
        relatedServices={[
          { label: "Ghori & Baggi", href: "/ghori-baggi-agra/", icon: "🐎" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Wedding Band", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Wedding Decoration", href: "/wedding-decoration-agra/", icon: "🌸" },
        ]}
      />
    </>
  );
}
