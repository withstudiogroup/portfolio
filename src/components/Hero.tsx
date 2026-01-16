"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[var(--nav-height)] pb-12">
      <div className="container text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="status-badge mb-8"
        >
          프로젝트 문의 가능
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="block text-gradient">
            From Dev to Live
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          "일단 돌아가게만" 만드는 게 아니라,
          <br className="hidden sm:block" />
          운영하면서 생길 문제까지 미리 고려해서 개발합니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-primary">
            문의하기
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a href="#projects" className="btn-secondary">
            프로젝트 보기
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-1">
                1인
              </p>
              <p className="text-[var(--text-tertiary)] text-sm">
                직접 대응
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-1">
                5년+
              </p>
              <p className="text-[var(--text-tertiary)] text-sm">
                개발 경력
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-1">
                빠른
              </p>
              <p className="text-[var(--text-tertiary)] text-sm">
                커뮤니케이션
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-1">
                동일
              </p>
              <p className="text-[var(--text-tertiary)] text-sm">
                담당자 유지
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
