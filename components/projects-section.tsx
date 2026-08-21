import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { SectionTitle } from '@/components/section-title'

interface Project {
  title: string
  type?: string
  technologies: string[]
  descriptionKey: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Ticketeame',
    type: 'Freelance',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Prisma ORM', 'PostgreSQL'],
    descriptionKey: 'ticketeame',
    link: 'https://ticketea-me.vercel.app/'
  },
  {
    title: 'Lauro Barber',
    type: 'Freelance',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Prisma ORM', 'PostgreSQL'],
    descriptionKey: 'lauroBarber',
    link: 'https://laurobarber.vercel.app/'
  },
  {
    title: 'Kaptia',
    type: 'Freelance',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Prisma ORM', 'Turborepo'],
    descriptionKey: 'kaptia',
    link: 'https://kaptia.com.ar/landing'
  },
  {
    title: 'MDG',
    type: 'Freelance',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Prisma ORM', 'PostgreSQL'],
    descriptionKey: 'mdg',
    link: 'https://mdg-lab.vercel.app/'
  },
  {
    title: 'Simple Imposter',
    type: 'Hobby',
    technologies: ['Next.js', 'TypeScript', 'Redis', 'Shadcn UI'],
    descriptionKey: 'simpleImposter',
    link: 'https://simpleimpostor.vercel.app/'
  }
]

export function ProjectsSection() {
  const t = useTranslations('projects')

  return (
    <section className='space-y-6'>
      <SectionTitle>{t('title')}</SectionTitle>

      <div className='space-y-6'>
        {projects.map(project => (
          <div key={project.title} className='group space-y-3'>
            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  {project.link ? (
                    <Link
                      href={project.link}
                      target='_blank'
                      className='group/link flex items-center gap-2 text-foreground hover:text-emerald-500 transition-colors'
                    >
                      <h3 className='font-semibold'>{project.title}</h3>
                      <ExternalLink className='size-3.5 text-muted-foreground group-hover/link:text-emerald-500 transition-colors' />
                    </Link>
                  ) : (
                    <h3 className='font-semibold group-hover:text-foreground transition-colors'>
                      {project.title}
                    </h3>
                  )}
                </div>
                {project.type && <p className='text-sm text-muted-foreground'>{project.type}</p>}
              </div>
            </div>

            <div className='flex flex-wrap gap-1.5'>
              {project.technologies.map(tech => (
                <Badge
                  key={tech}
                  variant='secondary'
                  className='text-xs font-normal bg-secondary/50 hover:bg-secondary'
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <p className='text-sm font-light text-muted-foreground leading-relaxed'>
              {t(project.descriptionKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
