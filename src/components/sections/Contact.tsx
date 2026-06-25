import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { siteConfig } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="section-padding section-band-alt">
      <div className="section-container">
        <SectionTitle subtitle="Let's connect">Contact Me</SectionTitle>

        <div className="card mx-auto max-w-2xl p-6 text-center sm:p-10">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m open to internships, freelance projects, and collaboration opportunities.
            Feel free to reach out — I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-surface-alt px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent sm:text-base"
            >
              <HiMail className="shrink-0 text-accent" size={20} />
              <span className="break-all">{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-surface-alt px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent sm:text-base"
            >
              <HiPhone className="shrink-0 text-accent" size={20} />
              {siteConfig.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={`mailto:${siteConfig.email}`} className="btn-primary">
              Send Email
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { href: siteConfig.links.linkedin, icon: FaLinkedin },
              { href: siteConfig.links.github, icon: FaGithub },
              { href: siteConfig.links.instagram, icon: FaInstagram },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-muted shadow-sm transition hover:border-accent hover:text-accent hover:shadow-md"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
