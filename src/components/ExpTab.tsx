import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Step = { year: string; title: string; desc: string; tech: string[] };

function ExpTab() {
  const steps: Step[] = [
  {
    year: "Ноябрь 2023 – Февраль 2024", 
    title: "CTO / Мобильный разработчик | Testify",
    desc: "Совместно с командой разработал веб-приложение для Telegram-mini app на Flutter, интегрировал Telegram API и написал бота для улучшения пользовательского опыта.",
    tech: ["Flutter", "Aiogram", "GoRouter", "Bloc", "SharedPrefs", "Git", "Selfmade packages"],
  },
  {
    year: "Февраль 2024 – Сентябрь 2024", 
    title: "Мобильный разработчик | Outsorce",
    desc: "Разрабатывал и проектировал мобильные приложения в сжатые сроки, обеспечивая высокую производительность, удобный интерфейс и соблюдение требований проекта.",
    tech: ["Flutter", "GoRouter", "Riverpod", "Hive", "Jira", "Git"],
  },
  {
    year: "Сентябрь 2024 – Май 2025", 
    title: "Мобильный разработчик | NDA",
    desc: "Участвовал в разработке мобильных приложений для крупных компаний — от заметок до сложных инструментов управления фермой. Получил опыт работы с нативными модулями, встроенными устройствами и созданием бизнес-решений.",
    tech: ["Flutter", "Drift", "Bloc", "AutoRouter", "Freezed", "Native Modules"],
  },
];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [centers, setCenters] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [filledSteps, setFilledSteps] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const top0 = containerRef.current.getBoundingClientRect().top;
    const c = rowRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top - top0 + r.height / 2;
    });
    setCenters(c);
  }, []);

  useEffect(() => {
  if (!centers.length) return;

  let currentStep = 0;

  const animateStep = () => {
    if (currentStep < centers.length) {
      const target = centers[currentStep];
      setLineHeight(target); 
      setFilledSteps(currentStep + 1); 
      currentStep++;
      setTimeout(() => {
        animateStep();
      }, 800);
    } else {
        setLineHeight(centers[centers.length - 1]);
        setFilledSteps(centers.length);
      }
    };

    animateStep();
  }, [centers]);


  return (
    <div
      ref={containerRef}
      className="grid grid-cols-[44px_1fr] gap-x-4 relative border-white/10 border-1 p-5 rounded-xl"
    >
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-white/25 transition-[height] duration-700 ease-out"
          style={{ height: `${lineHeight}px` }}
        />

        {centers.map((y, i) => {
          const completed = i < filledSteps;
          return (
            <div
              key={i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-colors duration-300 left-1/2 ${
                completed
                  ? "bg-white/85 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                  : "bg-white/20 border border-white/10"
              }`}
              style={{ top: y }}
            />
          );
        })}
      </div>

      <div className="space-y-10">
        {steps.map((s, i) => (
          <div
            key={i}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className="pb-2"
          >
            <div className="text-sm text-blue-200/50 font-semibold">{s.year}</div>
            <div className="text-white font-bold">{s.title}</div>
            <p className="text-zinc-400 mt-1">{s.desc}</p>

            {s.tech && s.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {s.tech && s.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {s.tech.map((t, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-0.5 rounded ${
                        j === 0
                          ? "bg-white/45 text-white" 
                          : "bg-white/10 text-white/80" 
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpTab;