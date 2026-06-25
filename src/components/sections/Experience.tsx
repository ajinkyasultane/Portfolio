import { experience } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HiBriefcase } from "react-icons/hi";

export function Experience() {
  return (
    <section id="experience" className="section-padding section-band-alt">
      <div className="section-container">
        <SectionTitle subtitle="Internships & freelance work">Experience</SectionTitle>

        <div className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="card p-5 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/20">
                  <HiBriefcase size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80 sm:text-base">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted">
                    {job.location} · {job.period}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
