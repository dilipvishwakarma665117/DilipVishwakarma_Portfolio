import type { SVGProps } from "react";

export function DVLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer circle - Blue */}
      <circle cx="12" cy="12" r="11" stroke="blue" />
      
      {/* Heart shape - Red */}
      <path d="M12 7.5a3 3 0 0 1 3-3c1.657 0 3 1.343 3 3 0 1.83-2.053 3.832-6 6.832-3.947-3-6-4.998-6-6.832 0-1.657 1.343-3 3-3a3 3 0 0 1 3 3z" stroke="red" fill="red" />

      {/* Text "D" - Green */}
      <text 
        x="12" 
        y="19" 
        textAnchor="middle" 
        fontSize="8" 
        fontWeight="bold" 
        fill="green"
        stroke="none"
      >
        D
      </text>
    </svg>
  );
}
