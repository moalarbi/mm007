interface FlowDiagramProps {
  steps: string[];
}

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3 md:block">
          <div className="print-card flex min-h-[88px] flex-1 items-center justify-center border border-line bg-white px-3 text-center text-sm font-extrabold leading-6 text-ink">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <span className="print-accent text-lg font-black text-champagne md:my-2 md:block md:text-center">
              ←
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
