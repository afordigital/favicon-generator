import { SVGProps } from 'react';

export default function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth}>
        <path d="M12 4V2"></path>
        <path d="M12 22v-2"></path>
        <path d="M4.22 4.22l1.42-1.42"></path>
        <path d="M18.36 18.36l1.42-1.42"></path>
        <path d="M2 12H4"></path>
        <path d="M22 12h-2"></path>
        <path d="M4.22 19.78l1.42 1.42"></path>
        <path d="M18.36 5.64l1.42 1.42"></path>
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
      </g>
    </svg>
  );
}
