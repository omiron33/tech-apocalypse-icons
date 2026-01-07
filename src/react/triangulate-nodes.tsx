import * as React from "react";
import type { SVGProps } from "react";
const TriangulateNodes = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="1em" height="1em" focusable="false" {...props}><circle cx={6} cy={16} r={1.5} /><circle cx={18} cy={16} r={1.5} /><circle cx={12} cy={6} r={1.5} /><path d="m8 15 3-7m5 7-3-7m-5 9h8" /></svg>;
export default TriangulateNodes;