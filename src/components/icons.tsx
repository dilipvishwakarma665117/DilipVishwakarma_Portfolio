import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function DVLogo({ className, ...props }: ComponentPropsWithoutRef<"img">) {
  return (
    <div className={cn("overflow-hidden rounded-full relative flex items-center justify-center shrink-0 border border-white/10", className)}>
      <img
        src="/logo.png"
        alt="DV Logo"
        className="w-full h-full object-cover scale-[1.02] transition-transform duration-300 hover:scale-[1.12]"
        {...props}
      />
    </div>
  );
}
