import { useRef, type ReactNode, type MouseEvent } from "react";

interface BackgroundVideoProps {
  children?: ReactNode;
}

function BackgroundVideo({ children }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) toggleSound();
  };

  return (
    <div
      onClick={handleContainerClick}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="src/assets/kawai.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 pointer-events-none -z-10" />

      <div className="relative z-10">
        {children}
      </div>

     
    </div>
  );
}

export default BackgroundVideo;
