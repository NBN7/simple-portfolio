import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://github.com/users/NBN7/contributions', {
      headers: { Accept: 'text/html' },
      next: { revalidate: 3600 }
    })
    const html = await res.text()

    // id="contribution-day-component-{row}-{week}" data-level="{level}"
    const grid: number[][] = []
    const regex = /id="contribution-day-component-(\d+)-(\d+)"\s+data-level="(\d)"/g
    let match
    while ((match = regex.exec(html)) !== null) {
      const row = parseInt(match[1])
      const week = parseInt(match[2])
      const level = parseInt(match[3])
      if (!grid[week]) grid[week] = []
      grid[week][row] = level
    }

    // completamos los días faltantes con 0
    const weeks = grid.map(w => Array.from({ length: 7 }, (_, i) => w?.[i] ?? 0))

    // extraemos los meses
    const months: string[] = []
    const monthRegex = /aria-hidden="true"[^>]*>(\w{3})<\/span>/g
    while ((match = monthRegex.exec(html)) !== null) {
      months.push(match[1])
    }

    return NextResponse.json({ weeks, months })
  } catch {
    return NextResponse.json({ weeks: [], months: [] }, { status: 500 })
  }
}
