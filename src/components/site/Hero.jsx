import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp, FaCalendarCheck, FaStar, FaAward, FaSmile } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/site";
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  const hasRun = useRef(false);
  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const startTime = performance.now();
    let raf;
    const tick = now => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return {
    ref,
    count
  };
}
export function Hero({
  onBook
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);
  return <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">

      {/* Background video */}
      <video ref={videoRef} src="/dental-clinic.mp4" autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40 z-10" />

      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-medblue/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-medblue/20 px-4 py-1.5 text-sm font-medium text-medblue-dark">
            <FaAward /> Award-winning dental care
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-md">
            Healthy Smiles <br className="hidden sm:block" />
            <span className="text-gradient">Begin Here</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl drop-shadow-sm">
            Providing advanced dental care with modern technology and compassionate treatment.
            Trusted by 500+ families for gentle, world-class dentistry.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-7 py-3.5 font-semibold text-white shadow-soft hover:scale-[1.03] transition">
              <FaCalendarCheck /> Book Appointment
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-medblue/30 bg-background/60 backdrop-blur px-7 py-3.5 font-semibold text-medblue-dark hover:bg-medblue/10 transition">
              <FaWhatsapp className="text-[#25D366] text-lg" /> WhatsApp Consultation
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <AnimatedStatCard target={12} suffix="+" label="Years Experience" />
            <AnimatedStatCard target={500} suffix="+" label="Happy Patients" />
            <AnimatedStatCard target={2500} suffix="+" label="Procedures Done" />
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <motion.img animate={{
            y: [0, -12, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity
          }} src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=80" alt="Smiling patient at dental clinic" loading="lazy" className="rounded-3xl shadow-soft object-cover h-80 w-full mt-8" />
            <motion.img animate={{
            y: [0, 12, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity
          }} src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80" alt="Professional dentist" loading="lazy" className="rounded-3xl shadow-soft object-cover h-80 w-full" />
          </div>

          {/* Floating cards */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.8
        }} className="absolute -left-2 top-10 sm:-left-6 sm:top-16 rounded-2xl bg-background shadow-soft border border-border px-4 py-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-medblue/10 text-medblue">
              <FaAward />
            </span>
            <div>
              <div className="text-sm font-bold">12+ Years</div>
              <div className="text-xs text-muted-foreground">Experience</div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1
        }} className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-2xl bg-background shadow-soft border border-border px-4 py-3">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <div className="text-xs font-semibold mt-1">500+ Happy Patients</div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 1.2
        }} className="absolute -right-2 bottom-16 sm:-right-6 rounded-2xl bg-background shadow-soft border border-border px-4 py-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal">
              <FaSmile />
            </span>
            <div>
              <div className="text-sm font-bold">2500+</div>
              <div className="text-xs text-muted-foreground">Successful Treatments</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
function AnimatedStatCard({
  target,
  suffix,
  label
}) {
  const {
    ref,
    count
  } = useCountUp(target, 2000);
  return <div ref={ref} className="rounded-2xl bg-background/70 dark:bg-white/5 backdrop-blur border border-border px-3 py-3 text-center">
      <div className="text-xl sm:text-2xl font-extrabold text-gradient">
        {count}{suffix}
      </div>
      <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">{label}</div>
    </div>;
}
