import { SectionTitle } from '@/components/section-title'

interface Experience {
  company: string
  period: string
  role: string
  description: string
}

const experiences: Experience[] = [
  {
    company: 'Auravant',
    period: 'Mar. 2026 - Present',
    role: 'SSR Frontend Developer',
    description:
      "Frontend developer for Auravant with greater responsibilities. I build and maintain microfrontends, the company's internal component library, and scalable web applications for an agricultural sector platform using TypeScript, React.js and Auravant proprietary SDK."
  },
  {
    company: 'Auravant',
    period: 'Jul. 2024 - Mar. 2026',
    role: 'JR Frontend Developer',
    description:
      'Frontend developer for Auravant. I used TypeScript, React.js, shadcn and Auravant proprietary SDK to build microfrontends and web applications for an agricultural sector platform.'
  },
  {
    company: 'Sturges Labs LLC',
    period: 'Mar. 2024 - Aug. 2024',
    role: 'Fullstack Developer',
    description:
      'Fullstack developer for Sturges Labs LLC. I worked on a finance application. For the Frontend, I used TypeScript, Next.js, and MUI. For the Backend, I employed TypeScript, tRPC, Clerk, MySQL and Prisma.'
  },
  {
    company: 'Sturges Labs LLC',
    period: 'Jan. 2024 - Mar. 2024',
    role: 'Frontend Developer',
    description:
      'Frontend developer for Sturges Labs LLC. I used TypeScript, Next.js and MUI to build the user interface of a finance application.'
  }
]

export function ExperienceSection() {
  return (
    <section className='space-y-6'>
      <SectionTitle>Work Experience</SectionTitle>

      <div className='space-y-8'>
        {experiences.map((exp, i) => (
          <div key={i} className='space-y-3'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
              <h3 className='font-semibold'>{exp.company}</h3>
              <span className='text-sm text-muted-foreground'>{exp.period}</span>
            </div>
            <p className='text-sm text-muted-foreground'>{exp.role}</p>
            <p className='text-sm font-light text-muted-foreground leading-relaxed'>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
