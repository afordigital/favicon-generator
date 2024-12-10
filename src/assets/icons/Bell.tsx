import { SVGProps } from "react";

export default function Bell(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.strokeWidth}
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7.28-3 9-3 9h18s-3-1.72-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </g>
      </svg>
    );
  }