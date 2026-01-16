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
        className="group card block p-8 h-full flex flex-col"
        aria-label={`${project.title} 프로젝트 상세보기`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-center">
              <span className="text-[var(--text-secondary)] font-mono text-base">
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
            className="w-10 h-10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 text-[var(--text-secondary)]"
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
        <div className="flex-1 mb-6">
          <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-[var(--border-subtle)] mt-auto">
          <span className="text-[var(--text-tertiary)] text-sm">
            {project.role}
          </span>
          <span className="text-[var(--text-tertiary)] text-sm">
            {project.duration}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
