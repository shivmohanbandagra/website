// import FloatingActions from "@/components/floating-actions";
// import FeaturedGallery from "@/components/gallery";
// import Hero from "@/components/hero";
// import ServicesSection from "@/components/services";
// import Testimonials from "@/components/testimonials";
// import ExperienceTimeline from "@/components/timeline";
// import TrustSection from "@/components/trust-section";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <Hero/>
//     <TrustSection/>
//     <ServicesSection/>
//     <FeaturedGallery/>
//     <ExperienceTimeline/>
//     <Testimonials/>
//     <FloatingActions/>
//     </>
  
//   );
// }


import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";

// Lazy-load everything below the fold — reduces initial JS bundle significantly
const ServicesSection = dynamic(() => import("@/components/services"), { ssr: true });
const FeaturedGallery = dynamic(() => import("@/components/gallery"), { ssr: true });
const ExperienceTimeline = dynamic(() => import("@/components/timeline"), { ssr: true });
const GoogleReviewsSection = dynamic(() => import("@/components/google-reviews-section"), { ssr: true });
const ContactCTA = dynamic(() => import("@/components/contactcta"), { ssr: true });


export const metadata = {
  metadataBase: new URL("https://www.shivmohanbandagra.com"),
  title: "Best Wedding Band in Agra | Shiv Mohan Band and Events — Since 1980",
  description:
    "Shiv Mohan Band and Events — Agra's best wedding band since 1980. We provide wedding bands, brass bands, Punjabi Dhol, Nashik Dhol, DJ on wheels, shehnai, ghori, baggi, vintage cars and complete royal baraat services in Agra. Book your baraat date now.",
  keywords: [
    "wedding band in Agra",
    "best wedding band in Agra",
    "wedding bands in Agra",
    "brass band in Agra",
    "Punjabi dhol Agra",
    "Nashik dhol Agra",
    "baraat band Agra",
    "band baja in Agra",
    "wedding DJ Agra",
    "baraat services Agra",
    "ghori baggi Agra",
    "vintage car wedding Agra",
    "shehnai player Agra",
    "wedding band near me",
    "Shiv Mohan Band Agra",
  ],
  alternates: {
    canonical: "https://www.shivmohanbandagra.com/",
  },
  openGraph: {
    title: "Wedding Band in Agra | Shiv Mohan Band and Events — Since 1980",
    description:
      "Agra's most trusted wedding band since 1980. Complete baraat services — brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai, vintage cars & royal baraat entertainment.",
    url: "https://www.shivmohanbandagra.com",
    siteName: "Shiv Mohan Band and Events",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiv Mohan Band and Events — Wedding Band & Baraat Services in Agra since 1980",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Band in Agra | Shiv Mohan Band and Events",
    description:
      "Agra's most trusted wedding band — brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai & royal baraat services since 1980.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    // The main wrapper enforces the global background to maintain the seamless theme transitions
    <main className="relative flex flex-col min-h-screen bg-background selection:bg-gold/30 selection:text-foreground">
      
      {/* 
        TODO: Insert <Navbar /> here. 
        It should ideally be fixed, transparent at the top, and blur/darken on scroll. 
      */}

      <Hero />
      <TrustSection />
      
      {/* 
        Placing Services before the Gallery gives users an immediate 
        understanding of what is offered before diving into the visual proof.
      */}
      <div id="services" ></div>
      <ServicesSection />
      <div id="gallery" ></div>
      <FeaturedGallery />
      <div id="timeline" ></div>
      <ExperienceTimeline />
      {/* <Testimonials /> */}
      <div id="testimonials" ></div>
      <GoogleReviewsSection />
      {/* <GoogleReviewsHighlight /> */}
      <div id="contact-us" ></div>
      <ContactCTA />

      {/* 
        TODO: Insert <Footer /> here. 
        Include local business schema, SEO links, and contact details. 
      */}

      {/* Global Interactive Elements */}
      
    </main>
  );
}
