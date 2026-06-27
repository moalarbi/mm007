interface ServiceCardProps {
  title: string;
  items: string[];
  index: number;
}

export function ServiceCard({ title, items, index }: ServiceCardProps) {
  return (
    <article className="print-card h-full border border-line border-t-[3px] border-t-champagne bg-white p-5 transition hover:shadow-glow">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-extrabold text-ink">{title}</h3>
        <span className="print-accent text-xl font-bold text-beige">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <ul className="space-y-2 text-sm leading-7 text-body">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 border border-champagne bg-paper" />
            <span className="print-muted">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
