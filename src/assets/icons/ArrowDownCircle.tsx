import { SVGProps } from 'react';

export default function ArrowDownCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth}>
        <path d="M12 2a10 10 0 1 1-10 10 10 10 0 0 1 10-10"></path>
        <path d="M8 12l4 4 4-4"></path>
        <path d="M12 8v8"></path>
      </g>
    </svg>
  );
}
