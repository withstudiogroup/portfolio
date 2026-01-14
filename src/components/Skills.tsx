"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    description: "사용자 경험 중심의 인터페이스",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "확장 가능한 서버 아키텍처",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps",
    description: "안정적인 배포와 운영",
    skills: ["Docker", "AWS", "CI/CD", "Monitoring"],
  },
  {
    title: "Design",
    description: "심미성과 기능의 균형",
    skills: ["Figma", "UI/UX", "Design System", "Prototyping"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--bg-elevated)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">Expertise</span>
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            다양한 기술 스택을 활용하여
            <br className="hidden sm:block" />
            최적의 솔루션을 제공합니다.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-hover)] transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-center mb-4">
                <span className="text-[var(--text-secondary)] text-sm font-semibold">
                  {category.title.charAt(0)}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-medium text-[var(--text-primary)] mb-1">
                {category.title}
              </h3>
              <p className="text-[var(--text-tertiary)] text-sm mb-4">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-[var(--text-secondary)] bg-[var(--bg-subtle)] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
