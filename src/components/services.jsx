// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     title: "Royal Wedding Band",
//     description:
//       "Our signature brass ensemble delivering majestic melodies for the ultimate Baraat experience.",
//     image: "/images/services/band.jpeg",
//   },
//   {
//     id: 2,
//     title: "Nashik & Punjabi Dhol",
//     description:
//       "High-energy traditional percussion that sets an unforgettable rhythm for your celebration.",
//     image: "/images/services/dhol.jpeg",
//   },
//   {
//     id: 3,
//     title: "Vintage Car Rental",
//     description:
//       "Classic open-top convertibles decorated with premium florals for a truly royal entry.",
//     image: "/images/services/car.jpeg",
//   },
//   {
//     id: 4,
//     title: "Shehnai & Traditional",
//     description:
//       "Auspicious, soulful melodies to welcome your guests and bless the wedding rituals.",
//     image: "/images/services/shehnai.jpeg",
//   },
//   {
//     id: 5,
//     title: "Floral Chattar",
//     description:
//       "Handcrafted floral canopies and grand entrance concepts for the bride and groom.",
//     image: "/images/services/decor.jpeg",
//   },
//   {
//     id: 6,
//     title: "DJ on Wheels",
//     description:
//       "Modern mobile sound systems bringing contemporary beats seamlessly into the Baraat.",
//     image: "/images/services/dj.jpeg",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-24 bg-background relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div>
//             <motion.span
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="font-subheading text-gold tracking-[0.2em] uppercase text-sm block mb-4"
//             >
//               Our Offerings
//             </motion.span>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="font-heading text-4xl md:text-6xl text-foreground max-w-2xl"
//             >
//               Curating <span className="text-gold italic">Unforgettable</span>{" "}
//               Experiences
//             </motion.h2>
//           </div>

//           <motion.button
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="group hidden md:flex items-center gap-2 font-subheading text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors"
//           >
//             View All Services
//             <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </motion.button>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {services.map((service, index) => {
//             // Calculate delay based on column (0, 1, or 2) to stagger the row smoothly
//             const delay = (index % 3) * 0.15;

//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   duration: 0.7,
//                   delay,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//                 className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm cursor-pointer bg-charcoal"
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   priority={index === 0}
//                   sizes="(max-width: 768px) 100vw,
//          (max-width: 1024px) 50vw,
//          33vw"
//                   className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
//                 />

//                 {/* Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500" />

//                 {/* Golden Border Frame (Reveals on hover) */}
//                 <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 z-10 pointer-events-none" />

//                 {/* Content */}
//                 <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
//                   <h3 className="font-heading text-2xl md:text-3xl text-ivory mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     {service.title}
//                   </h3>
//                   <div className="overflow-hidden">
//                     <p className="font-sans text-ivory/70 text-sm font-light leading-relaxed transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Wedding Band in Agra",
    description: "Shiv Mohan Band — Agra's most trusted wedding band for royal baraat processions since 1980.",
    image: "/images/services/band.jpeg",
    href: "/wedding-band-agra/",
  },
  {
    id: 2,
    title: "Nashik Dhol in Agra",
    description: "Synchronized Nashik Dhol group performance — powerful, high-energy percussion for baraat celebrations.",
    image: "/images/services/dhol.jpeg",
    href: "/nashik-dhol-agra/",
  },
  {
    id: 3,
    title: "Vintage Car for Wedding",
    description: "Luxury vintage cars decorated with flowers for a royal, cinematic wedding entry in Agra.",
    image: "/images/services/car.jpeg",
    href: "/vintage-car-rental-agra/",
  },
  {
    id: 4,
    title: "Shehnai Player in Agra",
    description: "Classical shehnai for auspicious wedding ceremonies — soulful melodies that bless every ritual.",
    image: "/images/services/shehnai.jpeg",
    href: "/shehnai-player-agra/",
  },
  {
    id: 5,
    title: "Wedding Decoration",
    description: "Complete wedding decoration for baraat, haldi, mehndi and reception in Agra.",
    image: "/images/services/decor.jpeg",
    href: "/wedding-decoration-agra/",
  },
  {
    id: 6,
    title: "DJ on Wheels in Agra",
    description: "Professional DJ on wheels with modern sound system — non-stop Bollywood energy for your baraat.",
    image: "/images/services/dj.jpeg",
    href: "/dj-on-wheels-agra/",
  },
  {
    id: 7,
    title: "Baraat Services Agra",
    description: "Complete royal baraat package — band, dhol, DJ, ghori, baggi and vintage car all in one.",
    image: "/images/services/weddingband.jpg",
    href: "/baraat-services-agra/",
  },
  {
    id: 8,
    title: "Brass Band in Agra",
    description: "Professional brass band with skilled musicians for royal baraat processions in Agra.",
    image: "/images/services/brassband.jpeg",
    href: "/brass-band-agra/",
  },
  {
    id: 9,
    title: "Punjabi Dhol in Agra",
    description: "High-energy Punjabi Dhol beats that ignite the baraat and make guests dance with joy.",
    image: "/images/services/punjabidhol.jpeg",
    href: "/punjabi-dhol-agra/",
  },
  {
    id: 10,
    title: "Nashik Dhol Group",
    description: "Synchronized Nashik Dhol drumming — a spectacular visual and rhythmic performance.",
    image: "/images/services/nashikdhol1.webp",
    href: "/nashik-dhol-agra/",
  },
  {
    id: 11,
    title: "Ghori & Baggi in Agra",
    description: "Beautifully decorated Ghori and royal Baggi for the groom's grand baraat entry in Agra.",
    image: "/images/services/umbrellalight.jpeg",
    href: "/ghori-baggi-agra/",
  },
  {
    id: 14,
    title: "Live Band in Agra",
    description: "Professional live band for weddings, sangeet nights and special celebrations in Agra.",
    image: "/images/services/liveband.jpeg",
    href: "/live-band-agra/",
  },
  {
    id: 15,
    title: "Haldi Decoration Agra",
    description: "Vibrant floral and prop decoration for joyous, picture-perfect Haldi ceremonies in Agra.",
    image: "/images/services/homedecor1.jpeg",
    href: "/wedding-decoration-agra/",
  },
  {
    id: 16,
    title: "Mehndi Decoration",
    description: "Colourful, festive mehndi night decoration with flowers, fabrics and lights in Agra.",
    image: "/images/services/haldi.jpeg",
    href: "/wedding-decoration-agra/",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-subheading text-gold tracking-[0.2em] uppercase text-sm block mb-4"
            >
              Our Offerings
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl text-foreground max-w-2xl"
            >
              Curating <span className="text-gold italic">Unforgettable</span>{" "}
              Experiences
            </motion.h2>
          </div>

          {/* <Link href="/baraat-services-agra/">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group hidden md:flex items-center gap-2 font-subheading text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.span>
          </Link> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            // Calculate delay based on column (0, 1, or 2) to stagger the row smoothly
            const delay = (index % 3) * 0.15;

            return (
              <Link key={service.id} href={service.href}>
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm cursor-pointer bg-charcoal"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={`${service.title} — Shiv Mohan Band Agra`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500" />

                {/* Golden Border Frame */}
                <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 z-10 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="font-heading text-2xl md:text-3xl text-ivory mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="font-sans text-ivory/70 text-sm font-light leading-relaxed transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}