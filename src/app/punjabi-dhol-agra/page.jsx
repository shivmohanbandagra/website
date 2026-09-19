import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Punjabi Dhol in Agra | Shiv Mohan Band and Events",
  description:
    "High-energy Punjabi Dhol for weddings and baraats in Agra. Shiv Mohan Band and Events provides professional Punjabi Dhol players for wedding processions and baraat celebrations in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/punjabi-dhol-agra/" },
  openGraph: {
    title: "Punjabi Dhol in Agra | Shiv Mohan Band and Events",
    description: "Professional Punjabi Dhol players for wedding baraats in Agra. Book Shiv Mohan Band — trusted since 1980.",
    url: "https://www.shivmohanbandagra.com/punjabi-dhol-agra/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Punjabi Dhol and why is it used in weddings?", acceptedAnswer: { "@type": "Answer", text: "Punjabi Dhol is a large, two-headed drum from Punjab, known for its powerful, energetic beats. It is traditionally used in baraat processions and wedding celebrations to create high energy and excitement. The rhythmic beat of the Punjabi Dhol is famous for making guests dance and celebrate joyfully." } },
    { "@type": "Question", name: "How is Punjabi Dhol different from Nashik Dhol?", acceptedAnswer: { "@type": "Answer", text: "Punjabi Dhol has a deep, booming sound and is associated with folk dance styles like Bhangra. It is played by a single drummer using two different sticks. Nashik Dhol is a different type of drum originating from Maharashtra, typically played in groups of 4–12 drummers, producing a different, powerful rhythm. Both are available at Shiv Mohan Band." } },
    { "@type": "Question", name: "Can I book Punjabi Dhol with the wedding band?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band offers Punjabi Dhol as part of combined baraat packages that include the brass band, Nashik Dhol, DJ on wheels, shehnai and other services." } },
    { "@type": "Question", name: "Do you provide Punjabi Dhol in all areas of Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide Punjabi Dhol services in all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Dayal Bagh, Kamla Nagar, Agra Cantt and surrounding areas." } },
    { "@type": "Question", name: "How many Punjabi Dhol players do I need for my baraat?", acceptedAnswer: { "@type": "Answer", text: "For most baraats, 1–2 Punjabi Dhol players are sufficient. For larger processions, additional players can be arranged. Contact Shiv Mohan Band to discuss the right number for your event size." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Band in Agra", item: "https://www.shivmohanbandagra.com/wedding-band-agra/" },
    { "@type": "ListItem", position: 3, name: "Punjabi Dhol in Agra", item: "https://www.shivmohanbandagra.com/punjabi-dhol-agra/" },
  ],
};

export default function PunjabiDholAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Punjabi Dhol in Agra"
        subtitle="High-Energy Dhol for Your Baraat"
        heroLabel="Professional Punjabi Dhol — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events provides high-energy Punjabi Dhol players for wedding baraats and celebrations in Agra. The powerful beats of Punjabi Dhol create an electric atmosphere that makes every baraat procession truly unforgettable."
        service="Punjabi Dhol"
        breadcrumbs={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/" },
          { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/" },
        ]}
        features={[
          { icon: "🥁", title: "Authentic Punjabi Dhol", description: "Traditional large two-headed drum producing powerful, deep beats that energize the entire baraat procession." },
          { icon: "💃", title: "Makes Guests Dance", description: "The energetic rhythm of Punjabi Dhol is famous for getting everyone dancing — from the groom's family to all guests." },
          { icon: "🎵", title: "Traditional & Bollywood Beats", description: "Expert players perform traditional Punjabi beats, Bhangra rhythms and popular Bollywood wedding songs." },
          { icon: "🎺", title: "Combine with Wedding Band", description: "Perfect as a complement to the brass band and wedding band for a complete, high-energy baraat experience." },
          { icon: "⚡", title: "High-Energy Performance", description: "Experienced dhol players who understand the flow of a baraat and know when to build energy and when to sustain it." },
          { icon: "📍", title: "All Areas of Agra", description: "We travel to all venues and locations within Agra for your wedding baraat performance." },
        ]}
        whyChooseItems={[
          { title: "Experienced Dhol Players", description: "Our Punjabi Dhol players have years of experience performing at weddings and baraats across Agra." },
          { title: "Authentic Sound", description: "Traditional Punjabi Dhol instruments producing the authentic, powerful sound that defines great baraat celebrations." },
          { title: "Flexible Bookings", description: "Book Punjabi Dhol alone or as part of a combined baraat package with band, Nashik Dhol, DJ and other services." },
          { title: "All Agra Areas", description: "Serving Bodla, Sikandra, Tajganj, Shahganj, Sadar, Dayal Bagh, Agra Cantt and all surrounding neighbourhoods." },
        ]}
        faqs={[
          { q: "What is Punjabi Dhol and why is it used in weddings?", a: "Punjabi Dhol is a large, two-headed drum from Punjab, known for its powerful, energetic beats used in baraat processions and wedding celebrations. The rhythmic beat is famous for making guests dance and celebrate joyfully." },
          { q: "How is Punjabi Dhol different from Nashik Dhol?", a: "Punjabi Dhol has a deep, booming sound associated with folk dance styles like Bhangra, played by a single drummer. Nashik Dhol is from Maharashtra, typically played in groups producing a different, powerful rhythm. Both are available at Shiv Mohan Band." },
          { q: "Can I book Punjabi Dhol with the wedding band?", a: "Yes. Shiv Mohan Band offers Punjabi Dhol as part of combined baraat packages including brass band, Nashik Dhol, DJ on wheels, shehnai and other services." },
          { q: "Do you provide Punjabi Dhol in all areas of Agra?", a: "Yes. We provide Punjabi Dhol services across all Agra areas including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Dayal Bagh, Kamla Nagar, Agra Cantt and surrounding areas." },
          { q: "How many Punjabi Dhol players do I need for my baraat?", a: "For most baraats, 1–2 Punjabi Dhol players are sufficient. For larger processions, additional players can be arranged. Contact Shiv Mohan Band at +91 94575 00318 to discuss." },
        ]}
        relatedServices={[
          { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/", icon: "🥁" },
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
