import { education } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HiAcademicCap } from "react-icons/hi";

export function Education() {
  return (
    <section id="education" className="section-padding section-band-alt">
      <div className="section-container">
        <SectionTitle subtitle="My academic background">Education</SectionTitle>

        <div className="relative mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <div className="absolute bottom-2 left-[1.125rem] top-2 w-0.5 bg-gradient-to-b from-accent via-gold/50 to-accent/30 sm:left-6" />
          {education.map((item) => (
            <div key={item.degree} className="relative pl-12 sm:pl-16">
              <span className="absolute left-2 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-accent text-white shadow-md sm:left-[1.125rem] sm:h-7 sm:w-7">
                <HiAcademicCap size={14} />
              </span>
              <div className="card p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground sm:text-xl">
                    {item.degree}
                  </h3>
                  <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 font-medium text-foreground/80">{item.school}</p>
                <p className="mt-1 text-sm text-muted">{item.period}</p>
                <p className="mt-3 inline-block rounded-lg bg-[#faf3e6] px-3 py-1 text-sm font-semibold text-[#8a6d2f]">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
