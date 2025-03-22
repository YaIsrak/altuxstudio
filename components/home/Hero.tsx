import { projectList } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { TextLoop } from "../ui/text-loop";

export default function Hero() {
  const project1 = projectList[0];

  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute -z-30 h-full w-full object-cover"
      >
        <source src="/images/hero_background_video.mp4" type="video/mp4" />
      </video>
      <div className="to-background absolute -z-20 h-full w-full bg-gradient-to-b from-transparent" />

      {/* main container */}
      <div className="relative container mx-auto h-full px-4 py-[25vmin] md:py-[20vmin]">
        <BlurFade>
          <h3 className="text-foreground text-4xl font-normal uppercase">
            A Dedicated Team for
          </h3>
        </BlurFade>
        <BlurFade delay={0.1}>
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
        </BlurFade>

        <BlurFade delay={0.2}>
          <Separator className="my-4" />
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="font-bold-sans max-w-xl text-xs uppercase">
            We craft{" "}
            <span className="text-primary">
              high-performance, stunning websites
            </span>{" "}
            that drive results. Passionate about design, technology and user
            experience, we bring brands to life in the digital world.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Link href="/">
            <Button
              className="mt-4 font-black tracking-tight"
              variant="secondary"
              size="sm"
            >
              Get Started
            </Button>
          </Link>
        </BlurFade>

        <Link
          href={project1.link}
          className="absolute right-0 bottom-28 space-y-2 transition hover:-translate-y-2 md:block"
        >
          <BlurFade delay={0.7} direction="left">
            <p className="font-bold-sans text-xs uppercase">
              /Featured Project
            </p>

            <div className="relative size-56 overflow-hidden rounded-2xl">
              <Image
                src={project1.image}
                alt={project1.title}
                width={400}
                height={400}
              />
            </div>
          </BlurFade>
        </Link>
      </div>
    </section>
  );
}
