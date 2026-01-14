"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const allProjects = getAllProjects();

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">
              프로젝트를 찾을 수 없습니다
            </h1>
            <Link
              href="/"
              className="text-[var(--accent)] hover:underline"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main className="pt-[var(--nav-height)]">
        {/* Back Link */}
        <div className="container py-8">
          <Link
            href="/#projects"
            className="link-arrow"
          >
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
            Back to projects
          </Link>
        </div>

        {/* Project Hero */}
        <section className="py-12 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
              <h1 className="mb-6">{project.title}</h1>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mb-8">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-8 mb-8 text-sm">
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Role</span>
                  <p className="text-[var(--text-primary)] font-medium">
                    {project.role}
                  </p>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Duration</span>
                  <p className="text-[var(--text-primary)] font-medium">
                    {project.duration}
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
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
                  >
                    GitHub
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Image Placeholder */}
        <section className="py-8">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-card) 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[var(--text-muted)]">Project Screenshot</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-6">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24 bg-[var(--bg-elevated)]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-8">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-lg font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl"
                  >
                    <div className="w-10 h-10 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-lg flex items-center justify-center mb-4">
                      <span className="text-[var(--text-secondary)] font-mono text-sm font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="py-16 md:py-24 bg-[var(--bg-elevated)]">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-8">
                  Results & Impact
                </h2>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[var(--text-secondary)]"
                    >
                      <svg
                        className="w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 border-t border-[var(--border-subtle)]">
          <div className="container">
            <div className="flex justify-between items-center">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">
                      Previous
                    </span>
                    <span className="font-medium">{prevProject.title}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-3 text-right text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">
                      Next
                    </span>
                    <span className="font-medium">{nextProject.title}</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
