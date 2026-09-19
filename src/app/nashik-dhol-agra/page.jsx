import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Nashik Dhol in Agra | Shiv Mohan Band and Events",
  description:
    "Traditional Nashik Dhol for weddings and baraats in Agra. Shiv Mohan Band and Events provides powerful Nashik Dhol group performances for wedding processions and celebrations in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/nashik-dhol-agra/" },
  openGraph: {
    title: "Nashik Dhol in Agra | Shiv Mohan Band and Events",
    description: "Powerful Nashik Dhol group performance for wedding baraats in Agra. Book Shiv Mohan Band — trusted since 1980.",
    url: "https://www.shivmohanbandagra.com/nashik-dhol-agra/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Nashik Dhol?", acceptedAnswer: { "@type": "Answer", text: "Nashik Dhol is a type of drum originating from Nashik, Maharashtra. It is traditionally played in groups of multiple drummers (typically 4–12 players) creating a powerful, synchronized, energetic rhythm. Nashik Dhol is widely popular at wedding baraats, festivals and celebrations across India." } },
    { "@type": "Question", name: "Why is Nashik Dhol popular for wedding baraats in Agra?", acceptedAnswer: { "@type": "Answer", text: "Nashik Dhol has become extremely popular for wedding baraats in Agra because its synchronized group drumming creates a powerful, high-energy atmosphere. The visual impact of multiple uniformed players drumming in perfect synchronization adds a spectacular element to any baraat procession." } },
    { "@type": "Question", name: "How many Nashik Dhol players do you provide?", acceptedAnswer: { "@type": "Answer", text: "Shiv Mohan Band provides Nashik Dhol groups ranging from 4 to 12 players depending on your event size and requirement. Contact us at +91 94575 00318 to discuss the right group size for your wedding baraat in Agra." } },
    { "@type": "Question", name: "Can Nashik Dhol be combined with a wedding band?", acceptedAnswer: { "@type": "Answer", text: "Yes. Nashik Dhol can be combined with our wedding band, brass band, Punjabi Dhol, DJ on wheels and other services for a complete, spectacular baraat experience." } },
    { "@type": "Question", name: "Do you provide Nashik Dhol in all areas of Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band provides Nashik Dhol performances across all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Dayal Bagh and surrounding regions." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Band in Agra", item: "https://www.shivmohanbandagra.com/wedding-band-agra/" },
    { "@type": "ListItem", position: 3, name: "Nashik Dhol in Agra", item: "https://www.shivmohanbandagra.com/nashik-dhol-agra/" },
  ],
};

export default function NashikDholAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Nashik Dhol in Agra"
        subtitle="Powerful Group Dhol for Spectacular Baraats"
        heroLabel="Professional Nashik Dhol Group — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides powerful Nashik Dhol group performances for wedding baraats and celebrations in Agra. The synchronized power of multiple Nashik Dhol players creates a visually stunning and energetically electrifying baraat experience."
        service="Nashik Dhol"
        breadcrumbs={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/" },
          { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/" },
        ]}
        features={[
          { icon: "🥁", title: "Group Nashik Dhol Performance", description: "4–12 synchronized Nashik Dhol players performing in perfect coordination for a spectacular visual and audio experience." },
          { icon: "🎶", title: "Powerful Synchronized Rhythms", description: "The combined power of multiple Nashik Dhol players creates a rhythm that resonates through the entire baraat procession." },
          { icon: "👔", title: "Uniformed Performers", description: "Professional, uniformed Nashik Dhol performers maintaining the royal aesthetic of your baraat." },
          { icon: "⚡", title: "High-Energy Performance", description: "Nashik Dhol groups are known for their high-energy, enthusiastic performances that energize every baraat." },
          { icon: "🎺", title: "Perfect with Brass Band", description: "Nashik Dhol combined with the brass band creates the ultimate royal baraat experience in Agra." },
          { icon: "📍", title: "All Agra Venues", description: "Available for wedding baraats at any venue in Agra and surrounding areas." },
        ]}
        whyChooseItems={[
          { title: "Experienced Nashik Dhol Groups", description: "Our Nashik Dhol players are experienced performers who specialize in wedding baraats and special celebrations in Agra." },
          { title: "Flexible Group Sizes", description: "Choose from groups of 4 to 12 Nashik Dhol players based on your event size and budget." },
          { title: "Combine with Other Services", description: "Book Nashik Dhol with wedding band, brass band, Punjabi Dhol, DJ and other services for a complete baraat package." },
          { title: "Visual Spectacle", description: "The coordinated group performance of Nashik Dhol creates a visually stunning element that makes your baraat truly memorable." },
        ]}
        faqs={[
          { q: "What is Nashik Dhol?", a: "Nashik Dhol is a type of drum originating from Nashik, Maharashtra. It is traditionally played in groups of multiple drummers creating a powerful, synchronized, energetic rhythm. Nashik Dhol is widely popular at wedding baraats and celebrations across India." },
          { q: "Why is Nashik Dhol popular for wedding baraats in Agra?", a: "Nashik Dhol has become extremely popular for wedding baraats because its synchronized group drumming creates a powerful, high-energy atmosphere. The visual impact of multiple uniformed players drumming in perfect synchronization adds a spectacular element to any baraat." },
          { q: "How many Nashik Dhol players do you provide?", a: "Shiv Mohan Band provides Nashik Dhol groups ranging from 4 to 12 players depending on your event size. Contact us at +91 94575 00318 to discuss the right group size for your wedding baraat in Agra." },
          { q: "Can Nashik Dhol be combined with a wedding band?", a: "Yes. Nashik Dhol can be combined with our wedding band, brass band, Punjabi Dhol, DJ on wheels and other services for a complete baraat experience." },
          { q: "Do you provide Nashik Dhol across Agra?", a: "Yes. We provide Nashik Dhol performances across all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Dayal Bagh and surrounding regions." },
        ]}
        relatedServices={[
          { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Dhol Player in Agra", href: "/dhol-player-agra/", icon: "🥁" },
        ]}
      />
    </>
  );
}
