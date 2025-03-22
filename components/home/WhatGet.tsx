import { whatGet } from "@/lib/constants";
import { LucideProps } from "lucide-react";
import { BlurFade } from "../ui/blur-fade";
import { BorderTrail } from "../ui/border-trail";
import { MagicCard } from "../ui/magic-card";

export default function WhatGet() {
  return (
    <BlurFade>
      <section className="container mx-auto px-4 py-[15vmin]" id="what-get">
        <h2 className="text-4xl font-normal tracking-tight uppercase">
          What you’ll get
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {whatGet.map((item, i) => (
            <BlurFade key={item.title} delay={0.1 * i}>
              <Card key={item.title} {...item} />
            </BlurFade>
          ))}
        </div>
      </section>
    </BlurFade>
  );
}

function Card({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={150}
      />
      <MagicCard className="h-full w-full p-6 md:p-12">
        <Icon className="mb-4 size-8 md:size-12" />
        <h3 className="text-primary mb-2 text-xl font-normal tracking-tight md:text-3xl">
          {title}
        </h3>
        <p className="text-xs font-light md:text-sm lg:text-base">
          {description}
        </p>
      </MagicCard>
    </div>
  );
}
