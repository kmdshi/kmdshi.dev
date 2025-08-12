import BigCard from "../components/BigCard";
import ProfileCard from "../components/ProfileCard";
import Tabs from "../components/Tabs";

export default function PortfolioPage() {
  return (
    <div className="
        relative min-h-screen text-zinc-100 
        pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20
        pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20
        pl-6 sm:pl-8 md:pl-10 lg:pl-16 xl:pl-24
        pr-6 sm:pr-8 md:pr-10 lg:pr-16 xl:pr-24
        overflow-hidden
      ">
      <div className="relative z-10">
        <BigCard>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.5fr_1fr]">
            <ProfileCard />
            <Tabs />
          </div>
        </BigCard>
      </div>
    </div>
  );
}
