"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "@/hooks/useCarousel";
import { projectList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "../ui/separator";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const { api, setApi, current } = useCarousel();

  return (
    <section className="">
      <div className="container mx-auto px-4" id="projects">
        <h2 className="text-4xl font-normal tracking-tight">Projects</h2>

        <Separator className="my-8" />
      </div>

      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="overflow-visible"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="cursor-grab">
          {projectList.map((project, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-2">
              <div
                className={cn(
                  "relative transition-all",
                  index !== current - 1 && "scale-90 opacity-50",
                )}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  link={project.link}
                  imageUrl={project.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        {/* bottom */}
        <div className="mt-8 flex items-center justify-center">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "bg-muted mx-1 h-2 w-2 rounded-full transition-all duration-300",
                index === current - 1 ? "bg-primary w-4" : "",
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
