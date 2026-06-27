interface ProductCardProps {
  title: string;
  englishLabel: string;
  audience: string;
  items: string[];
  goal: string;
}

export function ProductCard({
  title,
  englishLabel,
  audience,
  items,
  goal
}: ProductCardProps) {
  return (
    <article className="print-card border border-line bg-white p-6">
      <p className="print-accent text-[11px] font-bold tracking-[0.22em] text-champagne">
        المنتج
      </p>
      <h3 className="mt-3 text-xl font-extrabold text-ink">{title}</h3>
      <p
        dir="ltr"
        className="mt-2 text-left text-sm font-extrabold text-ink"
      >
        {englishLabel}
      </p>
      <p className="print-muted mt-2 text-sm font-medium leading-7 text-body">
        {audience}
      </p>
      <div className="my-5 h-px bg-line" />
      <ul className="grid gap-2 text-sm leading-7 text-body sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="print-muted flex gap-2">
            <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 border border-champagne bg-paper" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-line pt-4">
        <p className="print-accent text-[11px] font-bold text-champagne">
          الهدف
        </p>
        <p className="print-muted mt-2 text-sm font-bold leading-7 text-ink">
          {goal}
        </p>
      </div>
    </article>
  );
}
