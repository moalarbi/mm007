interface ProductCardProps {
  title: string;
  audience: string;
  items: string[];
}

export function ProductCard({ title, audience, items }: ProductCardProps) {
  return (
    <article className="print-card border border-line bg-white p-6">
      <p className="print-accent text-[11px] font-bold tracking-[0.22em] text-champagne">
        المنتج
      </p>
      <h3 className="mt-3 text-xl font-extrabold text-ink">{title}</h3>
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
    </article>
  );
}
