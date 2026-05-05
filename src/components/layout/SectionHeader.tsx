import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display-serif text-3xl md:text-5xl text-foreground">{title}</h2>
      {lede && (
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          {lede}
        </p>
      )}
      {children}
    </header>
  );
}
