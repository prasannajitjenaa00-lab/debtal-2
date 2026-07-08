import { motion } from "framer-motion";
import { FaCheckCircle, FaGraduationCap, FaAward, FaUserMd } from "react-icons/fa";
export function About() {
  return <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border">
            <img src="/Dr.chinmaya.png" alt="Dr. Nidhi Singh" loading="lazy" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pr-44 text-white">
              <div className="text-sm opacity-90">Chief Dental Surgeon</div>
              <div className="text-2xl font-bold">Dr. Nidhi Singh</div>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-4 sm:-right-8 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-medblue to-teal text-white">
              <FaAward className="text-xl" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Recognized</div>
              <div className="font-bold">Top Dentist 2024</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-medblue/10 text-medblue-dark px-4 py-1.5 text-sm font-semibold">
            <FaUserMd /> About the Doctor
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Meet <span className="text-gradient">Dr. Nidhi Singh</span> — Your Trusted Smile Partner
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            With over a decade of experience across cosmetic, restorative, and pediatric dentistry,
            Dr. Singh blends clinical excellence with warm bedside manner. His patient-first
            philosophy has made Star Dental Care one of the most trusted clinics in the region.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <InfoRow icon={<FaGraduationCap />} label="Qualification" value="BDS" />
            <InfoRow icon={<FaAward />} label="Experience" value="10+ Years Practicing" />
            <InfoRow icon={<FaCheckCircle />} label="Specialization" value="Implants & Smile Design" />
            <InfoRow icon={<FaCheckCircle />} label="Recognition" value="1000+ Successful Cases" />
          </div>

          <ul className="mt-6 space-y-2">
            {["Certified Invisalign & Clear Aligner Provider", "Member, Indian Dental Association", "International Fellowship in Implantology"].map(item => <li key={item} className="flex items-start gap-2 text-foreground/80">
                <FaCheckCircle className="text-teal mt-1 shrink-0" /> {item}
              </li>)}
          </ul>
        </motion.div>
      </div>
    </section>;
}
function InfoRow({
  icon,
  label,
  value
}) {
  return <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft transition">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-medblue/10 text-medblue shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold truncate">{value}</div>
      </div>
    </div>;
}
