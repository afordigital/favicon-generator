import { SVGProps } from "react";

export default function Activity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </svg>
  );
}
