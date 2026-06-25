"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-[var(--color-border)] bg-white/95 shadow-[0_4px_20px_rgba(28,40,56,0.06)] backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm",
      )}
    >
      <div className="section-container flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-accent/25 sm:h-10 sm:w-10 sm:text-sm"
        >
          AS
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="btn-primary !hidden !min-h-9 !w-auto !px-4 !py-2 !text-xs sm:!text-sm xl:!inline-flex"
        >
          Hire Me
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-foreground xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white xl:hidden">
          <nav className="section-container flex max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-accent-soft hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-band border-t py-8 sm:py-10">
      <div className="section-container text-center">
        <p
          className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground"
        >
          Ajinkya Sultane
        </p>
        <p className="mt-2 text-sm text-muted">
          © {new Date().getFullYear()} · Computer Engineering Student · Portfolio
        </p>
      </div>
    </footer>
  );
}
