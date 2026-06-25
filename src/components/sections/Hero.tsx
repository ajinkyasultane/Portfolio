"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { siteConfig } from "@/data/content";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.typewriterRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section-padding pt-28 sm:pt-32 lg:pt-36">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 via-gold/20 to-transparent blur-xl" />
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-full border-[5px] border-white shadow-[0_12px_40px_rgba(28,40,56,0.15)] sm:max-w-[280px] lg:max-w-[300px]">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 280px, 300px"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-white px-4 py-1 text-xs font-semibold tracking-wide text-gold shadow-sm">
              Portfolio 2026
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold sm:text-base">
              {siteConfig.greeting}
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-4 text-lg text-accent sm:text-xl">
              I&apos;m a{" "}
              <span className="font-semibold underline decoration-gold/50 decoration-2 underline-offset-4">
                {siteConfig.typewriterRoles[roleIndex]}
              </span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted lg:mx-0 lg:text-lg">
              {siteConfig.subtitle}. Passionate about building mobile apps with great user experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link href="#contact" className="btn-primary">
                Contact Me
              </Link>
              <Link href="#projects" className="btn-secondary">
                View Projects
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              {[
                { href: siteConfig.links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: siteConfig.links.github, icon: FaGithub, label: "GitHub" },
                { href: `mailto:${siteConfig.email}`, icon: HiMail, label: "Email" },
                { href: siteConfig.links.instagram, icon: FaInstagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-muted shadow-sm transition hover:border-accent hover:text-accent hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
