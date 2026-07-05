import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaStethoscope } from "react-icons/fa";
import { SectionHeader } from "./Sections";
import { doctors } from "@/data/site";
export function Team() {
  return <section id="team" className="py-20 lg:py-28 bg-softgray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Experts" title={<>Meet the <span className="text-gradient">Team</span></>} subtitle="Board-certified specialists dedicated to your comfort and care." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => <motion.div key={d.name} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.08,
          duration: 0.5
        }} className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-soft transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-lg font-bold">{d.name}</div>
                  <div className="text-xs opacity-90 font-medium">{d.title}</div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2.5 text-sm">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-medblue/10 text-medblue shrink-0 text-xs">
                    <FaGraduationCap />
                  </span>
                  <span className="text-muted-foreground text-xs leading-tight">{d.qualifications}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal/10 text-teal shrink-0 text-xs">
                    <FaAward />
                  </span>
                  <span className="text-muted-foreground text-xs leading-tight">{d.experience} Experience</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-medblue/10 text-medblue shrink-0 text-xs">
                    <FaStethoscope />
                  </span>
                  <span className="text-muted-foreground text-xs leading-tight">{d.specialty}</span>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
