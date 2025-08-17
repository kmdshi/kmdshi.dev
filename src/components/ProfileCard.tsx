import LinksList from "./LinksList";
import StackTags from "./StackTags";
import avatar from '../assets/png/avatar.gif';
import bg from '../assets/png/bg.gif';

{/* import AvatarThings from "./AvatarThings"; */}

function ProfileCard() {
  return (
    <div className="rounded-xl border border-white/10 " >
      <div
        className="h-36 bg-cover bg-center rounded-lg border-1  border-white/50"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className="flex justify-start pl-[20px] -mt-12 relative">
          <div className="relative">
          <img
            src={avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover border-1  border-white shadow-lg"
          />

  
         
        </div>
      </div>

      <div className="p-5 flex flex-col gap-1">
        <div className="relative inline-block group">
          <h1 className="inline-block text-2xl text-[#DFE0E2] font-bold  border-white">
            kmdshiㆍБогдан Липатов
          </h1>
         
        </div>

        <p className="text-[#E5E6E6]">T-Shaped мобильный разработчик</p>

        <StackTags />
        <LinksList />
      </div>
    </div>
  );
}

export default ProfileCard;