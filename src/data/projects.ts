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
    slug: "nolreport",
    title: "비즈니스 분석 대시보드",
    description:
      "상권 분석, 가격 비교, 일정/성과 관리를 한 곳에서. 1년 이상 심혈을 기울여 만든 실서비스입니다.",
    thumbnail: "/images/projects/nolreport/thumbnail.jpg",
    images: [],
    tags: ["데이터 분석", "자동화", "실서비스"],
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "Redis"],
    liveUrl: "https://nolreport.net",
    featured: true,
    order: 1,
    overview:
      "실제 비즈니스 운영에 필요한 모든 데이터를 한 곳에서 볼 수 있는 통합 대시보드입니다. 상권 분석 리포트, 경쟁사 자동 크롤링을 통한 가격 비교, 일정 관리, 성과 관리 기능을 제공합니다. 1년 이상의 개발 기간과 지속적인 개선을 거쳐 현재 실서비스로 운영 중입니다.",
    role: "풀스택 개발",
    duration: "1년+",
    features: [
      {
        title: "상권 분석 리포트",
        description:
          "지역별 상권 데이터를 수집하고 분석하여 인사이트를 제공하는 자동 리포트 시스템",
      },
      {
        title: "자동 크롤링 가격 비교",
        description:
          "경쟁사 가격을 자동으로 수집하여 실시간 비교 분석, 가격 변동 알림 제공",
      },
      {
        title: "일정 및 성과 관리",
        description:
          "업무 일정 관리와 KPI 기반 성과 추적을 통한 효율적인 비즈니스 운영 지원",
      },
    ],
    results: [
      "실서비스 운영 중",
      "데이터 기반 의사결정 지원",
      "반복 업무 자동화로 시간 절감",
    ],
  },
  {
    id: "2",
    slug: "hotel-reservation",
    title: "럭셔리 호텔 예약 사이트",
    description:
      "파라다이스시티를 레퍼런스로 한 프리미엄 호텔 예약 시스템. 실시간 객실 조회부터 결제까지.",
    thumbnail: "/images/projects/hotel/thumbnail.jpg",
    images: [],
    tags: ["예약 시스템", "결제 연동"],
    techStack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    featured: true,
    order: 2,
    overview:
      "파라다이스시티(p-city.com)를 레퍼런스로 한 고급 호텔 예약 웹사이트입니다. 세련된 UI/UX와 직관적인 예약 시스템을 통해 사용자에게 프리미엄 경험을 제공합니다. 객실 목록, 다이닝, 부대시설, 특별 오퍼 등 호텔 운영에 필요한 전체 기능을 구현했습니다.",
    role: "풀스택 개발",
    duration: "3개월",
    features: [
      {
        title: "실시간 객실 조회 및 예약",
        description:
          "날짜별 객실 가용성 확인과 동시 예약 충돌 방지를 위한 실시간 시스템",
      },
      {
        title: "프리미엄 UI/UX",
        description:
          "Framer Motion 애니메이션과 세련된 디자인으로 럭셔리 브랜드 경험 제공",
      },
      {
        title: "통합 콘텐츠 관리",
        description:
          "객실, 다이닝, 시설, 이벤트 등 호텔 콘텐츠 통합 관리 시스템",
      },
    ],
  },
  {
    id: "3",
    slug: "luxury-resort",
    title: "럭셔리 리조트 홈페이지",
    description:
      "Velaa Private Island를 참고한 감성적인 리조트 홈페이지. 풀스크린 비주얼과 우아한 인터랙션.",
    thumbnail: "/images/projects/resort/thumbnail.jpg",
    images: [],
    tags: ["브랜딩", "애니메이션"],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    featured: true,
    order: 3,
    overview:
      "Velaa Private Island 웹사이트를 참고한 럭셔리 리조트 홈페이지입니다. 풀스크린 히어로 섹션, 감성적인 타이포그래피, 고품질 이미지 중심 디자인, 부드러운 스크롤 애니메이션으로 미니멀하고 우아한 경험을 제공합니다.",
    role: "프론트엔드 개발",
    duration: "2개월",
    features: [
      {
        title: "풀스크린 히어로 슬라이드쇼",
        description:
          "감성적인 카피와 함께하는 풀스크린 이미지 슬라이드쇼로 강렬한 첫인상",
      },
      {
        title: "부드러운 스크롤 애니메이션",
        description:
          "섹션별 자연스러운 페이드인/아웃과 패럴랙스 효과로 몰입감 제공",
      },
      {
        title: "반응형 프리미엄 디자인",
        description:
          "모바일부터 데스크톱까지 일관된 럭셔리 브랜드 경험 유지",
      },
    ],
  },
  {
    id: "4",
    slug: "tech-store",
    title: "프리미엄 전자제품 스토어",
    description:
      "Apple Korea를 레퍼런스로 한 전자제품 판매 사이트. 제품 중심의 깔끔한 레이아웃.",
    thumbnail: "/images/projects/techstore/thumbnail.jpg",
    images: [],
    tags: ["이커머스", "제품 쇼케이스"],
    techStack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    featured: true,
    order: 4,
    overview:
      "Apple Korea Mac 페이지를 레퍼런스로 한 프리미엄 전자제품 온라인 스토어입니다. 제품을 돋보이게 하는 깔끔한 레이아웃, 상세한 스펙 비교, 부드러운 애니메이션으로 프리미엄 쇼핑 경험을 제공합니다.",
    role: "프론트엔드 개발",
    duration: "2개월",
    features: [
      {
        title: "제품 중심 레이아웃",
        description:
          "넓은 여백과 고해상도 이미지로 제품을 돋보이게 하는 Apple 스타일 디자인",
      },
      {
        title: "상세 스펙 비교",
        description:
          "여러 제품의 사양을 나란히 비교할 수 있는 인터랙티브 비교 기능",
      },
      {
        title: "부드러운 인터랙션",
        description:
          "스크롤 기반 애니메이션과 호버 효과로 생동감 있는 UX 제공",
      },
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
