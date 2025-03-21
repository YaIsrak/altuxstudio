"use client";

import { useEffect, useState } from "react";
import { BlurFade } from "../ui/blur-fade";
import { SlidingNumber } from "../ui/sliding-number";

export default function NumberListItem({
  number,
  type,
  description,
  prefix,
  index: i,
}: {
  number: number;
  type: string;
  description: string;
  prefix?: string;
  index: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === number) return;

    const interval = setInterval(() => {
      setValue(value + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [value, number]);

  return (
    <BlurFade inView delay={0.05 * i} className="flex pb-12">
      <div className="flex text-9xl">
        <SlidingNumber value={value} />
        <span className="text-7xl">{prefix}</span>
      </div>
      <p>({type})</p>
      <p className="text-muted-foreground self-end text-lg font-medium">
        {description}
      </p>
    </BlurFade>
  );
}
