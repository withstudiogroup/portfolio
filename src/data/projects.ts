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
    slug: "photo-studio",
    title: "프리미엄 사진 스튜디오",
    description:
      "갤러리, 서비스 안내, 가격표, 리뷰까지. 사진 스튜디오 운영에 필요한 모든 기능을 담은 웹사이트.",
    thumbnail: "/images/projects/studio/thumbnail.jpg",
    images: [],
    tags: ["포트폴리오", "예약"],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Swiper", "Tailwind CSS"],
    liveUrl: "https://studio.withstudiogroup.com",
    featured: true,
    order: 2,
    overview:
      "프리미엄 사진 스튜디오를 위한 웹사이트입니다. 풀스크린 히어로 슬라이드쇼, 작품 갤러리, 서비스별 상세 안내, 가격표, 고객 리뷰 섹션을 포함합니다.",
    role: "풀스택 개발",
    duration: "2개월",
    features: [
      {
        title: "풀스크린 갤러리",
        description:
          "부드러운 이미지 슬라이드와 패럴랙스 효과로 작품을 돋보이게 표현",
      },
      {
        title: "서비스 & 가격 안내",
        description:
          "촬영 종류별 상세 설명과 투명한 가격 정책",
      },
      {
        title: "고객 리뷰",
        description:
          "실제 고객 후기를 보여주는 리뷰 섹션",
      },
    ],
  },
  {
    id: "3",
    slug: "hotel-reservation",
    title: "호텔 예약 사이트",
    description:
      "객실 조회부터 예약까지. 호텔 운영에 필요한 전체 기능을 구현한 예약 시스템.",
    thumbnail: "/images/projects/hotel/thumbnail.jpg",
    images: [],
    tags: ["예약 시스템", "결제"],
    techStack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://hotel.withstudiogroup.com",
    featured: true,
    order: 3,
    overview:
      "고급 호텔 예약 웹사이트입니다. 객실 목록, 다이닝, 부대시설, 특별 오퍼 등 호텔 운영에 필요한 전체 기능을 구현했습니다.",
    role: "풀스택 개발",
    duration: "3개월",
    features: [
      {
        title: "실시간 객실 조회 및 예약",
        description:
          "날짜별 객실 가용성 확인과 예약 시스템",
      },
      {
        title: "프리미엄 UI/UX",
        description:
          "애니메이션과 세련된 디자인으로 럭셔리 브랜드 경험 제공",
      },
      {
        title: "통합 콘텐츠 관리",
        description:
          "객실, 다이닝, 시설, 이벤트 등 콘텐츠 통합 관리",
      },
    ],
  },
  {
    id: "4",
    slug: "luxury-resort",
    title: "리조트 홈페이지",
    description:
      "풀스크린 비주얼과 우아한 인터랙션으로 브랜드 가치를 전달하는 리조트 홈페이지.",
    thumbnail: "/images/projects/resort/thumbnail.jpg",
    images: [],
    tags: ["브랜딩", "애니메이션"],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://resort.withstudiogroup.com",
    featured: true,
    order: 4,
    overview:
      "럭셔리 리조트 홈페이지입니다. 풀스크린 히어로 섹션, 감성적인 타이포그래피, 고품질 이미지 중심 디자인, 부드러운 스크롤 애니메이션으로 우아한 경험을 제공합니다.",
    role: "프론트엔드 개발",
    duration: "2개월",
    features: [
      {
        title: "풀스크린 히어로 슬라이드쇼",
        description:
          "감성적인 카피와 함께하는 풀스크린 이미지 슬라이드쇼",
      },
      {
        title: "부드러운 스크롤 애니메이션",
        description:
          "섹션별 자연스러운 페이드인/아웃과 패럴랙스 효과",
      },
      {
        title: "반응형 디자인",
        description:
          "모바일부터 데스크톱까지 일관된 브랜드 경험",
      },
    ],
  },
  {
    id: "5",
    slug: "shop-site",
    title: "전자제품 쇼핑몰",
    description:
      "노트북, 스마트폰, 태블릿 등 프리미엄 전자제품을 소개하는 제품 쇼케이스 사이트.",
    thumbnail: "/images/projects/shop/thumbnail.jpg",
    images: [],
    tags: ["이커머스", "제품 쇼케이스"],
    techStack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://shop.withstudiogroup.com",
    featured: true,
    order: 5,
    overview:
      "프리미엄 전자제품 리테일 사이트입니다. 제품 갤러리, 상세 스펙, 트레이드인 프로그램, 액세서리 추천 등 제품 판매에 필요한 기능을 구현했습니다.",
    role: "프론트엔드 개발",
    duration: "2개월",
    features: [
      {
        title: "제품 갤러리",
        description:
          "고품질 이미지와 상세 스펙으로 제품의 가치를 전달",
      },
      {
        title: "트레이드인 프로그램",
        description:
          "기존 기기 보상판매 시스템으로 고객 전환율 향상",
      },
      {
        title: "액세서리 추천",
        description:
          "제품별 호환 액세서리 추천으로 추가 구매 유도",
      },
    ],
  },
  {
    id: "6",
    slug: "photopick",
    title: "사진 스튜디오 예약 플랫폼",
    description:
      "전국 프리미엄 사진 스튜디오를 검색하고 비교 예약할 수 있는 플랫폼.",
    thumbnail: "/images/projects/photopick/thumbnail.jpg",
    images: [],
    tags: ["플랫폼", "예약 시스템", "검색"],
    techStack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://photopick.withstudiogroup.com",
    featured: true,
    order: 6,
    overview:
      "사진 스튜디오 예약 플랫폼입니다. 프로필, 웨딩, 가족, 증명사진 등 다양한 촬영 카테고리별로 스튜디오를 검색하고 비교 예약할 수 있습니다.",
    role: "풀스택 개발",
    duration: "3개월",
    features: [
      {
        title: "스튜디오 검색 & 필터",
        description:
          "지역, 가격, 시설, 평점 등 다양한 조건으로 스튜디오 검색",
      },
      {
        title: "실시간 예약",
        description:
          "날짜/시간 선택부터 결제까지 원스톱 예약 시스템",
      },
      {
        title: "리뷰 & 평점",
        description:
          "실제 이용 고객의 후기로 신뢰도 높은 선택 지원",
      },
    ],
  },
  {
    id: "7",
    slug: "photopick-v2",
    title: "PhotoPick V2 (풀스택)",
    description:
      "어드민 대시보드, 스튜디오 파트너 관리, 슈퍼어드민 기능까지 갖춘 풀스택 버전.",
    thumbnail: "/images/projects/photopick-v2/thumbnail.jpg",
    images: [],
    tags: ["풀스택", "어드민", "Supabase"],
    techStack: ["Next.js", "TypeScript", "Supabase", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://photopick-v2.withstudiogroup.com",
    featured: true,
    order: 7,
    overview:
      "PhotoPick의 풀스택 버전입니다. Supabase 기반 인증, 스튜디오 파트너용 어드민 대시보드, 플랫폼 슈퍼어드민 패널 등 운영에 필요한 전체 기능을 구현했습니다.",
    role: "풀스택 개발",
    duration: "4개월",
    features: [
      {
        title: "파트너 어드민",
        description:
          "예약 관리, 상품 관리, 리뷰 관리, 통계 대시보드",
      },
      {
        title: "슈퍼어드민",
        description:
          "배너 관리, 카테고리 관리, 전체 플랫폼 운영 기능",
      },
      {
        title: "Supabase 연동",
        description:
          "인증, 데이터베이스, 스토리지 등 백엔드 인프라 통합",
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
