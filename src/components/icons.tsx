import type { SVGProps } from "react";

export function DVLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer circle - Theme-aware */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Heart shape - Off-Red */}
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#CD5C5C" fill="#CD5C5C" />

      {/* Text "D" - White */}
      <text 
        x="12" 
        y="12.5" 
        textAnchor="middle" 
        dy=".3em"
        fontSize="8" 
        fontWeight="bold" 
        fill="white"
        stroke="none"
      >
        D
      </text>
    </svg>
  );
}
