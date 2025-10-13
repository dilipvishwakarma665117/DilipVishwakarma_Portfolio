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
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2h4l8 10v10H6z"></path>
      <path d="M10 2l-4 10h4l4-10z"></path>
    </svg>
  );
}
