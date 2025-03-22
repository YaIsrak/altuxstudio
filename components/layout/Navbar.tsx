"use client";

import useScroll from "@/hooks/useScroll";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(40);

  return (
    <nav
      data-state={isOpen ? "active" : "closed"}
      className={cn(
        "fixed z-20 w-full bg-transparent py-4 transition-all",
        isScrolled && "bg-background/50 border-muted border-b backdrop-blur-xl",
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-2 md:px-4">
        {/* main */}
        <div className="flex w-full items-center justify-between lg:w-auto">
          {/* Logo */}
          <Link
            href={"/"}
            className="font-bold-sans text-xl font-black tracking-tight"
          >
            <span className="text-primary">Altux</span>
            Studio
          </Link>

          {/* menu toggle */}
          <Button
            size="icon"
            variant="ghost"
            className="relative flex lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X
              className={cn(
                "absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200",
                isOpen && "scale-100 rotate-0 opacity-100",
              )}
            />
            <HiOutlineMenuAlt3
              className={cn(
                "m-auto size-5 duration-200",
                isOpen && "scale-0 rotate-180 opacity-0",
              )}
            />
          </Button>
        </div>

        {/* menu */}
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="text-muted-foreground after:bg-muted-foreground hover:text-foreground font-bold-sans relative inline-block w-full px-2 py-2 text-sm no-underline transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-200 hover:-translate-y-0.5 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* cta */}
        <Button size="sm" className="hidden text-xs tracking-tight lg:block">
          Get Started
        </Button>

        {/* mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: [0, 0.71, 0.2, 1.01] },
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "bg-background/60 mx-2 mt-6 w-full space-y-8 rounded-3xl border p-6 backdrop-blur-2xl",
            )}
          >
            <div className="lg:hidden">
              <ul className="text-base">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground after:bg-muted-foreground hover:text-foreground font-bold-sans relative inline-block w-full py-4 no-underline transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-200 hover:-translate-y-0.5 hover:after:w-full"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
