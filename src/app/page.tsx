import NowPlaying from "@/components/home/NowPlaying";
import TopRated from "@/components/home/TopRated";
import Trending from "@/components/home/Trending";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-[12px] lg:p-24 md:ps-7 min-h-screen bg-background text-text">
      <div className="max-w-[1100px] mx-auto">
        <Trending id="trending"/>
        <NowPlaying id="now-playing"/>
        <TopRated id="top-rated"/>
      </div>
    </main>
  );
}
