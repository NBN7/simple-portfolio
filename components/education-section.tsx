import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/section-title'

interface Education {
  institution: string
  degreeKey: string
  fieldKey: string
  periodKey: string
}

const education: Education[] = [
  {
    institution: 'UTN - Facultad Regional San Nicolás',
    degreeKey: 'degree1',
    fieldKey: 'field1',
    periodKey: 'period1'
  },
  {
    institution: 'UTN - Facultad Regional San Nicolás',
    degreeKey: 'degree2',
    fieldKey: 'field2',
    periodKey: 'period2'
  }
]

export function EducationSection() {
  const t = useTranslations('education')

  return (
    <section className='space-y-6'>
      <SectionTitle>{t('title')}</SectionTitle>
      <div className='space-y-4'>
        {education.map(edu => (
          <div key={edu.periodKey} className='space-y-1'>
            <h3 className='font-semibold'>{edu.institution}</h3>
            <p className='text-sm font-light text-muted-foreground'>
              {t(edu.degreeKey)}, {t(edu.fieldKey)}
            </p>
            <p className='text-sm text-muted-foreground'>{t(edu.periodKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
