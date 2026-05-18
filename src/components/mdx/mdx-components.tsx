import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { DiagramBlock } from "./DiagramBlock";

export function getMDXComponents(): MDXComponents {
  return {
    Callout,
    DiagramBlock,
    h1: (props) => <h1 className="text-[32px] font-medium text-[#0f1117] leading-[1.2] mt-12 mb-4" {...props} />,
    h2: (props) => <h2 className="text-[24px] font-medium text-[#0f1117] leading-[1.3] mt-10 mb-3" {...props} />,
    h3: (props) => <h3 className="text-[18px] font-medium text-[#0f1117] leading-[1.4] mt-8 mb-2" {...props} />,
    p: (props) => <p className="text-[16px] text-[#374151] leading-[1.75] mb-5" {...props} />,
    ul: (props) => <ul className="list-disc list-outside pl-5 mb-5 space-y-2" {...props} />,
    ol: (props) => <ol className="list-decimal list-outside pl-5 mb-5 space-y-2" {...props} />,
    li: (props) => <li className="text-[16px] text-[#374151] leading-[1.75]" {...props} />,
    code: (props) => (
      <code className="bg-[#f3f4f6] text-[#0f1117] text-[14px] px-1.5 py-0.5 rounded font-mono" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-[#0f1117] text-[#f9fafb] text-[14px] rounded-lg p-5 overflow-x-auto mb-6 font-mono leading-[1.6]" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-[3px] border-[#1D9E75] pl-5 italic text-[#6b7280] my-6" {...props} />
    ),
    a: (props) => <a className="text-[#1D9E75] underline underline-offset-2 hover:text-[#178f68]" {...props} />,
    hr: () => <hr className="border-t border-[#f3f4f6] my-10" />,
  };
}
