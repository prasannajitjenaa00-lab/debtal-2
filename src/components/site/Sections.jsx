import { motion } from "framer-motion";
import { treatments, whyChooseUs, process as steps } from "@/data/site";
export function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 rounded-full bg-medblue/10 text-medblue-dark px-4 py-1.5 text-sm font-semibold">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>;
}
export function Treatments() {
  return <section id="treatments" className="py-20 lg:py-28 bg-softgray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Services" title={<>Comprehensive <span className="text-gradient">Dental Treatments</span></>} subtitle="From routine cleanings to complete smile makeovers — expert care, gentle hands, and modern technology under one roof." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.map((t, i) => <motion.div key={t.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i % 4 * 0.05,
          duration: 0.4
        }} className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative h-44 overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-medblue/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition" />
                <span className="absolute top-3 right-3 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-medblue text-xl shadow-soft">
                  <t.icon />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.description}</p>
                <div className="mt-4 text-sm font-semibold text-medblue group-hover:translate-x-1 transition inline-flex items-center gap-1">
                  Learn more →
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export function WhyChooseUs() {
  return <section id="why" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title={<>The <span className="text-gradient">Star Dental Care</span> Difference</>} subtitle="Everything we do is designed around your comfort, your safety, and your smile." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((w, i) => <motion.div key={w.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i % 4 * 0.06
        }} className="group rounded-3xl border border-border bg-card p-6 text-center hover:shadow-soft hover:border-medblue/40 transition">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-medblue/15 to-teal/15 text-medblue text-2xl group-hover:from-medblue group-hover:to-teal group-hover:text-white transition">
                <w.icon />
              </span>
              <h3 className="mt-4 font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export function Process() {
  return <section className="py-20 lg:py-28 bg-softgray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Process" title={<>A Simple <span className="text-gradient">5-Step</span> Journey</>} subtitle="From your first call to lasting aftercare — we keep it seamless." />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => <motion.div key={s.step} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.08
        }} className="relative rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition">
              <div className="text-5xl font-extrabold text-gradient opacity-90">{s.step}</div>
              <h3 className="mt-3 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
