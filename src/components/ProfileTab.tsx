import AboutMeCard from "./AboutmeCard";
import AudioPlayer from "./AudioPlayer";
import cat from '../assets/png/cat.gif';

function ProfileTab() {
  return (
    <div className="space-y-6">
      <AboutMeCard />
      <AudioPlayer />
      <div className="flex flex-col justify-center items-center">
        <img src={cat} alt="cat" className="w-40 h-40" />
        <h5 className="text-white/50">@kmdshi 2025</h5>
      </div>
    </div>
  );
}

export default ProfileTab;