"use client";
import { motion } from "motion/react";
import { useState } from "react";

export type TextRollProps = {
  children: string;
  duration?: number;
  className?: string;
};

export function TextRoll({
  children,
  duration = 0.5,
  className,
}: TextRollProps) {
  const letters = children.split("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className="relative inline-block [perspective:1000px] [transform-style:preserve-3d]"
          aria-hidden="true"
        >
          <motion.span
            className="absolute inline-block [transform-origin:50%_25%] [backface-visibility:hidden]"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isHovered ? 90 : 0 }}
            transition={{ duration, delay: i * 0.1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
          <motion.span
            className="absolute inline-block [transform-origin:50%_100%] [backface-visibility:hidden]"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: isHovered ? 0 : 90 }}
            transition={{ duration, delay: i * 0.1 + 0.2 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
          <span className="invisible">
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </span>
  );
}
