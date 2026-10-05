import Image from "next/image";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import ReviewDirectoryLinks from "@/components/review-directory-links";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-gold/[0.06] blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1440px] grid-cols-1 items-center gap-7 px-5 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 md:gap-12 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)] xl:gap-20 xl:px-16">
        <div className="relative order-1 mx-auto hidden w-full max-w-[680px] lg:order-2 lg:block lg:mx-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 left-3 top-3 border border-gold/35 sm:-bottom-4 sm:-right-4 sm:left-4 sm:top-4"
          />
          <div className="relative aspect-[1.18/1] overflow-hidden bg-charcoal sm:aspect-[1.24/1] md:aspect-[1.02/1]">
            <Image
              src="/images/services/brassband.jpeg"
              alt="Shiv Mohan Band musicians in uniform, ready to lead a wedding baraat in Agra"
              fill
              loading="lazy"
              quality={78}
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 44vw, 620px"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-charcoal/10"
            />
          </div>
          <div className="absolute -bottom-3 left-3 h-12 w-12 border-b border-l border-gold sm:-bottom-4 sm:left-4 sm:h-16 sm:w-16" aria-hidden="true" />
        </div>

        <div className="relative order-2 mx-auto w-full max-w-[760px] text-center lg:order-1 lg:mx-0 lg:max-w-[650px] lg:py-5 lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8 lg:justify-start">
            <span aria-hidden="true" className="h-px w-10 bg-gold sm:w-14" />
            <p className="font-subheading text-xs uppercase tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.22em]">
              Agra&apos;s Best Wedding Band
            </p>
          </div>

          <h1 className="mb-5 font-heading text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.96] tracking-[-0.035em] text-ivory sm:mb-6">
            Best Wedding Band
            <br className="hidden lg:block" /> in Agra
            <span className="mt-2 block font-normal italic leading-[1.02] text-gold">
              for Royal Baraat &amp; Celebrations
            </span>
          </h1>

          <p className="mx-auto mb-5 max-w-[570px] font-sans text-base font-light leading-relaxed text-ivory/75 sm:mb-6 sm:text-lg lg:mx-0">
            Shiv Mohan Band &amp; Events is a wedding band and baraat
            entertainment service based in Agra, providing wedding bands,
            brass bands, Punjabi Dhol, Nashik Dhol, DJ services, shehnai,
            vintage cars and royal baraat arrangements since 1980.
          </p>

          <p className="mb-7 flex items-center justify-center gap-2 font-sans text-xs font-medium tracking-wide text-ivory/70 sm:mb-8 sm:text-sm lg:justify-start">
            <Star
              className="h-4 w-4 shrink-0 fill-gold text-gold"
              aria-hidden="true"
            />
            Trusted by 650+ families across Agra &bull; 4.6★ Google Rating
          </p>

          <ReviewDirectoryLinks className="mb-7 flex flex-wrap items-center justify-center gap-2.5 sm:mb-8 lg:justify-start" />

          <div className="mx-auto flex w-full max-w-[420px] flex-col gap-3 min-[380px]:flex-row min-[380px]:justify-center sm:gap-4 lg:mx-0 lg:w-auto lg:justify-start">
            <a
              href="tel:+919457500318"
              id="hero-cta-check-baraat-date"
              className="group inline-flex min-h-14 flex-1 items-center justify-center gap-3 bg-gold px-5 py-4 font-subheading text-xs font-semibold uppercase tracking-[0.13em] text-charcoal transition-colors hover:bg-ivory min-[380px]:flex-none min-[380px]:px-6 sm:text-sm sm:tracking-widest"
            >
              <span>Call Us</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20have%20a%20quick%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 border border-ivory/30 px-5 py-4 font-subheading text-xs uppercase tracking-[0.13em] text-ivory transition-colors hover:border-gold hover:bg-gold/5 min-[380px]:flex-none min-[380px]:px-6 sm:text-sm sm:tracking-widest"
            >
              <MessageCircle
                className="h-4 w-4 text-gold"
                aria-hidden="true"
              />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
