import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio With | From Dev to Live",
  description: "웹 서비스 구축, 데이터 자동화, 관리자 대시보드 개발. 운영 경험을 바탕으로 실제로 잘 동작하는 시스템을 만듭니다.",
  keywords: ["웹개발", "외주", "대시보드", "데이터 자동화", "React", "Next.js", "Python"],
  authors: [{ name: "Studio With" }],
  openGraph: {
    title: "Studio With | From Dev to Live",
    description: "웹 서비스 구축, 데이터 자동화, 관리자 대시보드 개발. 운영 경험을 바탕으로 실제로 잘 동작하는 시스템을 만듭니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} ${pretendard.variable}`}>
      <body className="antialiased">
        <div className="bg-glow" />
        <div className="bg-grid" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
