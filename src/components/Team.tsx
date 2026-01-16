"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "사진업 5년",
    description: "디자인 감각, UI/UX 이해",
  },
  {
    title: "영업 5년",
    description: "고객 니즈 파악, 현장 경험",
  },
  {
    title: "전략팀장 3년",
    description: "SQL 데이터분석, 비즈니스 인사이트",
  },
  {
    title: "풀스택 개발 5년",
    description: "React, Node.js, Python",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">About</span>
            <h2 className="mb-6">소개</h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p className="text-lg leading-relaxed">
                현장에서 직접 서비스를 운영하며 겪은 문제들을 해결해본 다수의 경험이 있습니다.
              </p>
              <p className="leading-relaxed">
                1인 체제로 움직이기 때문에 커뮤니케이션이 빠르고, 유지보수 요청에도
                <br />
                담당자가 바뀌는 일 없이 직접 대응합니다.
              </p>
            </div>
          </motion.div>

          {/* Right - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-label">Experience</span>
            <h3 className="text-xl font-medium text-[var(--text-primary)] mb-6">
              경력 역량
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:border-[var(--border-hover)] transition-colors"
                >
                  <h4 className="font-medium text-[var(--text-primary)] mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
