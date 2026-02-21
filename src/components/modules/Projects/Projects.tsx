"use client";

import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
const projects: Project[] = [
  {
    title: "AI SR-Healthcare Platform",
    description:
      "Developed AI-powered healthcare platform with Next.js achieving 92% doctor-matching accuracy, featuring multi-role dashboards, appointment scheduling, video consultations, secure payments, and HIPAA-compliant medical records across 20+ specialties",
    image: "/projects/project.PNG",
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
    githubFrontendUrl:
      "https://github.com/sohelranaweb/sr-health-care-frontend",
    githubBackendUrl: "https://github.com/sohelranaweb/sr-health-care-backend",
    liveUrl: "https://sr-health-care-frontend.vercel.app",
    featured: true,
  },
  {
    title: "Travel Buddy",
    description:
      "Developed social travel platform enabling users to find compatible travel partners through AI-powered matching based on destinations, interests, budget, and travel dates",
    image: "/projects/project2.PNG",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Postgres",
      "Node.js",
      "Express.js",
      "JWT",
      "TailwindCSS",
    ],
    githubFrontendUrl: "https://github.com/sohelranaweb/travel-buddy-client",
    githubBackendUrl: "https://github.com/sohelranaweb/travel-buddy-server",
    liveUrl: "https://travel-buddy-client-taupe.vercel.app",
  },
  {
    title: "Digital Wallet Management",
    description:
      "DigiCash Frontend is a modern, responsive web application designed to provide users with a seamless digital wallet experience, similar to Bkash, Nagad, or Rocket.",
    image: "/projects/project3.PNG",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    githubFrontendUrl:
      "https://github.com/sohelranaweb/digicash-management-system-fronted-",
    githubBackendUrl:
      "https://github.com/sohelranaweb/digicash-management-system-backend",
    liveUrl: "https://digicash-client.vercel.app",
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
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
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
            href="https://github.com/sohelranaweb"
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
