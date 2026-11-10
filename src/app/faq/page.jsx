import FAQPageClient from "./page-client";

export const metadata = {
  title: "Wedding Band FAQ — Shiv Mohan Band and Events Agra",
  description: "Answers about wedding band services, baraat packages, Punjabi and Nashik Dhol, DJ, pricing and booking with Shiv Mohan Band & Events in Agra.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/faq/" },
  openGraph: {
    title: "Wedding Band FAQ — Shiv Mohan Band Agra",
    description: "Common questions about wedding band, baraat, dhol, DJ and booking in Agra answered by Shiv Mohan Band and Events.",
    url: "https://www.shivmohanbandagra.com/faq/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Band FAQ | Shiv Mohan Band & Events, Agra",
    description: "Answers about wedding bands, baraat services, dhol, DJ, pricing and booking in Agra.",
  },
};

export default function FAQPageWrapper() {
  return <FAQPageClient />;
}
