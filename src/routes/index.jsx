import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import { FaTooth } from "react-icons/fa";
import { Navbar, ScrollProgress, ScrollTop, WhatsappFab } from "@/components/site/Navbar";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Treatments, WhyChooseUs, Process } from "@/components/site/Sections";
import { BeforeAfter, Testimonials, Gallery, FAQ } from "@/components/site/Media";
import { Contact, AppointmentSection, Footer } from "@/components/site/Contact";
import { TrustBadges } from "@/components/site/TrustBadges";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The ODontologist - Smile Makers — Healthy Smiles Begin Here"
    }, {
      name: "description",
      content: "Premium dental care with modern technology and gentle treatment. Book your visit at The ODontologist - Smile Makers — implants, aligners, whitening & more."
    }]
  }),
  component: Home
});
function Home() {
  const bookRef = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60
    });
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);
  const scrollToBook = () => bookRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  return <>
    <AnimatePresence>
      {loading && <motion.div exit={{
        opacity: 0
      }} transition={{
        duration: 0.4
      }} className="fixed inset-0 z-[100] grid place-items-center bg-background">
        <motion.div animate={{
          scale: [1, 1.15, 1]
        }} transition={{
          duration: 1.6,
          repeat: Infinity
        }} className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-3 shadow-soft border border-border">
          <img src="/logo dr chinmay.png" alt="Logo" className="h-full w-full object-contain" />
        </motion.div>
      </motion.div>}
    </AnimatePresence>

    <AnnouncementBar />
    <ScrollProgress />
    <Navbar onBook={scrollToBook} />
    <main>
      <Hero onBook={scrollToBook} />
      <TrustBadges />
      <About />
      <Team />
      <Treatments />
      <WhyChooseUs />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <AppointmentSection formRef={bookRef} />
    </main>
    <Footer />
    <ScrollTop />
    <WhatsappFab />
  </>;
}
