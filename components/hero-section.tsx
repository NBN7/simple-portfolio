import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { LocaleSwitcher } from '@/components/locale-switcher'

export function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className='space-y-4'>
      <div className='flex items-center justify-between'>
        <p className='text-muted-foreground font-mono text-sm'>NBN7</p>
        <LocaleSwitcher />
      </div>

      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Ignacio Biran</h1>
        <h2 className='text-xl font-light text-muted-foreground'>{t('subtitle')}</h2>
      </div>

      <div className='flex items-center gap-3'>
        <Link
          href='https://github.com/NBN7'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub profile'
          className='text-sm text-muted-foreground hover:text-emerald-500 transition-colors'
        >
          GitHub
        </Link>
        <span className='text-muted-foreground/30'>·</span>
        <Link
          href='https://linkedin.com/in/ignacio-biran'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn profile'
          className='text-sm text-muted-foreground hover:text-emerald-500 transition-colors'
        >
          LinkedIn
        </Link>
      </div>

      <p className='text-muted-foreground font-light leading-relaxed max-w-xl'>
        {t('description')}
      </p>
    </section>
  )
}
