import { FaPhoneAlt, FaClock, FaAmbulance } from "react-icons/fa";
export function AnnouncementBar() {
  return <div className="bg-gradient-to-r from-medblue to-teal text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4 py-2">
        <div className="flex items-center gap-5 flex-wrap">
          <a href="tel:06804056220" className="inline-flex items-center gap-1.5 font-medium hover:underline">
            <FaPhoneAlt className="text-[10px] opacity-80" />
            0680-4056220
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 opacity-90">
            <FaClock className="text-[10px]" />
            Mon – Sat: 9AM – 9PM
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-semibold bg-white/15 backdrop-blur rounded-full px-3 py-0.5">
          <FaAmbulance className="text-[10px]" />
          24/7 Emergency Available
        </span>
      </div>
    </div>;
}
