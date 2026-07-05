import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as FaShieldAlt, B as FaTwitter, C as FaMapMarkerAlt, D as FaPhoneAlt, E as FaMoon, F as FaSyringe, H as FaWhatsapp, I as FaTeeth, L as FaTeethOpen, M as FaStar, N as FaStethoscope, O as FaPlus, P as FaSun, R as FaTimes, S as FaInstagram, T as FaMinus, U as FaYoutube, V as FaUserMd, _ as FaClock, a as GiTooth, b as FaGraduationCap, c as FaArrowUp, d as FaBriefcaseMedical, f as FaCalendarCheck, g as FaClinicMedical, h as FaChild, i as GiHealthNormal, j as FaSmile, k as FaQuoteLeft, l as FaAward, m as FaCheckCircle, n as MdEmergency, o as GiToothbrush, p as FaCertificate, r as MdMedicalServices, s as FaAmbulance, t as MdCleanHands, u as FaBars, v as FaEnvelope, w as FaMedal, x as FaHeartbeat, y as FaFacebookF, z as FaTooth } from "../_libs/react-icons.mjs";
import { a as AnimatePresence, i as motion, n as useSpring, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { t as require_aos } from "../_libs/aos.mjs";
import { i as SwiperSlide, n as Pagination, r as Swiper, t as Autoplay } from "../_libs/swiper.mjs";
import { t as Lightbox } from "../_libs/yet-another-react-lightbox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ct1SdUmN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_aos = /* @__PURE__ */ __toESM(require_aos());
var treatments = [
	{
		title: "Dental Checkup",
		description: "Comprehensive oral examination to keep your smile healthy.",
		icon: FaTooth,
		image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
	},
	{
		title: "Teeth Cleaning",
		description: "Professional scaling and polishing for a fresh, bright smile.",
		icon: GiToothbrush,
		image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
	},
	{
		title: "Root Canal",
		description: "Painless root canal therapy using advanced rotary endodontics.",
		icon: FaTeeth,
		image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80"
	},
	{
		title: "Dental Filling",
		description: "Tooth-colored composite fillings that blend naturally.",
		icon: GiTooth,
		image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80"
	},
	{
		title: "Teeth Whitening",
		description: "Safe, in-office whitening for a brighter smile in one visit.",
		icon: FaSmile,
		image: "https://images.unsplash.com/photo-1581585504013-4a1cc85a1a1c?w=800&q=80"
	},
	{
		title: "Dental Crown",
		description: "Durable ceramic crowns that restore form and function.",
		icon: FaTooth,
		image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
	},
	{
		title: "Dental Bridge",
		description: "Fixed bridges to replace missing teeth beautifully.",
		icon: FaTeethOpen,
		image: "https://images.unsplash.com/photo-1670250661472-95f16b3f16f1?w=800&q=80"
	},
	{
		title: "Dental Implant",
		description: "Titanium implants — the gold standard for missing teeth.",
		icon: FaSyringe,
		image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
	},
	{
		title: "Braces",
		description: "Metal & ceramic braces for perfect alignment.",
		icon: FaTeeth,
		image: "https://images.unsplash.com/photo-1601456546330-c7dea503b0be?w=800&q=80"
	},
	{
		title: "Clear Aligners",
		description: "Invisible aligners for discreet teeth straightening.",
		icon: FaSmile,
		image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=800&q=80"
	},
	{
		title: "Smile Makeover",
		description: "Custom cosmetic plan to transform your smile.",
		icon: FaSmile,
		image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80"
	},
	{
		title: "Cosmetic Dentistry",
		description: "Veneers, bonding & more for a picture-perfect smile.",
		icon: FaSmile,
		image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80"
	},
	{
		title: "Wisdom Tooth Removal",
		description: "Gentle surgical removal with fast recovery.",
		icon: FaBriefcaseMedical,
		image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=800&q=80"
	},
	{
		title: "Tooth Extraction",
		description: "Painless extractions with modern anesthesia.",
		icon: MdMedicalServices,
		image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80"
	},
	{
		title: "Pediatric Dentistry",
		description: "Kid-friendly care in a fun, relaxed environment.",
		icon: FaChild,
		image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
	},
	{
		title: "Dentures",
		description: "Custom-fit removable dentures that feel natural.",
		icon: FaTeeth,
		image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80"
	},
	{
		title: "Emergency Dental Care",
		description: "24/7 emergency service for sudden dental problems.",
		icon: MdEmergency,
		image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
	},
	{
		title: "Gum Treatment",
		description: "Complete periodontal care for healthy gums.",
		icon: GiHealthNormal,
		image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
	}
];
var whyChooseUs = [
	{
		icon: FaUserMd,
		title: "Experienced Doctors",
		desc: "Board-certified specialists with 10+ years of experience."
	},
	{
		icon: MdMedicalServices,
		title: "Latest Technology",
		desc: "Digital X-rays, laser dentistry & 3D imaging."
	},
	{
		icon: FaHeartbeat,
		title: "Pain-Free Treatment",
		desc: "Modern anesthesia and gentle techniques."
	},
	{
		icon: FaShieldAlt,
		title: "Affordable Care",
		desc: "Transparent pricing and flexible payment plans."
	},
	{
		icon: MdCleanHands,
		title: "Sterilized Equipment",
		desc: "Hospital-grade sterilization for every patient."
	},
	{
		icon: FaSmile,
		title: "Friendly Staff",
		desc: "A warm, welcoming team dedicated to your comfort."
	},
	{
		icon: MdEmergency,
		title: "Emergency Support",
		desc: "24/7 availability for dental emergencies."
	},
	{
		icon: FaClinicMedical,
		title: "Patient Satisfaction",
		desc: "1000+ five-star reviews from happy patients."
	}
];
var process = [
	{
		step: "01",
		title: "Book Appointment",
		desc: "Schedule online, over the phone, or via WhatsApp in seconds."
	},
	{
		step: "02",
		title: "Consultation",
		desc: "Meet your dentist and discuss your concerns and goals."
	},
	{
		step: "03",
		title: "Diagnosis",
		desc: "Digital imaging and thorough exam create a clear plan."
	},
	{
		step: "04",
		title: "Treatment",
		desc: "Comfortable, precision treatment using modern tools."
	},
	{
		step: "05",
		title: "Follow-up Care",
		desc: "Aftercare check-ins to keep your smile healthy long-term."
	}
];
var beforeAfter = [
	{
		before: "https://images.unsplash.com/photo-1581585504013-4a1cc85a1a1c?w=600&q=80",
		after: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
		title: "Teeth Whitening"
	},
	{
		before: "https://images.unsplash.com/photo-1601456546330-c7dea503b0be?w=600&q=80",
		after: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=600&q=80",
		title: "Orthodontic Alignment"
	},
	{
		before: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
		after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
		title: "Smile Makeover"
	}
];
var testimonials = [
	{
		name: "Ananya Sharma",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
		review: "The team at SmileCare was incredibly gentle. My root canal was completely painless — I'd never trust another clinic!",
		rating: 5
	},
	{
		name: "Rahul Verma",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
		review: "Got my dental implants done here. The results are stunning and the process was seamless. Highly recommended.",
		rating: 5
	},
	{
		name: "Priya Nair",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
		review: "My kids actually love visiting Dr. Mehta! The pediatric team is amazing. Beautiful, modern clinic too.",
		rating: 5
	},
	{
		name: "Arjun Patel",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
		review: "The whitening treatment gave me the smile I've always wanted. Professional, clean, and world-class facilities.",
		rating: 5
	},
	{
		name: "Meera Iyer",
		image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
		review: "Invisible aligners changed my life. The care and follow-up here are second to none.",
		rating: 5
	}
];
var gallery = [
	"https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
	"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80",
	"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80",
	"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80",
	"https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80",
	"https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80",
	"https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80",
	"https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=900&q=80"
];
var faqs = [
	{
		q: "Is Root Canal Painful?",
		a: "Not anymore. With modern rotary endodontics and effective local anesthesia, a root canal at The ODontologist - Smile Makers feels no different from a regular filling. Most patients report zero discomfort during and after treatment."
	},
	{
		q: "How Often Should I Visit?",
		a: "We recommend a professional cleaning and check-up every 6 months. Regular visits help detect issues early and keep your teeth and gums in optimal health."
	},
	{
		q: "What is Teeth Whitening?",
		a: "Teeth whitening is a safe cosmetic procedure that lightens stains and discoloration. We use in-office LED whitening that delivers results up to 8 shades brighter in a single visit."
	},
	{
		q: "How Long Does an Implant Last?",
		a: "With proper care and regular check-ups, dental implants can last 25+ years — often a lifetime. They are the most durable tooth replacement option available today."
	},
	{
		q: "Is Emergency Treatment Available?",
		a: "Yes. We offer 24/7 emergency dental care. Simply call our helpline or WhatsApp us and our on-call dentist will attend to you as soon as possible."
	}
];
var doctors = [
	{
		name: "Dr. Chinmaya Subudhi",
		title: "Chief Dental Surgeon & Founder",
		image: "/Dr.chinmaya.png",
		qualifications: "BDS",
		experience: "10+ Years",
		specialty: "Implants & Full-Mouth Rehabilitation"
	},
	{
		name: "Dr. Priya Nair",
		title: "Orthodontist",
		image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
		qualifications: "BDS, MDS — Orthodontics",
		experience: "8+ Years",
		specialty: "Braces, Aligners & Jaw Correction"
	},
	{
		name: "Dr. Vikram Rao",
		title: "Endodontist",
		image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
		qualifications: "BDS, MDS — Conservative Dentistry",
		experience: "10+ Years",
		specialty: "Root Canal & Micro-Endodontics"
	},
	{
		name: "Dr. Sana Khan",
		title: "Pediatric Dentist",
		image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
		qualifications: "BDS, MDS — Pediatric Dentistry",
		experience: "7+ Years",
		specialty: "Child Dental Care & Behavior Management"
	}
];
var certifications = [
	{
		name: "Indian Dental Association",
		abbr: "IDA"
	},
	{
		name: "ISO 9001:2015 Certified",
		abbr: "ISO"
	},
	{
		name: "Invisalign Certified Provider",
		abbr: "INV"
	},
	{
		name: "Digital Smile Design",
		abbr: "DSD"
	},
	{
		name: "Advanced Implantology",
		abbr: "IMPL"
	},
	{
		name: "Laser Dentistry Certified",
		abbr: "LAS"
	}
];
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Team",
		href: "#team"
	},
	{
		label: "Treatments",
		href: "#treatments"
	},
	{
		label: "Why Choose Us",
		href: "#why"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "FAQ",
		href: "#faq"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var WHATSAPP_URL = "https://wa.me/918018517617?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment.";
function Navbar({ onBook }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: { y: -80 },
		animate: { y: 0 },
		transition: { duration: .5 },
		className: `sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-18 items-center justify-between py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-3 font-bold text-lg shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo dr chinmay.png",
							alt: "The ODontologist - Smile Makers",
							className: "h-14 w-auto object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden sm:block leading-none text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-base font-extrabold text-foreground",
								children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "ODontologist"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[9px] tracking-wider text-muted-foreground font-semibold mt-0.5",
								children: "SMILE MAKERS"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-7",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm font-medium text-foreground/80 hover:text-medblue transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-medblue hover:after:w-full after:transition-all",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDark((d) => !d),
								"aria-label": "Toggle dark mode",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted transition",
								children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaSun, { className: "text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaMoon, { className: "text-medblue" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onBook,
								className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:opacity-95 hover:scale-[1.03] transition",
								children: "Book Appointment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen((o) => !o),
								"aria-label": "Menu",
								className: "lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTimes, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBars, {})
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "lg:hidden overflow-hidden bg-background border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-4 flex flex-col gap-1",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "px-3 py-3 rounded-lg hover:bg-muted text-foreground/90 font-medium",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setOpen(false);
						onBook();
					},
					className: "mt-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-3 font-semibold text-white shadow-soft",
					children: "Book Appointment"
				})]
			})
		}) })]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-medblue to-teal"
	});
}
function ScrollTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .5
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .5
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Scroll to top",
		className: "fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-soft hover:scale-110 transition",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowUp, {})
	}) });
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noreferrer",
		initial: { scale: 0 },
		animate: { scale: 1 },
		transition: {
			delay: 1.2,
			type: "spring"
		},
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition",
		"aria-label": "Chat on WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "relative text-2xl" })]
	});
}
function AnnouncementBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gradient-to-r from-medblue to-teal text-white text-xs sm:text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:8018517617",
					className: "inline-flex items-center gap-1.5 font-medium hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhoneAlt, { className: "text-[10px] opacity-80" }), "+91 80185 17617"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden sm:inline-flex items-center gap-1.5 opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaClock, { className: "text-[10px]" }), "Mon – Sat: 9AM – 9PM"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 font-semibold bg-white/15 backdrop-blur rounded-full px-3 py-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAmbulance, { className: "text-[10px]" }), "24/7 Emergency Available"]
			})]
		})
	});
}
function useCountUp(end, duration = 2e3) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const hasRun = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!inView || hasRun.current) return;
		hasRun.current = true;
		const startTime = performance.now();
		let raf;
		const tick = (now) => {
			const progress = Math.min((now - startTime) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.floor(eased * end));
			if (progress < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		end,
		duration
	]);
	return {
		ref,
		count
	};
}
function Hero({ onBook }) {
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (v) v.play().catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: "/dental-clinic.mp4",
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true,
				preload: "auto",
				className: "absolute inset-0 w-full h-full object-cover z-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40 z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-medblue/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-medblue/20 px-4 py-1.5 text-sm font-medium text-medblue-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAward, {}), " Award-winning dental care"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-md",
							children: [
								"Healthy Smiles ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Begin Here"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-white/80 max-w-xl drop-shadow-sm",
							children: "Providing advanced dental care with modern technology and compassionate treatment. Trusted by 500+ families for gentle, world-class dentistry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onBook,
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-7 py-3.5 font-semibold text-white shadow-soft hover:scale-[1.03] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCalendarCheck, {}), " Book Appointment"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border-2 border-medblue/30 bg-background/60 backdrop-blur px-7 py-3.5 font-semibold text-medblue-dark hover:bg-medblue/10 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "text-[#25D366] text-lg" }), " WhatsApp Consultation"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid grid-cols-3 gap-4 max-w-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatCard, {
									target: 12,
									suffix: "+",
									label: "Years Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatCard, {
									target: 500,
									suffix: "+",
									label: "Happy Patients"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatCard, {
									target: 2500,
									suffix: "+",
									label: "Procedures Done"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								animate: { y: [
									0,
									-12,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity
								},
								src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=80",
								alt: "Smiling patient at dental clinic",
								loading: "lazy",
								className: "rounded-3xl shadow-soft object-cover h-80 w-full mt-8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								animate: { y: [
									0,
									12,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity
								},
								src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80",
								alt: "Professional dentist",
								loading: "lazy",
								className: "rounded-3xl shadow-soft object-cover h-80 w-full"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .8 },
							className: "absolute -left-2 top-10 sm:-left-6 sm:top-16 rounded-2xl bg-background shadow-soft border border-border px-4 py-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-medblue/10 text-medblue",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAward, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: "12+ Years"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Experience"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: 1 },
							className: "absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-2xl bg-background shadow-soft border border-border px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-0.5 text-amber-400",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaStar, {}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold mt-1",
								children: "500+ Happy Patients"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: 1.2 },
							className: "absolute -right-2 bottom-16 sm:-right-6 rounded-2xl bg-background shadow-soft border border-border px-4 py-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaSmile, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: "2500+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Successful Treatments"
							})] })]
						})
					]
				})]
			})
		]
	});
}
function AnimatedStatCard({ target, suffix, label }) {
	const { ref, count } = useCountUp(target, 2e3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "rounded-2xl bg-background/70 dark:bg-white/5 backdrop-blur border border-border px-3 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-xl sm:text-2xl font-extrabold text-gradient",
			children: [count, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] sm:text-xs text-muted-foreground font-medium",
			children: label
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -40
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl overflow-hidden shadow-soft border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/Dr.chinmaya.png",
						alt: "Dr. Chinmaya Subudhi",
						loading: "lazy",
						className: "w-full h-[520px] object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm opacity-90",
							children: "Chief Dental Surgeon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-bold",
							children: "Dr. Chinmaya Subudhi"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-medblue to-teal text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAward, { className: "text-xl" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Recognized"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold",
						children: "Top Dentist 2024"
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 40
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-medblue/10 text-medblue-dark px-4 py-1.5 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaUserMd, {}), " About the Doctor"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
						children: [
							"Meet ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Dr. Chinmaya Subudhi"
							}),
							" — Your Trusted Smile Partner"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground text-lg",
						children: "With over a decade of experience across cosmetic, restorative, and pediatric dentistry, Dr. Subudhi blends clinical excellence with warm bedside manner. His patient-first philosophy has made The ODontologist - Smile Makers one of the most trusted clinics in the region."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGraduationCap, {}),
								label: "Qualification",
								value: "BDS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAward, {}),
								label: "Experience",
								value: "10+ Years Practicing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCheckCircle, {}),
								label: "Specialization",
								value: "Implants & Smile Design"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCheckCircle, {}),
								label: "Recognition",
								value: "1000+ Successful Cases"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2",
						children: [
							"Certified Invisalign & Clear Aligner Provider",
							"Member, Indian Dental Association",
							"International Fellowship in Implantology"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCheckCircle, { className: "text-teal mt-1 shrink-0" }),
								" ",
								item
							]
						}, item))
					})
				]
			})]
		})
	});
}
function InfoRow({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 place-items-center rounded-xl bg-medblue/10 text-medblue shrink-0",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-semibold truncate",
				children: value
			})]
		})]
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center max-w-2xl mx-auto mb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex items-center gap-2 rounded-full bg-medblue/10 text-medblue-dark px-4 py-1.5 text-sm font-semibold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground text-lg",
				children: subtitle
			})
		]
	});
}
function Treatments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "treatments",
		className: "py-20 lg:py-28 bg-softgray",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Comprehensive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Dental Treatments"
				})] }),
				subtitle: "From routine cleanings to complete smile makeovers — expert care, gentle hands, and modern technology under one roof."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
				children: treatments.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: i % 4 * .05,
						duration: .4
					},
					className: "group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-44 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.image,
								alt: t.title,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-110 transition duration-700"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-medblue/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 right-3 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-medblue text-xl shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, {})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground line-clamp-3",
								children: t.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-sm font-semibold text-medblue group-hover:translate-x-1 transition inline-flex items-center gap-1",
								children: "Learn more →"
							})
						]
					})]
				}, t.title))
			})]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why Choose Us",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "ODontologist"
					}),
					" Difference"
				] }),
				subtitle: "Everything we do is designed around your comfort, your safety, and your smile."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-5",
				children: whyChooseUs.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i % 4 * .06 },
					className: "group rounded-3xl border border-border bg-card p-6 text-center hover:shadow-soft hover:border-medblue/40 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-medblue/15 to-teal/15 text-medblue text-2xl group-hover:from-medblue group-hover:to-teal group-hover:text-white transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold",
							children: w.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: w.desc
						})
					]
				}, w.title))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-softgray",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our Process",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A Simple ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "5-Step"
					}),
					" Journey"
				] }),
				subtitle: "From your first call to lasting aftercare — we keep it seamless."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-5 gap-5",
				children: process.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .08 },
					className: "relative rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl font-extrabold text-gradient opacity-90",
							children: s.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-bold text-lg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						})
					]
				}, s.step))
			})]
		})
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "py-20 lg:py-28 bg-softgray",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our Experts",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Meet the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Team"
				})] }),
				subtitle: "Board-certified specialists dedicated to your comfort and care."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: i * .08,
						duration: .5
					},
					className: "group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-soft transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-64 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image,
								alt: d.name,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-105 transition duration-700"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-4 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold",
									children: d.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs opacity-90 font-medium",
									children: d.title
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-lg bg-medblue/10 text-medblue shrink-0 text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGraduationCap, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-xs leading-tight",
									children: d.qualifications
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-lg bg-teal/10 text-teal shrink-0 text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAward, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground text-xs leading-tight",
									children: [d.experience, " Experience"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-lg bg-medblue/10 text-medblue shrink-0 text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaStethoscope, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-xs leading-tight",
									children: d.specialty
								})]
							})
						]
					})]
				}, d.name))
			})]
		})
	});
}
function BeforeAfter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Real Results",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Before & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "After"
				})] }),
				subtitle: "See the transformations that keep our patients smiling."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: beforeAfter.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "rounded-3xl bg-card border border-border overflow-hidden shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2",
						children: ["before", "after"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden aspect-square group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: k === "before" ? b.before : b.after,
								alt: `${b.title} ${k}`,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-125 transition duration-700"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${k === "before" ? "bg-foreground/80 text-background" : "bg-gradient-to-r from-medblue to-teal text-white"}`,
								children: k
							})]
						}, k))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg",
							children: b.title
						})
					})]
				}, b.title))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "py-20 lg:py-28 gradient-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Testimonials",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"What Our ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Patients"
					}),
					" Say"
				] }),
				subtitle: "Genuine stories from real smiles we've had the privilege to care for."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
				modules: [Pagination, Autoplay],
				pagination: { clickable: true },
				autoplay: {
					delay: 4500,
					disableOnInteraction: false
				},
				spaceBetween: 24,
				breakpoints: {
					0: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				},
				className: "!pb-14",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-background border border-border p-7 shadow-soft h-full flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaQuoteLeft, { className: "text-3xl text-medblue/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-foreground/85 leading-relaxed flex-1",
							children: [
								"\"",
								t.review,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 mt-4 text-amber-400",
							children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaStar, {}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.image,
								alt: t.name,
								loading: "lazy",
								className: "h-12 w-12 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Verified Patient"
							})] })]
						})
					]
				}) }, t.name))
			})]
		})
	});
}
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(-1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Our Space",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Take a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Look Inside"
					})] }),
					subtitle: "Modern, welcoming, and built for your comfort."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
					children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i % 8 * .05,
							duration: .4
						},
						onClick: () => setIndex(i),
						className: "group relative overflow-hidden rounded-2xl shadow-card aspect-[4/3]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: `Gallery ${i + 1}`,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-110 transition duration-700"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-gradient-to-t from-medblue/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white font-semibold text-sm",
								children: "View Photo"
							})
						})]
					}, src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
					open: index >= 0,
					index: Math.max(index, 0),
					close: () => setIndex(-1),
					slides: gallery.map((src) => ({ src }))
				})
			]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-20 lg:py-28 bg-softgray",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Questions"
				})] }),
				subtitle: "Answers to what patients ask us most."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: faqs.map((f, i) => {
					const active = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(active ? null : i),
							className: "w-full flex items-center justify-between text-left px-5 py-4 gap-4 hover:bg-muted/50 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-medblue/10 text-medblue shrink-0",
								children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaMinus, { className: "text-xs" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPlus, { className: "text-xs" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-5 pb-5 text-muted-foreground",
									children: f.a
								})
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20 lg:py-28 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Visit or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Call Us"
				})] }),
				subtitle: "We'd love to hear from you. Reach out anytime — we're here to help."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4 content-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaMapMarkerAlt, {}),
							title: "Clinic Address",
							lines: [
								"Infront of Suzuki Showroom,",
								"Gajapati Nagar St, Baidyanath Nagar,",
								"Ayodhya Nagar, Brahmapur,",
								"Odisha 760010"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhoneAlt, {}),
							title: "Phone Number",
							lines: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:8018517617",
								className: "hover:text-medblue hover:underline transition-colors",
								children: "+91 80185 17617"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, {}),
							title: "Email",
							lines: ["care@smilecare.in", "appointments@smilecare.in"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaClock, {}),
							title: "Working Hours",
							lines: ["Mon – Sat: 9AM – 9PM", "Sun: 10AM – 4PM"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl overflow-hidden shadow-soft border border-border h-[420px] lg:h-full min-h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Clinic location",
						src: "https://maps.google.com/maps?q=The%20ODontologist%20-%20Smile%20Makers,%20Brahmapur,%20Odisha%20760010&t=&z=16&ie=UTF8&iwloc=&output=embed",
						width: "100%",
						height: "100%",
						loading: "lazy",
						className: "border-0",
						allowFullScreen: true
					})
				})]
			})]
		})
	});
}
function InfoCard({ icon, title, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-medblue to-teal text-white text-xl",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-sm text-muted-foreground space-y-0.5",
				children: lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: l }, i))
			})
		]
	});
}
function AppointmentSection({ formRef }) {
	const [success, setSuccess] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		treatment: "",
		date: "",
		message: ""
	});
	const onSubmit = (e) => {
		e.preventDefault();
		const messageText = `Hello Doctor, I would like to book an appointment at The ODontologist - Smile Makers.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Treatment: ${form.treatment}
Preferred Date: ${form.date}
Message: ${form.message || "N/A"}`;
		const whatsappUrl = `https://wa.me/918018517617?text=${encodeURIComponent(messageText)}`;
		window.open(whatsappUrl, "_blank");
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
	const set = (k) => (e) => setForm((s) => ({
		...s,
		[k]: e.target.value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "book",
		ref: formRef,
		className: "py-20 lg:py-28 gradient-hero",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Book Appointment",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Reserve Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Visit"
				})] }),
				subtitle: "Fill in the form and our team will confirm your appointment shortly."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				onSubmit,
				className: "rounded-3xl bg-background/90 backdrop-blur border border-border p-6 sm:p-10 shadow-soft grid sm:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						value: form.name,
						onChange: set("name"),
						placeholder: "Jane Doe",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						value: form.phone,
						onChange: set("phone"),
						placeholder: "+91 80185 17617",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						type: "email",
						value: form.email,
						onChange: set("email"),
						placeholder: "you@example.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold",
							children: "Treatment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.treatment,
							onChange: set("treatment"),
							required: true,
							className: "rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a treatment"
							}), treatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t.title }, t.title))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred Date",
						type: "date",
						value: form.date,
						onChange: set("date"),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.message,
							onChange: set("message"),
							rows: 4,
							placeholder: "Tell us anything we should know…",
							className: "rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40 resize-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2 flex justify-center pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-8 py-3.5 font-semibold text-white shadow-soft hover:scale-[1.03] transition",
							children: "Submit Request"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[70] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4",
			onClick: () => setSuccess(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .85,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .85,
					opacity: 0
				},
				onClick: (e) => e.stopPropagation(),
				className: "max-w-md w-full rounded-3xl bg-background p-8 text-center shadow-soft border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-medblue to-teal text-white text-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCheckCircle, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-2xl font-extrabold",
						children: "Thank you!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Your appointment request has been recorded. We will contact you soon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSuccess(false),
						className: "mt-6 rounded-full bg-foreground text-background px-6 py-2.5 font-semibold hover:opacity-90",
						children: "Close"
					})
				]
			})
		}) })]
	});
}
function Field({ label, value, onChange, placeholder, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange,
			placeholder,
			required,
			className: "rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medblue/40"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-foreground text-background pt-16 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3.5 font-bold text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo dr chinmay.png",
							alt: "The ODontologist - Smile Makers",
							className: "h-16 w-auto object-contain bg-white rounded-2xl p-1.5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight text-white font-extrabold text-lg text-left",
							children: [
								"The ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "ODontologist"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] tracking-wider text-white/60 font-semibold mt-0.5",
									children: "SMILE MAKERS"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-background/70 text-sm",
						children: "Premium dental care with a gentle touch. Trusted by families across the city for over a decade."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							FaFacebookF,
							FaInstagram,
							FaTwitter,
							FaYoutube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "social",
							className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-medblue hover:to-teal transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-bold text-lg",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-background/70",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-white transition",
						children: l.label
					}) }, l.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-bold text-lg",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-background/70",
					children: treatments.slice(0, 7).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#treatments",
						className: "hover:text-white transition",
						children: t.title
					}) }, t.title))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold text-lg",
						children: "Working Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-background/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Fri" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9AM – 9PM" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saturday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9AM – 8PM" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sunday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10AM – 4PM" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medblue to-teal px-5 py-2.5 font-semibold text-white text-sm",
						children: "Chat on WhatsApp"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 border-t border-white/10 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" The ODontologist - Smile Makers. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hover:text-white",
					children: "Privacy Policy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hover:text-white",
					children: "Terms"
				})]
			})]
		})]
	});
}
var certIcons = [
	FaCertificate,
	FaShieldAlt,
	FaMedal,
	FaStar,
	FaCheckCircle,
	FaTooth
];
function TrustBadges() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 lg:py-20 bg-background border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8",
				children: "Recognized & Certified"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 md:grid-cols-6 gap-6",
				children: certifications.map((c, i) => {
					const Icon = certIcons[i % certIcons.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .06 },
						className: "flex flex-col items-center gap-3 text-center group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-medblue/10 to-teal/10 text-medblue text-xl group-hover:from-medblue group-hover:to-teal group-hover:text-white transition-all duration-300 shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-sm",
								children: c.abbr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground leading-tight",
								children: c.name
							})
						]
					}, c.name);
				})
			})]
		})
	});
}
function Home() {
	const bookRef = (0, import_react.useRef)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		import_aos.default.init({
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			exit: { opacity: 0 },
			transition: { duration: .4 },
			className: "fixed inset-0 z-[100] grid place-items-center bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { scale: [
					1,
					1.15,
					1
				] },
				transition: {
					duration: 1.6,
					repeat: Infinity
				},
				className: "flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-3 shadow-soft border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo dr chinmay.png",
					alt: "Logo",
					className: "h-full w-full object-contain"
				})
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { onBook: scrollToBook }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onBook: scrollToBook }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadges, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Treatments, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentSection, { formRef: bookRef })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
	] });
}
//#endregion
export { Home as component };
