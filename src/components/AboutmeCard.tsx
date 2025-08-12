import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function formatDuration(sec: number) {
  const years = Math.floor(sec / (60 * 60 * 24 * 365));
  const days = Math.floor((sec % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
  return `${years} г ${days} д`;
}




function AboutMeCard() {
  const startDate = new Date("2022-06-01");
  const [seconds, setSeconds] = useState(
    Math.floor((Date.now() - startDate.getTime()) / 1000)
  );

   


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - startDate.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
      <h2 className="text-sm uppercase text-white/70">Обо мне</h2>
      <TypeAnimation
          sequence={[
          500, 
          'Привет, я Богдан!',
          1500,
          'Привет, я камидаши!',
          1500,
          'Привет, я ками!',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      <p className="text-white/90 leading-relaxed">
        Живу в Санкт-Петербурге, занимаюсь программированием{" "}
        <span
          className="text-emerald-300 cursor-default"
          title={formatDuration(seconds)}
        >
          {seconds.toLocaleString()} сек
        </span>
        ,{" "}
        <a
          href="https://t.me/kmdshi"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-white"
        >
          а еще оч люблю...
          <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-white "></span>
        </a>
      </p>
    </div>
  );
}

export default AboutMeCard;
