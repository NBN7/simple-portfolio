import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  type?: string
  technologies: string[]
  description: string
  link?: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    type: "Freelance",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: "Modern e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard for managing products and orders.",
  },
  {
    title: "Task Management App",
    type: "Product",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    description: "Real-time collaborative task management application with team workspaces, drag-and-drop kanban boards, and automated notifications.",
  },
  {
    title: "Portfolio Builder",
    type: "Open Source",
    technologies: ["Next.js", "TypeScript", "Shadcn UI", "Vercel"],
    description: "A developer-friendly portfolio generator with customizable templates, markdown support, and automatic deployment to Vercel.",
  },
]

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          See all projects
        </Link>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="group space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </div>
                {project.type && (
                  <p className="text-sm text-muted-foreground">{project.type}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs font-normal bg-secondary/50 hover:bg-secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
