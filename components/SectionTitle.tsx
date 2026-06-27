interface SectionTitleProps {
  label?: string;
  title: string;
}

export function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div>
      {label ? (
        <p className="print-accent text-xs font-bold tracking-[0.22em] text-champagne">
          {label}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold text-ink">{title}</h2>
    </div>
  );
}
