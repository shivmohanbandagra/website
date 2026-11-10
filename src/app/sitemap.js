export default function sitemap() {
  const baseUrl = "https://www.shivmohanbandagra.com";

  return [
    // Core Pages
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq/`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/`,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Primary Service Pages (Highest Priority)
    {
      url: `${baseUrl}/wedding-band-agra/`,
      changeFrequency: "monthly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/baraat-services-agra/`,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/brass-band-agra/`,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/punjabi-dhol-agra/`,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/nashik-dhol-agra/`,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/dj-on-wheels-agra/`,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/dhol-player-agra/`,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/shehnai-player-agra/`,
      changeFrequency: "monthly",
      priority: 0.88,
    },

    // Secondary Service Pages
    {
      url: `${baseUrl}/live-band-agra/`,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/ghori-baggi-agra/`,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/vintage-car-rental-agra/`,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/wedding-decoration-agra/`,
      changeFrequency: "monthly",
      priority: 0.78,
    },

    // AI/AEO Content Pages (Guide)
    {
      url: `${baseUrl}/wedding-band-agra-guide/`,
      changeFrequency: "monthly",
      priority: 0.82,
    },

    // Blog Posts
    {
      url: `${baseUrl}/blog/how-to-plan-baraat-in-agra/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/punjabi-dhol-vs-nashik-dhol/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/best-wedding-band-in-agra/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/best-dj-on-wheels-in-agra/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/shehnai-in-indian-weddings/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/wedding-band-booking-timeline/`,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/dj-on-wheels-in-agra/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/why-shiv-mohan-band-is-one-of-the-best-wedding-bands-in-agra/`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
