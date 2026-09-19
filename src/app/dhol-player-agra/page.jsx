import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Dhol Player in Agra | Shiv Mohan Band and Events",
  description: "Professional dhol players in Agra for wedding baraats and celebrations. Shiv Mohan Band and Events provides expert dhol players for wedding processions across Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/dhol-player-agra/" },
  openGraph: { title: "Dhol Player in Agra | Shiv Mohan Band and Events", url: "https://www.shivmohanbandagra.com/dhol-player-agra/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Dhol Player in Agra", item: "https://www.shivmohanbandagra.com/dhol-player-agra/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I book a dhol player in Agra?", acceptedAnswer: { "@type": "Answer", text: "To book a dhol player in Agra for your wedding baraat, contact Shiv Mohan Band and Events on WhatsApp at +91 94575 00318 or call us directly. Share your wedding date, venue and requirements, and we will confirm availability and package details." } },
    { "@type": "Question", name: "What types of dhol are available for weddings in Agra?", acceptedAnswer: { "@type": "Answer", text: "Shiv Mohan Band offers both Punjabi Dhol (single player, high-energy folk beats) and Nashik Dhol (group performance of 4–12 players, synchronized powerful rhythms). Both types are available for wedding baraats in Agra." } },
    { "@type": "Question", name: "How much does a dhol player cost for a wedding in Agra?", acceptedAnswer: { "@type": "Answer", text: "Dhol player pricing for weddings in Agra depends on the type of dhol (Punjabi or Nashik), number of players, event duration and date. Contact Shiv Mohan Band for a custom quote at +91 94575 00318." } },
  ],
};

export default function DholPlayerAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Dhol Player in Agra"
        subtitle="For Weddings & Baraat Celebrations"
        heroLabel="Expert Dhol Players — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides expert dhol players for wedding baraats and celebrations in Agra. Whether you need Punjabi Dhol for high-energy folk beats or Nashik Dhol for a synchronized group performance, we have the right dhol player for your wedding."
        service="dhol player"
        breadcrumbs={[{ label: "Dhol Player in Agra", href: "/dhol-player-agra/" }]}
        features={[
          { icon: "🥁", title: "Punjabi Dhol Players", description: "High-energy Punjabi Dhol players delivering powerful beats that energize the entire baraat procession." },
          { icon: "🥁", title: "Nashik Dhol Groups", description: "Synchronized Nashik Dhol groups of 4–12 players for a spectacular visual and rhythmic performance." },
          { icon: "🎵", title: "Traditional & Modern Beats", description: "From traditional wedding dhol beats to popular Bollywood songs — our players adapt to your preferences." },
          { icon: "⚡", title: "High Energy Performance", description: "Experienced players who understand the flow of a baraat and keep energy levels at their peak." },
          { icon: "🎺", title: "Combine with Wedding Band", description: "Book dhol players alongside our wedding band, brass band, DJ and other services for a complete baraat." },
          { icon: "📍", title: "All Agra Areas", description: "Available at any wedding venue across Agra and surrounding areas." },
        ]}
        whyChooseItems={[
          { title: "Both Punjabi & Nashik Dhol Available", description: "Choose from Punjabi Dhol or Nashik Dhol groups based on your baraat style and preferences." },
          { title: "Experienced Performers", description: "Our dhol players have years of experience at weddings and baraats across Agra." },
          { title: "Flexible Packages", description: "Book dhol players alone or as part of a complete baraat package with band, DJ and other services." },
          { title: "Trusted Since 1980", description: "Shiv Mohan Band has been providing dhol players for weddings in Agra since 1980." },
        ]}
        faqs={[
          { q: "How do I book a dhol player in Agra?", a: "Contact Shiv Mohan Band and Events on WhatsApp at +91 94575 00318 or call us. Share your wedding date, venue and requirements, and we will confirm availability and pricing." },
          { q: "What types of dhol are available for weddings in Agra?", a: "Shiv Mohan Band offers Punjabi Dhol (single player, high-energy folk beats) and Nashik Dhol (group performance of 4–12 players, synchronized rhythms). Both are available for wedding baraats in Agra." },
          { q: "How much does a dhol player cost for a wedding in Agra?", a: "Pricing depends on the type of dhol, number of players, event duration and date. Contact Shiv Mohan Band for a custom quote at +91 94575 00318." },
          { q: "Can dhol players perform alongside a wedding band?", a: "Yes. Our dhol players regularly perform alongside the wedding band, brass band and DJ for a complete, high-energy baraat experience." },
        ]}
        relatedServices={[
          { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
        ]}
      />
    </>
  );
}
