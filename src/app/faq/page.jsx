"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Services",
    items: [
      { q: "What is the best wedding band for a baraat in Agra?", a: "Shiv Mohan Band and Events is one of Agra's most trusted and highly-rated wedding bands for baraats, with over 45 years of experience since 1980. A complete baraat wedding band typically combines a live brass band with Punjabi Dhol or Nashik Dhol, shehnai, DJ on wheels and decorative lighting for maximum impact." },
      { q: "What services does Shiv Mohan Band provide in Agra?", a: "Shiv Mohan Band and Events provides: Wedding Band, Brass Band, Punjabi Dhol, Nashik Dhol, Dhol Player, Shehnai Player, DJ on Wheels, Live Band, Baraat Services, Ghori (decorated horse), Baggi (horse carriage), Vintage Car Rental, Wedding Decoration, Haldi Decoration, Mehndi Decoration and Floral Chattar." },
      { q: "Do you provide wedding band services across all of Agra?", a: "Yes. Shiv Mohan Band serves all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place, Fatehabad Road and surrounding areas." },
      { q: "Can I book a band and DJ together for my baraat in Agra?", a: "Yes. Shiv Mohan Band offers combined packages with wedding band + Punjabi Dhol + Nashik Dhol + DJ on wheels + shehnai for a complete, multi-dimensional baraat entertainment experience." },
      { q: "Do you provide services for sangeet and mehndi nights?", a: "Yes. We provide live band performances for sangeet nights and vibrant decoration for mehndi ceremonies. Contact us to discuss entertainment and decoration packages for all your wedding functions." },
    ],
  },
  {
    category: "Booking & Pricing",
    items: [
      { q: "How much does a wedding band cost in Agra?", a: "Wedding band pricing in Agra depends on the services selected (band type, dhol, DJ, vintage car etc.), event duration, band size and the date of your wedding. Contact Shiv Mohan Band on WhatsApp at +91 94575 00318 for a custom quote based on your wedding requirements." },
      { q: "How early should I book a wedding band in Agra?", a: "We strongly recommend booking your wedding band in Agra at least 3–6 months in advance. Wedding dates fill up very quickly during peak season (November–February and May–June). Contact us as early as possible to secure your date." },
      { q: "How many musicians are included in a wedding band?", a: "A standard wedding band from Shiv Mohan Band includes 15–30 musicians depending on the package selected. Larger royal baraat packages can include even more performers. Contact us to discuss the right band size for your event." },
      { q: "Can I customize my baraat package?", a: "Yes, absolutely. Shiv Mohan Band offers fully customizable baraat packages. You choose the combination of services — wedding band, dhol, DJ, shehnai, lighting, ghori, baggi, vintage cars and decoration — based on your wedding vision and budget." },
    ],
  },
  {
    category: "Dhol Questions",
    items: [
      { q: "Do you provide Punjabi Dhol for baraats in Agra?", a: "Yes. Shiv Mohan Band provides high-energy Punjabi Dhol players for wedding baraats in Agra. Punjabi Dhol can be booked alone or as part of a combined baraat package." },
      { q: "Do you provide Nashik Dhol in Agra?", a: "Yes. We provide Nashik Dhol group performances (4–12 players) for wedding baraats and celebrations in Agra. Nashik Dhol creates a spectacular synchronized rhythm that makes any baraat unforgettable." },
      { q: "What is the difference between Punjabi Dhol and Nashik Dhol?", a: "Punjabi Dhol is a large two-headed drum played by a single drummer, known for its deep, booming beats associated with Bhangra and high-energy baraat celebrations. Nashik Dhol is from Maharashtra, typically played in groups of 4–12 drummers, producing powerful synchronized rhythms. Both create high energy at weddings — Punjabi Dhol is more folk-dance oriented while Nashik Dhol creates a visually spectacular group performance." },
      { q: "How many dhol players do I need for my baraat?", a: "For Punjabi Dhol, 1–2 players are standard for most baraats. For Nashik Dhol, groups of 4–12 players are common. Larger, grander baraats may benefit from larger Nashik Dhol groups. Contact us to recommend the right setup for your baraat size." },
    ],
  },
  {
    category: "Logistics & Coverage",
    items: [
      { q: "Which areas of Agra does Shiv Mohan Band serve?", a: "Shiv Mohan Band serves all areas of Agra including Bodla, Sikandra, Tajganj, Shahganj, Sadar Bazaar, Kamla Nagar, Dayal Bagh, Lohamandi, Agra Cantt, Rajpur Chungi, Sanjay Place, Fatehabad Road and surrounding areas of Uttar Pradesh." },
      { q: "Do you travel outside Agra for weddings?", a: "Yes. Shiv Mohan Band and Events travels to nearby areas outside Agra for weddings and special events. Contact us with your event location for travel availability and pricing." },
      { q: "Do you provide brass bands?", a: "Yes. Shiv Mohan Band provides professional brass bands for wedding baraats in Agra. Our brass band includes skilled musicians playing trumpets, trombones, tubas and percussion instruments." },
      { q: "Do you provide wedding cars?", a: "Yes. We provide luxury vintage cars for grand wedding entries and baraat processions in Agra, beautifully decorated with flowers and ornamental details." },
      { q: "What is included in a standard baraat package?", a: "A standard baraat package from Shiv Mohan Band and Events can include: live wedding band, brass band, Punjabi or Nashik Dhol, shehnai, DJ on wheels, ghori (decorated horse), baggi (horse carriage), vintage car, decorative lighting, floral chattar and floral decorations. All packages are customizable." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(cat => cat.items.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }))),
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.shivmohanbandagra.com/faq/" },
  ],
};

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-gold/20 rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-start px-6 py-5 text-left bg-charcoal/30 hover:bg-charcoal/50 transition-colors" aria-expanded={open}>
        <span className="font-sans text-ivory font-medium pr-4 leading-relaxed">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gold shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 py-5 bg-charcoal/10 border-t border-gold/10">
          <p className="font-sans text-ivory/75 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-background text-foreground min-h-screen">
        {/* Breadcrumb */}
        {/* <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <ol className="flex items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">FAQ</span></li>
            </ol>
          </div>
        </nav> */}

        {/* Hero */}
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Have Questions?</p>
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-4">
              Wedding Band FAQ — Shiv Mohan Band
            </h1>
            <p className="font-sans text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">
              Find answers to the most common questions about wedding band services, baraat packages, dhol, DJ, pricing and booking in Agra. If you have a question not listed here, WhatsApp us directly.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-subheading text-gold tracking-widest uppercase text-sm mb-6 pb-3 border-b border-gold/20">
                  {cat.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal/40 border-t border-gold/20 py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl text-ivory mb-4">Still Have Questions?</h2>
            <p className="font-sans text-ivory/70 mb-8">Our team is available 7 days a week. WhatsApp us or call directly — we respond quickly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919457500318?text=Hi%20Shiv%20Mohan%20Band!%20I%20have%20a%20question%20about%20your%20services." target="_blank" rel="noopener noreferrer" id="faq-cta-whatsapp" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a href="tel:+919457500318" id="faq-cta-call" className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-ivory font-subheading uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors">
                <Phone className="w-4 h-4 text-gold" /> +91 94575 00318
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
