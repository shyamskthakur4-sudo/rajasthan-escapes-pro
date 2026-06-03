import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, MapPin, Phone, Mail, MessageCircle, Instagram, Clock, LogIn, LogOut, ChevronRight, Sparkles, Award, Users, Globe2, Download, Calendar, Mountain, Palmtree, Snowflake, Crown, Heart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Counter } from "@/components/Counter";
import { ClientDetailsDialog } from "@/components/ClientDetailsDialog";

import hero from "@/assets/hero-jaipur.jpg";
import { packages, hotels, cabs, WHATSAPP, INSTAGRAM, PHONE_1, PHONE_2, EMAIL, MAPS_URL, kashmirImg } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Almonzo Tourism — Luxury Rajasthan Tours & Stays" },
      { name: "description", content: "Premium Rajasthan tour packages, palace hotels, desert camps, luxury cabs and spiritual tours by Almonzo Tourism — Jagatpura, Rajasthan." },
      { property: "og:title", content: "Almonzo Tourism — Royal Rajasthan Journeys" },
      { property: "og:description", content: "Tailored luxury travel across Jaipur, Udaipur, Jodhpur, Jaisalmer & the Golden Triangle." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rajasthan-escapes-pro.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://rajasthan-escapes-pro.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Almonzo Tourism",
          url: "https://rajasthan-escapes-pro.lovable.app/",
          email: "almonzotourism@gmail.com",
          telephone: ["+91-93529-14840", "+91-89554-70097"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jagatpura",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          areaServed: "Rajasthan, India",
        }),
      },
    ],
  }),
  component: Home,
});

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-14">
      <div className="text-xs uppercase tracking-[0.4em] text-accent mb-3 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-accent/50" /> {eyebrow} <span className="h-px w-10 bg-accent/50" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-base md:text-lg">{sub}</p>}
    </motion.div>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <Marquee />
      <Packages />
      <Hotels />
      <Cabs />
      <About />
      <PaymentRefund />
      <ArrivalDeparture />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Hawa Mahal Jaipur at sunrise" className="h-full w-full object-cover scale-110" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_50/0.55)] via-[oklch(0.18_0.02_50/0.4)] to-[oklch(0.18_0.02_50/0.85)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent mb-6">
          <Sparkles className="h-3.5 w-3.5" /> Rajasthan's royal travel concierge
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] drop-shadow-2xl">
          Journeys fit for <span className="shimmer-text">Royalty</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
          Curated luxury tours, palace hotels, desert camps and private escorts across the land of kings.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <ClientDetailsDialog subject="Plan My Trip" trigger={
            <Button size="lg" className="bg-gradient-gold text-ink hover:scale-105 transition-transform shadow-gold rounded-full px-8 h-14 text-base font-semibold">
              Plan My Royal Trip <ChevronRight className="ml-1" />
            </Button>
          } />
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur">
            <a href="#packages">Explore Packages</a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs uppercase tracking-[0.3em] animate-bounce">Scroll</div>
    </section>
  );
}

/* ---------------- DESTINATIONS ---------------- */
const destinationGroups = [
  {
    state: "Rajasthan",
    tagline: "Land of kings, palaces & desert dunes",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    cities: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Pushkar", "Bikaner"],
    accent: "from-amber-500/80 to-rose-600/80",
  },
  {
    state: "Uttarakhand",
    tagline: "Himalayan retreats & sacred valleys",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    cities: ["Nainital", "Mussoorie", "Rishikesh", "Kedarnath"],
    accent: "from-emerald-500/80 to-teal-700/80",
  },
  {
    state: "Kashmir",
    tagline: "Paradise of meadows, lakes & snow",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1200&auto=format&fit=crop",
    cities: ["Srinagar", "Gulmarg", "Sonmarg", "Pahalgam"],
    accent: "from-sky-500/80 to-indigo-700/80",
  },
  {
    state: "Himachal Pradesh",
    tagline: "Pine valleys, snowy passes & riverside towns",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    cities: ["Kullu", "Manali", "Kasol", "Shimla"],
    accent: "from-emerald-600/80 to-slate-700/80",
  },
  {
    state: "Andaman & Nicobar",
    tagline: "Turquoise waters & coral islands",
    icon: Palmtree,
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
    cities: ["Port Blair", "Havelock Island", "Neil Island"],
    accent: "from-cyan-500/80 to-blue-700/80",
  },
];

function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Destinations"
          title="Explore India, State by State"
          sub="Handpicked destinations across India — from royal Rajasthan to the Himalayan north and the emerald islands of the Andaman."
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {destinationGroups.map((g, i) => (
            <motion.div key={g.state} {...fadeUp(i * 0.08)}>
              <Card className="group relative overflow-hidden rounded-3xl border-border/60 p-0 h-full hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={g.image}
                    alt={`${g.state} destinations`}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${g.accent} mix-blend-multiply opacity-70 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 glass rounded-full h-11 w-11 flex items-center justify-center">
                    <g.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl leading-tight">{g.state}</h3>
                    <p className="text-xs text-white/85 mt-1">{g.tagline}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-accent" /> Popular cities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.cities.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border/70 text-foreground/80 hover:bg-accent/15 hover:border-accent/40 hover:text-foreground transition-colors"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <ClientDetailsDialog
                    subject={`${g.state} Tour Inquiry`}
                    trigger={
                      <Button variant="outline" className="mt-5 w-full rounded-full group/btn">
                        Plan {g.state} trip
                        <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    }
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Bikaner", "Mandawa", "Ranthambore", "Mount Abu", "Ajmer"];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {row.map((c, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-muted-foreground flex items-center gap-12">
            {c} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
function Packages() {
  const [selected, setSelected] = useState<typeof packages[number] | null>(null);
  return (
    <section id="packages" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Tour Packages" title="Curated Royal Itineraries" sub="From a weekend in the Pink City to an 11-day Rajasthan grand tour — every detail crafted for you." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div key={p.id} {...fadeUp(i * 0.05)}>
              <Card className="group relative overflow-hidden rounded-2xl border-border/60 p-0 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1280} height={896} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-accent/95 text-ink border-0">{p.duration}</Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <p className="text-sm text-white/80">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Starts at</div>
                      <div className="font-display text-2xl text-primary">{p.price}</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelected(p)} className="rounded-full">View <ChevronRight className="h-4 w-4" /></Button>
                  </div>
                  <div className="flex gap-2">
                    <ClientDetailsDialog subject={p.title} trigger={
                      <Button className="flex-1 bg-gradient-royal text-primary-foreground rounded-full">Book Now</Button>
                    } />
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => toast.info("Brochure PDF coming soon. Upload it from your dashboard.")} aria-label="Download brochure">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Itinerary modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl">{selected.title}</DialogTitle>
                <p className="text-sm text-muted-foreground">{selected.duration} · {selected.tagline}</p>
              </DialogHeader>
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover rounded-xl" />
              <h3 className="font-display text-xl mt-2">Day-by-day itinerary</h3>
              <ol className="space-y-3">
                {selected.days.map((d, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="shrink-0 h-7 w-7 rounded-full bg-gradient-gold text-ink font-semibold flex items-center justify-center text-xs">{idx + 1}</span>
                    <span className="text-muted-foreground pt-1">{d}</span>
                  </li>
                ))}
              </ol>
              <div className="flex gap-3 pt-2">
                <ClientDetailsDialog subject={selected.title} trigger={
                  <Button className="flex-1 bg-gradient-royal text-primary-foreground">Open Client Details Form</Button>
                } />
                <a href={`https://wa.me/${WHATSAPP}?text=Hi%20I%27m%20interested%20in%20${encodeURIComponent(selected.title)}`} target="_blank" rel="noreferrer">
                  <Button variant="outline">WhatsApp</Button>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------------- HOTELS ---------------- */
function Hotels() {
  return (
    <section id="hotels" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Stay" title="Where Royalty Rests" sub="Handpicked palace hotels, heritage havelis, comfort stays and luxury desert camps." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.map((h, i) => (
            <motion.div key={h.id} {...fadeUp(i * 0.05)}>
              <Card className="group overflow-hidden rounded-2xl p-0 border-border/60 hover:shadow-luxury transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={h.image} alt={h.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex glass rounded-full px-3 py-1">
                    {Array.from({ length: h.stars }).map((_, idx) => (
                      <Star key={idx} className="h-3 w-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl">{h.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 flex-1">{h.desc}</p>
                  <div className="flex gap-1.5 mt-3">
                    {h.gallery.map((g, idx) => (
                      <img key={idx} src={g} alt="" className="h-12 w-12 rounded-md object-cover ring-1 ring-border" loading="lazy" />
                    ))}
                  </div>
                  <ClientDetailsDialog subject={`${h.name} Inquiry`} trigger={
                    <Button className="mt-4 w-full bg-gradient-royal text-primary-foreground rounded-full">Open Client Details Form</Button>
                  } />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CABS ---------------- */
function Cabs() {
  return (
    <section id="cabs" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Cabs & Chauffeurs" title="Premium Vehicles, Private Drivers" sub="Modern fleet with English-speaking chauffeurs across Rajasthan." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cabs.map((c, i) => (
            <motion.div key={c.id} {...fadeUp(i * 0.05)}>
              <Card className="group overflow-hidden rounded-2xl p-0 border-border/60 hover:shadow-luxury transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img src={c.image} alt={c.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <Badge variant="outline" className="border-accent/40 text-accent">{c.capacity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {c.features.map((f) => <li key={f} className="flex gap-1.5"><span className="text-accent">✦</span> {f}</li>)}
                  </ul>
                  <div className="mt-4 p-3 rounded-xl bg-secondary text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting</div>
                    <div className="font-display text-xl text-primary">{c.price}</div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <ClientDetailsDialog subject={`Cab — ${c.name}`} trigger={
                      <Button className="flex-1 bg-gradient-royal text-primary-foreground rounded-full">Inquire</Button>
                    } />
                    <a href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(c.name)}`} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full" aria-label="WhatsApp">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div {...fadeUp()}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-[2rem]" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
                <img
                  src={hero}
                  alt="Almonzo Tourism — luxury travel across India"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1500ms]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-6 -right-4 md:-right-8 glass rounded-2xl p-4 shadow-luxury w-52"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Award className="h-5 w-5" />
                  <div className="text-[10px] uppercase tracking-[0.25em]">Since Dec 2022</div>
                </div>
                <div className="font-display text-base mt-1">Trusted travel concierge</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-2xl p-4 shadow-luxury w-52"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Heart className="h-5 w-5 fill-accent" />
                  <div className="text-[10px] uppercase tracking-[0.25em]">Loved by 200+</div>
                </div>
                <div className="font-display text-base mt-1">Happy travellers</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeUp(0.1)}>
            <div className="text-xs uppercase tracking-[0.4em] text-accent mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-accent/50" /> About Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Crafting memorable <span className="text-gradient-gold">journeys</span> across India
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">ALMONZO TOURISM</span> has been providing memorable travel experiences since <span className="font-semibold text-foreground">December 2022</span>. With 4+ years of tourism experience, we offer customized tour packages across Rajasthan, Uttarakhand, Kashmir, and Andaman & Nicobar.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We provide hotel bookings, cab services, sightseeing tours, spiritual tours, and personalized travel planning with premium customer support.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: Users, t: "Personal team" },
                { icon: Globe2, t: "Pan-India tours" },
                { icon: Award, t: "Premium support" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur p-4 text-center hover:border-accent/50 hover:-translate-y-0.5 transition-all"
                >
                  <b.icon className="h-6 w-6 mx-auto text-accent" />
                  <div className="text-xs mt-2 text-muted-foreground">{b.t}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ClientDetailsDialog
                subject="Plan My Trip"
                trigger={
                  <Button size="lg" className="bg-gradient-royal text-primary-foreground rounded-full shadow-gold">
                    Start Planning <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#contact">Talk to us</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated counters */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { to: 200, suffix: "+", label: "Happy Customers", icon: Heart },
            { to: 4, suffix: "+", label: "Years Experience", icon: Award },
            { to: 24, suffix: "/7", label: "Premium Support", icon: Headphones },
          ].map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-3xl glass p-8 shadow-luxury hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-gold opacity-10 blur-2xl" />
              <s.icon className="h-7 w-7 text-accent mb-3" />
              <Counter to={s.to} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PAYMENT + REFUND ---------------- */
function PaymentRefund() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <motion.div {...fadeUp()}>
          <Card className="relative overflow-hidden rounded-3xl bg-gradient-royal text-primary-foreground p-10 shadow-luxury h-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Payment Policy</div>
              <h3 className="font-display text-4xl">Simple, transparent terms</h3>
              <div className="mt-8 space-y-4">
                <div className="glass-dark rounded-2xl p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-gold text-ink font-display text-xl flex items-center justify-center font-bold">30%</div>
                  <div>
                    <div className="font-semibold">Advance at booking</div>
                    <div className="text-sm text-primary-foreground/75">Secure your dates with 30% advance to confirm the booking.</div>
                  </div>
                </div>
                <div className="glass-dark rounded-2xl p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-gold text-ink font-display text-xl flex items-center justify-center font-bold">100%</div>
                  <div>
                    <div className="font-semibold">On Day 1 of tour</div>
                    <div className="text-sm text-primary-foreground/75">Balance deposit on the first day of the tour package commencement.</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Card className="rounded-3xl p-10 shadow-luxury h-full">
            <div className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Refund Policy</div>
            <h3 className="font-display text-4xl">Cancellation terms</h3>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="a">
                <AccordionTrigger className="font-display text-lg">45 – 30 days prior to arrival</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">50% of the tour / service cost will be charged as cancellation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger className="font-display text-lg">30 – 15 days prior to arrival</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">75% of the tour / service cost will be charged as cancellation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger className="font-display text-lg">Less than 15 days / No-show</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-semibold text-destructive">NO REFUND will be applicable.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ARRIVAL / DEPARTURE ---------------- */
function ArrivalDeparture() {
  const items = [
    { icon: LogIn, t: "Check-In", time: "12:00 Hours", note: "Early arrival subject to availability. For guaranteed early check-in, book from the previous night." },
    { icon: LogOut, t: "Check-Out", time: "12:00 Hours", note: "Late checkout available on request and subject to availability / payment." },
  ];
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Hotel Policy" title="Arrival & Departure" />
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp(i * 0.1)}>
              <Card className="rounded-3xl p-10 shadow-luxury border-border/60 h-full">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.t}</div>
                    <div className="font-display text-3xl text-primary flex items-center gap-2"><Clock className="h-5 w-5 text-accent" /> {it.time}</div>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">{it.note}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = `*Website Contact*%0AName: ${f.name}%0AEmail: ${f.email}%0APhone: ${f.phone}%0AMessage: ${f.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${m}`, "_blank");
    toast.success("Sent! We will reply shortly.");
    setF({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Get In Touch" title="Begin Your Royal Journey" sub="Speak with our concierge — we craft itineraries within hours." />

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Phone, label: "Call us", lines: [PHONE_1, PHONE_2], href: `tel:${PHONE_1.replace(/\s/g, "")}` },
            { icon: MapPin, label: "Visit us", lines: ["Jagatpura, Jaipur", "Rajasthan, India"], href: MAPS_URL },
            { icon: Mail, label: "Email us", lines: [EMAIL, "Replies within 24 hrs"], href: `mailto:${EMAIL}` },
          ].map((c, i) => (
            <motion.a key={c.label} {...fadeUp(i * 0.08)} href={c.href} target="_blank" rel="noreferrer" className="block">
              <Card className="glass rounded-2xl p-6 hover:shadow-gold transition-all hover:-translate-y-1 h-full">
                <c.icon className="h-7 w-7 text-accent" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{c.label}</div>
                {c.lines.map((l) => <div key={l} className="font-medium">{l}</div>)}
              </Card>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div {...fadeUp()}>
            <Card className="rounded-3xl overflow-hidden border-border/60 shadow-luxury h-full">
              <iframe
                title="Almonzo Tourism location"
                src="https://www.google.com/maps?q=Jagatpura,Jaipur,Rajasthan&output=embed"
                className="w-full h-[460px] border-0"
                loading="lazy"
              />
            </Card>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Card className="rounded-3xl p-8 shadow-luxury">
              <h3 className="font-display text-3xl">Send a message</h3>
              <p className="text-sm text-muted-foreground mt-1">Reaches us directly on WhatsApp.</p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-2"><Label htmlFor="contact-name">Name</Label><Input id="contact-name" required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
                  <div className="grid gap-2"><Label htmlFor="contact-phone">Phone</Label><Input id="contact-phone" required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></div>
                </div>
                <div className="grid gap-2"><Label htmlFor="contact-email">Email</Label><Input id="contact-email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
                <div className="grid gap-2"><Label htmlFor="contact-message">Message</Label><Textarea id="contact-message" rows={4} required value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></div>
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1 bg-gradient-royal text-primary-foreground rounded-full h-12">Send via WhatsApp</Button>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <Button type="button" variant="outline" size="icon" className="h-12 w-12 rounded-full" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
