import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { Separator } from "../ui/separator";
import { TextRoll } from "../ui/text-roll";

export const projectList: {
  id: number;
  title: string;
  link: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
}[] = [
  {
    id: 1,
    title: "Visionary Creative – Digital Agency Website",
    link: "https://visionarycreative.com",
    description:
      "A sleek, modern website for a digital marketing agency, featuring interactive animations and dynamic content management.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    features: [
      "Fully responsive and animated UI",
      "Custom CMS for easy content management",
      "Portfolio showcase with case studies",
      "SEO-optimized pages",
      "Interactive service offerings with motion effects",
    ],
    image: "/images/project.png",
  },
  {
    id: 2,
    title: "TrendHive – E-Commerce Store",
    link: "https://trendhive.com",
    description:
      "A modern e-commerce store with seamless shopping experience, dynamic filtering, and secure checkout.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "Tailwind CSS",
      "MongoDB",
    ],
    features: [
      "Product filtering and sorting",
      "User authentication with JWT",
      "Secure payments with Stripe",
      "Admin dashboard for product & order management",
      "Wishlist and cart functionalities",
    ],
    image: "/images/project.png",
  },
  {
    id: 3,
    title: "EliteFit – Fitness & Wellness Platform",
    link: "https://elitefit.com",
    description:
      "A fitness and wellness platform offering online workout plans, diet tracking, and virtual coaching.",
    technologies: [
      "React.js",
      "Node.js",
      "Firebase",
      "GraphQL",
      "Tailwind CSS",
    ],
    features: [
      "Live workout classes",
      "Diet and fitness plan customization",
      "User dashboard with progress tracking",
      "Subscription-based model with Stripe",
      "Social media integrations for community engagement",
    ],
    image: "/images/project.png",
  },
  {
    id: 4,
    title: "SnapShoot – Photography Portfolio",
    link: "https://snapshoot.com",
    description:
      "A stunning photography portfolio website with high-resolution galleries and seamless user experience.",
    technologies: ["Gatsby.js", "GraphQL", "Tailwind CSS", "Cloudinary"],
    features: [
      "High-performance image optimization",
      "Dynamic photo galleries",
      "Custom contact forms",
      "Lightbox image previews",
      "SEO-friendly static site generation",
    ],
    image: "/images/project.png",
  },
  {
    id: 5,
    title: "FoodieFinds – Restaurant Discovery App",
    link: "https://foodiefinds.com",
    description:
      "A restaurant discovery platform that helps users find the best dining experiences near them.",
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Tailwind CSS",
    ],
    features: [
      "Location-based restaurant recommendations",
      "User reviews and ratings",
      "Interactive maps with real-time updates",
      "Restaurant profile management for business owners",
      "Social sharing and bookmarking",
    ],
    image: "/images/project.png",
  },
];

export default function Projects() {
  return (
    <BlurFade>
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
    </BlurFade>
  );
}

export function ProjectCard({
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
      <BlurFade delay={0.05 * i}>
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
      </BlurFade>
    </Link>
  );
}
