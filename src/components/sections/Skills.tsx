import { skillCategories } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="section-band section-padding">
      <div className="section-container">
        <SectionTitle subtitle="What I'm good at">Skills</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="card p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--color-border)] bg-surface-alt px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
