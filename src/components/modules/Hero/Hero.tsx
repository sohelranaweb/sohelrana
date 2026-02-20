import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="container mx-auto px-4 py-20 flex items-center justify-center"
      id="hero"
    >
      <div className="text-center space-y-6">
        <p className="text-xl md:text-2xl">Hey There, This is Sohel Rana</p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Full Stack Web Developer | TypeScript Enthusiast
        </h1>
        <p className="text-xl text-gray-300">
          My goal is to write maintainable, clean and understandable code to{" "}
          <br />
          process development was enjoyable.
        </p>
        <div className="space-x-2">
          <Button variant="outline">Resume</Button>
          <Button variant="outline">git</Button>
          <Button variant="outline">in</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
