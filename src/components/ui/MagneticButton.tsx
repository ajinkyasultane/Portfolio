"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const variants = {
    primary: "bg-foreground text-white hover:bg-stone-800 border border-foreground",
    secondary:
      "bg-white text-foreground border border-stone-300 hover:border-stone-400 hover:bg-stone-50 shadow-sm shadow-stone-200/50",
    ghost: "bg-transparent text-stone-600 hover:text-foreground",
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return <Link href={href}>{inner}</Link>;
  }

  return (
    <button type="button" onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
