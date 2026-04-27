interface Education {
  institution: string
  degree: string
  field: string
  period: string
}

const education: Education[] = [
  {
    institution: "University",
    degree: "Bachelor&apos;s Degree",
    field: "Computer Science",
    period: "2018 - 2022",
  },
]

export function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">Education</h2>

      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.institution} className="space-y-1">
            <h3 className="font-medium">{edu.institution}</h3>
            <p className="text-sm text-muted-foreground">
              {edu.degree}, {edu.field}
            </p>
            <p className="text-sm text-muted-foreground">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
