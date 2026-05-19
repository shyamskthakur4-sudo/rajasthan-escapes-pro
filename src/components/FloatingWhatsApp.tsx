import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%20Almonzo%2C%20I%27d%20like%20to%20plan%20a%20trip`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[oklch(0.55_0.18_150)] text-white shadow-2xl hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.55_0.18_150)] opacity-30" />
    </a>
  );
}
