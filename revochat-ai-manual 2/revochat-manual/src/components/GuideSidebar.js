"use client";

import { useState, useEffect } from "react";
import { steps, totalSteps } from "@/data/steps";

const landingSteps = steps.filter((s) => s.section === "landing");
const dashboardSteps = steps.filter((s) => s.section === "dashboard");

function Chevron({ open }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepRow({ step, isActive, onSelect, indent }) {
  return (
    <li>
      <button
        onClick={() => onSelect(step.id)}
        className={`focus-ring w-full flex items-center gap-3 rounded-md py-2 text-left transition-colors
          ${indent ? "pl-9 pr-3" : "px-3"}
          ${
            isActive
              ? "bg-accent/10 text-text"
              : "text-text-muted hover:bg-black/[0.035] hover:text-text"
          }`}
      >
        <span
          className={`font-mono text-[11px] w-6 shrink-0 ${
            isActive ? "text-accent" : "text-text-dim"
          }`}
        >
          {String(step.id).padStart(2, "0")}
        </span>
        <span className="text-[13.5px] leading-snug">{step.title}</span>
      </button>
    </li>
  );
}

export default function GuideSidebar({ activeStep, onSelect, open, onClose }) {
  const [landingDropdownOpen, setLandingDropdownOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <>
      {/* mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-[300px] border-r border-border bg-gray-200
        flex flex-col transition-transform duration-300 lg:static lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-6 pt-6 pb-5 border-b border-border-soft">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center">
              <span className="font-display font-bold text-accent text-sm">R</span>
            </div>
            <div>
              <p className="font-display font-semibold text-text text-[15px] leading-none">
                RevoChat AI
              </p>
              <p className="font-mono text-[10px] text-text-dim tracking-wide mt-1">
                WALKTHROUGH GUIDE
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="mb-3">
            <button
              onClick={() => setLandingDropdownOpen((v) => !v)}
              className="focus-ring w-full flex items-center justify-between gap-2 px-3 mb-2"
              aria-expanded={landingDropdownOpen}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
                Landing Page
              </span>
              <Chevron open={landingDropdownOpen} />
            </button>

            {landingDropdownOpen && (
              <ul className="space-y-0.5">
                {landingSteps.map((step) => (
                  <StepRow
                    key={step.id}
                    step={step}
                    isActive={step.id === activeStep}
                    onSelect={onSelect}
                    indent
                  />
                ))}
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setDashboardOpen((v) => !v)}
              className="focus-ring w-full flex items-center justify-between gap-2 px-3 mb-2"
              aria-expanded={dashboardOpen}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
                Dashboard
              </span>
              <Chevron open={dashboardOpen} />
            </button>

            {dashboardOpen && (
              <ul className="space-y-0.5">
                {dashboardSteps.map((step) => (
                  <StepRow
                    key={step.id}
                    step={step}
                    isActive={step.id === activeStep}
                    onSelect={onSelect}
                  />
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="px-6 py-4 border-t border-border-soft">
          <p className="font-mono text-[10px] text-text-dim">
            {totalSteps} STEPS TOTAL
          </p>
        </div>
      </aside>
    </>
  );
}
