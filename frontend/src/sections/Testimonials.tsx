import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../constants";
import { cn } from "../lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isHovered || isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, isPaused, activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -25 : 25,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 10,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -25 : 25,
      zIndex: 0,
    }),
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
    
    // Center card
    if (diff === 0) {
      return {
        x: '0%', scale: 1, zIndex: 10, opacity: 1, rotateY: '0deg', pointerEvents: 'auto' as const
      };
    }
    // Right card
    if (diff === 1) {
      return {
        x: '60%', scale: 0.85, zIndex: 5, opacity: 0.5, rotateY: '-15deg', pointerEvents: 'none' as const
      };
    }
    // Left card
    if (diff === TESTIMONIALS.length - 1) {
      return {
        x: '-60%', scale: 0.85, zIndex: 5, opacity: 0.5, rotateY: '15deg', pointerEvents: 'none' as const
      };
    }
    // Perfectly hidden background cards (no overlap)
    return {
      x: '0%', scale: 0.8, zIndex: 0, opacity: 0, rotateY: '0deg', pointerEvents: 'none' as const
    };
  };

  return (
    <section className="py-20 md:py-32 bg-[#f8fafc] relative overflow-hidden perspective-1000">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Don't just take our word for it. Here is what leading organizations say about our expert network services.
          </motion.p>
        </div>

        {/* 360 Carousel Container */}
        <div 
          className="relative h-[480px] sm:h-[400px] w-full max-w-5xl mx-auto flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "1200px" }}
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={index}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1] // Elegant ease-out
                }}
                style={{ pointerEvents: style.pointerEvents }}
                className={cn(
                  "absolute top-0 w-full max-w-[340px] sm:max-w-[440px] bg-white rounded-2xl p-8 md:p-10 transition-shadow duration-300 cursor-pointer",
                  isActive ? "shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100" : "shadow-md border border-slate-50"
                )}
                onClick={() => setIsPaused(true)}
              >
                <div className="absolute -top-5 -right-2 transform -rotate-12 bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center opacity-50 blur-xl"></div>
                <Quote className={cn(
                  "absolute top-8 right-8 h-12 w-12 transition-colors duration-300",
                  isActive ? "text-blue-100" : "text-slate-50"
                )} />

                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className={cn(
                  "text-[15px] sm:text-base leading-relaxed relative z-10 mb-8 transition-colors duration-300 h-[100px] overflow-hidden line-clamp-4",
                  isActive ? "text-slate-700" : "text-slate-400"
                )}>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner",
                    isActive ? "bg-gradient-to-br from-blue-600 to-indigo-600" : "bg-slate-300"
                  )}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className={cn(
                      "font-bold text-base",
                      isActive ? "text-slate-900" : "text-slate-500"
                    )}>{testimonial.author}</div>
                    <div className={cn(
                      "text-sm font-medium mt-0.5",
                      isActive ? "text-blue-600" : "text-slate-400"
                    )}>{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-6 mt-8 sm:mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-x-1"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500",
                  activeIndex === i ? "w-8 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:translate-x-1"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
