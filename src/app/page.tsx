import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id='trendings' className="h-screen py-32">trendings</section>
      <section id='recommendations' className="h-screen py-32">recommendations</section>
      <section id='rankings' className="h-screen py-32">rankings</section>
    </main>
  );
}
