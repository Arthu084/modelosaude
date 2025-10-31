import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
        <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="hsl(var(--primary))" />
        <path d="M61.5 35C61.5 35 53 30.5 53 42.5C53 54.5 61 60.5 61 60.5C61 60.5 64 59.5 64 55C64 50.5 61.5 35 61.5 35Z" fill="white"/>
        <path d="M53 42.5C53 42.5 52 40.5 50 40.5C48 40.5 45 44.5 45 49C45 53.5 47 65 47 65L61 60.5" fill="white"/>
    </svg>
  );
}
