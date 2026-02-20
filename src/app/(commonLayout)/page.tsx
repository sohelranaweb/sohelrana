import AnimatedSection from "@/components/AnimatedSection";
import About from "@/components/modules/AboutMe.tsx/About";
import Contact from "@/components/modules/Contact/Contact";
import Hero from "@/components/modules/Hero/Hero";
import Projects from "@/components/modules/Projects/Projects";
import Head from "next/head";

export default async function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* <AnimatedSection>
          <Hero />
        </AnimatedSection> */}
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </>
  );
}
