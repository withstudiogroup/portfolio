import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectDetailClient from "./ProjectDetailClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const allProjects = getAllProjects();

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main className="pt-[var(--nav-height)]">
        {/* Back Link */}
        <div className="container py-8">
          <Link href="/#projects" className="link-arrow">
            <svg
              className="w-4 h-4 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            프로젝트 목록
          </Link>
        </div>

        <ProjectDetailClient
          project={project}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>
      <Footer />
    </>
  );
}
