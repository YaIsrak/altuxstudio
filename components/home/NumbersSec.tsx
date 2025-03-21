"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import NumberListItem from "./NumberListItem";

export default function NumbersSec() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <section className="container mx-auto px-4 py-[15vmin]">
      <div className="flex flex-col gap-8 md:flex-row" ref={ref}>
        <div className="flex-1">
          <span className="bg-muted text-muted-foreground rounded-full px-4 py-2">
            Number don't lie
          </span>
        </div>

        {entry?.isIntersecting && (
          <div className="flex-2 space-y-12 divide-y-1">
            <NumberListItem
              number={170}
              type="Countries"
              description="Work across around the world"
              index={1}
            />
            <NumberListItem
              number={50}
              prefix={"+"}
              type="Projects"
              description="With satisfaction from customer"
              index={2}
            />
          </div>
        )}
      </div>
    </section>
  );
}
