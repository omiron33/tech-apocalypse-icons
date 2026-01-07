import * as React from "react";
import type { SVGProps } from "react";
const AuthBadge = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="1em" height="1em" focusable="false" {...props}><rect width={12} height={16} x={6} y={4} rx={2} /><circle cx={12} cy={10} r={2} /><path d="M9 16c1-2 5-2 6 0" /></svg>;
export default AuthBadge;