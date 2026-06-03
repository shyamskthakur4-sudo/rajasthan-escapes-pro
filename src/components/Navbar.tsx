import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/almonzo-logo.jpg";
import { Button } from "@/components/ui/button";
import { ClientDetailsDialog } from "./ClientDetailsDialog";
import { PHONE_1, PHONE_2, EMAIL } from "@/lib/data";

const links = [
  { href: "#packages", label: "Packages" },
  { href: "#hotels", label: "Hotels" },
  { href: "#cabs", label: "Cabs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${scrolled ? "glass shadow-luxury" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Almonzo Tourism" className="h-12 w-12 rounded-full ring-2 ring-accent/40 object-cover" width={48} height={48} />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide text-foreground">ALMONZO</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tourism</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors story-link">{l.label}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end text-[11px] leading-tight text-foreground/80">
              <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-accent">
                <Phone className="h-3 w-3" /> {PHONE_1}
              </a>
              <a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-accent">
                <Phone className="h-3 w-3" /> {PHONE_2}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-accent">
                <Mail className="h-3 w-3" /> {EMAIL}
              </a>
            </div>
            <ClientDetailsDialog
              subject="Plan My Trip"
              trigger={<Button className="bg-gradient-royal text-primary-foreground shadow-gold rounded-full">Plan My Trip</Button>}
            />
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-6 space-y-4 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium">{l.label}</a>
            ))}
            <ClientDetailsDialog
              subject="Plan My Trip"
              trigger={<Button className="w-full bg-gradient-royal text-primary-foreground">Plan My Trip</Button>}
            />
          </div>
        )}
      </div>
    </header>
  );
}
