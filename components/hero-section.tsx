import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="space-y-6">
      <p className="text-muted-foreground font-mono text-sm">ibiran</p>
      
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Ignacio Biran</h1>
        <h2 className="text-xl text-muted-foreground">Frontend Engineer</h2>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          href="https://twitter.com" 
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link 
          href="https://github.com" 
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link 
          href="https://linkedin.com" 
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-xl">
        Building modern web applications with React, TypeScript, and Next.js. 
        Passionate about creating intuitive user experiences and clean, maintainable code.
      </p>

      <p className="text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-muted-foreground">Open to Frontend Engineer opportunities.</span>
        </span>
      </p>
    </section>
  )
}
