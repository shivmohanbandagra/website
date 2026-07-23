// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";
// // import { Zoom, ZoomIn } from "lucide-react";

// // // Mock data: Replace 'src' with your actual high-res imagery
// // const galleryData = [
// //   { id: 1, src: "/images/gallery/band-1.jpg", category: "Band", alt: "Royal Brass Band" },
// //   { id: 2, src: "/images/gallery/dhol-1.jpg", category: "Dhol", alt: "Nashik Dhol Performance" },
// //   { id: 3, src: "/images/gallery/decor-1.jpg", category: "Decor", alt: "Golden Chandelier Decor" },
// //   { id: 4, src: "/images/gallery/car-1.jpg", category: "Car", alt: "Vintage Wedding Car" },
// //   { id: 5, src: "/images/gallery/wedding-1.jpg", category: "Wedding", alt: "Bride and Groom Entry" },
// //   { id: 6, src: "/images/gallery/band-2.jpg", category: "Band", alt: "Night Band Performance" },
// //   { id: 7, src: "/images/gallery/decor-2.jpg", category: "Decor", alt: "Floral Chattar" },
// //   { id: 8, src: "/images/gallery/car-2.jpg", category: "Car", alt: "Classic Car Floral Setup" },
// // ];

// // const categories = ["All", "Band", "Dhol", "Decor", "Car", "Wedding"];

// // export default function FeaturedGallery() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Filter images based on selection
// //   const filteredImages = galleryData.filter(
// //     (item) => activeFilter === "All" || item.category === activeFilter
// //   );

// //   // Format array for Lightbox
// //   const lightboxSlides = filteredImages.map((img) => ({ src: img.src, alt: img.alt }));

// //   const openLightbox = (index) => {
// //     setCurrentIndex(index);
// //     setLightboxOpen(true);
// //   };

// //   return (
// //     <section className="py-24 bg-background">
// //       <div className="container mx-auto px-6">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <motion.span 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="font-subheading text-gold tracking-[0.2em] uppercase text-sm"
// //           >
// //             Visual Journey
// //           </motion.span>
// //           <motion.h2 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //             className="font-heading text-4xl md:text-6xl text-foreground mt-4 mb-8"
// //           >
// //             A Glimpse of <span className="text-gold italic">Royalty</span>
// //           </motion.h2>

// //           {/* Filter Buttons */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="flex flex-wrap justify-center gap-4 md:gap-8"
// //           >
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setActiveFilter(category)}
// //                 className={`relative pb-2 font-subheading uppercase tracking-widest text-xs md:text-sm transition-colors duration-300 ${
// //                   activeFilter === category ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
// //                 }`}
// //               >
// //                 {category}
// //                 {/* Animated Gold Underline */}
// //                 {activeFilter === category && (
// //                   <motion.div
// //                     layoutId="activeFilter"
// //                     className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
// //                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //                   />
// //                 )}
// //               </button>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* Masonry Grid */}
// //         <motion.div 
// //           layout
// //           className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
// //         >
// //           <AnimatePresence mode="popLayout">
// //             {filteredImages.map((image, index) => (
// //               <motion.div
// //                 key={image.id}
// //                 layout
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.9 }}
// //                 transition={{ duration: 0.4, ease: "easeOut" }}
// //                 className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
// //                 onClick={() => openLightbox(index)}
// //               >
// //                 {/* Image aspect ratios can vary in a masonry grid. 
// //                     Using a wrapper with auto height lets CSS columns do the work. */}
// //                 <div className="relative w-full overflow-hidden bg-foreground/5">
// //                   <Image
// //                     src={image.src}
// //                     alt={image.alt}
// //                     width={800}
// //                     height={1000}
// //                     className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
// //                   />
// //                 </div>

// //                 {/* Premium Hover Overlay */}
// //                 <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
// //                   <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center bg-charcoal/50 text-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //                     <ZoomIn className="w-5 h-5" strokeWidth={1.5} />
// //                   </div>
// //                   <span className="mt-4 font-subheading text-ivory tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
// //                     {image.category}
// //                   </span>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       {/* Fullscreen Lightbox */}
// //       <Lightbox
// //         open={lightboxOpen}
// //         close={() => setLightboxOpen(false)}
// //         index={currentIndex}
// //         slides={lightboxSlides}
// //         styles={{
// //           container: { backgroundColor: "rgba(18, 18, 18, 0.95)" }, // Charcoal background
// //         }}
// //         // Add optional plugins here (e.g., Thumbnails, Zoom)
// //       />
// //     </section>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import { ZoomIn, Play, X } from "lucide-react";

// // ---- IMAGES ----
// // Pulled from public/images/services/
// const galleryImages = [
//   { id: "img-1", type: "image", src: "/images/services/band.jpeg", category: "Band", alt: "Royal Wedding Band" },
//   { id: "img-2", type: "image", src: "/images/services/brassband.jpeg", category: "Band", alt: "Brass Band Performance" },
//   { id: "img-3", type: "image", src: "/images/services/weddingband.jpg", category: "Band", alt: "Wedding Band" },
//   { id: "img-4", type: "image", src: "/images/services/liveband.jpeg", category: "Band", alt: "Live Band Performance" },
//   { id: "img-5", type: "image", src: "/images/services/shehnai.jpeg", category: "Band", alt: "Shehnai & Traditional" },
//   { id: "img-6", type: "image", src: "/images/services/car.jpeg", category: "Car", alt: "Vintage Wedding Car" },
//   { id: "img-7", type: "image", src: "/images/services/car2.jpeg", category: "Car", alt: "Classic Car Floral Setup" },
//   { id: "img-8", type: "image", src: "/images/services/decor.jpeg", category: "Decor", alt: "Floral Chattar Decor" },
//   { id: "img-9", type: "image", src: "/images/services/homedecor.jpeg", category: "Decor", alt: "Home Decor Setup" },
//   { id: "img-10", type: "image", src: "/images/services/homedecor1.jpeg", category: "Decor", alt: "Home Decor Detail" },
//   { id: "img-11", type: "image", src: "/images/services/haldi.jpeg", category: "Decor", alt: "Haldi Ceremony Decor" },
//   { id: "img-12", type: "image", src: "/images/services/umbrellalight.jpeg", category: "Decor", alt: "Umbrella Light Setup" },
//   { id: "img-13", type: "image", src: "/images/services/dhol.jpeg", category: "Dhol", alt: "Nashik & Punjabi Dhol" },
//   { id: "img-14", type: "image", src: "/images/services/punjabidhol.jpeg", category: "Dhol", alt: "Punjabi Dhol Performance" },
//   { id: "img-15", type: "image", src: "/images/services/nashikdhol1.webp", category: "Dhol", alt: "Nashik Dhol Performance" },
//   { id: "img-16", type: "image", src: "/images/services/dj.jpeg", category: "DJ", alt: "DJ Setup" },
//   { id: "img-17", type: "image", src: "/images/services/djonwheels.jpeg", category: "DJ", alt: "DJ on Wheels" },
//   { id: "img-18", type: "image", src: "/images/services/1.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-19", type: "image", src: "/images/services/2.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-20", type: "image", src: "/images/services/3.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-21", type: "image", src: "/images/services/4.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-22", type: "image", src: "/images/services/5.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-23", type: "image", src: "/images/services/6.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-24", type: "image", src: "/images/services/7.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-25", type: "image", src: "/images/services/8.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-26", type: "image", src: "/images/services/9.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-27", type: "image", src: "/images/services/10.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-28", type: "image", src: "/images/services/11.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-29", type: "image", src: "/images/services/12.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-30", type: "image", src: "/images/services/13.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-31", type: "image", src: "/images/services/14.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-32", type: "image", src: "/images/services/15.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-33", type: "image", src: "/images/services/16.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-34", type: "image", src: "/images/services/17.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-35", type: "image", src: "/images/services/18.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   // { id: "img-36", type: "image", src: "/images/services/19.jpeg", category: "Wedding", alt: "Wedding Celebration" },
//   { id: "img-37", type: "image", src: "/images/services/20.jpeg", category: "Wedding", alt: "Wedding Celebration" },
// ];

// // ---- VIDEOS ----
// // Pulled from public/videos/
// const galleryVideos = [
//   { id: "vid-1", type: "video", src: "/videos/liveband.mp4", category: "videos", alt: "Live Band Performance" },
//   { id: "vid-2", type: "video", src: "/videos/nashikdhol.mp4", category: "videos", alt: "Nashik Dhol Performance" },
//   { id: "vid-3", type: "video", src: "/videos/1.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-4", type: "video", src: "/videos/2.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-5", type: "video", src: "/videos/3.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-6", type: "video", src: "/videos/4.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-7", type: "video", src: "/videos/5.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-8", type: "video", src: "/videos/6.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-9", type: "video", src: "/videos/7.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-10", type: "video", src: "/videos/8.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-11", type: "video", src: "/videos/9.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-12", type: "video", src: "/videos/10.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-13", type: "video", src: "/videos/11.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-14", type: "video", src: "/videos/12.mp4", category: "videos", alt: "Wedding Highlight" },
//   { id: "vid-15", type: "video", src: "/videos/13.mp4", category: "videos", alt: "Wedding Highlight" },
// ];

// const galleryData = [...galleryImages, ...galleryVideos];

// const categories = ["All", "Band", "Dhol", "Decor", "Car", "DJ", "Wedding","videos"];

// export default function FeaturedGallery() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [videoModalSrc, setVideoModalSrc] = useState(null);

//   // Filter items based on selection
//   const filteredItems = galleryData.filter(
//     (item) => activeFilter === "All" || item.category === activeFilter
//   );

//   // Only images go into the Lightbox slides (indices must match filteredImages, not filteredItems)
//   const filteredImages = filteredItems.filter((item) => item.type === "image");
//   const lightboxSlides = filteredImages.map((img) => ({ src: img.src, alt: img.alt }));

//   const openItem = (item) => {
//     if (item.type === "video") {
//       setVideoModalSrc(item.src);
//     } else {
//       const imageIndex = filteredImages.findIndex((img) => img.id === item.id);
//       setCurrentIndex(imageIndex);
//       setLightboxOpen(true);
//     }
//   };

//   return (
//     <section className="py-24 bg-background">
//       <div className="container mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="font-subheading text-gold tracking-[0.2em] uppercase text-sm"
//           >
//             Visual Journey
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-heading text-4xl md:text-6xl text-foreground mt-4 mb-8"
//           >
//             A Glimpse of <span className="text-gold italic">Royalty</span>
//           </motion.h2>

//           {/* Filter Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-4 md:gap-8"
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`relative pb-2 font-subheading uppercase tracking-widest text-xs md:text-sm transition-colors duration-300 ${
//                   activeFilter === category ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
//                 }`}
//               >
//                 {category}
//                 {activeFilter === category && (
//                   <motion.div
//                     layoutId="activeFilter"
//                     className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </button>
//             ))}
//           </motion.div>
//         </div>

//         {/* Masonry Grid */}
//         <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           <AnimatePresence mode="popLayout">
//             {filteredItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
//                 onClick={() => openItem(item)}
//               >
//                 <div className="relative w-full overflow-hidden bg-foreground/5">
//                   {item.type === "video" ? (
//                     <video
//                       src={item.src}
//                       muted
//                       loop
//                       playsInline
//                       preload="metadata"
//                       className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//                       onMouseEnter={(e) => e.currentTarget.play()}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.pause();
//                         e.currentTarget.currentTime = 0;
//                       }}
//                     />
//                   ) : (
//                     <Image
//                       src={item.src}
//                       alt={item.alt}
//                       width={800}
//                       height={1000}
//                       className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   )}
//                 </div>

//                 {/* Premium Hover Overlay */}
//                 <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
//                   <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center bg-charcoal/50 text-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     {item.type === "video" ? (
//                       <Play className="w-5 h-5" strokeWidth={1.5} />
//                     ) : (
//                       <ZoomIn className="w-5 h-5" strokeWidth={1.5} />
//                     )}
//                   </div>
//                   <span className="mt-4 font-subheading text-ivory tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
//                     {item.category}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Fullscreen Image Lightbox */}
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={currentIndex}
//         slides={lightboxSlides}
//         styles={{
//           container: { backgroundColor: "rgba(18, 18, 18, 0.95)" },
//         }}
//       />

//       {/* Fullscreen Video Modal */}
//       <AnimatePresence>
//         {videoModalSrc && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
//             onClick={() => setVideoModalSrc(null)}
//           >
//             <button
//               className="absolute top-6 right-6 text-ivory/80 hover:text-gold transition-colors"
//               onClick={() => setVideoModalSrc(null)}
//               aria-label="Close video"
//             >
//               <X className="w-8 h-8" strokeWidth={1.5} />
//             </button>
//             <video
//               src={videoModalSrc}
//               controls
//               autoPlay
//               className="max-w-full max-h-[85vh] rounded-sm"
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn, Play, X } from "lucide-react";

// ---- IMAGES ----
// Pulled from public/images/services/
const galleryImages = [
  { id: "img-1", type: "image", src: "/images/services/band.jpeg", category: "Band", alt: "Royal Wedding Band" },
  { id: "img-2", type: "image", src: "/images/services/brassband.jpeg", category: "Band", alt: "Brass Band Performance" },
  { id: "img-3", type: "image", src: "/images/services/weddingband.jpg", category: "Band", alt: "Wedding Band" },
  { id: "img-4", type: "image", src: "/images/services/liveband.jpeg", category: "Band", alt: "Live Band Performance" },
  { id: "img-5", type: "image", src: "/images/services/shehnai.jpeg", category: "Band", alt: "Shehnai & Traditional" },
  { id: "img-6", type: "image", src: "/images/services/car.jpeg", category: "Car", alt: "Vintage Wedding Car" },
  { id: "img-7", type: "image", src: "/images/services/car2.jpeg", category: "Car", alt: "Classic Car Floral Setup" },
  { id: "img-8", type: "image", src: "/images/services/decor.jpeg", category: "Decor", alt: "Floral Chattar Decor" },
  { id: "img-9", type: "image", src: "/images/services/homedecor.jpeg", category: "Decor", alt: "Home Decor Setup" },
  { id: "img-10", type: "image", src: "/images/services/homedecor1.jpeg", category: "Decor", alt: "Home Decor Detail" },
  { id: "img-11", type: "image", src: "/images/services/haldi.jpeg", category: "Decor", alt: "Haldi Ceremony Decor" },
  { id: "img-12", type: "image", src: "/images/services/umbrellalight.jpeg", category: "Decor", alt: "Umbrella Light Setup" },
  { id: "img-13", type: "image", src: "/images/services/dhol.jpeg", category: "Dhol", alt: "Nashik & Punjabi Dhol" },
  { id: "img-14", type: "image", src: "/images/services/punjabidhol.jpeg", category: "Dhol", alt: "Punjabi Dhol Performance" },
  { id: "img-15", type: "image", src: "/images/services/nashikdhol1.webp", category: "Dhol", alt: "Nashik Dhol Performance" },
  { id: "img-16", type: "image", src: "/images/services/dj.jpeg", category: "DJ", alt: "DJ Setup" },
  { id: "img-17", type: "image", src: "/images/services/djonwheels.jpeg", category: "DJ", alt: "DJ on Wheels" },
  { id: "img-18", type: "image", src: "/images/services/1.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-19", type: "image", src: "/images/services/2.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-20", type: "image", src: "/images/services/3.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-21", type: "image", src: "/images/services/4.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-22", type: "image", src: "/images/services/5.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-23", type: "image", src: "/images/services/6.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-24", type: "image", src: "/images/services/7.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-25", type: "image", src: "/images/services/8.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-26", type: "image", src: "/images/services/9.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-27", type: "image", src: "/images/services/10.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-28", type: "image", src: "/images/services/11.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-29", type: "image", src: "/images/services/12.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-30", type: "image", src: "/images/services/13.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-31", type: "image", src: "/images/services/14.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-32", type: "image", src: "/images/services/15.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-33", type: "image", src: "/images/services/16.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-34", type: "image", src: "/images/services/17.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-35", type: "image", src: "/images/services/18.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  // { id: "img-36", type: "image", src: "/images/services/19.jpeg", category: "Wedding", alt: "Wedding Celebration" },
  { id: "img-37", type: "image", src: "/images/services/20.jpeg", category: "Wedding", alt: "Wedding Celebration" },
];

// ---- VIDEOS ----
// Pulled from public/videos/
const galleryVideos = [
  { id: "vid-1", type: "video", src: "/videos/liveband.mp4", category: "videos", alt: "Live Band Performance" },
  { id: "vid-2", type: "video", src: "/videos/nashikdhol.mp4", category: "videos", alt: "Nashik Dhol Performance" },
  { id: "vid-3", type: "video", src: "/videos/1.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-4", type: "video", src: "/videos/2.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-5", type: "video", src: "/videos/3.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-6", type: "video", src: "/videos/4.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-7", type: "video", src: "/videos/5.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-8", type: "video", src: "/videos/6.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-9", type: "video", src: "/videos/7.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-10", type: "video", src: "/videos/8.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-11", type: "video", src: "/videos/9.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-12", type: "video", src: "/videos/10.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-13", type: "video", src: "/videos/11.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-14", type: "video", src: "/videos/12.mp4", category: "videos", alt: "Wedding Highlight" },
  { id: "vid-15", type: "video", src: "/videos/13.mp4", category: "videos", alt: "Wedding Highlight" },
];

const galleryData = [...galleryImages, ...galleryVideos];

const categories = ["All", "Band", "Dhol", "Decor", "Car", "DJ", "Wedding", "videos"];

// Split images into two halves for the mobile marquee rows (row 2 is all videos)
const mobileMidpoint = Math.ceil(galleryImages.length / 2);
const mobileRow1 = galleryImages.slice(0, mobileMidpoint);
const mobileRow2 = galleryVideos;
const mobileRow3 = galleryImages.slice(mobileMidpoint);

/* ---------------- Mobile Marquee Row ---------------- */
function MarqueeRow({ items, direction = "left", duration = 40, onItemClick }) {
  // Duplicate the row so the loop is seamless
  const looped = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="relative flex-shrink-0 w-32 h-44 sm:w-40 sm:h-52 overflow-hidden rounded-sm cursor-pointer bg-foreground/5"
            onClick={() => onItemClick(item)}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                {/* Persistent play badge, always visible */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center bg-charcoal/50 text-gold">
                    <Play className="w-4 h-4" strokeWidth={1.5} fill="currentColor" />
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function FeaturedGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModalSrc, setVideoModalSrc] = useState(null);

  // Filter items based on selection (desktop grid only)
  const filteredItems = galleryData.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  // Lightbox always references the full image set so it works the same
  // whether the click came from the desktop grid or the mobile marquee.
  const lightboxSlides = galleryImages.map((img) => ({ src: img.src, alt: img.alt }));

  const openItem = (item) => {
    if (item.type === "video") {
      setVideoModalSrc(item.src);
    } else {
      const imageIndex = galleryImages.findIndex((img) => img.id === item.id);
      setCurrentIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-subheading text-gold tracking-[0.2em] uppercase text-sm"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-foreground mt-4 mb-8"
          >
            A Glimpse of <span className="text-gold italic">Royalty</span>
          </motion.h2>

          {/* Filter Buttons — desktop grid only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative pb-2 font-subheading uppercase tracking-widest text-xs md:text-sm transition-colors duration-300 ${
                  activeFilter === category ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {category}
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ---------------- DESKTOP: unchanged masonry grid ---------------- */}
        <div className="hidden md:block">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
                  onClick={() => openItem(item)}
                >
                  <div className="relative w-full overflow-hidden bg-foreground/5">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Persistent play badge — videos only, always visible (no hover needed) */}
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-charcoal/60 border border-gold/50 flex items-center justify-center text-gold pointer-events-none">
                      <Play className="w-3.5 h-3.5" strokeWidth={1.5} fill="currentColor" />
                    </div>
                  )}

                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center bg-charcoal/50 text-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.type === "video" ? (
                        <Play className="w-5 h-5" strokeWidth={1.5} />
                      ) : (
                        <ZoomIn className="w-5 h-5" strokeWidth={1.5} />
                      )}
                    </div>
                    <span className="mt-4 font-subheading text-ivory tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ---------------- MOBILE: infinite 3-row alternating marquee ---------------- */}
        <div className="md:hidden -mx-6 space-y-4">
          <MarqueeRow items={mobileRow1} direction="left" duration={45} onItemClick={openItem} />
          <MarqueeRow items={mobileRow2} direction="right" duration={38} onItemClick={openItem} />
          <MarqueeRow items={mobileRow3} direction="left" duration={50} onItemClick={openItem} />
        </div>
      </div>

      {/* Fullscreen Image Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={lightboxSlides}
        styles={{
          container: { backgroundColor: "rgba(18, 18, 18, 0.95)" },
        }}
      />

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {videoModalSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setVideoModalSrc(null)}
          >
            <button
              className="absolute top-6 right-6 text-ivory/80 hover:text-gold transition-colors"
              onClick={() => setVideoModalSrc(null)}
              aria-label="Close video"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <video
              src={videoModalSrc}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}