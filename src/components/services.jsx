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
    title: "Royal Wedding Band",
    description:
      "Our signature brass ensemble delivering majestic melodies for the ultimate Baraat experience.",
    image: "/images/services/band.jpeg",
  },
  {
    id: 2,
    title: "Nashik & Punjabi Dhol",
    description:
      "High-energy traditional percussion that sets an unforgettable rhythm for your celebration.",
    image: "/images/services/dhol.jpeg",
  },
  {
    id: 3,
    title: "Vintage Car Rental",
    description:
      "Classic open-top convertibles decorated with premium florals for a truly royal entry.",
    image: "/images/services/car.jpeg",
  },
  {
    id: 4,
    title: "Shehnai & Traditional",
    description:
      "Auspicious, soulful melodies to welcome your guests and bless the wedding rituals.",
    image: "/images/services/shehnai.jpeg",
  },
  {
    id: 5,
    title: "Floral Chattar",
    description:
      "Handcrafted floral canopies and grand entrance concepts for the bride and groom.",
    image: "/images/services/decor.jpeg",
  },
  {
    id: 6,
    title: "DJ on Wheels",
    description:
      "Modern mobile sound systems bringing contemporary beats seamlessly into the Baraat.",
    image: "/images/services/dj.jpeg",
  },
  {
    id: 7,
    title: "Wedding Band",
    description:
      "A full live ensemble crafting the perfect musical backdrop for every moment of your celebration.",
    image: "/images/services/weddingband.jpg",
  },
  {
    id: 8,
    title: "Brass Band",
    description:
      "Grand, resonant brass performances that bring royal pomp and pageantry to your Baraat.",
    image: "/images/services/brassband.jpeg",
  },
  {
    id: 9,
    title: "Punjabi Dhol",
    description:
      "Thunderous dhol beats that ignite the dance floor and keep the energy soaring all night.",
    image: "/images/services/punjabidhol.jpeg",
  },
  {
    id: 10,
    title: "Nashik Dhol",
    description:
      "Synchronized Nashik-style drumming delivering a powerful, high-octane percussion spectacle.",
    image: "/images/services/nashikdhol1.webp",
  },
  {
    id: 11,
    title: "Umbrella Light",
    description:
      "Illuminated LED umbrellas creating a dazzling canopy of light for a truly regal procession.",
    image: "/images/services/umbrellalight.jpeg",
  },
  // {
  //   id: 12,
  //   title: "DJ Band",
  //   description:
  //     "A fusion of live instruments and DJ beats, blending tradition with a modern party atmosphere.",
  //   image: "/images/services/dj-band.jpeg",
  // },
  // {
  //   id: 13,
  //   title: "Music Band",
  //   description:
  //     "Versatile live musicians performing curated setlists to elevate every reception and sangeet.",
  //   image: "/images/services/music-band.jpeg",
  // },
  {
    id: 14,
    title: "Live Band",
    description:
      "Professional performers delivering high-energy live sets that keep guests dancing till dawn.",
    image: "/images/services/liveband.jpeg",
  },
  {
    id: 15,
    title: "Home Decor",
    description:
      "Elegant floral and lighting installations that transform your home for pre-wedding festivities.",
    image: "/images/services/homedecor1.jpeg",
  },
  {
    id: 16,
    title: "Haldi/Mhendi Decor",
    description:
      "Vibrant yellow-themed florals and props designed for a joyous, picture-perfect Haldi ceremony.",
    image: "/images/services/haldi.jpeg",
  },
  // {
  //   id: 17,
  //   title: "Mehndi Decor",
  //   description:
  //     "Colorful drapes, jhoolas, and floral backdrops crafted for an enchanting Mehndi celebration.",
  //   image: "/images/services/mhendi.jpeg",
  // },
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

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group hidden md:flex items-center gap-2 font-subheading text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            // Calculate delay based on column (0, 1, or 2) to stagger the row smoothly
            const delay = (index % 3) * 0.15;

            return (
              <Link
  href="https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20secure%20my%20wedding%20date."
  target="_blank"
>
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
                // onClick={() => {
                //   // Navigate to the service detail page or perform any action
                //   window.location.href = `https://wa.me/919457500318?text=Hello%20Shiv%20Mohan%20Band!%20I%20want%20to%20secure%20my%20wedding%20date.`;
                //   target="_blank";
                // }}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500" />

                {/* Golden Border Frame (Reveals on hover) */}
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