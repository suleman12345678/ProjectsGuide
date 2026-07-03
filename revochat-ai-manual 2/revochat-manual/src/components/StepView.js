"use client";

import { useState } from "react";
import Image from "next/image";
import { steps, totalSteps } from "@/data/steps";
import Lightbox from "@/components/Lightbox";

const sectionLabel = {
  landing: "Landing Page",
  dashboard: "Dashboard",
};

export default function StepView({ stepId, onPrev, onNext, onMenu, onSelect }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const index = steps.findIndex((s) => s.id === stepId);
  const step = steps[index];

  if (!step) return null;

  return (
    <>
      <div className="flex flex-1 min-h-screen flex-col lg:flex-row">
        <div className="flex-1 min-h-screen flex flex-col bg-white">
          <header className="sticky top-0 z-20 bg-bg/90 backdrop-blur border-b border-border-soft">
            <div className="flex items-center justify-between px-5 lg:px-10 h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={onMenu}
                  className="focus-ring lg:hidden h-9 w-9 rounded-md border border-border flex items-center justify-center text-text-muted"
                  aria-label="Open step list"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 4h12M2 8h12M2 12h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <span className="font-mono text-[11px] text-text-dim tracking-wide hidden sm:inline">
                  {sectionLabel[step.section]}
                </span>
              </div>
            </div>
          </header>

          <main className="flex-1 px-5 lg:px-10 py-8 lg:py-12 max-w-[1100px] w-full mx-auto">
            <div className="mb-6">
              <p className="font-mono text-[11px] text-teal tracking-[0.12em] mb-2">
                {sectionLabel[step.section].toUpperCase()}
              </p>
              <h1 className="font-display font-semibold text-[28px] lg:text-[34px] leading-tight text-text">
                {step.title}
              </h1>
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="focus-ring group relative block w-full rounded-xl border border-border bg-panel p-2 lg:p-3 shadow-[0_1px_2px_rgba(20,20,15,0.04),0_8px_24px_rgba(20,20,15,0.06)] hover:shadow-[0_1px_2px_rgba(20,20,15,0.05),0_12px_32px_rgba(20,20,15,0.09)] transition-shadow text-left cursor-zoom-in"
              aria-label="Click to enlarge screenshot"
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-border-soft bg-panel-raised">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1920}
                  height={1000}
                  quality={100}
                  className="w-full h-auto"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 text-white text-[11px] font-mono px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5.5 1.5H1.5V5.5M8.5 1.5H12.5V5.5M5.5 12.5H1.5V8.5M8.5 12.5H12.5V8.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Click to enlarge
                </div>
              </div>
            </button>

            <div className="mt-8 max-w-[760px]">
              <p className="text-[15.5px] leading-[1.75] text-text-muted">
                {step.description}
              </p>
            </div>
          </main>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          src={step.image}
          alt={step.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
