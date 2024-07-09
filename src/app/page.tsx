import NowPlaying from "@/components/home/NowPlaying";
import TopRated from "@/components/home/TopRated";
import Trending from "@/components/home/Trending";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-[12px] lg:p-24 md:ps-7 min-h-screen bg-background text-text">
      <div className="w-11/12 md:max-w-[1100px] mx-auto z-0 snap-y pt-16 md:pt-0">
        <div id="trending" className="snap-center">
          <Trending />
        </div>
        <div id="now-playing" className="snap-center">
          <NowPlaying />
        </div>
        <div id="top-rated" className=" snap-center">
          <TopRated />
        </div>
      </div>
    </main>
  );
}
