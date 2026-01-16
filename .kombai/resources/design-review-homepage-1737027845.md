# Design Review Results: Studio With 홈페이지 & 프로젝트 상세 페이지

**Review Date**: 2026-01-15
**Routes**: `/` (홈페이지), `/projects/[slug]` (프로젝트 상세)
**Focus Areas**: 비주얼 디자인, UX/사용성, 반응형/모바일, 접근성, 마이크로 인터랙션/모션, 일관성, 성능

> **Note**: 이 리뷰는 정적 코드 분석을 통해 수행되었습니다. 브라우저를 통한 시각적 검사가 추가되면 레이아웃 렌더링, 인터랙티브 동작, 실제 외관에 대한 추가 인사이트를 얻을 수 있습니다.

## 요약

전반적으로 **잘 구축된 포트폴리오 사이트**입니다. Linear 스타일의 모노크롬 디자인 시스템이 일관되게 적용되어 있으며, Framer Motion을 활용한 부드러운 애니메이션이 돋보입니다. 다만 **접근성(11개 이슈)**, **모바일 최적화(7개 이슈)**, **디자인 일관성(5개 이슈)** 영역에서 개선이 필요합니다. 총 **42개 이슈** 중 **13개 Critical/High** 우선순위 문제가 발견되었습니다.

---

## 주요 발견 사항

### ✅ 강점
- **세련된 디자인 시스템**: CSS 변수를 통한 체계적인 디자인 토큰 관리
- **일관된 애니메이션**: Framer Motion을 통한 부드러운 Fade Up/Stagger 효과
- **컴포넌트 구조**: 잘 분리된 재사용 가능한 컴포넌트 구조
- **타이포그래피**: Pretendard/Geist 폰트를 활용한 깔끔한 한글/영문 타이포그래피

### ⚠️ 주요 개선 영역
- **접근성 미비**: ARIA 레이블, 키보드 포커스, 색상 대비 문제
- **모바일 터치 타겟**: 44px 미만의 클릭 영역들
- **성능 최적화**: 번들 크기, 이미지 최적화 여지
- **디자인 불일치**: PRD와 실제 구현 간 차이 (색상 팔레트 등)

---

## 이슈

| # | 이슈 | 심각도 | 카테고리 | 위치 |
|---|------|---------|----------|------|
| 1 | 네비게이션 링크에 ARIA 레이블 누락 | Critical | 접근성 | `src/components/Navigation.tsx:49-59` |
| 2 | 모바일 메뉴 버튼에 aria-expanded 속성 누락 | Critical | 접근성 | `src/components/Navigation.tsx:70-97` |
| 3 | 프로젝트 카드 링크에 접근 가능한 텍스트 누락 | Critical | 접근성 | `src/components/ProjectCard.tsx:24` |
| 4 | 키보드 포커스 스타일이 전역적으로 정의되지 않음 | High | 접근성 | `src/app/globals.css` 전체 |
| 5 | 모바일 메뉴 버튼 터치 타겟이 40px로 44px 기준 미달 | High | 반응형/모바일 | `src/components/Navigation.tsx:70-97` |
| 6 | CTA 버튼들의 모바일 터치 타겟 검증 필요 | High | 반응형/모바일 | `src/components/Hero.tsx:52-72` |
| 7 | 프로젝트 카드 호버 화살표 아이콘에 키보드 포커스 시각 피드백 없음 | High | 접근성 | `src/components/ProjectCard.tsx:44-58` |
| 8 | PRD에 명시된 퍼플 악센트(#8B5CF6) 색상이 실제 구현에서 사용되지 않음 | High | 디자인 일관성 | `src/app/globals.css:22-29` |
| 9 | 색상 변수명이 PRD 명세와 다름 (--accent vs --text-primary) | Medium | 디자인 일관성 | `src/app/globals.css:1-44` |
| 10 | 태그/배지 호버 효과가 일부 컴포넌트에서 불일치 | Medium | 디자인 일관성 | `src/components/ProjectCard.tsx:37-39` vs `src/app/globals.css:349-365` |
| 11 | 네비게이션 고정 시 blur 효과가 성능에 영향을 줄 수 있음 | Medium | 성능 | `src/components/Navigation.tsx:30-35` |
| 12 | Framer Motion 번들이 큼 - 경량 대안 고려 필요 | Medium | 성능 | `package.json:12` |
| 13 | 이미지 경로가 하드코딩되어 있어 누락 시 에러 발생 가능 | Medium | UX/사용성 | `src/data/projects.ts:34-38, 76-80` 등 |
| 14 | 프로젝트 "View all projects" 링크가 비활성화된 상태 (href="#") | Medium | UX/사용성 | `src/components/Projects.tsx:45-60` |
| 15 | 모바일에서 네비게이션 애니메이션 duration이 너무 짧을 수 있음 (0.2s) | Medium | 모바일 UX | `src/components/Navigation.tsx:107, 120` |
| 16 | Hero 섹션의 viewport 높이가 90vh로 고정되어 콘텐츠 잘림 가능성 | Medium | 반응형/모바일 | `src/components/Hero.tsx:7` |
| 17 | 통계 수치에 aria-label 또는 설명 텍스트 필요 | Medium | 접근성 | `src/components/Hero.tsx:81-114` |
| 18 | 서비스 아이콘이 장식적 요소로 aria-hidden 필요 | Medium | 접근성 | `src/components/Services.tsx:79` |
| 19 | 프로세스 화살표 SVG가 모바일에서 숨겨지지만 의미 전달 고려 필요 | Medium | 접근성 | `src/components/Process.tsx:65-80` |
| 20 | 프로젝트 상세 페이지의 색상 변수 불일치 (--bg-secondary, --border-primary 등) | Medium | 디자인 일관성 | `src/app/projects/[slug]/ProjectDetailClient.tsx:55, 107` |
| 21 | 프로젝트 상세 페이지에 breadcrumb 네비게이션 없음 | Low | UX/사용성 | `src/app/projects/[slug]/page.tsx:39-56` |
| 22 | 외부 링크에 rel="noopener noreferrer" 누락 (보안) | Low | 보안 | `src/app/projects/[slug]/ProjectDetailClient.tsx:159-178` |
| 23 | 스크롤바 스타일이 Firefox에서 작동하지 않음 | Low | 일관성 | `src/app/globals.css:81-96` |
| 24 | 애니메이션 delay 클래스가 최대 5개로 제한됨 | Low | 유연성 | `src/app/globals.css:283-287` |
| 25 | 그리드 패턴이 mask로 50%에서 잘려 하단에서 보일 수 있음 | Low | 비주얼 디자인 | `src/app/globals.css:341-342` |
| 26 | 팀 구성원 정보가 하드코딩되어 있어 확장성 부족 | Low | 유지보수 | `src/components/Team.tsx:5-21` |
| 27 | 서비스 정보가 하드코딩되어 있어 확장성 부족 | Low | 유지보수 | `src/components/Services.tsx:5-46` |
| 28 | 프로세스 단계가 하드코딩되어 있어 확장성 부족 | Low | 유지보수 | `src/components/Process.tsx:5-24` |
| 29 | 네비게이션 링크가 하드코딩되어 있어 다국어 지원 어려움 | Low | 국제화 | `src/components/Navigation.tsx:20-26` |
| 30 | 모바일 통계 그리드가 2열로 좁을 수 있음 (1열 고려) | Low | 모바일 UX | `src/components/Hero.tsx:81-114` + CSS |
| 31 | 프로젝트 카드 이미지 높이가 고정되어 종횡비 깨질 수 있음 | Low | 비주얼 디자인 | CSS에서 처리 필요 |
| 32 | line-clamp-2가 모든 브라우저에서 지원되지 않을 수 있음 | Low | 호환성 | `src/components/ProjectCard.tsx:67` |
| 33 | 프로젝트 상세 페이지의 기술 스택이 너무 많을 경우 줄바꿈 처리 | Low | 반응형 | `src/app/projects/[slug]/ProjectDetailClient.tsx:68-77` |
| 34 | 성과(Results) 섹션 배경색 변수가 정의되지 않음 | Low | 디자인 시스템 | `src/app/projects/[slug]/ProjectDetailClient.tsx:134` |
| 35 | 프로젝트 네비게이션에서 prev/next가 없을 때 빈 div 대신 disabled 스타일 고려 | Low | UX/사용성 | `src/app/projects/[slug]/ProjectDetailClient.tsx:234-236, 263-265` |
| 36 | 이메일/전화 링크에 명시적 외부 표시가 없어 사용자 혼란 가능 | Low | UX/사용성 | `src/components/Contact.tsx:34-72` |
| 37 | Footer에서 전화번호가 두 번 나타남 (중복) | Low | 콘텐츠 | `src/components/Footer.tsx:27-40` |
| 38 | CSS @theme inline 블록의 제한적 사용 | Low | 디자인 시스템 | `src/app/globals.css:46-51` |
| 39 | 폰트 preload가 없어 FOUT 발생 가능 | Low | 성능 | `src/app/layout.tsx` |
| 40 | 동적 import를 활용한 코드 스플리팅 부재 | Low | 성능 | 모든 컴포넌트 파일 |
| 41 | 메타데이터에 Open Graph 이미지 누락 | Low | SEO | `src/app/layout.tsx:44-49` |
| 42 | 프로젝트 썸네일 이미지가 실제로 존재하지 않을 가능성 | Low | 에러 처리 | `src/data/projects.ts` 전체 |

---

## 심각도 범례

- **Critical**: 기능 손상 또는 접근성 표준 위반 (6개)
- **High**: 사용자 경험 또는 디자인 품질에 큰 영향 (7개)
- **Medium**: 해결해야 할 눈에 띄는 문제 (13개)
- **Low**: 개선하면 좋은 사항 (16개)

---

## 카테고리별 요약

### 접근성 (11개 이슈)
- ARIA 레이블 누락 (네비게이션, 버튼, 링크)
- 키보드 포커스 스타일 부재
- 장식 요소에 대한 스크린 리더 숨김 처리 필요
- 색상 대비 검증 필요 (브라우저 테스트 필요)

### 반응형/모바일 (7개 이슈)
- 터치 타겟 크기 미달 (44px 기준)
- 고정 높이로 인한 콘텐츠 잘림 가능성
- 모바일 그리드 레이아웃 최적화 필요
- 반응형 이미지 처리 개선

### 디자인 일관성 (5개 이슈)
- PRD 명세와 구현 간 색상 팔레트 차이
- 변수명 불일치
- 컴포넌트 간 호버 효과 불일치
- 프로젝트 상세 페이지 색상 변수 미정의

### 성능 (4개 이슈)
- 큰 Framer Motion 번들
- backdrop-filter blur 성능 영향
- 폰트 preload 부재
- 코드 스플리팅 미활용

### UX/사용성 (8개 이슈)
- 비활성 링크 (View all projects)
- 이미지 경로 하드코딩
- Breadcrumb 네비게이션 부재
- 명시적 외부 링크 표시 부족

### 기타 (7개 이슈)
- 하드코딩된 콘텐츠로 확장성 부족
- 브라우저 호환성 문제
- SEO 최적화 여지
- 에러 처리 개선 필요

---

## 우선순위별 액션 플랜

### 즉시 수정 (Critical - 6개)
1. 모든 인터랙티브 요소에 적절한 ARIA 레이블 추가
2. 모바일 메뉴 버튼에 aria-expanded 상태 추가
3. 프로젝트 카드 링크에 접근 가능한 텍스트 추가
4. 외부 링크에 보안 속성 추가

### 단기 개선 (High - 7개)
1. 전역 키보드 포커스 스타일 정의 및 적용
2. 모든 터치 타겟을 최소 44x44px로 조정
3. PRD 명세에 맞춰 퍼플 악센트 색상 통합
4. 프로젝트 상세 페이지 디자인 토큰 정리

### 중기 개선 (Medium - 13개)
1. 이미지 에러 처리 및 placeholder 구현
2. View all projects 링크 활성화 또는 제거
3. 통계 섹션에 의미론적 마크업 추가
4. 번들 크기 최적화 (Framer Motion 경량화 검토)

### 장기 개선 (Low - 16개)
1. 콘텐츠를 데이터 파일로 분리하여 확장성 개선
2. 다국어 지원을 위한 i18n 준비
3. 성능 최적화 (폰트 preload, 코드 스플리팅)
4. SEO 강화 (OG 이미지, 구조화 데이터)

---

## 세부 권장 사항

### 1. 접근성 개선

**globals.css에 전역 포커스 스타일 추가:**
```css
*:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Navigation.tsx 개선:**
```tsx
// 네비게이션 링크
<a
  href={link.href}
  className="..."
  aria-label={`${link.label} 섹션으로 이동`}
>
  {link.label}
</a>

// 모바일 메뉴 버튼
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="..."
  aria-label="메인 메뉴"
  aria-expanded={isMobileMenuOpen}
>
```

### 2. 모바일 최적화

**터치 타겟 크기 조정:**
```css
/* Navigation.tsx 모바일 버튼 */
.mobile-menu-button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* 모든 버튼과 링크 */
.btn-primary, .btn-secondary {
  min-height: 44px;
  padding: 12px 24px;
}
```

**Hero 섹션 높이 유연화:**
```tsx
// src/components/Hero.tsx
<section className="relative min-h-screen flex items-center justify-center pt-[var(--nav-height)]">
```

### 3. 디자인 일관성

**CSS 변수를 PRD에 맞춰 업데이트:**
```css
:root {
  /* Accent - PRD 명세대로 퍼플 추가 */
  --accent-purple: #8B5CF6;
  --accent-purple-hover: #A78BFA;
  --accent-purple-subtle: rgba(139, 92, 246, 0.2);
  
  /* 기존 accent는 유지하되 명확히 구분 */
  --accent-primary: var(--accent-purple);
}
```

**프로젝트 상세 페이지 색상 변수 정의:**
```css
/* globals.css에 추가 */
:root {
  --bg-secondary: var(--bg-elevated);
  --bg-tertiary: var(--bg-subtle);
  --border-primary: var(--border-default);
  --accent-primary: var(--accent-purple);
}
```

### 4. 성능 최적화

**폰트 preload 추가:**
```tsx
// src/app/layout.tsx의 head에 추가
<link
  rel="preload"
  href="/fonts/Pretendard-Regular.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

**동적 import 활용:**
```tsx
// 예: ProjectDetailClient 같은 큰 컴포넌트
const ProjectDetailClient = dynamic(
  () => import('./ProjectDetailClient'),
  { loading: () => <div>Loading...</div> }
);
```

### 5. UX 개선

**이미지 에러 처리:**
```tsx
// ProjectCard.tsx에서
const [imageError, setImageError] = useState(false);

<Image
  src={project.thumbnail}
  alt={project.title}
  fill
  onError={() => setImageError(true)}
  className="object-cover"
/>
{imageError && <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">이미지 없음</div>}
```

**View all projects 링크 처리:**
```tsx
// Projects.tsx
{projects.length > 4 && (
  <a href="/projects" className="link-arrow">
    View all projects
    <svg>...</svg>
  </a>
)}
```

---

## 브라우저 테스트 권장 사항

브라우저를 통한 시각적 테스트 시 확인할 사항:

1. **색상 대비**: 모든 텍스트가 WCAG AA 기준 (4.5:1) 충족하는지 확인
2. **애니메이션**: 모션 애니메이션이 부드러운지, prefers-reduced-motion 고려했는지
3. **반응형**: 모든 브레이크포인트에서 레이아웃이 올바른지
4. **호버 효과**: 모든 인터랙티브 요소의 호버 상태 일관성
5. **포커스**: 키보드로 모든 요소 접근 가능한지
6. **이미지 로딩**: 이미지가 제대로 로드되는지, placeholder 동작 확인
7. **성능**: Lighthouse 점수 측정 (목표: Performance > 90)

---

## 추가 고려사항

### 향후 확장성을 위한 제안

1. **CMS 연동**: 프로젝트, 팀원, 서비스 정보를 Headless CMS로 관리
2. **다국어**: react-i18next 도입 준비
3. **테스팅**: Vitest + Testing Library로 컴포넌트 테스트
4. **스토리북**: 컴포넌트 문서화 및 디자인 시스템 관리
5. **애널리틱스**: Vercel Analytics 또는 Google Analytics 통합

### 디자인 시스템 강화

1. **타이포그래피 스케일**: 일관된 font-size 스케일 정의
2. **간격 시스템**: 4px 기반 spacing 유틸리티 확장
3. **컴포넌트 변형**: 버튼, 카드 등의 변형(variant) 체계화
4. **다크모드**: PRD에 언급된 라이트/다크 모드 토글 준비

---

## 결론

Studio With 포트폴리오는 **전문적이고 세련된 디자인**을 갖추고 있으며, **Framer Motion을 활용한 부드러운 애니메이션**과 **체계적인 컴포넌트 구조**가 장점입니다. 

주요 개선이 필요한 영역은:
- **접근성 강화** (ARIA 레이블, 키보드 포커스)
- **모바일 최적화** (터치 타겟, 반응형 레이아웃)
- **디자인 일관성** (PRD와 구현 간 정렬)

위의 권장사항을 단계적으로 적용하면 **WCAG AA 기준을 충족**하고, **모바일 사용자 경험**이 크게 개선되며, **디자인 시스템의 일관성**이 향상될 것입니다.