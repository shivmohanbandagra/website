// import {
//   Inter,
//   Cormorant_Garamond,
//   Cinzel,
//   Noto_Sans_Devanagari,
// } from "next/font/google";
// import "./globals.css";


// export const metadata = {
//   title: "Shiv Mohan Band & Events | Premium Royal Baraats",
//   description:
//     "Making Royal Baraats Memorable Since 1980. Trusted by generations of families across India for unforgettable luxury wedding experiences.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//       className={`
//         ${inter.variable} 
//         ${cormorantGaramond.variable} 
//         ${cinzel.variable} 
//         ${notoSansDevanagari.variable}
//       `}
//     >
//       <body className="font-sans bg-background text-foreground antialiased transition-colors duration-500 selection:bg-gold/30 selection:text-foreground">
//         {children}
//       </body>
//     </html>
//   );
// }

import {
  Inter,
  Cormorant_Garamond,
  Cinzel,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LocalBusinessSchema from "@/components/schema";
import FloatingActions from "@/components/floating-actions";


// 1. Core Typography: Minimal layout shifts, high performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. Headings: The luxury, editorial serif
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// 3. Subheadings: The royal, cinematic serif
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

// 4. Hindi Accents: Clean and traditional Devanagari
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-hindi",
  display: "swap",
});


// ... (Font initializations remain exactly the same) ...

export const metadata = {
  metadataBase: new URL("https://www.shivmohanband.com"),
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
    url: "https://www.shivmohanband.com",
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
verification: {
    google: "A2b6yMNt6PwEdGkjkPSCa5n0BS-4iMclKv6Xef9vfZA",
  },
};
{/* <meta name="google-site-verification" content="A2b6yMNt6PwEdGkjkPSCa5n0BS-4iMclKv6Xef9vfZA" /> */}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${inter.variable} 
        ${cormorantGaramond.variable} 
        ${cinzel.variable} 
        ${notoSansDevanagari.variable}
      `}
    >
      <body className="font-sans bg-background text-foreground antialiased transition-colors duration-500 selection:bg-gold/30 selection:text-foreground">
        <Providers>
          {/* <LocalBusinessSchema /> */}
          <Navbar />
          {children}
      <FloatingActions />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}