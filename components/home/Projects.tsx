import { projectList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { TextRoll } from "../ui/text-roll";

export default function Projects() {
  return (
    <section className="container mx-auto px-4" id="projects">
      <h2 className="text-4xl font-normal tracking-tight">Projects</h2>

      <Separator className="my-6" />

      <div className="grid grid-cols-12 gap-2">
        {projectList.map((project, i) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            imageUrl={project.image}
            i={i}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  i,
}: {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  i: number;
}) {
  const colSpanClass = i % 5 === 0 ? "lg:col-span-6" : "lg:col-span-3";

  return (
    <Link
      href={link}
      className={cn("group/card col-span-12 my-4 md:col-span-6", colSpanClass)}
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          className="w-full transition-all duration-300 ease-in-out group-hover/card:scale-110"
          alt={title}
          width={400}
          height={400}
        />
      </div>

      {/* title */}
      <h4 className="my-2 text-2xl font-normal tracking-tight">{title}</h4>
      <p className="text-muted-foreground mb-6 line-clamp-3 text-xs md:text-sm">
        {description}
      </p>

      <TextRoll
        className={cn(
          "text-muted-foreground after:bg-muted-foreground group-hover/card:text-foreground relative inline-block w-full py-2 text-sm no-underline duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-200 group-hover/card:after:w-full",
          "",
        )}
      >
        View Details
      </TextRoll>
    </Link>
  );
}
