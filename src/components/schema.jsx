export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "Shiv Mohan Band & Events",
    "image": [
      "https://www.shivmohanband.com/images/services/band.jpeg",
      "https://www.shivmohanband.com/images/hero.jpg"
    ],
    "@id": "https://www.shivmohanband.com",
    "url": "https://www.shivmohanband.com",
    "telephone": "+919876543210",
    "priceRange": "$$$",
    "foundingDate": "1980",
    "description": "Agra's most premium wedding band and event service. Specializing in Royal Baraats, vintage cars, Nashik Dhol, and luxury wedding entries since 1980.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Heritage Road, Near Taj Ganj",
      "addressLocality": "Agra",
      "postalCode": "282001",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.173891,
      "longitude": 78.042068
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    },
    "sameAs": [
      "https://www.instagram.com/shivmohanband",
      "https://www.facebook.com/shivmohanband",
      "https://www.youtube.com/shivmohanband"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}