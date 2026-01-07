import * as React from "react";
import type { SVGProps } from "react";
const ThreadPool = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="1em" height="1em" focusable="false" {...props}><circle cx={12} cy={12} r={2} /><circle cx={6} cy={6} r={1} /><circle cx={18} cy={6} r={1} /><circle cx={6} cy={18} r={1} /><circle cx={18} cy={18} r={1} /><path d="M12 10 6 6m6 4 6-4m-6 8-6 4m6-4 6 4" /></svg>;
export default ThreadPool;