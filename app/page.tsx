import { HeroSection } from '@/components/hero-section'
import { ContributionsGrid } from '@/components/contributions-grid'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection } from '@/components/education-section'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ignacio Biran',
  jobTitle: 'Frontend Developer',
  url: 'https://github.com/NBN7',
  sameAs: ['https://github.com/NBN7', 'https://linkedin.com/in/ignacio-biran'],
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'Microfrontends', 'Web Development']
}

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-background' role='main'>
        <div className='max-w-2xl mx-auto px-6 py-16 space-y-16'>
          <HeroSection />
          <ContributionsGrid />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <footer role='contentinfo' className='pt-8 border-t border-border'>
            <p className='text-sm text-muted-foreground text-center'>
              © {new Date().getFullYear()} Ignacio Biran. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
