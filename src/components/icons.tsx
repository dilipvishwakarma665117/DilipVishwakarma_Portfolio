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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
      <path d="M6 2v2"/>
      <path d="M6 8v2"/>
      <path d="M6 14v2"/>
      <path d="M6 20v2"/>
    </svg>
  );
}
