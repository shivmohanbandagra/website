import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Baraat Services in Agra | Complete Baraat Package | Shiv Mohan Band",
  description:
    "Complete baraat services in Agra. Shiv Mohan Band and Events provides wedding band, brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai, ghori, baggi, vintage cars and full baraat entertainment in Agra since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/baraat-services-agra/" },
  openGraph: {
    title: "Baraat Services in Agra | Shiv Mohan Band and Events",
    description: "Complete baraat entertainment in Agra — band, dhol, DJ, ghori, baggi, vintage cars and more. Shiv Mohan Band since 1980.",
    url: "https://www.shivmohanbandagra.com/baraat-services-agra/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is included in a baraat package in Agra?", acceptedAnswer: { "@type": "Answer", text: "A complete baraat package in Agra from Shiv Mohan Band and Events can include: live wedding band, brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ on wheels, ghori (decorated horse for groom), baggi (horse carriage), vintage cars, decorative lighting and flower chattar. You can customize the combination based on your preferences." } },
    { "@type": "Question", name: "How much does a baraat package cost in Agra?", acceptedAnswer: { "@type": "Answer", text: "Baraat package pricing in Agra depends on the services included, event duration, date and venue. Contact Shiv Mohan Band at +91 94575 00318 on WhatsApp for a custom quote tailored to your baraat requirements." } },
    { "@type": "Question", name: "How early should I book baraat services in Agra?", acceptedAnswer: { "@type": "Answer", text: "We recommend booking baraat services in Agra at least 3–6 months in advance, especially during peak wedding season (November–February and May–June). Popular dates fill up quickly — contact us early to secure your date." } },
    { "@type": "Question", name: "Do you provide baraat services in all areas of Agra?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shiv Mohan Band provides baraat services across all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place and Fatehabad Road." } },
    { "@type": "Question", name: "Can I customize my baraat package?", acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. We offer fully customizable baraat packages. You choose the combination of services — wedding band, dhol, DJ, ghori, baggi, vintage car, lighting and decoration — based on your wedding vision and budget." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Baraat Services in Agra", item: "https://www.shivmohanbandagra.com/baraat-services-agra/" },
  ],
};

export default function BaraatServicesAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        title="Baraat Services in Agra"
        subtitle="Complete Royal Baraat Entertainment"
        heroLabel="One-Stop Baraat Services — Shiv Mohan Band Agra"
        description="Shiv Mohan Band and Events is Agra's one-stop destination for complete baraat services. From the wedding band and dhol to the groom's ghori, baggi and vintage car — we handle every element of your royal baraat procession with 45+ years of experience."
        service="baraat"
        breadcrumbs={[{ label: "Baraat Services in Agra", href: "/baraat-services-agra/" }]}
        features={[
          { icon: "🎵", title: "Live Wedding Band", description: "Professional brass band and live musicians leading your baraat procession with energetic, celebratory music." },
          { icon: "🥁", title: "Punjabi & Nashik Dhol", description: "High-energy Punjabi Dhol and synchronized Nashik Dhol group performances for maximum baraat excitement." },
          { icon: "🎧", title: "DJ on Wheels", description: "Modern DJ on wheels with professional sound system to keep the baraat energy high throughout the procession." },
          { icon: "🎷", title: "Shehnai", description: "Traditional shehnai for ceremonial moments, adding a spiritual and classical dimension to your celebrations." },
          { icon: "🐎", title: "Ghori & Baggi", description: "Beautifully decorated Ghori (horse) and royal Baggi (horse carriage) for the groom's grand baraat entrance." },
          { icon: "🚗", title: "Vintage Cars", description: "Luxury vintage cars for an elegant, cinematic entry that creates lasting memories." },
          { icon: "💡", title: "Decorative Lighting", description: "LED lights, decorative lighting and flower chattar to enhance the visual spectacle of your baraat at night." },
          { icon: "🌸", title: "Floral Decorations", description: "Flower chattar and floral decorations that add beauty and fragrance to the baraat procession." },
        ]}
        whyChooseItems={[
          { title: "Complete One-Stop Service", description: "Book every element of your baraat from a single trusted source — band, dhol, DJ, ghori, baggi, vintage cars and decoration." },
          { title: "45+ Years of Baraat Expertise", description: "Shiv Mohan Band has organized hundreds of baraats across Agra since 1980. We know exactly what makes a baraat memorable." },
          { title: "Fully Customizable Packages", description: "Build your baraat package based on your vision, venue and budget. No rigid fixed packages." },
          { title: "All Agra Areas Covered", description: "Serving all areas of Agra — Bodla, Sikandra, Tajganj, Shahganj, Sadar, Dayal Bagh, Agra Cantt and surrounding areas." },
          { title: "Professional Coordination", description: "Our experienced team coordinates all elements of the baraat to ensure everything runs smoothly and on time." },
          { title: "4.9★ Rating from 250+ Families", description: "One of Agra's highest-rated wedding and baraat service providers, trusted by hundreds of families." },
        ]}
        faqs={[
          { q: "What is included in a baraat package in Agra?", a: "A complete baraat package from Shiv Mohan Band can include: live wedding band, brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ on wheels, ghori (decorated horse), baggi (horse carriage), vintage cars, decorative lighting and flower chattar. You can customize the combination based on your preferences." },
          { q: "How much does a baraat package cost in Agra?", a: "Baraat package pricing depends on the services included, event duration, date and venue. Contact Shiv Mohan Band at +91 94575 00318 for a custom quote tailored to your baraat requirements." },
          { q: "How early should I book baraat services in Agra?", a: "We recommend booking at least 3–6 months in advance, especially during peak wedding season (November–February and May–June). Popular dates fill up quickly." },
          { q: "Do you provide baraat services across all areas of Agra?", a: "Yes. We serve all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place and Fatehabad Road." },
          { q: "Can I customize my baraat package?", a: "Yes, absolutely. We offer fully customizable baraat packages. You choose the combination of services based on your wedding vision and budget." },
        ]}
        relatedServices={[
          { label: "Wedding Band in Agra", href: "/wedding-band-agra/", icon: "🎵" },
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Punjabi Dhol", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "DJ on Wheels", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Ghori & Baggi", href: "/ghori-baggi-agra/", icon: "🐎" },
          { label: "Vintage Car", href: "/vintage-car-rental-agra/", icon: "🚗" },
          { label: "Shehnai Player", href: "/shehnai-player-agra/", icon: "🎷" },
        ]}
      />
    </>
  );
}
