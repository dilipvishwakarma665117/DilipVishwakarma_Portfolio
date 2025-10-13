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
      <path d="M12 18l-1.45-1.32C5.4 12.36 2 9.28 2 6.5 2 4.42 3.42 3 5.5 3c1.74 0 3.41.81 4.5 2.09C11.09 3.81 12.76 3 14.5 3 16.58 3 18 4.42 18 6.5c0 2.78-3.4 5.86-8.55 10.54L12 18z" transform="scale(0.8) translate(3, 3)" stroke="#CD5C5C" fill="#CD5C5C" />

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
