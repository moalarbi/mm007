import type { Slide } from "@/data/slides";
import { SlideHeader } from "@/components/SlideHeader";

interface SlideLayoutProps {
  slide: Slide;
  totalSlides: number;
}

export function SlideLayout({ slide, totalSlides }: SlideLayoutProps) {
  return (
    <section
      id={`section-${slide.id}`}
      className="document-section slide-page slide-frame border-b border-line pb-16"
    >
      <div className="grid gap-8">
        <SlideHeader slide={slide} totalSlides={totalSlides} />
        <div>{slide.content}</div>
      </div>
    </section>
  );
}
