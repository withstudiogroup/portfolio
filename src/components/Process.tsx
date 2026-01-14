"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "요구사항 파악",
    description:
      "단순히 요청받은 기능만 구현하지 않습니다. 왜 필요한지, 어떻게 사용될지 충분히 이해한 후 최적의 방법을 제안합니다.",
  },
  {
    step: "02",
    title: "주기적 공유",
    description:
      "주 1~2회 진행 상황을 공유합니다. 완성 후 \"생각한 것과 다르다\"는 피드백이 없도록 중간중간 확인받습니다.",
  },
  {
    step: "03",
    title: "동일 담당자 유지",
    description:
      "프로젝트를 진행한 사람이 유지보수까지 담당합니다. 담당자가 바뀌어 처음부터 설명해야 하는 일이 없습니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[var(--bg-elevated)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">How We Work</span>
          <h2 className="mb-4">협업 방식</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            소수 정예로 움직이기 때문에
            <br className="hidden sm:block" />
            빠르고 유연하게 대응합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-6xl font-medium text-[var(--text-muted)] opacity-50 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-16">
                  <svg
                    className="w-full text-[var(--border-subtle)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
