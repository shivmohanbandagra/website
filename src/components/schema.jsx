export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EntertainmentBusiness"],
        "@id": "https://www.shivmohanbandagra.com/#business",
        "name": "Shiv Mohan Band and Events",
        "url": "https://www.shivmohanbandagra.com",
        "logo": "https://www.shivmohanbandagra.com/images/logo.png",
        "image": [
          "https://www.shivmohanbandagra.com/images/hero.jpg",
          "https://www.shivmohanbandagra.com/images/og-image.png"
        ],
        "telephone": "+919457500318",
        "foundingDate": "1980",
        "description": "Shiv Mohan Band and Events is a wedding band and baraat entertainment service based in Agra, providing wedding bands, brass bands, Punjabi Dhol, Nashik Dhol, shehnai, DJ services, live music, vintage cars and royal wedding entertainment. Serving families across Agra and surrounding areas since 1980.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla",
          "addressLocality": "Agra",
          "postalCode": "282007",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.2017,
          "longitude": 77.9820
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Agra"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Uttar Pradesh"
          }
        ],
        "priceRange": "₹₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday",
              "Friday", "Saturday", "Sunday"
            ],
            "opens": "10:00",
            "closes": "20:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wedding Band & Baraat Services in Agra",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding Band in Agra",
                "description": "Live wedding band performance for baraats, wedding processions and traditional celebrations in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brass Band in Agra",
                "description": "Professional brass band performance for wedding baraats and celebrations in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Punjabi Dhol in Agra",
                "description": "High-energy Punjabi Dhol performance for baraats, weddings and celebrations in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nashik Dhol in Agra",
                "description": "Traditional Nashik Dhol performance for weddings and festive events in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shehnai Player in Agra",
                "description": "Classical shehnai performance for wedding ceremonies and celebrations in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DJ on Wheels in Agra",
                "description": "Professional DJ on wheels service for wedding baraats and events in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Baraat Services in Agra",
                "description": "Complete royal baraat services including band, dhol, DJ, lighting, ghori and vintage car arrangements in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ghori & Baggi in Agra",
                "description": "Traditional Ghori (decorated horse) and Baggi (horse carriage) for royal wedding baraats in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vintage Car Rental for Wedding in Agra",
                "description": "Luxury vintage car rental for grand wedding entries and baraat processions in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding Decoration in Agra",
                "description": "Complete wedding decoration services including floral decor, lighting, haldi and mehndi decoration in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dhol Player in Agra",
                "description": "Professional dhol players for wedding baraats and celebratory events in Agra."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Live Band in Agra",
                "description": "Live band performance for weddings, sangeet nights and special celebrations in Agra."
              }
            }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/shivmohanbandagra",
          "https://www.instagram.com/shivmohanbandagra",
          "https://www.youtube.com/@shivmohanbandagra"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "250",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.shivmohanbandagra.com/#website",
        "url": "https://www.shivmohanbandagra.com",
        "name": "Shiv Mohan Band and Events",
        "description": "Wedding Band in Agra — Shiv Mohan Band and Events provides wedding bands, brass bands, Punjabi Dhol, Nashik Dhol, DJ, shehnai and royal baraat services since 1980.",
        "publisher": {
          "@id": "https://www.shivmohanbandagra.com/#business"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://www.shivmohanbandagra.com/#organization",
        "name": "Shiv Mohan Band and Events",
        "url": "https://www.shivmohanbandagra.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.shivmohanbandagra.com/images/logo.png",
          "width": 200,
          "height": 60
        },
        "foundingDate": "1980",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1, Sikandra-Bodla Rd, near Gopal Seva Sadan, Bodla",
          "addressLocality": "Agra",
          "postalCode": "282007",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919457500318",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        },
        "sameAs": [
          "https://www.facebook.com/shivmohanbandagra",
          "https://www.instagram.com/shivmohanbandagra",
          "https://www.youtube.com/@shivmohanbandagra"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}