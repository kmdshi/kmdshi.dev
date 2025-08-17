import { useRef, useState, useEffect } from "react";

import t1 from "../assets/audio/ural.mp3";
import t2 from "../assets/audio/dprince.mp3";
import t3 from "../assets/audio/kpss.mp3";
import t4 from "../assets/audio/apfs.mp3";

import cover4 from "../assets/png/apfs_logo.jpg"
import cover2 from "../assets/png/dprince_logo.jpg"
import cover3 from "../assets/png/kpss_logo.png"
import cover1 from "../assets/png/ural_logo.jpg"

type Track = {
  title: string;
  artist?: string;
  src: string;
  cover?: string;
};

const tracks: Track[] = [
  { title: "Опять надо жить", artist: "Слава КПСС", src: t3 , cover: cover3 },
  { title: "Сонный паралич", artist: "Автостопом по фазе сна", src: t4, cover: cover4  },
  { title: "я молодой вампир vamp", artist: "урал гайсин", src: t1, cover: cover1 },
  { title: "ПАПА", artist: "FORTUNA 812, тёмный принц", src: t2, cover: cover2 },
];

const Icon = {
  Play: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Pause: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  ),
  Next: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2z" />
    </svg>
  ),
  Prev: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M18 6l-8.5 6L18 18V6zM6 6h2v12H6z" />
    </svg>
  ),
  Volume: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M3 9v6h4l5 5V4L7 9H3z" />
      <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  ),
  Mute: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5l-4.5 4.5H6v-6H2V9h4V3h4.5L15 7.5l4.5-4.5 1.5 1.5L16.5 12z" />
    </svg>
  ),
  Repeat: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
      <path d="M17 17H7v-4l-5 5 5 5v-4h10v-2zm0-10V3l5 5-5 5V9H7V7h10z" />
    </svg>
  ),
};

function formatTime(sec: number) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);
  const [vol, setVol] = useState(0.7);
  const [muted, setMuted] = useState(false);

  const cur = tracks[i];

  const playIdx = (idx: number) => {
    setI((idx + tracks.length) % tracks.length);
    setT(0);
  };
  const prev = () => playIdx(i - 1);
  const next = () => playIdx(i + 1);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { try { await a.play(); setPlaying(true); } catch {} }
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current; if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v; setT(v);
  };

  const onVol = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current; if (!a) return;
    const v = Number(e.target.value);
    setVol(v);
    a.volume = v;
    if (v > 0 && muted) { a.muted = false; setMuted(false); }
  };

  const toggleMute = () => {
    const a = audioRef.current; if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
  };

  useEffect(() => {
    const a = audioRef.current; if (!a) return;
    const onTime = () => setT(a.currentTime);
    const onMeta = () => setDur(a.duration || 0);
    const onEnd = () => next();
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, [i]);

  useEffect(() => {
    const a = audioRef.current; if (!a) return;
    a.src = cur?.src || "";
    a.load();
    a.volume = vol;
    if (playing) a.play().catch(() => setPlaying(false));
  }, [i]); 

  if (!cur) return null;

  return (
    <div className="rounded-xl border border-white/10 p-4 w-full">
      <div className="text-xs font-light text-white/70 mb-3">Слушает</div>

      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        {/* Обложка */}
        <div className="flex-shrink-0">
          {cur.cover ? (
            <img
              src={cur.cover}
              alt=""
              className="w-48 h-48 sm:w-32 sm:h-32 rounded-md object-cover"
            />
          ) : (
            <div className="w-48 h-48 sm:w-32 sm:h-32 rounded-md bg-white/10" />
          )}
        </div>

        {/* Информация и контролы */}
        <div className="flex flex-col flex-1 text-center sm:text-left w-full">
          <div>
            <div className="text-white font-bold text-lg truncate">{cur.title}</div>
            <div className="text-white/70 text-sm truncate">{cur.artist}</div>
          </div>

          {/* Слайдер */}
          <div className="mt-4 flex items-center gap-2 w-full">
            <span className="text-xs text-white/70 tabular-nums min-w-[36px] text-left">
              {formatTime(t)}
            </span>

            <input
              type="range"
              min={0}
              max={dur || 0}
              step="0.1"
              value={t}
              onChange={onSeek}
              className="flex-1 accent-white"
            />

            <span className="text-xs text-white/70 tabular-nums min-w-[36px] text-right">
              {formatTime(dur)}
            </span>
          </div>

          {/* Кнопки управления */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="flex items-center gap-2 justify-center flex-1">
              <button onClick={prev} className="p-2">
                <Icon.Prev />
              </button>
              <button onClick={toggle} className="p-3">
                {playing ? <Icon.Pause /> : <Icon.Play />}
              </button>
              <button onClick={next} className="p-2">
                <Icon.Next />
              </button>
            </div>

            <div className="flex items-center gap-2 justify-center sm:justify-start mt-2 sm:mt-0">
              <button onClick={toggleMute} className="p-1">
                {muted || vol === 0 ? <Icon.Mute /> : <Icon.Volume />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="0.01"
                value={muted ? 0 : vol}
                onChange={onVol}
                className="w-28 h-1 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, white ${(muted ? 0 : vol) * 100}%, rgba(255,255,255,0.3) ${(muted ? 0 : vol) * 100}%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />
    </div>

  );
}


export default AudioPlayer;
