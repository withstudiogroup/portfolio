# Portfolio Site PRD (Product Requirements Document)

## 1. 개요

### 1.1 프로젝트 목적
풀스택 웹 개발자로서의 전문성을 어필하고, 다양한 클라이언트에게 신뢰를 줄 수 있는 **세련된 포트폴리오 웹사이트** 구축

### 1.2 핵심 가치
- **미니멀 & 세련된 디자인**: 불필요한 요소 없이 깔끔하고 고급스러운 느낌
- **다크 모드 기반**: 어두운 배경에 포인트 컬러로 프리미엄 감성
- **프로젝트 중심**: 실제 작업물이 돋보이도록 구성

### 1.3 타겟 오디언스
- 기업/스타트업 CTO, PM
- 외주 프로젝트를 찾는 에이전시
- 협업을 원하는 다른 개발자/디자이너

---

## 2. 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Vercel |
| Font | Pretendard (한글) + Inter (영문) |

---

## 3. 디자인 시스템

### 3.1 컬러 팔레트

```
Background (Dark)
├── Primary:   #0A0A0A (깊은 블랙)
├── Secondary: #141414 (카드 배경)
└── Tertiary:  #1F1F1F (호버 상태)

Text
├── Primary:   #FFFFFF (제목)
├── Secondary: #A1A1A1 (본문)
└── Muted:     #525252 (보조 텍스트)

Accent
├── Primary:   #8B5CF6 (퍼플 - 창의성, 혁신)
├── Hover:     #A78BFA (밝은 퍼플)
└── Subtle:    #8B5CF620 (퍼플 20% 투명도)

Gradient
├── Hero Glow:    radial-gradient(#8B5CF6 → transparent)
└── Accent Grad:  linear-gradient(135deg, #8B5CF6 → #3B82F6)
```

### 3.2 타이포그래피

```
Heading (Pretendard)
├── H1: 4rem / 700 / -0.02em (Hero)
├── H2: 2.5rem / 600 / -0.01em (Section)
└── H3: 1.5rem / 600 (Card Title)

Body (Pretendard)
├── Large:  1.125rem / 400 / 1.7
├── Base:   1rem / 400 / 1.6
└── Small:  0.875rem / 400 / 1.5

Code (JetBrains Mono)
└── Mono: 0.875rem / 400
```

### 3.3 레이아웃 원칙

- **Max Width**: 1200px (컨텐츠 영역)
- **Grid**: 12 column (반응형)
- **Spacing Scale**: 4px 기반 (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Border Radius**: 8px (카드), 4px (버튼), 9999px (태그)

---

## 4. 페이지 구조

### 4.1 싱글 페이지 구성

```
┌─────────────────────────────────────────────────┐
│  Navigation (Fixed, Blur Background)            │
│  [Logo]                    [Projects] [Contact] │
├─────────────────────────────────────────────────┤
│                                                 │
│  Hero Section                                   │
│  ┌─────────────────────────────────────────┐   │
│  │  안녕하세요,                              │   │
│  │  풀스택 개발자 [이름]입니다.               │   │
│  │                                          │   │
│  │  [한 줄 소개 - 차별화 포인트]              │   │
│  │                                          │   │
│  │  [프로젝트 보기 ↓]    [연락하기 →]        │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Projects Section                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Project │ │ Project │ │ Project │          │
│  │   01    │ │   02    │ │   03    │          │
│  │         │ │         │ │         │          │
│  │ [Image] │ │ [Image] │ │ [Image] │          │
│  │ Title   │ │ Title   │ │ Title   │          │
│  │ Tags    │ │ Tags    │ │ Tags    │          │
│  └─────────┘ └─────────┘ └─────────┘          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  About Section (Optional)                       │
│  ┌─────────────────────────────────────────┐   │
│  │  기술 스택 / 경력 요약 / 철학             │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Contact Section                                │
│  ┌─────────────────────────────────────────┐   │
│  │  프로젝트가 있으신가요?                    │   │
│  │  함께 이야기 나눠보세요.                   │   │
│  │                                          │   │
│  │  [Email]  [GitHub]  [LinkedIn]           │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
├─────────────────────────────────────────────────┤
│  Footer                                         │
│  © 2025 [이름]. All rights reserved.           │
└─────────────────────────────────────────────────┘
```

### 4.2 프로젝트 상세 페이지 (개별)

```
/projects/[slug]

┌─────────────────────────────────────────────────┐
│  ← Back to Projects                             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Project Hero                                   │
│  ┌─────────────────────────────────────────┐   │
│  │  [프로젝트명]                             │   │
│  │  [한 줄 설명]                             │   │
│  │  [Tech Stack Tags]                       │   │
│  │                                          │   │
│  │  [Live Demo ↗]    [GitHub ↗]            │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  [Full-width Screenshot / Video]                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Overview                                       │
│  - 프로젝트 배경                                │
│  - 해결한 문제                                  │
│  - 나의 역할                                    │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Key Features (스크린샷과 함께)                  │
│  ┌─────────┐ ┌─────────────────────────────┐   │
│  │ [Image] │ │ Feature 1 설명               │   │
│  └─────────┘ └─────────────────────────────┘   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Tech Stack Details                             │
│  - 사용 기술 상세 설명                          │
│  - 기술 선택 이유                               │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Results / Impact (있다면)                      │
│  - 성과 지표                                    │
│  - 클라이언트 피드백                            │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Other Projects                                 │
│  [← Prev Project]        [Next Project →]      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 5. 인터랙션 & 애니메이션

### 5.1 Micro-interactions

| 요소 | 인터랙션 | 효과 |
|------|---------|------|
| Navigation | Scroll | 블러 배경 + 경계선 나타남 |
| Project Card | Hover | Scale(1.02) + 그림자 강화 |
| Button | Hover | 배경색 밝아짐 + 미세한 Scale |
| Links | Hover | 밑줄 애니메이션 (좌→우) |
| Tags | Hover | 배경색 변화 |

### 5.2 Page Transitions

| 전환 | 애니메이션 |
|------|-----------|
| Section 진입 | Fade Up (opacity + translateY) |
| Project Card 진입 | Stagger (순차적으로 나타남) |
| Page 전환 | Fade (부드러운 전환) |

### 5.3 Scroll Animations

- Hero 텍스트: 스크롤 시 살짝 패럴랙스
- 프로젝트 카드: Viewport 진입 시 Fade Up
- 숫자/통계: Count Up 애니메이션 (있을 경우)

---

## 6. 반응형 디자인

### 6.1 Breakpoints

```
Mobile:  < 640px   (1 column)
Tablet:  640-1024px (2 columns)
Desktop: > 1024px   (3 columns)
```

### 6.2 모바일 우선 고려사항

- 햄버거 메뉴 (간결한 슬라이드 메뉴)
- 터치 친화적인 버튼 크기 (최소 44px)
- 이미지 최적화 (Next.js Image 활용)
- 세로 스크롤 중심 레이아웃

---

## 7. SEO & 성능

### 7.1 SEO 최적화

- Semantic HTML (header, main, section, article)
- Meta tags (title, description, og:image)
- JSON-LD 구조화 데이터
- Sitemap.xml 자동 생성
- robots.txt

### 7.2 성능 목표

| 지표 | 목표 |
|------|------|
| Lighthouse Performance | > 90 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### 7.3 최적화 전략

- Next.js Image 컴포넌트 (WebP, lazy loading)
- Font Subsetting (한글 최적화)
- Code Splitting (자동)
- Static Generation (가능한 페이지)

---

## 8. 콘텐츠 관리

### 8.1 프로젝트 데이터 구조

```typescript
interface Project {
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

  // 상세 정보
  overview: string;
  role: string;
  duration: string;
  features: Feature[];
  results?: string[];
}

interface Feature {
  title: string;
  description: string;
  image?: string;
}
```

### 8.2 데이터 관리 방식

**TypeScript 파일 기반** (코드 직접 수정)

```
src/
└── data/
    └── projects.ts    ← 프로젝트 추가/수정은 이 파일만 편집
```

**프로젝트 추가 방법:**
```typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: "1",
    slug: "project-name",
    title: "프로젝트 제목",
    description: "프로젝트 한 줄 설명",
    thumbnail: "/images/projects/project-name/thumbnail.png",
    tags: ["Next.js", "TypeScript"],
    // ... 나머지 필드
  },
  // 새 프로젝트는 여기에 추가
];
```

**이미지 관리:**
```
public/
└── images/
    └── projects/
        ├── project-1/
        │   ├── thumbnail.png
        │   ├── feature-1.png
        │   └── feature-2.png
        └── project-2/
            └── ...
```

---

## 9. 개발 로드맵

### Phase 1: 기초 구축 (MVP)
- [ ] Next.js 프로젝트 초기 설정
- [ ] Tailwind CSS 설정 + 컬러 팔레트
- [ ] 기본 레이아웃 (Navigation, Footer)
- [ ] Hero 섹션
- [ ] Projects 섹션 (카드 그리드)
- [ ] Contact 섹션
- [ ] 반응형 대응

### Phase 2: 상세 페이지
- [ ] 프로젝트 상세 페이지 템플릿
- [ ] 동적 라우팅 설정
- [ ] 페이지 전환 애니메이션

### Phase 3: 인터랙션 강화
- [ ] Framer Motion 애니메이션
- [ ] Scroll 기반 애니메이션
- [ ] Hover 효과 정교화

### Phase 4: 최적화 & 배포
- [ ] SEO 설정
- [ ] 이미지 최적화
- [ ] 성능 테스트
- [ ] Vercel 배포

---

## 10. 참고 디자인 레퍼런스

### 영감을 줄 수 있는 사이트들

1. **미니멀 다크 테마**
   - https://brittanychiang.com
   - https://leerob.io
   - https://delba.dev

2. **인터랙티브 포트폴리오**
   - https://www.joshwcomeau.com
   - https://rauno.me

3. **프로젝트 중심**
   - https://www.sj.land
   - https://www.dennissnellenberg.com

---

## 11. 성공 지표

| 지표 | 목표 |
|------|------|
| 페이지 로드 시간 | < 3초 |
| 이탈률 | < 50% |
| 평균 체류 시간 | > 2분 |
| 문의 전환율 | 측정 시작 |

---

## Appendix: 향후 확장 가능 기능

- [ ] 블로그 섹션
- [ ] 다국어 지원 (한/영)
- [ ] 라이트/다크 모드 토글
- [ ] 방문자 분석 (Vercel Analytics)
- [ ] 문의 폼 (이메일 연동)
- [ ] 프로젝트 필터링 (기술 스택별)

---

*문서 버전: 1.1*
*작성일: 2025-01-13*
*수정: 악센트 컬러 퍼플 확정, 프로젝트 관리 방식 코드 직접 수정으로 확정*
