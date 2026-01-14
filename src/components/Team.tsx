"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    role: "전략 / 데이터분석",
    experience: "영업 5년 + 데이터분석 7년",
    skills: ["Python", "SQL"],
  },
  {
    role: "백엔드 개발",
    experience: "5년",
    skills: ["Node.js", "Python"],
  },
  {
    role: "프론트엔드 개발",
    experience: "5년",
    skills: ["React"],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Team Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="mb-6">팀 소개</h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p className="text-lg leading-relaxed">
                저희는 개발만 하고 끝나는 팀이 아닙니다.
              </p>
              <p className="leading-relaxed">
                실제 서비스를 운영하며 겪은 현장의 문제들—예상치 못한 트래픽,
                사용자 불만, 데이터 누락—을 직접 해결해본 경험이 있습니다.
              </p>
              <p className="leading-relaxed">
                소수 정예로 움직이기 때문에 커뮤니케이션이 빠르고,
                유지보수 요청에도 담당자가 바뀌는 일 없이 직접 대응합니다.
              </p>
            </div>
          </motion.div>

          {/* Right - Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-label">Team</span>
            <h3 className="text-xl font-medium text-[var(--text-primary)] mb-6">
              팀 구성
            </h3>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:border-[var(--border-hover)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-[var(--text-primary)]">
                      {member.role}
                    </h4>
                    <span className="text-sm text-[var(--text-tertiary)]">
                      {member.experience}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
