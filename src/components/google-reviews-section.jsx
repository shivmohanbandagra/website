"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// Replace these with your actual best Google Reviews
const googleReviews = [
  {
    id: 1,
    author: "Sanny Kumar",
    timeAgo: "a month ago",
    rating: 5,
    text: `Shiv mohan Band truly knows how to entertain a baraat. Superb sound quality and very disciplined staff.
The DJ and dhol combination was just fantastic.Excellent service and classy wedding arrangements.
Everyone in the wedding enjoyed the music and vibes.
Very professional management by the Shiv mohan team.
They made our groom entry look grand and royal.
One of the best wedding bands in the city.
Affordable packages with premium wedding experience.

Their Russian Dhol player was very good, I liked him the most.

Shiv mohan band
Thanks🙏`,
    badge: "Local Guide",
  },
  {
    id: 2,
    author: "Amish Hussain",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Amazing experience with this band service. The atmosphere they created during the wedding procession was unforgettable. Very professional staff, great uniforms, and excellent music coordination. They made the baraat look royal and lively. Definitely worth booking",
  },
  {
    id: 3,
    author: "Zubair Uddin",
    timeAgo: "2 month ago",
    rating: 5,
    text: "I booked the Shiv Mohan Band for my brother's wedding, and everyone thoroughly enjoyed their performance. Their band was absolutely fantastic; it provided immense entertainment for all the guests. Furthermore, everyone was delighted by their decorations and costumes. They truly added a special charm to my brother's wedding—so much so that I intend to book them again for my other brother's wedding in the future. I highly recommend that you all give the Shiv Mohan Band a try as well; you will truly be pleased. It is, without a doubt, the very best band.",
    badge: "Local Guide",
  },
  {
    id: 4,
    author: "Vidit Sikarwar",
    timeAgo: "4 months ago",
    rating: 5,
    text: "An unforgettable experience with Shiv Mohan Band! From the very first beat to the last, the energy was absolutely incredible. The band created a vibrant, royal atmosphere that made our baraat truly unforgettable. Every member of the team was professional, well-coordinated, and full of enthusiasm",
    badge: "Verified Booking",
  },
  {
    id: 5,
    author: "Swapnil Chauhan",
    timeAgo: "2 months ago",
    rating: 5,
    text: "I booked a Barat on Wheels from Shiv Mohan Bank for our special occasion, and the experience was truly excellent. The team was extremely professional and well-organized. The staff was very premium in their behavior—well-dressed, polite, and very cooperative throughout the event. Everything was managed smoothly and on time, which made the celebration even more special.The owner is also very humble, understanding, and flexible. He listened carefully to our requirements and ensured everything was arranged exactly as we wanted. Their dedication and attention to detail really stood out. Highly recommended for anyone looking to make their wedding or event grand and memorable.",
    badge: "Local Guide",
  }
];

export default function GoogleReviewsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Replace with your actual Google Maps Review URL from your profile
  const googleMapsUrl = "https://share.google/oaPxsPoREQryLkzv7";

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-b border-gold/15">
      {/* Subtle Golden Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Trust Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 bg-foreground/5 border border-gold/20 p-8 md:p-10 rounded-sm backdrop-blur-md">
          
          {/* Left: Google Branding & Score */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            {/* Google G Logo Icon */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="font-heading text-4xl font-bold text-foreground">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-foreground">
                Excellence on <span className="text-gold italic">Google Reviews</span>
              </h3>
              <p className="font-sans text-sm text-foreground/60 mt-1 font-light flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Based on 250+ verified customer ratings in Agra
              </p>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://www.google.com/search?sca_esv=d7a897ae2fa4bc83&sxsrf=APpeQnu32kuCFAQyAxUmeyxHuFSzYOEiJw:1783447368962&kgmid=/g/11vl311_bf&q=SHIV+MOHAN+BAND&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=941350a15d724c8e&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x39747769b797918d:0x6184388bfb61004b,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gold text-charcoal font-subheading uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-2 hover:bg-gold/90 transition-all"
            >
              <span>See All 250+ Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.google.com/search?sca_esv=d7a897ae2fa4bc83&sxsrf=APpeQnu32kuCFAQyAxUmeyxHuFSzYOEiJw:1783447368962&kgmid=/g/11vl311_bf&q=SHIV+MOHAN+BAND&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=941350a15d724c8e&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x39747769b797918d:0x6184388bfb61004b,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-background border border-gold/30 text-foreground font-subheading uppercase tracking-widest text-xs flex items-center justify-center hover:border-gold transition-all"
            >
              Write a Review
            </a>
          </div>

        </div>

        {/* Carousel Header & Controls */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="font-subheading text-gold tracking-[0.2em] uppercase text-xs block mb-2">
              Real Words, Real Families
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              What Agra is <span className="text-gold italic">Saying</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              ref={prevRef}
              aria-label="Previous Review"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-foreground disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Review"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-foreground disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible"
        >
          {googleReviews.map((rev) => (
            <SwiperSlide key={rev.id} className="h-auto">
              <div className="flex flex-col justify-between h-full p-8 bg-foreground/[0.03] border border-gold/15 rounded-sm hover:border-gold/40 transition-colors duration-500">
                
                <div>
                  {/* Rating & Google Watermark */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="font-sans text-[11px] text-foreground/40 font-light">{rev.timeAgo}</span>
                  </div>

                  {/* Review Body */}
                  <p className="font-sans text-sm text-foreground/80 font-light leading-relaxed mb-8 italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-heading font-bold text-sm uppercase">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-medium text-foreground leading-none">
                        {rev.author}
                      </h4>
                      <span className="font-sans text-[10px] text-gold/80 uppercase tracking-wider mt-1 block">
                        {rev.badge}
                      </span>
                    </div>
                  </div>

                  {/* Little Google G on card */}
                  <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}