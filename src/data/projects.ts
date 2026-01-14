export interface Feature {
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  overview: string;
  role: string;
  duration: string;
  features: Feature[];
  results?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "hotel-reservation",
    title: "호텔 예약 사이트",
    description:
      "실시간 객실 조회부터 결제까지, 완전한 호텔 예약 시스템을 처음부터 구축했습니다.",
    thumbnail: "/images/projects/hotel/thumbnail.jpg",
    images: [
      "/images/projects/hotel/feature-1.jpg",
      "/images/projects/hotel/feature-2.jpg",
    ],
    tags: ["예약 시스템", "결제 연동"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    featured: true,
    order: 1,
    overview:
      "호텔 운영자와 고객 모두를 위한 예약 플랫폼입니다. 실시간 객실 가용성 확인, 다양한 결제 수단 지원, 예약 관리 대시보드까지 전체 시스템을 설계하고 구현했습니다.",
    role: "풀스택 개발",
    duration: "3개월",
    features: [
      {
        title: "실시간 객실 조회",
        description:
          "Redis 캐싱을 활용한 실시간 객실 가용성 확인 및 동시 예약 충돌 방지",
      },
      {
        title: "결제 시스템 통합",
        description:
          "카드 결제, 계좌이체 등 다양한 결제 수단 연동 및 안전한 결제 프로세스",
      },
      {
        title: "관리자 대시보드",
        description:
          "예약 현황, 매출 통계, 고객 관리를 위한 직관적인 관리 도구",
      },
    ],
    results: [
      "예약 완료율 40% 향상",
      "관리 업무 시간 60% 단축",
      "모바일 예약 비중 70% 달성",
    ],
  },
  {
    id: "2",
    slug: "photo-studio",
    title: "사진 스튜디오 홈페이지",
    description:
      "포트폴리오 갤러리와 예약 기능을 갖춘 프리미엄 사진 스튜디오 웹사이트입니다.",
    thumbnail: "/images/projects/studio/thumbnail.jpg",
    images: [
      "/images/projects/studio/feature-1.jpg",
      "/images/projects/studio/feature-2.jpg",
    ],
    tags: ["포트폴리오", "예약 시스템"],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    featured: true,
    order: 2,
    overview:
      "사진작가의 작품을 효과적으로 보여주면서 촬영 예약까지 이어지는 웹사이트입니다. 고해상도 이미지 최적화와 부드러운 애니메이션으로 프리미엄 느낌을 살렸습니다.",
    role: "프론트엔드 개발",
    duration: "2개월",
    features: [
      {
        title: "고성능 갤러리",
        description:
          "이미지 지연 로딩과 최적화로 빠른 로딩 속도와 부드러운 UX 제공",
      },
      {
        title: "촬영 예약 시스템",
        description:
          "날짜/시간 선택, 촬영 유형 선택, 자동 확인 메일 발송까지 원스톱 예약",
      },
      {
        title: "CMS 연동",
        description:
          "비개발자도 쉽게 작품을 업로드하고 관리할 수 있는 콘텐츠 관리 시스템",
      },
    ],
    results: [
      "페이지 로드 시간 2초 이내",
      "문의 전환율 25% 증가",
      "모바일 이탈률 35% 감소",
    ],
  },
  {
    id: "3",
    slug: "business-dashboard",
    title: "비즈니스 분석 대시보드",
    description:
      "여러 데이터 소스를 통합하여 핵심 지표를 실시간으로 모니터링하는 대시보드입니다.",
    thumbnail: "/images/projects/dashboard/thumbnail.jpg",
    images: [
      "/images/projects/dashboard/feature-1.jpg",
      "/images/projects/dashboard/feature-2.jpg",
    ],
    tags: ["데이터 시각화", "자동화"],
    techStack: ["React", "Python", "PostgreSQL", "D3.js", "Airflow"],
    featured: true,
    order: 3,
    overview:
      "흩어진 데이터를 한 곳에서 볼 수 있는 통합 대시보드입니다. 매출, 사용자 행동, 마케팅 성과 등을 실시간으로 모니터링하고 자동 리포트를 생성합니다.",
    role: "데이터 + 프론트엔드",
    duration: "4개월",
    features: [
      {
        title: "데이터 파이프라인",
        description:
          "여러 소스(DB, API, 스프레드시트)의 데이터를 자동으로 수집하고 정제",
      },
      {
        title: "실시간 시각화",
        description:
          "D3.js 기반의 인터랙티브 차트로 복잡한 데이터를 직관적으로 표현",
      },
      {
        title: "자동 리포트",
        description:
          "일간/주간 리포트를 자동 생성하여 이메일로 발송하는 자동화 시스템",
      },
    ],
    results: [
      "리포트 작성 시간 주 8시간 → 0시간",
      "데이터 조회 시간 5분 → 실시간",
      "의사결정 속도 50% 향상",
    ],
  },
  {
    id: "4",
    slug: "competitor-crawler",
    title: "경쟁사 자동 크롤링 시스템",
    description:
      "경쟁사 가격과 상품 정보를 자동으로 수집하여 비교 분석하는 시스템입니다.",
    thumbnail: "/images/projects/crawler/thumbnail.jpg",
    images: [
      "/images/projects/crawler/feature-1.jpg",
      "/images/projects/crawler/feature-2.jpg",
    ],
    tags: ["데이터 수집", "자동화"],
    techStack: ["Python", "Selenium", "PostgreSQL", "FastAPI", "Docker"],
    featured: true,
    order: 4,
    overview:
      "수작업으로 경쟁사 정보를 확인하던 업무를 자동화했습니다. 매일 자동으로 데이터를 수집하고, 가격 변동 시 알림을 보내며, 히스토리 분석도 가능합니다.",
    role: "백엔드 + 데이터",
    duration: "3개월",
    features: [
      {
        title: "지능형 크롤러",
        description:
          "사이트 구조 변경에 대응하는 안정적인 크롤링 및 우회 로직 구현",
      },
      {
        title: "가격 변동 알림",
        description:
          "경쟁사 가격 변동 감지 시 실시간 알림 발송 (이메일, 슬랙)",
      },
      {
        title: "트렌드 분석",
        description:
          "수집된 히스토리 데이터를 기반으로 가격 추이 및 패턴 분석",
      },
    ],
    results: [
      "수작업 모니터링 시간 100% 절감",
      "가격 대응 속도 24시간 → 1시간 이내",
      "경쟁력 있는 가격 유지로 매출 15% 증가",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order);
}
