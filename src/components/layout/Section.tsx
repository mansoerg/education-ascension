import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

export function Section({
  children,
  className,
  as: As = "section",
  bleed = false,
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  bleed?: boolean;
  tone?: "paper" | "muted" | "ink";
  id?: string;
}) {
  const toneClass =
    tone === "muted"
      ? "bg-muted text-foreground"
      : tone === "ink"
        ? "bg-foreground text-background"
        : "bg-background text-foreground";

  return (
    <As
      id={id}
      className={cn(
        "w-full",
        toneClass,
        bleed ? "py-0" : "py-20 md:py-28",
        className,
      )}
    >
      {children}
    </As>
  );
}
