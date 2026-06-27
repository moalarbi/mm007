import type { ReactNode } from "react";

interface HighlightCardProps {
  title?: string;
  children: ReactNode;
}

export function HighlightCard({ title, children }: HighlightCardProps) {
  return (
    <div className="print-card border border-line bg-ink p-6 text-paper">
      {title ? (
        <h3 className="print-accent mb-3 text-sm font-extrabold text-beige">
          {title}
        </h3>
      ) : null}
      <div className="print-muted text-base font-medium leading-8 text-paper">
        {children}
      </div>
    </div>
  );
}
