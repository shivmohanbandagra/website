import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Ghori & Baggi in Agra | Groom's Entry | Shiv Mohan Band",
  description: "Royal Ghori (decorated horse) and Baggi (horse carriage) for groom's grand wedding entry in Agra. Shiv Mohan Band and Events provides beautifully decorated Ghori and Baggi for wedding baraats in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/ghori-baggi-agra/" },
  openGraph: { title: "Ghori & Baggi in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/ghori-baggi-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Baraat Services in Agra", item: "https://www.shivmohanbandagra.com/baraat-services-agra/" },
    { "@type": "ListItem", position: 3, name: "Ghori & Baggi in Agra", item: "https://www.shivmohanbandagra.com/ghori-baggi-agra/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Ghori for a wedding baraat?", acceptedAnswer: { "@type": "Answer", text: "Ghori refers to a beautifully decorated horse on which the groom rides during the baraat procession. It is a traditional Indian wedding custom symbolizing the groom's royal status. The horse is adorned with ornate decorations, flowers and embroidered cloth." } },
    { "@type": "Question", name: "What is Baggi for a wedding?", acceptedAnswer: { "@type": "Answer", text: "Baggi is a traditional horse-drawn carriage used for weddings. It is decorated with flowers and ornate details, providing a royal and cinematic entry for the groom and sometimes the bride. Baggi combines tradition with elegance for an unforgettable baraat entry." } },
    { "@type": "Question", name: "Can I book Ghori and Baggi together in Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band and Events provides both Ghori and Baggi as part of complete baraat packages in Agra. You can book them individually or together as part of your baraat service." } },
  ],
};

export default function GhoriBaggiAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Ghori & Baggi in Agra"
        subtitle="Royal Entry for the Groom's Baraat"
        heroLabel="Traditional Ghori & Baggi — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides beautifully decorated Ghori (groom's horse) and Baggi (horse carriage) for royal wedding baraats in Agra. Make the groom's entry truly unforgettable with our traditionally adorned Ghori and elegant Baggi service."
        service="Ghori and Baggi"
        breadcrumbs={[
          { label: "Baraat Services in Agra", href: "/baraat-services-agra/" },
          { label: "Ghori & Baggi in Agra", href: "/ghori-baggi-agra/" },
        ]}
        features={[
          { icon: "🐎", title: "Beautifully Decorated Ghori", description: "Traditional groom's horse adorned with ornate decorations, embroidered cloth, flowers and traditional jewelry." },
          { icon: "🚗", title: "Royal Baggi", description: "Elegant horse-drawn carriage decorated with flowers and ornate details for a cinematic, royal baraat entry." },
          { icon: "🌸", title: "Floral Decorations", description: "Fresh flower decorations on the Ghori and Baggi matching your wedding colour theme and aesthetic." },
          { icon: "👑", title: "Royal Experience", description: "Creating the royal, traditional atmosphere that makes the groom's baraat entry a truly spectacular moment." },
          { icon: "📸", title: "Photogenic Setup", description: "Our decorated Ghori and Baggi create stunning backdrops for wedding photography and videography." },
          { icon: "🎺", title: "Complete with Band & Dhol", description: "Combine Ghori and Baggi with our wedding band, dhol and DJ for the complete royal baraat experience." },
        ]}
        whyChooseItems={[
          { title: "Traditional & Authentic", description: "Our Ghori and Baggi maintain the authentic traditional aesthetic that makes Indian wedding baraats so special." },
          { title: "Beautiful Decorations", description: "Professionally decorated with fresh flowers, ornate cloth and traditional embellishments matching your wedding theme." },
          { title: "Part of Complete Baraat Package", description: "Book Ghori and Baggi as part of a complete baraat package with band, dhol, DJ and all other services." },
          { title: "45+ Years of Experience", description: "Shiv Mohan Band has been providing Ghori and Baggi for wedding baraats in Agra since 1980." },
        ]}
        faqs={[
          { q: "What is Ghori for a wedding baraat?", a: "Ghori is a beautifully decorated horse on which the groom rides during the baraat procession — a traditional Indian wedding custom symbolizing the groom's royal status. The horse is adorned with ornate decorations, flowers and embroidered cloth." },
          { q: "What is Baggi for a wedding?", a: "Baggi is a traditional horse-drawn carriage decorated with flowers and ornate details, providing a royal and cinematic entry for the groom during the baraat. It combines tradition with elegance for an unforgettable baraat entry." },
          { q: "Can I book Ghori and Baggi together in Agra?", a: "Yes. Shiv Mohan Band and Events provides both Ghori and Baggi as part of complete baraat packages in Agra — individually or together." },
          { q: "Is Ghori available with the wedding band in Agra?", a: "Yes. Ghori can be booked as part of our complete baraat package including wedding band, brass band, Punjabi Dhol, Nashik Dhol, DJ, vintage cars and decoration." },
        ]}
        relatedServices={[
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Vintage Car", href: "/vintage-car-rental-agra/", icon: "🚗" },
          { label: "Wedding Band", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
        ]}
      />
    </>
  );
}
