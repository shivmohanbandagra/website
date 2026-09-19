export default function sitemap() {
  const baseUrl = "https://www.shivmohanbandagra.com";
  const lastModified = new Date().toISOString();

  return [
    // Core Pages
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Primary Service Pages (Highest Priority)
    {
      url: `${baseUrl}/wedding-band-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/baraat-services-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/brass-band-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/punjabi-dhol-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/nashik-dhol-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/dj-on-wheels-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/dhol-player-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/shehnai-player-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },

    // Secondary Service Pages
    {
      url: `${baseUrl}/live-band-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/ghori-baggi-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/vintage-car-rental-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/wedding-decoration-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },

    // AI/AEO Content Pages (Guide)
    {
      url: `${baseUrl}/wedding-band-agra-guide/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },

    // Blog Posts
    {
      url: `${baseUrl}/blog/how-to-plan-baraat-in-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/punjabi-dhol-vs-nashik-dhol/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/best-wedding-band-in-agra/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/shehnai-in-indian-weddings/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/wedding-band-booking-timeline/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
  ];
}
