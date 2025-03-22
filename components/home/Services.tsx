import { servicesList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { BlurFade } from "../ui/blur-fade";
import { Separator } from "../ui/separator";

export default function Services() {
  return (
    <BlurFade>
      <section className="container mx-auto px-4 py-[15vmin]" id="services">
        <h2 className="text-5xl font-normal tracking-tight uppercase">
          Services We Offer
        </h2>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.07 * index}>
              <Card key={feature.title} {...feature} index={index} />
            </BlurFade>
          ))}
        </div>
      </section>
    </BlurFade>
  );
}

const Card = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group border-muted relative flex flex-col py-10 lg:border-r",
        index < 3 && "border-muted lg:border-b",
      )}
    >
      {index < 3 && (
        <div className="from-primary/10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
      )}
      {index >= 3 && (
        <div className="from-primary/10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
      )}
      <div className="text-foreground group-hover:text-primary relative z-10 mb-4 px-6 lg:px-10">
        <Icon className="size-8" />
      </div>
      <div className="relative z-10 mb-2 px-6 text-lg font-bold lg:px-10">
        {/* side line */}
        <div className="group-hover:bg-primary bg-muted-foreground/50 absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full transition-all duration-200 group-hover:h-8" />

        {/* title */}
        <span className="text-foreground inline-block transition duration-200 group-hover:translate-x-2">
          {title}
        </span>
      </div>

      {/* description */}
      <p className="text-muted-foreground relative z-10 max-w-xs px-6 text-sm lg:px-10">
        {description}
      </p>
    </div>
  );
};
