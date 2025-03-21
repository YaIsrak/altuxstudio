"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "../motion-primitives/sliding-number";

export default function NumberListItem({
  number,
  type,
  description,
  prefix,
}: {
  number: number;
  type: string;
  description: string;
  prefix?: string;
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
    <div className="flex pb-12">
      <div className="flex text-9xl">
        <SlidingNumber value={value} />
        {/* {number} */}
        <span className="text-7xl">{prefix}</span>
      </div>
      <p>({type})</p>
      <p className="text-muted-foreground self-end text-lg font-medium">
        {description}
      </p>
    </div>
  );
}
