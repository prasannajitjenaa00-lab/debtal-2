import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTooth, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaCheckCircle } from "react-icons/fa";
import { treatments, WHATSAPP_URL, navLinks } from "@/data/site";
import { SectionHeader } from "./Sections";
export function Contact() {
  return <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title={<>Visit or <span className="text-gradient">Call Us</span></>} subtitle="We'd love to hear from you. Reach out anytime — we're here to help." />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            <InfoCard icon={<FaMapMarkerAlt />} title="Clinic Address" lines={["Infront of Suzuki Showroom,", "Gajapati Nagar St, Baidyanath Nagar,", "Ayodhya Nagar, Brahmapur,", "Odisha 760010"]} />
            <InfoCard icon={<FaPhoneAlt />} title="Phone Number" lines={[<a href="tel:06804056220" className="hover:text-medblue hover:underline transition-colors">0680-4056220</a>]} />
            <InfoCard icon={<FaEnvelope />} title="Email" lines={["care@smilecare.in", "appointments@smilecare.in"]} />
            <InfoCard icon={<FaClock />} title="Working Hours" lines={["Mon – Sat: 9AM – 9PM", "Sun: 10AM – 4PM"]} />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft border border-border h-[420px] lg:h-full min-h-[420px]">
            <iframe title="Clinic location" src="https://maps.google.com/maps?q=The%20ODontologist%20-%20Smile%20Makers,%20Brahmapur,%20Odisha%20760010&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" loading="lazy" className="border-0" allowFullScreen />
          </div>
        </div>
      </div>
    </section>;
}
function InfoCard({
  icon,
  title,
  lines
}) {
  return <div className="rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-medblue to-teal text-white text-xl">
        {icon}
      </span>
      <h3 className="mt-4 font-bold">{title}</h3>
      <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>;
}
export function AppointmentSection({
  formRef
}) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      treatment: "",
      date: "",
      message: ""
    });
  };
  const set = k => e => setForm(s => ({
    ...s,
    [k]: e.target.value
  }));
  return <section id="book" ref={formRef} className="py-20 lg:py-28 gradient-hero">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Book Appointment" title={<>Reserve Your <span className="text-gradient">Visit</span></>} subtitle="Fill in the form and our team will confirm your appointment shortly." />
        <motion.form initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} onSubmit={onSubmit} className="rounded-3xl bg-background/90 backdrop-blur border border-border p-6 sm:p-10 shadow-soft grid sm:grid-cols-2 gap-4">
          <Field label="Full Name" value={form.name} onChange={set("name")} placeholder="Jane Doe" required />
          <Field label="Phone" value={form.phone} onChange={set("phone")} placeholder="0680-4056220" required />
          <Field label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Treatment</label>
            <select value={form.treatment} onChange={set("treatment")} required className="rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40">
              <option value="">Select a treatment</option>
              {treatments.map(t => <option key={t.title}>{t.title}</option>)}
            </select>
          </div>
          <Field label="Preferred Date" type="date" value={form.date} onChange={set("date")} required />
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Message</label>
            <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us anything we should know…" className="rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40 resize-none" />
          </div>
          <div className="sm:col-span-2 flex justify-center pt-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-8 py-3.5 font-semibold text-white shadow-soft hover:scale-[1.03] transition">
              Submit Request
            </button>
          </div>
        </motion.form>
      </div>

      <AnimatePresence>
        {success && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-[70] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4" onClick={() => setSuccess(false)}>
            <motion.div initial={{
          scale: 0.85,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.85,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="max-w-md w-full rounded-3xl bg-background p-8 text-center shadow-soft border border-border">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-medblue to-teal text-white text-3xl">
                <FaCheckCircle />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                Your appointment request has been recorded. We will contact you soon.
              </p>
              <button onClick={() => setSuccess(false)} className="mt-6 rounded-full bg-foreground text-background px-6 py-2.5 font-semibold hover:opacity-90">
                Close
              </button>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </section>;
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required
}) {
  return <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold">{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className="rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40" />
    </div>;
}
export function Footer() {
  return <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 font-bold text-xl">
            <img src="/logo dr chinmay.png" alt="The ODontologist - Smile Makers" className="h-10 w-auto object-contain bg-white rounded-xl p-1" />
            <div className="leading-tight text-white font-extrabold text-base text-left">
              The <span className="text-gradient">ODontologist</span>
              <span className="block text-[8px] tracking-wider text-white/60 font-semibold mt-0.5">SMILE MAKERS</span>
            </div>
          </div>
          <p className="mt-4 text-background/70 text-sm">
            Premium dental care with a gentle touch. Trusted by families across the city for over a decade.
          </p>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-medblue hover:to-teal transition">
                <Icon />
              </a>)}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-white transition">{l.label}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {treatments.slice(0, 7).map(t => <li key={t.title}><a href="#treatments" className="hover:text-white transition">{t.title}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Working Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li className="flex justify-between"><span>Mon – Fri</span><span>9AM – 9PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>9AM – 8PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>10AM – 4PM</span></li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-2.5 font-semibold text-white text-sm">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
        <div>© {new Date().getFullYear()} The ODontologist - Smile Makers. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>;
}
