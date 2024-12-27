import { SVGProps } from 'react';

export default function BatteryCharging(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth}>
        <path d="M3 7h18v10H3z"></path>
        <path d="M8 7v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"></path>
        <path d="M11 10.5l3 3h-2v4l-3-3h2v-4"></path>
      </g>
    </svg>
  );
}
