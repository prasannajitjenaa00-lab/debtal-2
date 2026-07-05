import { motion } from "framer-motion";
import { FaCertificate, FaShieldAlt, FaMedal, FaStar, FaCheckCircle, FaTooth } from "react-icons/fa";
import { certifications } from "@/data/site";
const certIcons = [FaCertificate, FaShieldAlt, FaMedal, FaStar, FaCheckCircle, FaTooth];
export function TrustBadges() {
  return <section className="py-14 lg:py-20 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Recognized & Certified
        </motion.p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {certifications.map((c, i) => {
          const Icon = certIcons[i % certIcons.length];
          return <motion.div key={c.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.06
          }} className="flex flex-col items-center gap-3 text-center group">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-medblue/10 to-teal/10 text-medblue text-xl group-hover:from-medblue group-hover:to-teal group-hover:text-white transition-all duration-300 shadow-soft">
                  <Icon />
                </span>
                <span className="font-bold text-sm">{c.abbr}</span>
                <span className="text-[11px] text-muted-foreground leading-tight">{c.name}</span>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}
