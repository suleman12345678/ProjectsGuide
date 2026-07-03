"use client";

import { useEffect, useRef } from "react";
import { steps } from "@/data/steps";

const sectionLabels = {
  landing: "Landing Page",
  dashboard: "Dashboard",
};

export default function StepsScroller({ activeStep, onSelect }) {
  const scrollContainerRef = useRef(null);
  const activeStepRef = useRef(null);
  const activeSection = steps.find((s) => s.id === activeStep)?.section ?? "landing";
  const sectionSteps = steps.filter((s) => s.section === activeSection);

  useEffect(() => {
    // scroll to active step
    if (activeStepRef.current && scrollContainerRef.current) {
      activeStepRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeStep]);

  return (
    <aside className="hidden lg:flex flex-col w-64 border-l border-border bg-panel">
      {/* header */}
      <div className="sticky top-0 z-10 px-4 py-4 border-b border-border-soft bg-panel">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
          {sectionLabels[activeSection]}
        </p>
        <p className="text-[12px] text-text-muted mt-1">
          {sectionSteps.length} steps
        </p>
      </div>

      {/* scrollable list */}
      <nav
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto py-3 px-3 space-y-1"
      >
        {sectionSteps.map((step) => (
          <button
            key={step.id}
            ref={activeStep === step.id ? activeStepRef : null}
            onClick={() => onSelect(step.id)}
            className={`focus-ring w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors text-[13px] leading-snug
              ${
                activeStep === step.id
                  ? "bg-accent/10 text-text"
                  : "text-text-muted hover:bg-black/[0.035] hover:text-text"
              }`}
          >
            <span
              className={`font-mono text-[11px] w-5 shrink-0 ${
                activeStep === step.id ? "text-accent" : "text-text-dim"
              }`}
            >
              {String(step.id).padStart(2, "0")}
            </span>
            <span>{step.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
