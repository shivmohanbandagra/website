// import {
//   Inter,
//   Cormorant_Garamond,
//   Cinzel,
//   Noto_Sans_Devanagari,
// } from "next/font/google";
// import "./globals.css";


// export const metadata = {
//   title: "Shiv Mohan Band and Events | Premium Royal Baraats",
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
import Script from "next/script";
import dynamic from "next/dynamic";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LocalBusinessSchema from "@/components/schema";
// FloatingActions only appears after scroll — lazy load it
const FloatingActions = dynamic(() => import("@/components/floating-actions"), { ssr: true });


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// 2. Headings: luxury editorial serif — load only needed weights
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

// 3. Subheadings: royal cinematic serif
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

// 4. Hindi Accents: Devanagari — load on demand
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-noto-hindi",
  display: "swap",
  preload: false,
});


// ... (Font initializations remain exactly the same) ...

export const metadata = {
  metadataBase: new URL("https://www.shivmohanbandagra.com"),
  title: {
    default: "Wedding Band in Agra | Shiv Mohan Band and Events",
    template: "%s | Shiv Mohan Band and Events",
  },
  description:
    "Looking for a wedding band in Agra? Shiv Mohan Band and Events provides wedding bands, brass bands, Punjabi & Nashik Dhol, DJ, shehnai and royal baraat services. Trusted since 1980. Book your date today.",
  keywords: [
    "wedding band in Agra",
    "best wedding band in Agra",
    "wedding bands in Agra",
    "brass band in Agra",
    "band baja in Agra",
    "baraat band Agra",
    "Punjabi dhol Agra",
    "Nashik dhol Agra",
    "dhol player Agra",
    "shehnai player Agra",
    "wedding DJ Agra",
    "ghori baggi Agra",
    "vintage car wedding Agra",
    "wedding decoration Agra",
    "wedding band near me",
    "live band Agra",
    "baraat services Agra",
    "Shiv Mohan Band",
    "Shiv Mohan Band Agra",
  ],
  authors: [{ name: "Shiv Mohan Band and Events" }],
  creator: "Shiv Mohan Band and Events",
  publisher: "Shiv Mohan Band and Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.shivmohanbandagra.com/",
  },
  openGraph: {
    title: "Wedding Band in Agra | Shiv Mohan Band and Events",
    description:
      "Shiv Mohan Band and Events — Agra's most trusted wedding band providing brass band, Punjabi Dhol, Nashik Dhol, DJ, shehnai, vintage cars and royal baraat entertainment since 1980.",
    url: "https://www.shivmohanbandagra.com",
    siteName: "Shiv Mohan Band and Events",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiv Mohan Band and Events— Wedding Band & Baraat Services in Agra",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "x0JN7b2YKYJEsuFATuNKte6Q39ZddENVyL8WUjDFd6I",
  },
};
// <meta name="google-site-verification" content="x0JN7b2YKYJEsuFATuNKte6Q39ZddENVyL8WUjDFd6I" />
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HXKPKR56CG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXKPKR56CG');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased transition-colors duration-500 selection:bg-gold/30 selection:text-foreground">
        <Providers>
          <LocalBusinessSchema />
          <Navbar />
          {children}
          <FloatingActions />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
