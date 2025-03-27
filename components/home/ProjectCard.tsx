import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title,
  imageUrl,
  link,
}: {
  title: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank" className="group/card">
      {/* image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          className="aspect-video w-full object-cover transition-all duration-300 ease-in-out group-hover/card:scale-105"
          alt={title}
          width={400}
          height={400}
        />
      </div>

      {/* link */}
      <p className="text-muted-foreground after:bg-muted-foreground group-hover/card:text-foreground relative inline-block w-full py-2 text-sm no-underline duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-200 group-hover/card:after:w-full">
        View Details
      </p>
    </Link>
  );
}
