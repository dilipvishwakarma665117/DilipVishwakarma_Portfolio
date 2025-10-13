import type { SVGProps } from "react";

export function DVLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#logo-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <circle cx="12" cy="12" r="11" />
      
      {/* Heart shape */}
      <path d="M12 7.5a3 3 0 0 1 3-3c1.657 0 3 1.343 3 3 0 1.83-2.053 3.832-6 6.832-3.947-3-6-4.998-6-6.832 0-1.657 1.343-3 3-3a3 3 0 0 1 3 3z" />

      {/* Text "Dil" */}
      <text 
        x="12" 
        y="18.5" 
        textAnchor="middle" 
        fontSize="5" 
        fontWeight="bold" 
        fill="url(#logo-gradient)"
        stroke="none"
      >
        Dil
      </text>
    </svg>
  );
}
