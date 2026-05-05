import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Education Moving Up" },
      {
        name: "description",
        content:
          "Get in touch with EMU. Request a briefing, ask a question, or write to our practice team in Pretoria, South Africa.",
      },
      { property: "og:title", content: "Contact — Education Moving Up" },
      {
        property: "og:description",
        content:
          "Request a briefing or write to the EMU practice team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Start a conversation."
        lede="A short briefing is the most useful first step. We’ll listen, frame the case, and tell you honestly whether we’re the right partner."
      />
      <Section className="pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <aside>
              <p className="eyebrow mb-3">Direct</p>
              <h2 className="font-serif text-2xl text-foreground">
                Practice office
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <span className="block text-muted-foreground">Address</span>
                  <span className="text-foreground">{site.contact.address}</span>
                </li>
                <li>
                  <span className="block text-muted-foreground">Telephone</span>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="text-foreground hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-muted-foreground">Mobile</span>
                  <a
                    href={`tel:${site.contact.cell}`}
                    className="text-foreground hover:underline"
                  >
                    {site.contact.cell}
                  </a>
                </li>
                <li>
                  <span className="block text-muted-foreground">Email</span>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-foreground hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
              <p className="eyebrow mt-10 mb-2">Note</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact details to be confirmed by the client before launch.
              </p>
            </aside>

            <div className="p-6 md:p-10 border border-hairline rounded-lg bg-card">
              <h2 className="font-serif text-2xl text-foreground mb-2">
                Write to us
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We respond within two working days.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
