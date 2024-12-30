import { SVGProps } from 'react';

export default function Anchor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth}>
        <path d="M12 2v10"></path>
        <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        <path d="M7 12a5 5 0 0 0 10 0"></path>
        <path d="M12 22v-5"></path>
        <path d="M12 17a3 3 0 0 1 0-6"></path>
      </g>
    </svg>
  );
}
