SEO / AEO / GEO / AIEO audit
I checked the source and the live site across 24 routes. All 24 return HTTP 200, have a title and description, and render one H1. The live sitemap lists all 24 routes, and the site already has a solid foundation: canonical metadata on most pages, Open Graph metadata, business/organization JSON-LD, and article/FAQ markup.

Fix these first
FAQ page points search engines at the homepage. Its canonical URL and og:url both resolve to /, not /faq/. The page also inherits homepage metadata. Add FAQ-specific title, description, canonical, and social metadata in faq/page.jsx.

The business logo in structured data is broken. The schema references /images/logo.png, which returns 404. Existing logo files include logo.jpeg and nobglogo.png. Update both logo references in schema.jsx to a real, suitable image.

Robots blocks Next.js assets. robots.txt disallows /_next/ for every crawler. Consider removing that rule so search engines can fetch resources needed to render pages.

Article markup lacks visible authorship and freshness signals. Across the seven article/guide pages, the Article schema has no image; authors and publication dates aren’t visibly shown on the article pages. Five blog articles also lack dateModified, and six lack an author URL. Add a real representative image, visible author/date information, and accurate update dates. In particular, the guide currently sets dateModified to today’s date on each render—use a date that changes only when the content is actually updated. See the blog pages and wedding-band-agra-guide/page.jsx.

Twitter cards use the homepage title on all 23 other routes. Add page-specific Twitter titles and descriptions so shared service and article links don’t look like homepage links. The root defaults are in layout.js; page metadata is defined alongside each route.

Sitemap freshness and source files need cleanup. Every live sitemap entry has the same lastmod value, 2026-10-05, rather than a content-specific update date. Also, public/sitemap.xml is an outdated duplicate that includes /about-us/, which isn’t a current route; the live generated sitemap omits it. Keep one authoritative sitemap and use truthful modification dates. The live sitemap does currently include all 24 routes.

Improve answer-engine and generative-search readiness
Add more verifiable, first-hand detail. Pages would be more useful and citeable with accurate package examples, price ranges (if you can publish them), booking/process details, service-area specifics, and examples from real events. Name qualified contributors and cite reliable sources for factual claims. Don’t add unverified claims just to fill schema fields.
Add visible breadcrumbs and BreadcrumbList markup to the blog index and posts. They currently lack both; service pages generally have breadcrumb markup. This helps establish page context and navigation.
Remove or differentiate duplicate FAQ content. Two FAQ questions on the main FAQ page have the same answer. Make each answer distinct and direct.
Review local business facts. The footer says “Shop No, 1” while the schema says “Shop No. 1.” Confirm the canonical address and keep it consistent. Verify the 4.9 rating and 250-review count against the linked profile; Google generally doesn’t award review snippets for self-serving ratings on a business’s own site, so don’t rely on that markup for stars.
Consider page-specific Service structured data. The global catalog lists services, but only the wedding-band page exposes a Service node. Specific, accurate service entities could clarify the other service pages too; this is an enhancement, not a guarantee of search features.
Lower-priority refinements
Shorten meta descriptions: 23 of 24 routes exceed 160 characters. That isn’t a penalty, but concise, distinct descriptions are less likely to be truncated or rewritten.
Confirm whether the public SEO roadmap PDF is intentional. public/Shiv_Mohan_Band_SEO_Roadmap.pdf is publicly reachable by virtue of being in public; move or restrict it if it isn’t intended as a public download.
AI crawler policy: The wildcard robots rule permits crawlers generally, aside from the blocked Next.js assets. An llms.txt or bot-specific policy is optional—not a required SEO file or guaranteed ranking factor. Add one only if you want to publish clear guidance for AI crawlers.
Not verified: Search Console indexing or coverage, Google Business Profile accuracy, backlink/competitor data, Core Web Vitals, or official rich-result eligibility. I made no code changes; this was an audit.