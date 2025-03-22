import { projectList } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { TextLoop } from "../motion-primitives/text-loop";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Hero() {
  const project1 = projectList[0];

  return (
    <section className="relative h-screen">
      {/* <Waves
        lineColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="-z-30"
      /> */}
      <div className="to-background absolute -z-20 h-full w-full bg-gradient-to-b from-transparent" />

      {/* main container */}
      <div className="relative container mx-auto h-full px-4 py-[25vmin] md:py-[20vmin]">
        <h3 className="text-foreground text-4xl font-normal uppercase">
          A Dedicated Team for
        </h3>
        <TextLoop
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 80,
            mass: 10,
          }}
          className="text-primary font-bold-sans text-6xl font-black uppercase md:text-8xl"
        >
          <span>build</span>
          <span>Design</span>
          <span>Grow</span>
        </TextLoop>

        <Separator className="my-4" />

        <p className="font-bold-sans max-w-xl text-xs uppercase">
          We craft{" "}
          <span className="text-primary">
            high-performance, stunning websites
          </span>{" "}
          that drive results. Passionate about design, technology and user
          experience, we bring brands to life in the digital world.
        </p>

        <Link href="/">
          <Button
            className="mt-4 font-black tracking-tight"
            variant="secondary"
            size="sm"
          >
            Get Started
          </Button>
        </Link>

        <Link
          href={project1.link}
          className="absolute right-0 bottom-28 space-y-2 transition hover:-translate-y-2 md:block"
        >
          <p className="font-bold-sans text-xs uppercase">/Featured Project</p>

          <div className="relative size-56 overflow-hidden rounded-2xl">
            <Image
              src={project1.image}
              alt={project1.title}
              width={400}
              height={400}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
