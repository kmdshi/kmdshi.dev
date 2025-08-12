import { useState, useRef, useLayoutEffect } from "react";
import ProfileTab from "./ProfileTab";
import ExpTab from "./ExpTab";
import ProjectsTab from "./ProjectsTab";

export default function Tabs() {
  const [active, setActive] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const tabs = ["Профиль", "Опыт", "Проекты"];

  const contents = [
    <ProfileTab />,
    <ExpTab />,
    <ProjectsTab />,
  ];

  useLayoutEffect(() => {
    if (tabRefs.current[active]) {
      const el = tabRefs.current[active];
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement!.getBoundingClientRect();

      setIndicatorStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [active]);

  return (
    <div className="w-full max-w">
      <div className="relative border-b border-white/30">
        <div className="flex">
          {tabs.map((t, i) => (
            <button
              key={t}
              ref={(el) => {
                if (el) tabRefs.current[i] = el;
              }}
              onClick={() => setActive(i)}
               className={
                "px-4 py-3 text-xl md:text-base transition-colors " +
                (active === i
                ? "text-white font-bold"
                : "text-white/80 hover:text-white")
            }
            >
              {t}
            </button>
          ))}
        </div>

        <div
          className="absolute bottom-0 h-0.5 bg-white transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>
        <div className="mt-4">{contents[active]}</div>
    </div>
  );
}
