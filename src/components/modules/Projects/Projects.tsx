"use client";

import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
const projects: Project[] = [
  {
    title: "AI Healthcare Platform",
    description:
      "An AI-powered platform that connects patients with doctors using smart recommendation algorithms and real-time appointment booking.",
    image: "/projects/project.png",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Postgres",
      "Node.js",
      "Express.js",
      "JWT",
      "TailwindCSS",
      "OpenRouterAI",
    ],
    githubUrl: "https://github.com/yourhandle/project1",
    liveUrl: "https://project1.vercel.app",
    featured: true,
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order tracking.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/yourhandle/project2",
    liveUrl: "https://project2.vercel.app",
  },
  {
    title: "Real-time Chat App",
    description:
      "A modern chat application with real-time messaging, file sharing, and group conversation support.",
    image: "/projects/project3.png",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourhandle/project3",
    liveUrl: "https://project3.vercel.app",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio with starry animations, smooth scroll, and a clean modern design.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  //   githubUrl: "https://github.com/yourhandle/project4",
  // },
  // {
  //   title: "Task Management App",
  //   description:
  //     "A drag-and-drop task manager with team collaboration, deadline tracking, and progress visualization.",
  //   image: "/projects/project5.png",
  //   tags: ["React", "TypeScript", "Zustand", "DnD Kit"],
  //   githubUrl: "https://github.com/yourhandle/project5",
  //   liveUrl: "https://project5.vercel.app",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "A beautiful weather app with 7-day forecasts, interactive maps, and location-based alerts.",
  //   image: "/projects/project6.png",
  //   tags: ["Next.js", "OpenWeather API", "Leaflet"],
  //   githubUrl: "https://github.com/yourhandle/project6",
  //   liveUrl: "https://project6.vercel.app",
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden py-10"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-blue-400/60 uppercase font-mono mb-4">
            ✦ My Work ✦
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            A collection of projects I&apos;ve built — from side experiments to
            production-ready applications.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 text-sm font-medium transition-all duration-300 group"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
