import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/section-title'

interface Education {
  institution: string
  degree: string
  field: string
  period: string
}

const education: Education[] = [
  {
    institution: 'UTN - Facultad Regional San Nicolás',
    degree: 'Engineering',
    field: 'Computer Systems',
    period: '2026 - Present'
  },
  {
    institution: 'UTN - Facultad Regional San Nicolás',
    degree: 'Technical Degree',
    field: 'Computer Programming',
    period: '2022 - 2023'
  }
]

export function EducationSection() {
  const t = useTranslations('education')

  return (
    <section className='space-y-6'>
      <SectionTitle>{t('title')}</SectionTitle>
      <div className='space-y-4'>
        {education.map(edu => (
          <div key={edu.period} className='space-y-1'>
            <h3 className='font-semibold'>{edu.institution}</h3>
            <p className='text-sm font-light text-muted-foreground'>
              {edu.degree}, {edu.field}
            </p>
            <p className='text-sm text-muted-foreground'>{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
