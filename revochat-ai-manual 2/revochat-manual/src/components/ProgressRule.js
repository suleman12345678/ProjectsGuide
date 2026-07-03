"use client";

export default function ProgressRule({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="h-[3px] w-full bg-border-soft fixed top-0 left-0 z-50">
      <div
        className="h-full bg-gradient-to-r from-accent to-teal transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
