interface Experience {
  company: string
  period: string
  role: string
  description: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    company: "Tech Company",
    period: "Jan. 2023 - Present",
    role: "Frontend Engineer",
    description: "Building modern web applications and leading frontend architecture decisions.",
    highlights: [
      "Developed scalable React component libraries used across multiple products",
      "Implemented performance optimizations reducing load times by 40%",
      "Led migration from legacy codebase to Next.js with TypeScript",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
  },
  {
    company: "Startup Inc.",
    period: "Jun. 2021 - Dec. 2022",
    role: "React Developer",
    description: "Developed user-facing features and improved overall application performance.",
    highlights: [
      "Built responsive web applications using React and TypeScript",
      "Implemented state management solutions with Redux and React Query",
      "Worked closely with backend team to design and integrate RESTful APIs",
      "Created automated testing suites improving code coverage to 80%",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">Work Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-medium">{exp.company}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            
            <p className="text-sm text-muted-foreground">{exp.role}</p>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-2">
              <p className="text-sm font-medium">Key contributions:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-muted-foreground/50">-</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
