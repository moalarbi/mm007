interface TimelineItem {
  title: string;
  subtitle: string;
  items: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="print-card relative border border-line bg-white p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="print-accent text-xs font-bold tracking-[0.2em] text-champagne">
                الشهر {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">{item.title}</h3>
            </div>
            <span className="print-muted border border-line bg-paper px-3 py-1 text-xs font-bold text-body">
              {item.subtitle}
            </span>
          </div>
          <ul className="space-y-2 text-sm leading-7 text-body">
            {item.items.map((point) => (
              <li key={point} className="print-muted flex gap-2">
                <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 border border-champagne bg-paper" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
