"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    lightSrc: "/interface-slides/light-dashboard.png",
    darkSrc: "/interface-slides/dark-dashboard.png",
    alt: "Главная панель MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-dashboard-details.png",
    darkSrc: "/interface-slides/dark-dashboard-details.png",
    alt: "Показатели и ближайшие публикации MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-analytics-results.png",
    darkSrc: "/interface-slides/dark-analytics-results.png",
    alt: "Результаты аналитики MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-analytics-dashboard.png",
    darkSrc: "/interface-slides/dark-analytics-dashboard.png",
    alt: "Дашборд аналитики MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-documents.png",
    darkSrc: "/interface-slides/dark-documents.png",
    alt: "Документы и материалы MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-tasks.png",
    darkSrc: "/interface-slides/dark-tasks.png",
    alt: "Канбан задач MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-calendar.png",
    darkSrc: "/interface-slides/dark-calendar.png",
    alt: "Календарь клиентских активностей MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-list-kanban.png",
    darkSrc: "/interface-slides/dark-list-kanban.png",
    alt: "Канбан активностей MailFlow"
  },
  {
    lightSrc: "/interface-slides/light-board.png",
    darkSrc: "/interface-slides/dark-board.png",
    alt: "Доска проекта MailFlow"
  }
];

export function InterfaceSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const clickTimer = useRef<number | null>(null);
  const activeSlide = slides[activeIndex];
  const activeSlideSrc = theme === "dark" ? activeSlide.darkSrc : activeSlide.lightSrc;

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    setIsMounted(true);
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    };
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    observer.observe(document.documentElement, {
      attributeFilter: ["data-theme"],
      attributes: true
    });

    return () => {
      if (clickTimer.current) {
        window.clearTimeout(clickTimer.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  const togglePaused = () => {
    setIsPaused((paused) => !paused);
  };

  const changeSlide = (direction: -1 | 1) => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }

    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  };

  const handleClick = () => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
    }

    clickTimer.current = window.setTimeout(() => {
      togglePaused();
      clickTimer.current = null;
    }, 220);
  };

  const selectSlide = (index: number) => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }

    setActiveIndex(index);
  };

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }

    setIsExpanded(true);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeSlide(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeSlide(1);
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    togglePaused();
  };

  return (
    <>
      <div
        className={`interface-slideshow${isPaused ? " is-paused" : ""}`}
        role="button"
        tabIndex={0}
        aria-label={isPaused ? "Запустить слайд-шоу интерфейса" : "Остановить слайд-шоу интерфейса"}
        aria-pressed={isPaused}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
      >
        <span className="interface-slideshow-track" aria-live="off">
          {slides.map((slide, index) => (
            <img
              key={slide.lightSrc}
              className={`interface-slide${index === activeIndex ? " active" : ""}`}
              src={theme === "dark" ? slide.darkSrc : slide.lightSrc}
              alt={slide.alt}
              width={2090}
              height={1580}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </span>
        <button
          className="interface-slide-arrow interface-slide-arrow-prev"
          type="button"
          aria-label="Показать предыдущий скриншот"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            changeSlide(-1);
          }}
          onDoubleClick={(event) => event.stopPropagation()}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          className="interface-slide-arrow interface-slide-arrow-next"
          type="button"
          aria-label="Показать следующий скриншот"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            changeSlide(1);
          }}
          onDoubleClick={(event) => event.stopPropagation()}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
        <span className="interface-slideshow-dots" aria-label="Переключить скриншот интерфейса">
          {slides.map((slide, index) => (
            <button
              key={slide.lightSrc}
              className={index === activeIndex ? "active" : ""}
              type="button"
              data-slide-index={index}
              aria-label={`Показать слайд ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onPointerDown={(event) => {
                event.stopPropagation();
                selectSlide(index);
              }}
              onClick={(event) => {
                event.stopPropagation();
                selectSlide(index);
              }}
            />
          ))}
        </span>
      </div>

      {isMounted && isExpanded ? createPortal(
        <div className="interface-lightbox" role="dialog" aria-modal="true" aria-label={activeSlide.alt}>
          <button className="interface-lightbox-backdrop" type="button" aria-label="Закрыть" onClick={() => setIsExpanded(false)} />
          <div className="interface-lightbox-frame">
            <button className="interface-lightbox-close" type="button" onClick={() => setIsExpanded(false)}>
              Закрыть
            </button>
            <img src={activeSlideSrc} alt={activeSlide.alt} width={2090} height={1580} />
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}
