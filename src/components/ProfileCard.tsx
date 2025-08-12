import LinksList from "./LinksList";
import StackTags from "./StackTags";

{/* import AvatarThings from "./AvatarThings"; */}

function ProfileCard() {
  return (
    <div className="rounded-xl border border-white/10 " >
      <div
        className="h-36 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('/src/assets/png/bg.gif')",
        }}
      ></div>

      <div className="flex justify-start pl-[20px] -mt-12 relative">
          <div className="relative">
          <img
            src="/src/assets/png/avatar.gif"
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover border-2 border-white shadow-lg"
          />

          
         
        </div>
      </div>

      <div className="p-5 flex flex-col gap-1">
        <div className="relative inline-block group">
          <h1 className="inline-block text-2xl font-bold border-b-2 border-white">
            kmdshi
          </h1>
          <div
            className="absolute bottom-full left-0 mb-2
            bg-white/10 text-white text-sm px-3 py-1 rounded-md
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            shadow-lg border border-white/20
            whitespace-nowrap
            pointer-events-none z-50"
          >
            Богдан Липатов
          </div>
        </div>

        <p className="text-white/70">T-Shaped mobile Developer</p>

        <StackTags />
        <LinksList />
      </div>
    </div>
  );
}

export default ProfileCard;