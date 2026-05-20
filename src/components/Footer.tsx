import { Instagram, MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/almonzo-logo.jpg";
import { WHATSAPP, INSTAGRAM, PHONE_1, PHONE_2, EMAIL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[oklch(0.14_0.015_40)] text-[oklch(0.96_0.015_80)] overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(600px circle at 20% 0%, oklch(0.78 0.15 78 / 0.25), transparent), radial-gradient(500px circle at 80% 100%, oklch(0.32 0.13 25 / 0.4), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Almonzo Tourism" className="h-14 w-14 rounded-full ring-2 ring-accent/40 object-cover" width={56} height={56} loading="lazy" />
            <div>
              <div className="font-display text-2xl shimmer-text">ALMONZO</div>
              <div className="text-xs uppercase tracking-[0.3em] text-[oklch(0.72_0.03_70)]">Tourism</div>
            </div>
          </div>
          <p className="text-sm text-[oklch(0.78_0.025_70)] leading-relaxed">Curating royal journeys across Rajasthan — heritage palaces, golden deserts and private escorts.</p>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Packages", "Hotels", "Cabs", "About", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-[oklch(0.85_0.02_70)] hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent mb-4">Destinations</h4>
          <ul className="space-y-2 text-sm">
            {["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Ranthambore"].map((l) => (
              <li key={l} className="text-[oklch(0.85_0.02_70)] hover:text-accent transition-colors cursor-pointer">{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-[oklch(0.85_0.02_70)]">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> {PHONE_1}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> {PHONE_2}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> {EMAIL}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Jagatpura, Raipur, Rajasthan</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.55_0.18_150)] text-white text-sm font-medium hover:scale-105 transition-transform shadow-lg">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.6_0.25_330)] to-[oklch(0.65_0.22_30)] text-white text-sm font-medium hover:scale-105 transition-transform shadow-lg">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="relative mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-[oklch(0.7_0.025_70)] gap-2">
        <p>© {new Date().getFullYear()} ALMONZO TOURISM. All rights reserved.</p>
        <p>Crafted with royal precision in Rajasthan.</p>
      </div>
    </footer>
  );
}
