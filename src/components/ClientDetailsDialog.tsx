import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { WHATSAPP } from "@/lib/data";

export function ClientDetailsDialog({ trigger, subject = "Travel Inquiry" }: { trigger: ReactNode; subject?: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", travelDate: "", guests: "2", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Inquiry — ${subject}*%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ATravel date: ${form.travelDate}%0AGuests: ${form.guests}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    toast.success("Inquiry sent! We'll reach out on WhatsApp shortly.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Client Details — {subject}</DialogTitle>
          <DialogDescription>Share a few details and our concierge will craft your itinerary.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="date">Travel date</Label>
              <Input id="date" type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guests">Guests</Label>
              <Input id="guests" type="number" min={1} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Preferences</Label>
            <Textarea id="notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Hotel category, places, special requests…" />
          </div>
          <Button type="submit" className="bg-gradient-royal text-primary-foreground shadow-luxury">Send via WhatsApp</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
