"use client";

import { useEffect, useMemo, useState } from "react";
import { slides } from "@/data/slides";
import { SlideLayout } from "@/components/SlideLayout";

export function SlideDeck() {
  const [activeId, setActiveId] = useState(slides[0].id);

  const navItems = useMemo(
    () =>
      slides.map((slide) => ({
        id: slide.id,
        title: slide.id === 1 ? "الملخص التنفيذي" : slide.title
      })),
    []
  );

  useEffect(() => {
    const sections = slides
      .map((slide) => document.getElementById(`section-${slide.id}`))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(Number(visible.target.id.replace("section-", "")));
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.12, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="document-shell print-root relative min-h-screen">
      <div className="page-wrapper">
        <section className="flex min-h-[72vh] flex-col items-center justify-center border-b border-line py-16 text-center md:py-24">
          <p className="inline-block border-b border-beige pb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-champagne">
            تصور إداري مختصر
          </p>
          <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-[1.22] text-ink md:text-6xl">
            {slides[0].title}
          </h1>
          <p className="mt-7 max-w-4xl text-base font-medium leading-9 text-body md:text-lg">
            {slides[0].subtitle}
          </p>

        </section>

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside className="no-print sticky top-0 z-30 -mx-5 self-start bg-paper/95 px-5 py-3 backdrop-blur md:-mx-8 md:px-8 lg:top-5 lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
            <nav
              className="border-y border-line bg-paper/95 py-3 shadow-[0_10px_28px_rgba(7,22,45,0.06)] lg:bg-transparent lg:py-5 lg:shadow-none"
              aria-label="فهرس العرض"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-taupe lg:mb-4">
                Sections
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:max-h-[calc(100vh-90px)] lg:gap-1 lg:overflow-auto lg:pb-0">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#section-${item.id}`}
                    className={[
                      "flex min-w-max shrink-0 items-center gap-2 border-b-2 px-3 py-2 text-sm leading-6 text-body transition hover:bg-white/70 hover:text-ink lg:grid lg:min-w-0 lg:grid-cols-[32px_1fr] lg:items-baseline lg:gap-3 lg:border-b-0 lg:border-r-2",
                      activeId === item.id
                        ? "border-champagne bg-white/80 font-bold text-ink"
                        : "border-transparent"
                    ].join(" ")}
                  >
                    <span dir="ltr" className="text-[11px] text-beige">
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section className="mb-16 bg-ink px-8 py-9 text-paper md:px-12">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-beige">
                Executive Summary
              </p>
              <p className="max-w-3xl text-lg font-light leading-10">
                الشركة المقترحة لا تفصل التسويق عن التقنية. كثير من الوكالات
                تدير الإعلانات والمحتوى فقط، بينما العميل يحتاج منظومة كاملة
                تبدأ من الإعلان وتنتهي بقياس النتائج وإدارة المتابعة.
              </p>
            </section>

            <div className="grid gap-16">
              {slides.map((slide) => (
                <SlideLayout
                  key={slide.id}
                  slide={slide}
                  totalSlides={slides.length}
                />
              ))}
            </div>
          </article>
        </div>

        <footer className="flex flex-col gap-3 border-t border-line py-8 text-sm text-taupe md:flex-row md:items-center md:justify-between">
          <span>تأسيس شركة تسويق ونمو رقمي وحلول تقنية</span>
          <span dir="ltr">Riyadh Executive Proposal</span>
        </footer>
      </div>
    </main>
  );
}
