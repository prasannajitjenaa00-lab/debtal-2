import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import { FaStar, FaQuoteLeft, FaPlus, FaMinus } from "react-icons/fa";
import { SectionHeader } from "./Sections";
import { beforeAfter, testimonials, gallery, faqs } from "@/data/site";
export function BeforeAfter() {
  return <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Real Results" title={<>Before & <span className="text-gradient">After</span></>} subtitle="See the transformations that keep our patients smiling." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfter.map((b, i) => <motion.div key={b.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1
        }} className="rounded-3xl bg-card border border-border overflow-hidden shadow-soft">
              <div className="grid grid-cols-2">
                {["before", "after"].map(k => <div key={k} className="relative overflow-hidden aspect-square group">
                    <img src={k === "before" ? b.before : b.after} alt={`${b.title} ${k}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-125 transition duration-700" />
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${k === "before" ? "bg-foreground/80 text-background" : "bg-gradient-to-r from-medblue to-teal text-white"}`}>{k}</span>
                  </div>)}
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg">{b.title}</h3>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export function Testimonials() {
  return <section id="testimonials" className="py-20 lg:py-28 gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title={<>What Our <span className="text-gradient">Patients</span> Say</>} subtitle="Genuine stories from real smiles we've had the privilege to care for." />
        <Swiper modules={[Pagination, Autoplay]} pagination={{
        clickable: true
      }} autoplay={{
        delay: 4500,
        disableOnInteraction: false
      }} spaceBetween={24} breakpoints={{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }} className="!pb-14">
          {testimonials.map(t => <SwiperSlide key={t.name}>
              <div className="rounded-3xl bg-background border border-border p-7 shadow-soft h-full flex flex-col">
                <FaQuoteLeft className="text-3xl text-medblue/40" />
                <p className="mt-4 text-foreground/85 leading-relaxed flex-1">"{t.review}"</p>
                <div className="flex items-center gap-1 mt-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Patient</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>)}
        </Swiper>
      </div>
    </section>;
}
export function Gallery() {
  const [index, setIndex] = useState(-1);
  return <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Space" title={<>Take a <span className="text-gradient">Look Inside</span></>} subtitle="Modern, welcoming, and built for your comfort." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((src, i) => <motion.button key={src} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i % 8 * 0.05,
          duration: 0.4
        }} onClick={() => setIndex(i)} className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/3]">
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-medblue/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4">
                <span className="text-white font-semibold text-sm">View Photo</span>
              </div>
            </motion.button>)}
        </div>
        <Lightbox open={index >= 0} index={Math.max(index, 0)} close={() => setIndex(-1)} slides={gallery.map(src => ({
        src
      }))} />
      </div>
    </section>;
}
export function FAQ() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="py-20 lg:py-28 bg-softgray">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={<>Frequently Asked <span className="text-gradient">Questions</span></>} subtitle="Answers to what patients ask us most." />
        <div className="space-y-3">
          {faqs.map((f, i) => {
          const active = open === i;
          return <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button onClick={() => setOpen(active ? null : i)} className="w-full flex items-center justify-between text-left px-5 py-4 gap-4 hover:bg-muted/50 transition">
                  <span className="font-semibold">{f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-medblue/10 text-medblue shrink-0">
                    {active ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
                    </motion.div>}
                </AnimatePresence>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
