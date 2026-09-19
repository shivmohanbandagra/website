import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Shiv Mohan Band — Book Wedding Band in Agra",
  description: "Contact Shiv Mohan Band and Events to book a wedding band, baraat services, dhol, DJ or any service in Agra. WhatsApp us or call +91 94575 00318 to check your baraat date.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/contact/" },
  openGraph: {
    title: "Contact Shiv Mohan Band — Book Wedding Band in Agra",
    url: "https://www.shivmohanbandagra.com/contact/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shivmohanbandagra.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.shivmohanbandagra.com/contact/" },
  ],
};

const services = [
  "Wedding Band in Agra", "Brass Band in Agra", "Punjabi Dhol", "Nashik Dhol",
  "Shehnai Player", "DJ on Wheels", "Baraat Services", "Ghori & Baggi",
  "Vintage Car", "Wedding Decoration", "Live Band", "Dhol Player",
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-background text-foreground min-h-screen">

        {/* Breadcrumb */}
        {/* <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
          <div className="max-w-5xl mx-auto">
            <ol className="flex items-center gap-2 font-sans text-sm text-ivory/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Contact</span></li>
            </ol>
          </div>
        </nav> */}

        {/* Hero */}
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
          <div className="max-w-3xl mx-auto">
            <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-4">
              Book Your Wedding Band in Agra
            </h1>
            <p className="font-sans text-ivory/70 font-light leading-relaxed">
              Check availability for your wedding date. WhatsApp us for the fastest response — we typically reply within minutes.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

              {/* WhatsApp */}
              <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
                <div className="text-5xl mb-4">💬</div>
                <h2 className="font-heading text-2xl text-ivory mb-3">WhatsApp Us</h2>
                <p className="font-sans text-ivory/60 text-sm mb-6 leading-relaxed">
                  Fastest way to reach us. We respond quickly on WhatsApp — share your date, venue and requirements to get a quote.
                </p>
                <a
                  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20book%20for%20my%20wedding%20on%20[date]%20at%20[venue].%20Services%20needed%3A%20[services]."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-main"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-subheading uppercase tracking-widest text-sm hover:bg-ivory transition-colors font-semibold"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <p className="font-sans text-ivory/40 text-xs mt-4">+91 94575 00318</p>
              </div>

              {/* Call */}
              <div className="p-8 bg-charcoal/30 border border-gold/20 rounded-sm text-center">
                <div className="text-5xl mb-4">📞</div>
                <h2 className="font-heading text-2xl text-ivory mb-3">Call Us Directly</h2>
                <p className="font-sans text-ivory/60 text-sm mb-6 leading-relaxed">
                  Prefer to speak directly? Call us during business hours and our team will be happy to discuss your wedding requirements.
                </p>
                <a
                  href="tel:+919457500318"
                  id="contact-call-main"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold font-subheading uppercase tracking-widest text-sm hover:bg-gold hover:text-charcoal transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" /> +91 94575 00318
                </a>
                <p className="font-sans text-ivory/40 text-xs mt-4">Mon–Sun: 10 AM – 8 PM</p>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-start gap-4 p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-ivory font-medium mb-1">Our Location</h3>
                  <p className="font-sans text-ivory/60 text-sm leading-relaxed">Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla, Agra, UP 282007</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-ivory font-medium mb-1">Business Hours</h3>
                  <p className="font-sans text-ivory/60 text-sm">Mon–Sun: 10 AM – 8 PM</p>
                  <p className="font-sans text-gold/70 text-xs mt-1">Event support: 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-charcoal/20 border border-gold/10 rounded-sm">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-ivory font-medium mb-1">Phone & WhatsApp</h3>
                  <a href="tel:+919457500318" className="font-sans text-ivory/80 text-sm hover:text-gold transition-colors">+91 94575 00318</a>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div className="p-8 bg-charcoal/20 border border-gold/10 rounded-sm">
              <h2 className="font-heading text-2xl text-ivory mb-4">When You Contact Us, Please Share:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Your wedding date", "Venue / location in Agra", "Services you need (band, dhol, DJ, ghori etc.)", "Number of guests / baraat size", "Any special requests or preferences", "Your budget range (optional)"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-sans text-ivory/70 text-sm">
                    <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mt-12">
              <h2 className="font-heading text-2xl text-ivory mb-6 text-center">Services You Can Book</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((svc) => (
                  <div key={svc} className="p-3 bg-charcoal/30 border border-gold/10 rounded-sm text-center">
                    <span className="font-sans text-ivory/70 text-sm">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
