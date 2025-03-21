import NumberListItem from "./NumberListItem";

export default function NumbersSec() {
  return (
    <section className="container mx-auto px-4 py-[15vmin]">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <span className="bg-muted text-muted-foreground rounded-full px-4 py-2">
            Number don't lie
          </span>
        </div>

        <div className="flex-2 space-y-12 divide-y-1">
          <NumberListItem
            number={170}
            type="Countries"
            description="Work across around the world"
          />
          <NumberListItem
            number={50}
            prefix={"+"}
            type="Projects"
            description="With satisfaction from customer"
          />
        </div>
      </div>
    </section>
  );
}
