import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Brass Band in Agra | Shiv Mohan Band and Events",
  description:
    "Professional brass band in Agra for wedding baraats and celebrations. Shiv Mohan Band and Events provides skilled brass band performers for royal baraat processions in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/brass-band-agra/" },
  openGraph: {
    title: "Brass Band in Agra | Shiv Mohan Band and Events",
    description: "Professional brass band for wedding baraats in Agra. Shiv Mohan Band — trusted since 1980.",
    url: "https://www.shivmohanbandagra.com/brass-band-agra/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a brass band for wedding baraats?", acceptedAnswer: { "@type": "Answer", text: "A brass band for wedding baraats consists of musicians playing brass instruments like trumpets, trombones, tubas and percussion instruments. The band leads the baraat procession with energetic, celebratory music to create a festive atmosphere." } },
    { "@type": "Question", name: "How many musicians are in a brass band for a baraat?", acceptedAnswer: { "@type": "Answer", text: "A baraat brass band typically includes 15–30 or more musicians depending on the package selected. Shiv Mohan Band offers various sizes to match the scale of your wedding event in Agra." } },
    { "@type": "Question", name: "Can I book a brass band with Punjabi Dhol?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band offers combined packages with brass band + Punjabi Dhol + Nashik Dhol + DJ on wheels for a complete baraat entertainment experience." } },
    { "@type": "Question", name: "Do you provide brass band services in all areas of Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes, we serve all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar, Dayal Bagh, Agra Cantt and surrounding regions." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Band in Agra", item: "https://www.shivmohanbandagra.com/wedding-band-agra/" },
    { "@type": "ListItem", position: 3, name: "Brass Band in Agra", item: "https://www.shivmohanbandagra.com/brass-band-agra/" },
  ],
};

export default function BrassBandAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Brass Band in Agra"
        subtitle="For Wedding Baraats & Celebrations"
        heroLabel="Professional Brass Band for Royal Baraat — Agra"
        description="Shiv Mohan Band and Events provides professional brass band performers for wedding baraats and celebrations in Agra. Our skilled brass band musicians lead baraat processions with energetic, traditional music that creates an unforgettable royal atmosphere."
        service="brass band"
        breadcrumbs={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/" },
        ]}
        features={[
          { icon: "🎺", title: "Professional Brass Instruments", description: "Skilled musicians playing trumpets, trombones, tubas and other brass instruments for a powerful, celebratory sound." },
          { icon: "🥁", title: "Live Percussion", description: "Coordinated percussion section complementing the brass instruments to keep the baraat energy and rhythm high." },
          { icon: "👔", title: "Uniformed Performers", description: "Well-dressed, uniformed band members presenting a professional and royal appearance for your wedding procession." },
          { icon: "🎵", title: "Traditional & Modern Music", description: "Performs both traditional wedding songs and popular Bollywood baraat tracks to keep guests entertained." },
          { icon: "🕯️", title: "Decorative Lighting", description: "LED lighting and decorative lights to enhance the visual spectacle of the baraat procession at night." },
          { icon: "🎉", title: "Customizable Package", description: "Choose brass band only or combine with Punjabi Dhol, Nashik Dhol, DJ and other services for your complete baraat." },
        ]}
        whyChooseItems={[
          { title: "45+ Years of Expertise", description: "Shiv Mohan Band has been leading wedding baraats in Agra since 1980 with professional brass band performances." },
          { title: "Experienced Musicians", description: "Our brass band musicians are experienced, trained performers who understand the energy and flow of a baraat." },
          { title: "All Agra Areas Covered", description: "We serve every neighbourhood in Agra — from Bodla and Sikandra to Tajganj, Sadar Bazaar and Dayal Bagh." },
          { title: "Flexible Band Sizes", description: "From small intimate baraats to grand royal processions — we offer brass bands of various sizes." },
        ]}
        faqs={[
          { q: "What is a brass band for wedding baraats?", a: "A brass band for wedding baraats consists of musicians playing brass instruments like trumpets, trombones, tubas and percussion. The band leads the baraat procession with energetic, celebratory music." },
          { q: "How many musicians are in a brass band for a baraat?", a: "A baraat brass band typically includes 15–30 or more musicians depending on the package. Shiv Mohan Band offers various sizes to match the scale of your wedding event in Agra." },
          { q: "Can I book a brass band with Punjabi Dhol?", a: "Yes. Shiv Mohan Band offers combined packages with brass band + Punjabi Dhol + Nashik Dhol + DJ on wheels for a complete baraat entertainment experience." },
          { q: "Do you provide brass band services across Agra?", a: "Yes, we serve all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar, Dayal Bagh, Agra Cantt and surrounding regions." },
          { q: "What kind of music does the brass band play at baraats?", a: "Our brass band performs traditional wedding songs, popular Bollywood baraat tracks, folk music and celebratory tunes that keep the entire procession energetic and festive." },
        ]}
        relatedServices={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Shehnai Player", href: "/shehnai-player-agra/", icon: "🎷" },
        ]}
      />
    </>
  );
}
