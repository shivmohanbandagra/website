import FAQPageClient from "./page-client";

export const metadata = {
  title: "Wedding Band FAQ — Shiv Mohan Band and Events Agra",
  description: "Answers to common questions about wedding band services, baraat packages, Punjabi Dhol, Nashik Dhol, DJ, pricing and booking in Agra. Shiv Mohan Band and Events since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/faq/" },
  openGraph: {
    title: "Wedding Band FAQ — Shiv Mohan Band Agra",
    description: "Common questions about wedding band, baraat, dhol, DJ and booking in Agra answered by Shiv Mohan Band and Events.",
    url: "https://www.shivmohanbandagra.com/faq/",
  },
};

export default function FAQPageWrapper() {
  return <FAQPageClient />;
}
