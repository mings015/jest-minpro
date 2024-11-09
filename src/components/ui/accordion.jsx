// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Accordion = ({ question, answer, className }) => {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div
      data-state={showContent ? 'open' : 'closed'}
      className="mx-5 max-w-[500px] group rounded-base overflow-x-hidden border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark"
    >
      <button
        role="button"
        aria-expanded={showContent}
        className={cn(
          'flex w-full items-center text-text transition-[border-radius] justify-between border-b-0 group-data-[state=open]:border-b-2 border-b-border dark:border-b-darkBorder bg-main p-4 md:p-5 font-heading',
          className
        )}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {question}
        <ChevronDown className="sm:ml-4 ml-3 sm:min-h-[24px] sm:min-w-[24px] group-data-[state=open]:rotate-180 group-data-[state=closed]:0 min-h-[18px] min-w-[18px] transition-transform ease-in-out" />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : '0' }}
        className="overflow-hidden rounded-b-base bg-white dark:bg-secondaryBlack font-base transition-[height] ease-in-out"
      >
        <p className="p-4 text-sm leading-relaxed md:p-5 md:text-base md:leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;