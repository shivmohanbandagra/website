import Link from "next/link";

export const metadata = {
  title: "Wedding Band Blog — Tips, Guides & Inspiration | Shiv Mohan Band Agra",
  description: "Wedding band tips, baraat planning guides, dhol vs DJ comparisons and wedding entertainment inspiration from Shiv Mohan Band and Events, Agra's trusted wedding band since 1980.",
  alternates: { canonical: "https://www.shivmohanbandagra.com/blog/" },
  openGraph: {
    title: "Wedding Band Blog — Shiv Mohan Band and Events Agra",
    url: "https://www.shivmohanbandagra.com/blog/",
  },
};

const posts = [
  {
    slug: "how-to-plan-baraat-in-agra",
    title: "How to Plan the Perfect Baraat in Agra: Step-by-Step Guide",
    excerpt: "Everything you need to plan a royal baraat in Agra — from booking your wedding band and dhol to arranging ghori, baggi and vintage cars. A complete step-by-step guide.",
    category: "Planning Guide",
    date: "September 2026",
  },
  {
    slug: "punjabi-dhol-vs-nashik-dhol",
    title: "Punjabi Dhol vs Nashik Dhol — Which One Is Right for Your Wedding?",
    excerpt: "The complete comparison between Punjabi Dhol and Nashik Dhol for wedding baraats. Sound, energy, visual impact, player count, origin and when to choose which one.",
    category: "Service Guide",
    date: "September 2026",
  },
  {
    slug: "best-wedding-band-in-agra",
    title: "How to Choose the Best Wedding Band in Agra for Your Baraat",
    excerpt: "5 key factors to consider when choosing a wedding band in Agra — experience, reviews, service range, availability and customization. From the experts at Shiv Mohan Band.",
    category: "Tips",
    date: "August 2026",
  },
  {
    slug: "shehnai-in-indian-weddings",
    title: "The Significance of Shehnai in Indian Weddings — Tradition, Melody & Meaning",
    excerpt: "Why shehnai is considered the most auspicious instrument for Hindu weddings in India. History, significance and how to include shehnai in your wedding ceremony.",
    category: "Culture & Tradition",
    date: "August 2026",
  },
  {
    slug: "wedding-band-booking-timeline",
    title: "When Should You Book a Wedding Band in Agra? The Complete Timeline",
    excerpt: "How early to book your wedding band, dhol, DJ and baraat services in Agra to secure your date. Peak season, off-season and last-minute booking guide.",
    category: "Planning Guide",
    date: "July 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-charcoal/50 border-b border-gold/10 px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <ol className="flex items-center gap-2 font-sans text-sm text-ivory/50">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li className="flex items-center gap-2"><span>/</span><span className="text-gold">Blog</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal via-charcoal to-maroon/20 py-16 px-6 text-center border-b border-gold/10">
        <div className="max-w-3xl mx-auto">
          <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Wedding Band Guides</p>
          <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-4">
            Wedding Band Blog & Guides
          </h1>
          <p className="font-sans text-ivory/70 font-light leading-relaxed">
            Expert advice on planning weddings, choosing the right band and dhol, booking timelines, Indian wedding traditions and baraat entertainment in Agra.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group p-6 bg-charcoal/30 border border-gold/20 rounded-sm hover:border-gold/50 transition-all flex flex-col">
              <div className="mb-3">
                <span className="font-subheading text-gold tracking-widest uppercase text-xs px-3 py-1 border border-gold/30 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="font-heading text-xl text-ivory mb-3 group-hover:text-gold transition-colors leading-snug">{post.title}</h2>
              <p className="font-sans text-ivory/60 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
              <div className="mt-4 pt-4 border-t border-gold/10 flex items-center justify-between">
                <span className="font-sans text-ivory/40 text-xs">{post.date}</span>
                <span className="font-sans text-gold text-sm group-hover:translate-x-1 transition-transform inline-block">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
