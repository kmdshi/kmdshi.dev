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
    <div className="rounded-xl border up border-white/10  p-4 ">
      <h2 className="text-sm font-light text-white/70">Обо мне</h2>
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
        style={{fontSize: '2em',
              display: 'inline-block',
              fontFamily: '"gg sans", "Whitney", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#F7F7F7',
              letterSpacing: '-0.2px',
              WebkitFontSmoothing: 'antialiased' }}
        repeat={Infinity}
      />
      <p className="text-white/90 leading-relaxed">
        Живу в Санкт-Петербурге, занимаюсь программированием{" "}
        <span
          className="text-[#f1f9ff] cursor-default font-bold"
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
