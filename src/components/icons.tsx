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
      
      {/* Text "D" - White */}
      <text 
        x="12" 
        y="12" 
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
