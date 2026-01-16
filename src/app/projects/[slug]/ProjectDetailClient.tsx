"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="container pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Project Meta */}
      <motion.section
        className="container pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
          <div>
            <h3 className="text-sm text-[var(--text-tertiary)] mb-2">역할</h3>
            <p className="text-lg font-medium">{project.role}</p>
          </div>
          <div>
            <h3 className="text-sm text-[var(--text-tertiary)] mb-2">기간</h3>
            <p className="text-lg font-medium">{project.duration}</p>
          </div>
          <div>
            <h3 className="text-sm text-[var(--text-tertiary)] mb-2">
              기술 스택
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section
        className="container pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">프로젝트 개요</h2>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          {project.overview}
        </p>
      </motion.section>

      {/* Features */}
      <motion.section
        className="container pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-8">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-default)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <motion.section
          className="container pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-[var(--accent-purple)]/5 border border-[var(--accent-purple)]/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <p className="text-lg font-medium text-[var(--accent-purple)]">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* External Links */}
      {(project.liveUrl || project.githubUrl) && (
        <motion.section
          className="container pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`${project.title} 라이브 사이트 새 창에서 열기`}
              >
                라이브 사이트 보기
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label={`${project.title} GitHub 저장소 새 창에서 열기`}
              >
                GitHub 보기
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </motion.section>
      )}

      {/* Project Navigation */}
      <motion.section
        className="container pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="flex justify-between items-center pt-12 border-t border-[var(--border-default)]">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label={`이전 프로젝트: ${prevProject.title}`}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <div>
                <span className="text-sm text-[var(--text-tertiary)]">
                  이전 프로젝트
                </span>
                <p className="font-medium">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label={`다음 프로젝트: ${nextProject.title}`}
            >
              <div>
                <span className="text-sm text-[var(--text-tertiary)]">
                  다음 프로젝트
                </span>
                <p className="font-medium">{nextProject.title}</p>
              </div>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.section>
    </>
  );
}
