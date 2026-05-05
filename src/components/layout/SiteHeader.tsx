import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { primaryNav, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled
          ? "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-hairline"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span
            aria-hidden
            className="grid place-items-center h-9 w-9 rounded-md bg-primary text-primary-foreground font-serif text-base"
          >
            E
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-base text-foreground">{site.name}</span>
            <span className="eyebrow text-[10px]">Quality improvement · Education</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/contact">Request briefing</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/library">Preorder the book</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-hairline text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
          <Container className="py-4 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b border-hairline last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Request briefing
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link to="/library" onClick={() => setOpen(false)}>
                  Preorder
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
