import type { Slide } from "@/data/slides";

interface SlideHeaderProps {
  slide: Slide;
  totalSlides: number;
}

export function SlideHeader({ slide, totalSlides }: SlideHeaderProps) {
  return (
    <header className="flex items-baseline gap-4 border-b border-line pb-5">
      <span dir="ltr" className="shrink-0 text-xs font-medium tracking-[0.14em] text-beige">
        {String(slide.id).padStart(2, "0")}
      </span>
      <div className="max-w-4xl">
        {slide.eyebrow ? (
          <p className="print-accent mb-2 text-[11px] font-bold tracking-[0.24em] text-champagne">
            {slide.eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-extrabold leading-snug text-ink md:text-3xl">
          {slide.title}
        </h2>
        {slide.subtitle ? (
          <p className="print-muted mt-4 max-w-4xl text-base leading-8 text-body">
            {slide.subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
