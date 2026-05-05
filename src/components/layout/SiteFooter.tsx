import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { footerNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <span
                aria-hidden
                className="grid place-items-center h-9 w-9 rounded-md bg-background text-foreground font-serif"
              >
                E
              </span>
              <span className="font-serif text-lg">{site.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              {site.description}
            </p>
            <p className="eyebrow mt-6 text-background/60">Contact</p>
            <ul className="mt-3 space-y-1.5 text-sm text-background/80">
              <li>{site.contact.address}</li>
              <li>
                <a href={`tel:${site.contact.phone}`} className="hover:text-background">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-background">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <p className="eyebrow text-background/60">{heading}</p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-background/85 hover:text-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-background/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">
            Functionality precedes Performance.
          </p>
        </div>
      </Container>
    </footer>
  );
}
