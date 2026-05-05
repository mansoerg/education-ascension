import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function PreorderForm({ bookTitle }: { bookTitle: string }) {
  const [busy, setBusy] = useState(false);
  // Mock submit handler.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      toast("Preorder noted", {
        description: `We’ll email you when ${bookTitle} ships. (placeholder)`,
      });
      (e.target as HTMLFormElement).reset();
    }, 500);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
    >
      <div className="grid gap-2">
        <Label htmlFor="preorder-name">Name</Label>
        <Input id="preorder-name" name="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="preorder-email">Email</Label>
        <Input id="preorder-email" name="email" type="email" required />
      </div>
      <Button type="submit" size="lg" disabled={busy}>
        {busy ? "Saving…" : "Reserve a copy"}
      </Button>
    </form>
  );
}
