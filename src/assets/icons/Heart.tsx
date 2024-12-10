import { SVGProps } from "react";

export default function Heart(props: SVGProps<SVGSVGElement>) {
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
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.8.8-.8-.8a5.5 5.5 0 0 0-7.8 7.8l8.6 8.6 8.6-8.6a5.5 5.5 0 0 0 0-7.8z"></path>
        </g>
      </svg>
    );
  }