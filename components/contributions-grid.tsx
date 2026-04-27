'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SectionTitle } from '@/components/section-title'

const DAYS = ['Mon', 'Wed', 'Fri']

const levelColors = [
  'bg-secondary',
  'bg-emerald-900/50',
  'bg-emerald-700/60',
  'bg-emerald-600/70',
  'bg-emerald-500'
]

export function ContributionsGrid() {
  const [weeks, setWeeks] = useState<number[][]>([])
  const [months, setMonths] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/contributions')
      .then(r => r.json())
      .then(data => {
        setWeeks(data.weeks.slice(-44))
        setMonths(data.months)
      })
  }, [])

  return (
    <section className='space-y-4'>
      <SectionTitle>Contributions</SectionTitle>

      <div className='overflow-x-auto'>
        <div className='inline-block'>
          <div className='flex text-xs text-muted-foreground mb-1 ml-8'>
            {months.map((month, i) => (
              <span key={i} className='flex-1'>
                {month}
              </span>
            ))}
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-1 text-xs text-muted-foreground justify-around py-1'>
              {DAYS.map(day => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className='flex gap-0.75'>
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className='flex flex-col gap-0.75'>
                  {week.map((level, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`size-2.5 rounded-[2px] ${levelColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2 text-xs text-muted-foreground justify-end'>
        <span>Less</span>
        <div className='flex gap-0.75'>
          {levelColors.map((color, i) => (
            <div key={i} className={`size-2.5 rounded-[2px] ${color}`} />
          ))}
        </div>
        <span>More</span>
      </div>

      <p className='text-xs text-muted-foreground'>
        Contributions of{' '}
        <Link
          href='https://github.com/NBN7'
          target='_blank'
          className='text-foreground hover:underline'
        >
          @NBN7
        </Link>{' '}
        on GitHub.
      </p>
    </section>
  )
}
