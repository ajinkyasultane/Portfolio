import Image from "next/image";
import { technologies } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Technologies() {
  return (
    <section id="technologies" className="section-padding section-band-alt">
      <div className="section-container">
        <SectionTitle subtitle="Technologies I work with">Technologies</SectionTitle>

        <div className="space-y-10 sm:space-y-12">
          {technologies.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-[0.25em] text-gold sm:text-sm">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="card flex flex-col items-center gap-2 p-3 transition hover:-translate-y-1 sm:w-28 sm:gap-3 sm:p-4"
                  >
                    <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                      <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="40px" />
                    </div>
                    <p className="text-center text-[10px] font-medium text-foreground sm:text-xs">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
