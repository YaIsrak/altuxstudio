import { navItems } from "@/lib/constants";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Separator } from "../ui/separator";

const socialLink = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/altuxstudio/",
    icon: RiInstagramFill,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/altuxstudio/",
    icon: FaFacebook,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/altuxstudio/",
    icon: LinkedInLogoIcon,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/altuxstudio/",
    icon: FaSquareXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-accent/50">
      <div className="container mx-auto px-4 py-[10vmin]">
        <h1 className="text-3xl font-normal tracking-tight">
          <span className="text-primary">Altux</span>Studio
        </h1>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st column */}
          <div>
            <p className="text-muted-foreground text-sm">
              Empowering businesses with innovative web solutions, seamless user
              experiences, and modern design.
            </p>
            <div className="flex gap-2 md:gap-4">
              {socialLink.map((item) => (
                <Link
                  href={item.url}
                  key={item.name}
                  className="text-muted-foreground hover:text-primary mt-4 text-sm transition"
                >
                  <item.icon className="size-6 md:size-7" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2nd column */}
          <div>
            <p className="text-lg font-bold">Quick Link</p>
            <div className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className="text-muted-foreground hover:text-primary text-sm transition hover:translate-x-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3rd column */}
          <div>
            <p className="text-lg font-bold">Get in touch</p>
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-muted-foreground text-sm">
                24 Road No. 12, Gulshan-2 Dhaka 1212
              </p>
              <Link
                href="tel:+8801712345678"
                className="text-muted-foreground hover:text-primary text-sm transition hover:translate-x-2"
              >
                +880 1893-802049
              </Link>
              <Link
                href="mailto:altuxstudio@gmail.com"
                className="text-muted-foreground hover:text-primary text-sm transition hover:translate-x-2"
              >
                altuxstudio@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
