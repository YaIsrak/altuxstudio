import {
  CloudUpload,
  Figma,
  FilePen,
  Hourglass,
  KeyboardOff,
  LucideProps,
  PenTool,
  ShoppingCart,
  TerminalIcon,
} from "lucide-react";

export const navItems: { id: number; label: string; href: string }[] = [
  { id: 1, label: "Home", href: "/#" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 3, label: "Services", href: "#services" },
  { id: 2, label: "About", href: "#about" },
];

export const whatGet: {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}[] = [
  {
    id: 1,
    title: "Custom Design",
    description:
      "Visually stunning, user-friendly, and fully responsive designs.",
    icon: FilePen,
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "High-quality work delivered on time, every time.",
    icon: Hourglass,
  },
];

export const servicesList: {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites tailored to your business needs using the latest technologies.",
    icon: TerminalIcon,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We design intuitive, engaging, and user-friendly interfaces that enhance user experience and boost conversions.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "From product listings to payment gateways, we create seamless e-commerce platforms that drive sales and engagement.",
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Improve your website’s visibility with our SEO strategies, ensuring higher rankings and organic traffic growth.",
    icon: CloudUpload,
  },
  {
    id: 5,
    title: "No-Code Development",
    description:
      "We provide no-code solutions to help businesses create functional websites and apps without technical expertise.",
    icon: KeyboardOff,
  },
  {
    id: 6,
    title: "Graphic Design",
    description:
      "Enhance your brand identity with eye-catching graphics, including logos, marketing materials, and social media visuals.",
    icon: Figma,
  },
];

// projects
export const projectList: {
  id: number;
  title: string;
  link: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  image: string;
}[] = [
  {
    id: 1,
    title: "Leadsage – Digital Agency Website",
    link: "https://leadsage.com",
    image: "/images/projects/1.jpeg",
  },
  {
    id: 2,
    title: "Alvarado",
    link: "https://alvarado.com",
    image: "/images/projects/2.jpeg",
  },
  {
    id: 3,
    title: "Marissa",
    link: "https://ammymash.com",
    image: "/images/projects/3.jpeg",
  },
  {
    id: 4,
    title: "Aldenair law farm",
    link: "https://aldenair.com",
    image: "/images/projects/4.jpeg",
  },
  {
    id: 5,
    title: "Nexus",
    link: "https://nexus.com",
    image: "/images/projects/5.jpeg",
  },
  {
    id: 6,
    title: "E-commerce",
    link: "https://ecommerce.com",
    image: "/images/projects/6.jpeg",
  },
  {
    id: 7,
    title: "Tesla ev",
    link: "https://tesla.com",
    image: "/images/projects/7.jpeg",
  },
  {
    id: 8,
    title: "Larana.Inc",
    link: "https://reallygreatsite.com",
    image: "/images/projects/8.jpeg",
  },
];
