import Image from "next/image";
import { Project } from "./Projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Outer glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500 blur-sm" />

      {/* Glass card */}
      <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col h-full">
        {/* Top shimmer line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#080818] z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              // fallback gradient if image not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback gradient bg when no image */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold">
              ✦ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-white font-bold text-lg leading-snug group-hover:text-blue-200 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 text-xs transition-colors duration-300 group/link"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
            {project.githubFrontendUrl && (
              <a
                href={project.githubFrontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors duration-300 group/link"
              >
                <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                <span>Frontend</span>
              </a>
            )}
            {project.githubBackendUrl && (
              <a
                href={project.githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors duration-300 group/link"
              >
                <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                <span>Backend</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
