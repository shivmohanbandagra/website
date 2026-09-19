import ServicePageLayout from "@/components/service-page-layout";

export const metadata = {
  title: "Wedding Band in Agra | Shiv Mohan Band and Events",
  description:
    "Shiv Mohan Band and Events — Agra's most trusted wedding band for royal baraats. Live brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai & complete baraat services in Agra since 1980. Book your date today.",
  alternates: {
    canonical: "https://www.shivmohanbandagra.com/wedding-band-agra/",
  },
  openGraph: {
    title: "Wedding Band in Agra | Shiv Mohan Band and Events",
    description:
      "Agra's most trusted wedding band since 1980. Complete baraat services — brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai, vintage cars & royal baraat arrangements in Agra.",
    url: "https://www.shivmohanbandagra.com/wedding-band-agra/",
  },
};

const serviceFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a wedding band in Agra include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A wedding band in Agra typically includes live musicians performing brass instruments, percussion, and coordinated performers. Shiv Mohan Band offers wedding bands combined with Punjabi Dhol, Nashik Dhol, shehnai, DJ, lighting, ghori, baggi and vintage cars for complete baraat entertainment.",
      },
    },
    {
      "@type": "Question",
      name: "How early should I book a wedding band in Agra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wedding dates in Agra fill up quickly during peak wedding season (November–February and May–June). We recommend booking your wedding band at least 3–6 months in advance to secure your date. Contact us on WhatsApp at +91 94575 00318 to check availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Punjabi Dhol with the wedding band?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shiv Mohan Band and Events provides both Punjabi Dhol and Nashik Dhol as part of our baraat packages. You can book the band alone or in combination with dhol, DJ, shehnai and other services.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Agra do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place, Fatehabad Road and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a wedding band cost in Agra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wedding band pricing in Agra depends on the services selected, event duration, band size and date. Contact Shiv Mohan Band on WhatsApp at +91 94575 00318 for a custom quote based on your wedding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize my baraat package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. We offer fully customizable baraat packages combining wedding band, Punjabi Dhol, Nashik Dhol, DJ on wheels, shehnai, lighting, ghori, baggi, vintage cars and decoration based on your preferences and budget.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Wedding Band in Agra", item: "https://www.shivmohanbandagra.com/wedding-band-agra/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wedding Band in Agra",
  description: "Live wedding band performance for baraats, wedding processions and traditional celebrations in Agra. Services include brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ and complete baraat entertainment.",
  provider: {
    "@type": "LocalBusiness",
    name: "Shiv Mohan Band and Events",
    url: "https://www.shivmohanbandagra.com",
    telephone: "+919457500318",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla",
      addressLocality: "Agra",
      postalCode: "282007",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  areaServed: { "@type": "City", name: "Agra" },
  serviceType: "Wedding Band",
};

export default function WeddingBandAgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFAQSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePageLayout
        title="Wedding Band in Agra"
        subtitle="Royal Baraat & Celebrations"
        heroLabel="Agra's Most Trusted Wedding Band Since 1980"
        description="Shiv Mohan Band and Events is Agra's most trusted wedding band, providing live brass band, Punjabi Dhol, Nashik Dhol, shehnai, DJ and complete royal baraat entertainment. Trusted by 250+ families across Agra since 1980."
        service="wedding band"
        breadcrumbs={[{ label: "Wedding Band in Agra", href: "/wedding-band-agra/" }]}
        features={[
          {
            icon: "🎺",
            title: "Live Brass Band",
            description: "Professional brass band with coordinated performers — creating the perfect atmosphere for a royal baraat procession in Agra.",
          },
          {
            icon: "🥁",
            title: "Punjabi & Nashik Dhol",
            description: "High-energy Punjabi Dhol and traditional Nashik Dhol available as part of your baraat package for maximum celebration.",
          },
          {
            icon: "🎷",
            title: "Shehnai & Live Music",
            description: "Classical shehnai and live music to add a traditional and spiritual touch to your wedding ceremony.",
          },
          {
            icon: "🎧",
            title: "DJ on Wheels",
            description: "Modern DJ on wheels with professional sound system to keep the baraat energy high from start to finish.",
          },
          {
            icon: "🐎",
            title: "Ghori & Baggi",
            description: "Traditional decorated horse (Ghori) and royal Baggi (horse carriage) for the groom's grand entrance.",
          },
          {
            icon: "🚗",
            title: "Vintage Cars",
            description: "Luxury vintage cars for a grand and elegant wedding entry, perfect for the royal baraat experience.",
          },
        ]}
        whyChooseItems={[
          {
            title: "Over 45 Years of Experience",
            description: "Shiv Mohan Band has been serving weddings in Agra since 1980 — trusted by multiple generations of families.",
          },
          {
            title: "4.9★ Google Rating with 250+ Reviews",
            description: "One of Agra's highest-rated wedding bands, trusted and verified by hundreds of real families.",
          },
          {
            title: "Complete Baraat Package",
            description: "One-stop service for everything your baraat needs — band, dhol, DJ, shehnai, ghori, baggi, vintage cars and decoration.",
          },
          {
            title: "Serving All Areas of Agra",
            description: "We cover Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Dayal Bagh, Agra Cantt and all surrounding areas.",
          },
          {
            title: "Customizable Packages",
            description: "Build your baraat package based on your needs, venue and budget — no rigid fixed packages.",
          },
          {
            title: "Professional Performers",
            description: "Experienced, well-uniformed musicians and performers who make every baraat look and sound spectacular.",
          },
        ]}
        faqs={[
          {
            q: "What does a wedding band in Agra include?",
            a: "A wedding band in Agra typically includes live musicians performing brass instruments, percussion, and coordinated performers. Shiv Mohan Band offers wedding bands combined with Punjabi Dhol, Nashik Dhol, shehnai, DJ, lighting, ghori, baggi and vintage cars for complete baraat entertainment.",
          },
          {
            q: "How early should I book a wedding band in Agra?",
            a: "Wedding dates in Agra fill up quickly during peak wedding season (November–February and May–June). We recommend booking your wedding band at least 3–6 months in advance to secure your date. Contact us on WhatsApp at +91 94575 00318 to check availability.",
          },
          {
            q: "Do you provide Punjabi Dhol with the wedding band?",
            a: "Yes. Shiv Mohan Band and Events provides both Punjabi Dhol and Nashik Dhol as part of our baraat packages. You can book the band alone or in combination with dhol, DJ, shehnai and other services.",
          },
          {
            q: "Which areas of Agra do you serve?",
            a: "We serve all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place, Fatehabad Road and surrounding areas.",
          },
          {
            q: "How much does a wedding band cost in Agra?",
            a: "Wedding band pricing in Agra depends on the services selected, event duration, band size and date. Contact Shiv Mohan Band on WhatsApp at +91 94575 00318 for a custom quote based on your wedding requirements.",
          },
          {
            q: "Can I customize my baraat package?",
            a: "Yes, absolutely. We offer fully customizable baraat packages combining wedding band, Punjabi Dhol, Nashik Dhol, DJ on wheels, shehnai, lighting, ghori, baggi, vintage cars and decoration based on your preferences and budget.",
          },
          {
            q: "Do you travel outside Agra for weddings?",
            a: "Yes, Shiv Mohan Band and Events travels to nearby areas outside Agra for weddings and special events. Contact us with your event location for travel availability and pricing.",
          },
          {
            q: "What is the difference between Punjabi Dhol and Nashik Dhol?",
            a: "Punjabi Dhol is known for its high-energy beats used in folk dance performances and lively baraat celebrations. Nashik Dhol is a traditional Maharashtrian drum played in a group, producing a powerful and energetic rhythm. Both are available with Shiv Mohan Band's baraat packages.",
          },
        ]}
        relatedServices={[
          { label: "Brass Band in Agra", href: "/brass-band-agra/", icon: "🎺" },
          { label: "Punjabi Dhol in Agra", href: "/punjabi-dhol-agra/", icon: "🥁" },
          { label: "Nashik Dhol in Agra", href: "/nashik-dhol-agra/", icon: "🥁" },
          { label: "DJ on Wheels in Agra", href: "/dj-on-wheels-agra/", icon: "🎧" },
          { label: "Baraat Services", href: "/baraat-services-agra/", icon: "🎉" },
          { label: "Ghori & Baggi", href: "/ghori-baggi-agra/", icon: "🐎" },
          { label: "Vintage Car", href: "/vintage-car-rental-agra/", icon: "🚗" },
          { label: "Shehnai Player", href: "/shehnai-player-agra/", icon: "🎷" },
        ]}
      />
    </>
  );
}
