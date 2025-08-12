import { useEffect, useLayoutEffect, useRef, useState } from "react";



type Step = { year: string; title: string; desc: string };

function ExpTab() {
  const steps: Step[] = [
    {
      year: "2022",
      title: "Start Learning Flutter",
      desc: "Коммерческие проекты на Flutter: MVP чата, внутренние приложения.",
    },
    {
      year: "2024",
      title: "BCI Hack Moscow · IoT/Neuro",
      desc: "UI для отслеживания нейросигналов и интеграция с IoT-устройствами.",
    },
    {
      year: "2024",
      title: "Side projects: ChatSearcher, ETP",
      desc: "Telegram-бот для поиска чатов, криптопротокол ETP и демо-мессенджер.",
    },
    {
      year: "2025",
      title: "iOS Developer (in progress)",
      desc: "Разработка приложений на SwiftUI, расширение стека технологий.",
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
      if (currentStep < centers.length - 1) {
        const target = centers[currentStep];
        setLineHeight(target);
        setTimeout(() => {
          setFilledSteps((prev) => prev + 1);
          currentStep++;
          animateStep();
        }, 800); 
      } else {
        const prevCenter = centers[centers.length - 2];
        setLineHeight(prevCenter);
        setTimeout(() => {
          setFilledSteps((prev) => prev + 1);
        }, 500);
      }
    };

    animateStep();
  }, [centers]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-[44px_1fr] gap-x-4 relative border-white/10 border-1 p-5 rounded-xl "
    >
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-white/25 transition-[height] duration-700 ease-out"
            style={{ height: `${lineHeight}px` }}
        />

        {filledSteps >= steps.length - 1 && centers.length >= steps.length && (
            <div
            className="absolute left-1/2 -translate-x-1/2 w-[2px] animate-dottedFlow"
            style={{
                top: `${centers[steps.length - 2]}px`,
                height: `${centers[steps.length - 1] - centers[steps.length - 2]}px`,
                backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.4) 50%, transparent 10%)",
                backgroundSize: "2px 8px",
                backgroundRepeat: "repeat-y",
            }}
            />
        )}

        {centers.map((y, i) => {
            const completed = i < filledSteps && i !== steps.length - 1;
            const isLast = i === steps.length - 1;
            return (
            <div
                key={i}
                className={`absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-colors duration-300 left-1/2 ${
                completed
                  ? "bg-white/85 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                  : (isLast && !completed)
                  ? "bg-white/95 animate-pulse ring-1 ring-white/20 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
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
          </div>
        ))}
      </div>

      <style>{`
        @keyframes dottedFlow {
          0% { background-position: 0 0; }
          100% { background-position: 0 8px; }
        }
        .animate-dottedFlow {
          animation: dottedFlow 0.5s linear infinite;
        }
      `}</style>

     
    </div>

    
  );
}


export default ExpTab;