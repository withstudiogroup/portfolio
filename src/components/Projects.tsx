"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="mb-4">Selected Projects</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            사용자 경험과 비즈니스 가치를 모두 고려한 프로젝트들입니다.
            <br className="hidden md:block" />
            각 프로젝트를 클릭하여 상세 내용을 확인하세요.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link - Hidden as all projects are shown */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a href="/projects" className="link-arrow">
              View all projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
