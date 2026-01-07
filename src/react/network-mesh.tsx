import * as React from "react";
import type { SVGProps } from "react";
const NetworkMesh = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="1em" height="1em" focusable="false" {...props}><circle cx={6} cy={6} r={1.5} /><circle cx={18} cy={6} r={1.5} /><circle cx={6} cy={18} r={1.5} /><circle cx={18} cy={18} r={1.5} /><path d="M6 6h12M6 6v12M18 6v12M6 18h12M6 6l12 12m0-12L6 18" /></svg>;
export default NetworkMesh;