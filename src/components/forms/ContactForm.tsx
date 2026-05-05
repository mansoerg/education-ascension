import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  // Mock handler — replace with server function during Next.js migration.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast("Message received", {
        description: "We’ll respond within two working days. (placeholder)",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="org">Organisation</Label>
          <Input id="org" name="org" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" placeholder="District director, principal, …" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">What would you like to discuss?</Label>
        <Textarea id="message" name="message" rows={6} required />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="justify-self-start">
        {submitting ? "Sending…" : "Send message"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
