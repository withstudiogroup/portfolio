"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group card block p-6 h-full flex flex-col"
        aria-label={`${project.title} 프로젝트 상세보기`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-center">
              <span className="text-[var(--text-secondary)] font-mono text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            {/* Tags */}
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Arrow */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <svg
              className="w-4 h-4 text-[var(--text-secondary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-4">
          <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] mt-auto">
          <span className="text-[var(--text-tertiary)] text-xs">
            {project.role}
          </span>
          <span className="text-[var(--text-tertiary)] text-xs">
            {project.duration}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
