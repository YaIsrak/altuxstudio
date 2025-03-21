import { Separator } from "../ui/separator";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-[15vmin]" id="about">
      <h2 className="text-5xl font-normal tracking-tight">ABOUT US</h2>
      <Separator className="my-4" />

      <p className="text-muted-foreground max-w-lg text-sm">
        At <span className="text-primary font-bold">Altux Studio</span>, we
        specialize in crafting{" "}
        <span className="text-foreground">
          dynamic, high-performance websites
        </span>{" "}
        and applications tailored to your business needs. Our team combines
        creativity and cutting-edge technology to deliver exceptional user
        experiences.
      </p>

      <div className="border-primary relative mx-auto mt-12 max-w-sm border p-8 md:max-w-3xl lg:max-w-4xl">
        {/* points */}
        <>
          <div className="bg-primary absolute top-0 left-0 size-3 -translate-x-1/2 -translate-y-1/2" />
          <div className="bg-primary absolute top-0 right-0 size-3 translate-x-1/2 -translate-y-1/2" />
          <div className="bg-primary absolute bottom-0 left-0 size-3 -translate-x-1/2 translate-y-1/2" />
          <div className="bg-primary absolute right-0 bottom-0 size-3 translate-x-1/2 translate-y-1/2" />
        </>
        <p className="text-primary text-sm font-light">We believe</p>
        <p className="text-lg font-extralight italic md:text-xl">
          <span className="font-bold">“We don’t just build websites</span> - we
          create digital ecosystems where brands thrive. With every project, we
          prioritize innovation, ensuring that our solutions are{" "}
          <span className="font-bold">scalable, fast, and future-proof</span>.
          From sleek UI/UX design to powerful backend development, we make sure
          your brand’s online journey is{" "}
          <span className="font-bold">smooth and impactful."</span>
        </p>
      </div>
    </section>
  );
}
