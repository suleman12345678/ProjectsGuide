"use client";

import { useState, useEffect, useCallback } from "react";
import GuideSidebar from "@/components/GuideSidebar";
import StepView from "@/components/StepView";
import ProgressRule from "@/components/ProgressRule";
import { totalSteps } from "@/data/steps";

export default function Home() {
  const [stepId, setStepId] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = useCallback((id) => {
    const clamped = Math.min(Math.max(id, 1), totalSteps);
    setStepId(clamped);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") goTo(stepId + 1);
      if (e.key === "ArrowLeft") goTo(stepId - 1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [stepId, goTo]);

  return (
    <div className="flex min-h-screen bg-bg">
      <ProgressRule current={stepId} total={totalSteps} />
      <GuideSidebar
        activeStep={stepId}
        onSelect={goTo}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <StepView
        stepId={stepId}
        onPrev={() => goTo(stepId - 1)}
        onNext={() => goTo(stepId + 1)}
        onMenu={() => setMenuOpen(true)}
        onSelect={goTo}
      />
    </div>
  );
}
