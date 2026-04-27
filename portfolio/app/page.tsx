import { HeroSection } from "@/components/hero-section"
import { PostsSection } from "@/components/posts-section"
import { ContributionsGrid } from "@/components/contributions-grid"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        <HeroSection />
        <PostsSection />
        <ContributionsGrid />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ignacio Biran. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
