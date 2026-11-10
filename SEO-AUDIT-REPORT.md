# SEO Audit and Implementation Report

**Website:** https://www.shivmohanbandagra.com/  
**Business:** Shiv Mohan Band & Events  
**Audit date:** 2026-11-10  
**Implementation status:** Changes are in the local repository and pass the production build and ESLint. They are **not deployed** to the public site.

## Executive summary

The public site was crawled before implementation; its sitemap exposed 24 URLs. In the updated local build, all 26 sitemap URLs return HTTP 200, have one H1, a unique title, description and canonical, and have no duplicate titles, descriptions or canonical URLs. The locally rendered pages also have no missing `alt` attributes; decorative hero images intentionally use empty alt text.

The most important verified code issues were a blocked Next.js asset path in `robots.txt`, missing FAQ route metadata, two competing sitemap sources, unsupported review/history/schema claims and automatic homepage video downloads. These were corrected. The updated FAQ and two new articles render locally, and internal links checked against the local build return no 404s.

This repository audit cannot verify Search Console rankings, Google Maps placement, search volumes, profile ownership, conversion data or field Core Web Vitals. The public deployment has not been changed.

## Audit findings and implementation status

| Issue | Affected URL(s) | Severity | SEO / business impact | Recommendation | Status |
|---|---|---:|---|---|---|
| Homepage requested 15 MP4 resources in the observed production browser session; total transfer was about 80.3 MB. | `/` | High | Heavy initial mobile transfer can delay content and consume data before a visitor reaches booking actions. | Defer gallery videos, avoid mobile autoplay and lazy-load below-fold media. | **Implemented locally.** All 45 rendered video elements now use `preload="none"`; none autoplays. A local browser check recorded 0 MP4 requests. This is not a controlled production/PageSpeed comparison. |
| `robots.txt` disallowed `/_next/`. | `/robots.txt` | High | Could block crawlers from fetching rendering assets. | Allow Next.js assets and advertise the generated sitemap. | **Implemented and verified locally.** |
| FAQ metadata/canonical was in a non-route server file while the route was client-rendered. | `/faq/` | High | FAQ route could inherit incorrect metadata and canonical signals. | Keep route metadata in a server page and render the interactive FAQ through a client child. | **Implemented and verified locally.** |
| A generated sitemap and stale static sitemap both existed; generated entries carried unverified modification dates. | `/sitemap.xml`, `/sitemap.xml` source | Medium | Competing sitemap sources and artificial freshness signals weaken crawl guidance. | Keep one generated sitemap, include useful routes, omit unsupported `lastmod` values. | **Implemented.** Local sitemap has 26 URLs and no fabricated modification dates. |
| Placeholder reviews, ratings, counts and unverified business-age statements appeared in trust content and schema. | `/`, `/about/`, service pages, site-wide schema | High | Unsupported claims damage trust and can mislead customers or search systems. | Use only owner-verifiable facts and genuine customer feedback; omit ratings unless legitimately supported. | **Implemented locally.** Placeholder review component and unsupported numbers/history/schema fields were removed. |
| Footer linked to two routes that returned 404 in the local crawl. | Site-wide footer | Medium | Broken internal links harm visitor experience and crawl quality. | Publish accurate policy pages or remove dead links. | **Dead links removed.** Add legal pages if the business needs them. |
| Root title template appended the brand a second time to route titles. | All routes | Medium | Duplicated brand text wastes title space and reduces clarity. | Use one deliberate title per route. | **Implemented and verified:** no duplicate titles or repeated brand suffixes in the local crawl. |
| Search intent overlapped among the homepage, service page and older “best” articles. Some older copy also made unsupported general comparisons. | `/`, `/wedding-band-agra/`, `/wedding-band-agra-guide/`, `/blog/best-wedding-band-in-agra/`, `/blog/best-dj-on-wheels-in-agra/` | Medium | Pages can compete for the same query; unsupported superlatives can undermine trust. | Keep the homepage commercial, service pages transactional and guides informational; avoid claiming an objectively “best” ranking. | **Partially implemented.** Homepage/service/guide roles are separated; two guide titles and copy were made neutral. Monitor Search Console after deployment. |
| External profile, citation and ranking data were unavailable. | Google Business Profile, Google Maps, directories, Search Console | High | Local prominence, NAP consistency and actual query performance cannot be confirmed from source code. | Obtain owner access and reconcile every listing against verified business facts. | **Pending owner access.** Checklist below. |
| No PageSpeed Insights report or field Core Web Vitals were available. The PSI request was rate-limited (HTTP 429). | `/` and all key landing pages | High | LCP, INP, CLS and real-user performance remain unverified. | Rerun PSI/Lighthouse and check Search Console after deployment. | **Pending.** No Core Web Vitals score is claimed in this report. |
| Image conversion, CDN/cache headers, server TTFB at production and responsive asset sizing were not comprehensively verified. | Site-wide | Medium | These can affect mobile speed and visual search. | Audit actual production responses and convert/compress assets only after checking visual quality and URL references. | **Pending.** Existing image URLs were preserved. |

### Crawl and rendered-page verification

- Production baseline crawl: 24 sitemap URLs returned HTTP 200 and each had one H1.
- Final local production build: 26 sitemap URLs returned HTTP 200; no internal 404s were found among 27 distinct local link destinations checked.
- All 26 locally rendered routes had exactly one H1, a title, description and canonical.
- No duplicate titles, meta descriptions or canonicals were found after removing the inherited title suffix.
- Local `robots.txt` does not disallow `/_next/`.
- Rendered JSON-LD parsed without JSON syntax errors. Schema types are used only where corresponding content exists; the Google Rich Results Test and Schema.org Validator were not run.
- Local browser video check: 45 video elements, all `preload="none"`, 0 autoplay, 0 MP4 requests. This does not substitute for a throttled mobile Lighthouse test or field data.

## Page-by-page title and description inventory

The following inventory reflects the final local render. It is not yet live on the public domain.

| URL | SEO title | Meta description |
|---|---|---|
| `/` | Best Wedding Band in Agra \| Shiv Mohan Band & Events | Book a wedding band in Agra with brass band, Punjabi or Nashik Dhol, DJ on Wheels and shehnai. Contact Shiv Mohan Band & Events to check your date. |
| `/about/` | About Shiv Mohan Band & Events \| Agra Wedding Entertainment | Learn about Shiv Mohan Band & Events, its listed wedding band and baraat services in Agra, and how to get in touch about your event. |
| `/contact/` | Contact Shiv Mohan Band - Book Wedding Band in Agra | Contact Shiv Mohan Band and Events to book a wedding band, baraat services, dhol, DJ or any service in Agra. WhatsApp us or call +91 94575 00318 to check your baraat date. |
| `/faq/` | Wedding Band FAQ - Shiv Mohan Band and Events Agra | Answers about wedding band services, baraat packages, Punjabi and Nashik Dhol, DJ, pricing and booking with Shiv Mohan Band & Events in Agra. |
| `/blog/` | Agra Wedding Band Blog: Baraat & Music Guides | Read practical guides to wedding bands, baraat planning, Dhol, DJ bookings and wedding entertainment for celebrations in Agra. |
| `/wedding-band-agra/` | Wedding Band in Agra \| Shiv Mohan Band and Events | Wedding band services in Agra, including brass band, Punjabi and Nashik Dhol, DJ, shehnai and baraat arrangements. Contact Shiv Mohan Band to ask about your date. |
| `/baraat-services-agra/` | Baraat Services in Agra \| Complete Baraat Package \| Shiv Mohan Band | Plan a baraat in Agra with wedding band, brass band, Punjabi or Nashik Dhol, DJ, shehnai and other listed services. Contact Shiv Mohan Band to check availability. |
| `/brass-band-agra/` | Brass Band in Agra \| Shiv Mohan Band and Events | Brass band services in Agra for wedding baraats and celebrations. Contact Shiv Mohan Band and Events to discuss performers and availability for your date. |
| `/punjabi-dhol-agra/` | Punjabi Dhol in Agra \| Shiv Mohan Band and Events | Punjabi Dhol for weddings and baraats in Agra. Contact Shiv Mohan Band and Events to discuss performers and event timing. |
| `/nashik-dhol-agra/` | Nashik Dhol in Agra \| Shiv Mohan Band and Events | Nashik Dhol performances for weddings and baraats in Agra. Contact Shiv Mohan Band and Events to discuss the group setup and availability. |
| `/dj-on-wheels-agra/` | DJ on Wheels in Agra \| Wedding DJ Services \| Shiv Mohan Band | DJ on Wheels for wedding baraats in Agra. Contact Shiv Mohan Band and Events to discuss music, sound setup and availability for your date. |
| `/dhol-player-agra/` | Dhol Player in Agra \| Shiv Mohan Band and Events | Dhol players for wedding baraats and celebrations in Agra. Contact Shiv Mohan Band and Events to discuss the setup and your event date. |
| `/shehnai-player-agra/` | Shehnai Player in Agra \| Shiv Mohan Band and Events | Shehnai music for wedding ceremonies and celebrations in Agra. Contact Shiv Mohan Band and Events to ask about availability and event arrangements. |
| `/live-band-agra/` | Live Band in Agra \| Wedding & Sangeet Night \| Shiv Mohan Band | Live band performances in Agra for weddings, sangeet nights and special celebrations. Contact Shiv Mohan Band and Events to ask about availability. |
| `/ghori-baggi-agra/` | Ghori & Baggi in Agra \| Groom's Entry \| Shiv Mohan Band | Ask about Ghori and Baggi arrangements for a groom's wedding entry in Agra, including availability and event-day logistics. |
| `/vintage-car-rental-agra/` | Vintage Car for Wedding in Agra \| Shiv Mohan Band and Events | Vintage cars for wedding entries and baraat processions in Agra. Contact Shiv Mohan Band and Events to ask about vehicle options and availability. |
| `/wedding-decoration-agra/` | Wedding Decoration in Agra \| Shiv Mohan Band and Events | Wedding, Haldi and Mehndi decoration options in Agra, including floral chattar and lighting. Contact Shiv Mohan Band and Events to discuss your event. |
| `/wedding-band-agra-guide/` | Complete Guide to Hiring a Wedding Band in Agra \| Shiv Mohan Band | Everything you need to know before hiring a wedding band in Agra. Band types, pricing, booking timeline, Punjabi Dhol vs Nashik Dhol, DJ vs live band - complete guide by Shiv Mohan Band and Events. |
| `/blog/how-to-plan-baraat-in-agra/` | How to Plan the Perfect Baraat in Agra - Step-by-Step Guide | Complete step-by-step guide to planning a perfect royal baraat in Agra. From booking your wedding band, dhol and DJ to arranging ghori, baggi, vintage cars and baraat lighting. |
| `/blog/punjabi-dhol-vs-nashik-dhol/` | Punjabi Dhol vs Nashik Dhol - Which is Right for Your Wedding? | Complete comparison of Punjabi Dhol and Nashik Dhol for wedding baraats. Sound, energy, visual impact, player count, origin and which to choose. By Shiv Mohan Band and Events Agra. |
| `/blog/best-wedding-band-in-agra/` | How to Choose a Wedding Band in Agra \| 5 Booking Factors | Five practical factors to compare when choosing a wedding band in Agra: event experience, public feedback, service options, date availability and booking flexibility. |
| `/blog/best-dj-on-wheels-in-agra/` | DJ on Wheels in Agra: Baraat Booking Guide \| Shiv Mohan Band | A practical guide to booking DJ on Wheels in Agra for a baraat. Compare sound, playlist, setup and procession coordination, with tips for combining a DJ with Dhol or a live band. |
| `/blog/shehnai-in-indian-weddings/` | Significance of Shehnai in Indian Weddings - Tradition & Meaning | Why shehnai is the most auspicious instrument for Hindu weddings in India. History, cultural significance and how to include shehnai in your wedding ceremony in Agra. |
| `/blog/wedding-band-booking-timeline/` | When to Book a Wedding Band in Agra - Complete Booking Timeline | How early to book your wedding band, dhol and baraat services in Agra. Peak season guide, off-season tips and what happens if you book last minute. By Shiv Mohan Band. |
| `/blog/dj-on-wheels-in-agra/` | DJ on Wheels in Agra: Baraat Setup & Booking Guide | Learn how DJ on Wheels works for an Agra baraat, what to ask about sound, music and route planning, and how to coordinate a DJ with live dhol or band. |
| `/blog/why-shiv-mohan-band-is-one-of-the-best-wedding-bands-in-agra/` | Wedding Band in Agra: Shiv Mohan Band Services & Booking | Searching for the best wedding band in Agra? Compare baraat services, music options and booking details, then ask Shiv Mohan Band & Events about your date. |

## Keyword research and page intent mapping

No Google Search Console, Ads Keyword Planner, paid keyword dataset or rank-tracking account was available. Therefore, the phrases below are **search-intent hypotheses**, not verified query volumes, rankings or demand estimates. Validate them against Search Console and Keyword Planner before setting numeric targets.

| Page / page group | Primary intent and query cluster |
|---|---|
| Homepage | Local commercial: best wedding band in Agra; wedding band in Agra; wedding bands in Agra; best band in Agra; wedding band near me (Agra). |
| `/wedding-band-agra/` | Service and booking: wedding band booking in Agra; marriage band in Agra; band baja in Agra; wedding band baja in Agra; brass band and baraat band in Agra. |
| `/baraat-services-agra/` | Package planning: baraat services in Agra; wedding band package; band, DJ and dhol together; royal baraat arrangements. |
| `/brass-band-agra/` | Brass band in Agra; wedding brass band; live wedding band. |
| `/punjabi-dhol-agra/`, `/nashik-dhol-agra/`, `/dhol-player-agra/` | Punjabi dhol in Agra; Nashik dhol in Agra; dhol for baraat; dhol player booking. |
| `/dj-on-wheels-agra/` | Commercial service: DJ on Wheels in Agra; wedding DJ in Agra; DJ for baraat; mobile DJ booking. |
| `/shehnai-player-agra/`, `/live-band-agra/` | Shehnai player in Agra; live band in Agra; wedding ceremony music. |
| `/ghori-baggi-agra/`, `/vintage-car-rental-agra/` | Ghori for wedding in Agra; Baggi for wedding; vintage car for wedding entry. |
| `/wedding-decoration-agra/` | Wedding decoration in Agra; Haldi decoration; Mehndi decoration; baraat decoration. |
| `/wedding-band-agra-guide/`, `/blog/best-wedding-band-in-agra/` | Informational: how to choose a wedding band; wedding band pricing factors; when to book; questions to ask. These should not compete with the homepage for the core transactional query. |
| `/blog/dj-on-wheels-in-agra/`, `/blog/best-dj-on-wheels-in-agra/` | Informational: what a mobile baraat DJ includes; DJ with Punjabi/Nashik Dhol; DJ vs live band; booking checklist. |
| Other articles | Informational: how to plan a baraat; Punjabi Dhol vs Nashik Dhol; shehnai in weddings; when to book wedding entertainment. |

Additional natural query variants to validate include **“Agra shaadi band booking,” “Agra baraat band ka rate,” “Agra mein wedding band kaise book karein,” “baraat ke liye dhol DJ Agra,” “shaadi band baja Agra,”** and **“Agra wedding band price.”** These are proposed Hindi/Hinglish query variants, not verified search-volume data. Publish Hindi/Hinglish content only where it can be written naturally and accurately.

## Technical SEO, content, GEO and AEO changes

- **Crawlability:** corrected `robots.txt`, retained one generated sitemap, and included the two new article routes. The final sitemap has 26 URLs.
- **Metadata:** route-specific title, description and canonical are present and unique in the local render. The root title template no longer duplicates the site name. Open Graph and Twitter metadata are present in the rendered routes.
- **FAQ:** made the route a server metadata page with a client-rendered FAQ component; removed repeated answers.
- **Schema:** retained business and page-level structured data where appropriate; corrected the logo reference and removed unverified founding date, price range and aggregate rating data. No fabricated reviews or ratings were added. External schema validation remains pending.
- **Trust/content accuracy:** removed the placeholder review carousel and unsupported numerical claims. The existing “best wedding band” guide now reads as a comparison checklist rather than claiming that Shiv Mohan Band is objectively the best. Its URL remains unchanged.
- **New articles created locally:**
  - `/blog/dj-on-wheels-in-agra/` - practical mobile-DJ and baraat planning guide with service links and enquiry actions.
  - `/blog/why-shiv-mohan-band-is-one-of-the-best-wedding-bands-in-agra/` - factual service and booking guide, deliberately avoiding unsupported “top choice,” review-count or longevity claims.
- **Internal links:** local route checking found 27 distinct destinations and no 404s. Major service links are included from relevant guides and the blog index.
- **Images:** rendered images have alt attributes; decorative imagery uses empty alt. This pass did not bulk-rename or convert assets because URL stability and image quality must be preserved.
- **Conversion:** call and WhatsApp enquiry routes are present. GA4/Tag Manager click and form conversion events were not configured or verified in this source-only pass.
- **Performance:** video deferral is implemented. An earlier production browser inspection observed about 80.3 MB of transfer and 15 MP4 requests; an intermediate local run observed about 4.5 MB and 0 MP4 requests. These observations were not controlled measurements of identical builds or network conditions. A later local browser session also confirmed 0 MP4 requests, but its cache/resource transfer measurements are not suitable as a PageSpeed score.

## Local SEO and Google Business Profile checklist

**Account work status: Requires owner access.** No Google Business Profile dashboard, Search Console or citation manager was available. Public search/profile access did not provide enough evidence to confirm listing ownership, ranking, categories, hours, reviews or NAP consistency.

1. Confirm the real-world business name is exactly **Shiv Mohan Band & Events**; do not add keywords to the name.
2. Verify the street address or service-area configuration, phone (**+91 94575 00318**), website, hours and booking contact with the owner before changing any public listing or schema.
3. Choose the most accurate available primary GBP category; add only genuinely offered secondary categories and services.
4. Confirm service areas and availability for Bodla, Sikandra, Shahganj, Tajganj, Sadar Bazaar, Dayal Bagh, Kamla Nagar, Agra Cantt, Sanjay Place, Fatehabad Road, Lohamandi and Rajpur Chungi. Mention areas naturally; do not create thin locality pages.
5. Add current, original band, dhol, DJ, vehicle and decoration photos/videos with permission and accurate captions.
6. Ask actual customers after completed events for an honest review using Google's direct review link. Do not incentivize, purchase or script reviews. Respond professionally and track sentiment.
7. Reconcile NAP and service details across Bing Places, Apple Business Connect, Justdial, Sulekha, IndiaMART when appropriate, and relevant wedding directories. Remove or correct duplicate/inaccurate listings.
8. Seek editorially earned links and vendor referrals from Agra venues, planners, photographers and event partners; avoid link schemes and paid citation packages.

## Performance and measurement report

| Metric | Result / status |
|---|---|
| Production baseline observation | About 80.3 MB transferred and 15 MP4 requests in the observed homepage browser session. |
| Final local video behavior | 45 video elements in the homepage DOM; all deferred with `preload="none"`, none autoplaying; 0 MP4 requests in the local browser check. |
| Local browser timing | FCP 232 ms, TTFB 14 ms and load event 241 ms were observed on localhost at a 1100 x 659 viewport. These synthetic local timings are not mobile field data and must not be compared directly with PSI. |
| PSI / Lighthouse | PageSpeed Insights request returned HTTP 429 due to quota. No PSI score or controlled Lighthouse audit is available. |
| LCP / INP / CLS | No valid field or throttled Lighthouse values were obtained. Do not infer that the targets (LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1) are met. |
| TTFB / page bytes / requests in production | Not measured with a reproducible production test. |
| Search Console Core Web Vitals | Requires owner access and post-deployment field data. |

## Analytics and account status

| System | Status |
|---|---|
| Google Search Console | Requires owner access; no query, index coverage or Core Web Vitals report inspected. |
| Google Analytics 4 | An analytics ID is present in source, but property ownership, data collection and conversion event setup were not verified. |
| Google Tag Manager | Not verified or configured in this work. |
| Google Business Profile performance | Requires verified profile-owner access. |
| Bing Webmaster Tools | Requires owner access. |
| Microsoft Clarity | Not installed or verified; only add with owner approval and an appropriate privacy notice. |
| Call / WhatsApp / form tracking | Calls and WhatsApp links exist; event tracking and form submission measurement remain pending. |

## Backlink and review strategy

- Request reviews from real customers after completed events, without incentives; respond to each review.
- Ask photographers, planners, venues, decorators and other vendors for genuine event coverage or useful vendor-directory references.
- Offer original event photos and practical planning information to local wedding publications and directories.
- Seek relevant editorial links and citations; reject link farms, private blog networks, automated outreach blasts and purchased links.
- Maintain a monthly log of new links, referring domains, listing corrections, review volume and customer sentiment. Do not set artificial review targets.

## 30 / 60 / 90-day roadmap

| Period | Actions | Measurement |
|---|---|---|
| Days 1-30 | Deploy the changes; verify canonical/indexing and sitemap in Search Console; confirm GBP facts and categories with the owner; test call, WhatsApp and form routes; run mobile/desktop PSI and Lighthouse after deployment. | Indexed pages, crawl errors, Core Web Vitals status, organic impressions/clicks, calls and enquiry events. |
| Days 31-60 | Use Search Console queries to refine page-to-query mapping; review GBP completeness and customer questions; correct priority citations; publish only verified photos/content; approach relevant Agra wedding partners for editorial mentions. | Query/page alignment, non-brand impressions, local listing actions, citation accuracy, qualified enquiries. |
| Days 61-90 | Compare search and enquiry trends with the first month; improve pages that have impressions but weak CTR or conversions; review event-season availability and content needs; evaluate earned links and customer feedback. | Organic clicks/CTR, relevant local queries, calls/WhatsApp/form enquiries, lead quality and field CWV. |

## Owner access and deployment items still required

- Deploy the local source changes; production has not been modified.
- Grant read/owner access to Search Console, GA4 and the verified Google Business Profile.
- Confirm business address, service area, hours, current services, business history and listing category before any public profile edits.
- Provide PageSpeed/Lighthouse and Search Console field data after deployment; quota must be available for PSI.
- Approve any new analytics or session-recording tools and associated privacy disclosures.
- Confirm genuine event photographs, videos, testimonials and pricing guidance before publishing them.
- Validate the structured data in Google's Rich Results Test and Schema.org Validator on the deployed URLs.
- Obtain actual keyword volume/rank evidence from Search Console or Keyword Planner before calling any keyword “high-volume” or reporting ranking gains.
- `npm uninstall` reported 17 dependency advisories (8 moderate, 8 high, 1 critical). They were not investigated or fixed as part of this SEO implementation; assess them separately before deployment.

## Verification run

- `npm run build` - passed; Next.js generated 30 routes including the sitemap and both new article routes.
- `npm run lint` - passed.
- Local sitemap/canonical/title/description/H1/link checks - passed for 26 sitemap URLs.
- Local JSON-LD syntax check - passed; Google/Schema.org external validators were not run.
