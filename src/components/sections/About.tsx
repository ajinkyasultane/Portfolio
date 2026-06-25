import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiMail, HiPhone, HiUser } from "react-icons/hi";
import { siteConfig } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

const details = [
  { icon: HiUser, label: "Name", value: siteConfig.name },
  { icon: HiMail, label: "Email", value: siteConfig.email },
  { icon: HiPhone, label: "Phone", value: siteConfig.phone },
  { icon: HiLocationMarker, label: "Location", value: siteConfig.location },
];

export function About() {
  return (
    <section id="about" className="section-band section-padding">
      <div className="section-container">
        <SectionTitle subtitle="Get to know me">About Me</SectionTitle>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[300px] lg:mx-0">
            <div className="card relative aspect-[4/5] overflow-hidden">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 300px, 300px"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent">
                Developer
              </span>
              <span className="rounded-full border border-gold/30 bg-[#faf3e6] px-4 py-1.5 text-xs font-semibold text-[#8a6d2f]">
                Student
              </span>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{siteConfig.about}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="card flex items-start gap-3 p-4 sm:p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-foreground sm:text-base">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Get In Touch
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
