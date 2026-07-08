import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaBars, FaTimes, FaTooth, FaMoon, FaSun, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { navLinks, WHATSAPP_URL } from "@/data/site";
export function Navbar({
  onBook
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return <motion.header initial={{
    y: -80
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3 font-bold text-lg shrink-0">
            <img src="/logo dr chinmay.png" alt="Star Dental Care" className="h-14 w-auto object-contain" />
            <span className="hidden sm:block leading-none text-left">
              <span className="block text-base font-extrabold text-foreground">Star <span className="text-gradient">Dental Care</span></span>
              <span className="block text-[9px] tracking-wider text-muted-foreground font-semibold mt-0.5">SMILE MAKERS</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(l => <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-medblue transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-medblue hover:after:w-full after:transition-all">
                {l.label}
              </a>)}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => setDark(d => !d)} aria-label="Toggle dark mode" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted transition">
              {dark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-medblue" />}
            </button>
            <button onClick={onBook} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:opacity-95 hover:scale-[1.03] transition">
              Book Appointment
            </button>
            <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border">
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: "auto",
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="lg:hidden overflow-hidden bg-background border-t border-border">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg hover:bg-muted text-foreground/90 font-medium">
                  {l.label}
                </a>)}
              <button onClick={() => {
            setOpen(false);
            onBook();
          }} className="mt-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-3 font-semibold text-white shadow-soft">
                Book Appointment
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}
export function ScrollProgress() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
  return <motion.div style={{
    scaleX
  }} className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-medblue to-teal" />;
}
export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <AnimatePresence>
      {show && <motion.button initial={{
      opacity: 0,
      scale: 0.5
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.5
    }} onClick={() => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })} aria-label="Scroll to top" className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-soft hover:scale-110 transition">
          <FaArrowUp />
        </motion.button>}
    </AnimatePresence>;
}
export function WhatsappFab() {
  return <motion.a href={WHATSAPP_URL} target="_blank" rel="noreferrer" initial={{
    scale: 0
  }} animate={{
    scale: 1
  }} transition={{
    delay: 1.2,
    type: "spring"
  }} className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition" aria-label="Chat on WhatsApp">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <FaWhatsapp className="relative text-2xl" />
    </motion.a>;
}
