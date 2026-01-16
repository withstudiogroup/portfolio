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
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-16 md:py-20 bg-[var(--bg-elevated)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            <div>
              <span className="section-label">Role</span>
              <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mt-3">
                {project.role}
              </p>
            </div>
            <div>
              <span className="section-label">Duration</span>
              <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mt-3">
                {project.duration}
              </p>
            </div>
            <div>
              <span className="section-label">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* External Links */}
          {(project.liveUrl || project.githubUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-12 pt-12 border-t border-[var(--border-subtle)]"
            >
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
                    className="w-4 h-4"
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
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="section-label">Overview</span>
            <h2 className="mt-4 mb-8">프로젝트 개요</h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mx-auto">Features</span>
            <h2 className="mt-4 mb-4">주요 기능</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              이 프로젝트의 핵심 기능들을 소개합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-hover)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-center mb-6 text-[var(--text-tertiary)] group-hover:text-[var(--accent-purple)] transition-colors">
                  <span className="text-lg font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="section-label mx-auto">Results</span>
              <h2 className="mt-4 mb-4">프로젝트 성과</h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
                이 프로젝트를 통해 달성한 주요 성과입니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-purple)]/5 border border-[var(--accent-purple)]/20 text-center"
                >
                  <p className="text-lg font-medium text-[var(--text-primary)]">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mx-auto">More Projects</span>
            <h2 className="mt-4">다른 프로젝트 보기</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="block p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-hover)] transition-all group"
                  aria-label={`이전 프로젝트: ${prevProject.title}`}
                >
                  <div className="flex items-center gap-3 text-[var(--text-tertiary)] mb-4">
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
                    <span className="text-sm">이전 프로젝트</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                    {prevProject.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mt-2 line-clamp-2">
                    {prevProject.description}
                  </p>
                </Link>
              </motion.div>
            )}

            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={!prevProject ? "md:col-start-2" : ""}
              >
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="block p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-hover)] transition-all group text-right"
                  aria-label={`다음 프로젝트: ${nextProject.title}`}
                >
                  <div className="flex items-center justify-end gap-3 text-[var(--text-tertiary)] mb-4">
                    <span className="text-sm">다음 프로젝트</span>
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
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mt-2 line-clamp-2">
                    {nextProject.description}
                  </p>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Back to all projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Link href="/#projects" className="link-arrow">
              <svg
                className="w-4 h-4 rotate-180"
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
              전체 프로젝트 보기
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
