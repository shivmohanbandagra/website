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


import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import ServicesSection from "@/components/services";
import FeaturedGallery from "@/components/gallery";
import ExperienceTimeline from "@/components/timeline";
// import Testimonials from "@/components/testimonials";
// import FloatingActions from "@/components/floating-actions";
import GoogleReviewsSection from "@/components/google-reviews-section";
// import GoogleReviewsHighlight from "@/components/GoogleReviewHighlights";
import ContactCTA from "@/components/contactcta";

export const metadata = {
  metadataBase: new URL("https://www.shivmohanbandagra.com"),
  title: {
    default:"Shiv Mohan Band Agra | Wedding Band, DJ, Ghori & Baggi",
    template: "%s | Shiv Mohan Band",
  },
 description:"Shiv Mohan Band Agra provides wedding band, DJ, Nashik Dhol, Ghori, Baggi, vintage cars, lighting and complete baraat services across Agra since 1980.",
  keywords: [
  "Wedding Band Agra",
  "Marriage Band Agra",
  "Baraat Band Agra",
  "DJ Services Agra",
  "Ghori Booking Agra",
  "Baggi Booking Agra",
  "Nashik Dhol Agra",
  "Wedding Lighting Agra",
  "Vintage Car Rental Agra",
  "Wedding Event Planner Agra",
  "Shiv Mohan Band"
],
  authors: [{ name: "Shiv Mohan Band & Events" }],
  creator: "Shiv Mohan Band & Events",
  publisher: "Shiv Mohan Band & Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:"Wedding Band in Agra | Shiv Mohan Band & Events",
    description: "Wedding Band, DJ, Ghori, Baggi, Nashik Dhol & Vintage Cars in Agra. Trusted by generations of families across India for unforgettable, luxury wedding experiences.",
    url: "https://www.shivmohanbandagra.com",
    siteName: "Shiv Mohan Band & Events",
    images: [
      {
        url: "/images/og-image.png", // Ensure you create a high-res 1200x630 image here
        width: 1200,
        height: 630,
        alt: "Royal Indian Baraat Celebration",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Mohan Band & Events",
    description: "Making Royal Baraats Memorable Since 1980.",
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
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
},
// verification: {
//     google: "A2b6yMNt6PwEdGkjkPSCa5n0BS-4iMclKv6Xef9vfZA",
//   },
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
