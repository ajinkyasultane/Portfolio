import { achievements, certifications } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Achievements() {
  return (
    <section id="achievements" className="section-band section-padding">
      <div className="section-container">
        <SectionTitle subtitle="Competitions, academics & certifications">
          Achievements
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gold">{item.year}</p>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-base font-semibold text-foreground sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-center font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground sm:text-2xl">
          Certifications
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="min-w-0">
                <p className="font-medium text-foreground">{cert.title}</p>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
              <span className="w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
