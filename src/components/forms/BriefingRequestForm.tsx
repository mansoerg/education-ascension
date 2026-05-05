import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function BriefingRequestForm() {
  const [busy, setBusy] = useState(false);
  // Mock submit handler.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      toast("Briefing requested", {
        description: "Our practice team will reach out to schedule. (placeholder)",
      });
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 p-6 md:p-8 border border-hairline rounded-lg bg-card">
      <div className="grid gap-2">
        <Label htmlFor="briefing-name">Your name</Label>
        <Input id="briefing-name" name="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="briefing-email">Email</Label>
        <Input id="briefing-email" name="email" type="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="briefing-context">Context (optional)</Label>
        <Textarea id="briefing-context" name="context" rows={4} />
      </div>
      <Button type="submit" disabled={busy} size="lg" className="justify-self-start">
        {busy ? "Submitting…" : "Request briefing"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
