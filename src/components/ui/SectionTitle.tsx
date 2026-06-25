import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  subtitle,
  className,
  id,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("mb-10 text-center sm:mb-14", className)}>
      <h2 className="section-title">{children}</h2>
      <div className="section-title-line" aria-hidden />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
