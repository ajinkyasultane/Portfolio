export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(30,58,138,0.07),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(197,160,89,0.08),transparent_30%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(28,40,56,0.02) 80px, rgba(28,40,56,0.02) 81px)",
        }}
      />
    </div>
  );
}
