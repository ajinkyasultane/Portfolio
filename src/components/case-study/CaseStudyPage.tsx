"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { FadeIn } from "@/components/ui/Motion";

function FlowSteps({ title, steps }: { title: string; steps: { step: number; title: string; description: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{title}</h3>
      <ol className="mt-6 space-y-4">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-xs font-medium text-stone-600">
              {s.step}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{s.title}</p>
              <p className="mt-1 text-sm text-stone-600">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CaseStudyPage({ project }: { project: Project }) {
  return (
    <article className="pt-24">
      <div className="section-container pb-16">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-foreground"
        >
          <HiArrowLeft /> Back to products
        </Link>

        <FadeIn className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: project.accent }}>
            {project.tag}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-stone-600">{project.pitch}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-500">
            <span>{project.timeline}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="card mt-12 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
        </FadeIn>
      </div>

      <div className="section-container space-y-24 pb-32 sm:space-y-32">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">{project.overview}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-stone-500">Target Users</h3>
              <ul className="mt-3 space-y-2">
                {project.targetUsers.map((u) => (
                  <li key={u} className="text-sm text-stone-700">{u}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-xs font-medium uppercase tracking-wider text-stone-500">Objective</h3>
              <p className="mt-2 text-sm text-stone-600">{project.objective}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-red-600">Problem</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-700">{project.problem}</p>
            </div>
            <div className="card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">Solution</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-700">{project.solution}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.impact.map((m) => (
              <div key={m.label} className="card rounded-xl p-5 text-center sm:text-left">
                <p className="text-2xl font-semibold text-foreground">{m.value}</p>
                <p className="mt-1 text-xs text-stone-500">{m.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Architecture</h2>
          <div className="mt-6">
            <ArchitectureDiagram project={project} />
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm shadow-stone-200/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2">
            <FlowSteps title="User Flow" steps={project.userFlow} />
            {project.adminFlow && (
              <FlowSteps title="Admin Flow" steps={project.adminFlow} />
            )}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-stone-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Screenshots</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((shot) => (
              <motion.div
                key={shot.src}
                whileHover={{ y: -4 }}
                className="card overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[9/16] max-h-[420px] sm:aspect-[16/10] sm:max-h-none">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="border-t border-stone-100 px-4 py-3 text-xs text-stone-500">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Challenges</h2>
              <ul className="mt-6 space-y-4">
                {project.challenges.map((c) => (
                  <li key={c} className="text-sm leading-relaxed text-stone-600">{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Engineering Decisions</h2>
              <div className="mt-6 space-y-5">
                {project.decisions.map((d) => (
                  <div key={d.decision} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                    <p className="text-sm font-medium text-foreground">{d.decision}</p>
                    <p className="mt-2 text-sm text-stone-600">{d.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-foreground">Future Roadmap</h2>
          <ul className="mt-6 space-y-3">
            {project.roadmap.map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-stone-600">
                <span className="text-accent">→</span>
                {r}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                {link.label}
                <HiOutlineExternalLink />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
