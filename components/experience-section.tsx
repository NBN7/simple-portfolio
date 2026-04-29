import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/section-title'

interface Experience {
  company: string
  period: string
  role: string
  descriptionKey: string
}

const experiences: Experience[] = [
  {
    company: 'Auravant',
    period: 'Mar. 2026 - Present',
    role: 'SSR Frontend Developer',
    descriptionKey: 'auravantSsr'
  },
  {
    company: 'Auravant',
    period: 'Jul. 2024 - Mar. 2026',
    role: 'JR Frontend Developer',
    descriptionKey: 'auravantJr'
  },
  {
    company: 'Sturges Labs LLC',
    period: 'Mar. 2024 - Aug. 2024',
    role: 'Fullstack Developer',
    descriptionKey: 'sturgesFullstack'
  },
  {
    company: 'Sturges Labs LLC',
    period: 'Jan. 2024 - Mar. 2024',
    role: 'Frontend Developer',
    descriptionKey: 'sturgesFrontend'
  }
]

export function ExperienceSection() {
  const t = useTranslations('experience')

  return (
    <section className='space-y-6'>
      <SectionTitle>{t('title')}</SectionTitle>

      <div className='space-y-8'>
        {experiences.map((exp, i) => (
          <div key={i} className='space-y-3'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
              <h3 className='font-semibold'>{exp.company}</h3>
              <span className='text-sm text-muted-foreground'>{exp.period}</span>
            </div>
            <p className='text-sm font-light text-muted-foreground'>{exp.role}</p>
            <p className='text-sm font-light text-muted-foreground leading-relaxed'>
              {t(exp.descriptionKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
