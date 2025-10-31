import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <path
        d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M60.62,35.88c-4.24-2.2-8.84-2.2-13.08,0c-1.37,0.72-2.67,1.64-3.87,2.73c-3.05,2.77-5.06,6.6-5.46,10.77c-0.29,3.01,0.37,5.99,1.87,8.62c0.6,1.05,1.3,2.05,2.1,3c1.78,2.18,4.1,3.7,6.72,4.35c4.76,1.18,9.78-0.07,13.8-3.15c1.4-1.09,2.62-2.43,3.6-3.95c1.02-1.6,1.73-3.37,2.05-5.23c0.6-3.48-0.21-7.05-2.29-9.92C64.9,37.52,62.88,36.42,60.62,35.88z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
