interface ComparisonCardProps {
  title: string;
  items: string[];
  featured?: boolean;
}

export function ComparisonCard({ title, items, featured = false }: ComparisonCardProps) {
  return (
    <article
      className={[
        "print-card border p-6",
        featured
          ? "border-champagne bg-white shadow-glow"
          : "border-line bg-white"
      ].join(" ")}
    >
      <h3
        className={[
          "text-xl font-extrabold",
          featured ? "print-accent text-champagne" : "text-ink"
        ].join(" ")}
      >
        {title}
      </h3>
      <ul className="mt-5 grid gap-3 text-base leading-8 text-body">
        {items.map((item) => (
          <li key={item} className="print-muted flex items-center gap-3">
            <span
              className={[
                "h-2 w-2 rounded-full",
                featured ? "bg-champagne" : "bg-beige"
              ].join(" ")}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
