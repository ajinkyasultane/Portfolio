"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";

function getTabs(projectId: string) {
  if (projectId === "setu-suvidha") {
    return [
      { id: "user", label: "User App", filter: "setu-suvidha-user" },
      { id: "admin", label: "Admin Panel", filter: "setu-suvidha-admin" },
    ];
  }
  if (projectId === "car-rental") {
    return [
      { id: "user", label: "User App", filter: "car-rental-user" },
      { id: "admin", label: "Admin App", filter: "car-rental-admin" },
    ];
  }
  return [{ id: "all", label: "Screenshots", filter: "" }];
}

function ProjectBlock({ project }: { project: (typeof projects)[0] }) {
  const tabs = getTabs(project.id);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const shots = useMemo(() => {
    const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];
    if (!tab.filter) return project.gallery;
    return project.gallery.filter((s) => s.src.includes(tab.filter));
  }, [activeTab, project.gallery, tabs]);

  return (
    <article className="card overflow-hidden">
      <div className="border-b border-[var(--color-border)] p-5 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground sm:text-2xl">
            {project.name}
          </h3>
          <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {project.timeline}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.pitch}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-accent/15 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              <FaGithub size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {tabs.length > 1 && (
        <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] px-5 py-3 sm:px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-surface-alt text-muted hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="scroll-row px-5 py-5 sm:px-8 sm:py-6">
        {shots.map((shot) => (
          <div
            key={shot.src}
            className="w-[42vw] max-w-[180px] shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-sm sm:w-44 lg:w-48"
          >
            <div className="relative aspect-[9/16]">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 42vw, 192px"
              />
            </div>
            <p className="border-t border-[var(--color-border)] px-2 py-2 text-center text-[10px] text-muted sm:px-3 sm:text-xs">
              {shot.caption}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-band section-padding">
      <div className="section-container">
        <SectionTitle subtitle="Things I've built">Projects</SectionTitle>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
