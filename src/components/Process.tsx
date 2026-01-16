"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "주기적 진행 공유",
    description:
      "주 1~2회 진행 상황을 공유합니다. 슬랙, 노션 등 원하시는 툴로 소통하며, 중간중간 확인받아 완성 후 \"생각한 것과 다르다\"는 일이 없도록 합니다.",
  },
  {
    step: "02",
    title: "기획 의도 파악 후 착수",
    description:
      "단순히 요청받은 기능만 구현하지 않습니다. 왜 필요한지, 어떻게 사용될지 충분히 이해하고 요구사항을 재확인한 후 개발을 시작합니다.",
  },
  {
    step: "03",
    title: "유지보수 직접 대응",
    description:
      "프로젝트 종료 후에도 직접 대응합니다. 사업 초기 상시 개발자 채용 전까지 운영 및 유지보수 위탁도 가능합니다.",
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
          <span className="section-label mx-auto">How I Work</span>
          <h2 className="mb-4">협업 방식</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            1인 체제로 움직이기 때문에
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
