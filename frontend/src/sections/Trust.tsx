import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace(/,/g, ""));
  const suffix = value.replace(/[0-9,]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const incrementTime = (2000 / end) * 10;

      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export function Trust() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
