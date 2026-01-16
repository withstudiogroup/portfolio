"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "웹 서비스 신규 구축",
    description:
      "기획부터 배포까지 전 과정을 담당합니다. 처음 시작하는 서비스도 운영 경험을 바탕으로 확장 가능한 구조로 설계합니다.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "데이터 수집/분석 자동화",
    description:
      "반복적인 데이터 수집을 자동화하고, 분석 파이프라인을 구축합니다. 크롤링, ETL, 대시보드까지 데이터 업무 전반을 다룹니다.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "관리자 대시보드",
    description:
      "비즈니스에 필요한 정보를 한눈에 볼 수 있는 대시보드를 만듭니다. 실시간 모니터링, 리포트 자동화, 권한 관리까지.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "외부 API 연동",
    description:
      "결제, 배송, 알림 등 다양한 외부 서비스와의 연동을 담당합니다. 안정적인 에러 처리와 재시도 로직까지 고려합니다.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">What I Do</span>
          <h2 className="mb-4">이런 프로젝트에 강합니다</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            운영 경험을 바탕으로
            <br className="hidden sm:block" />
            실제로 잘 동작하는 시스템을 만듭니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-hover)] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-center flex-shrink-0 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
