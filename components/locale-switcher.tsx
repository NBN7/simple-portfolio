'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchTo(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <ButtonGroup>
      <Button
        variant={locale === 'en' ? 'default' : 'outline'}
        size='sm'
        onClick={() => switchTo('en')}
        className='text-xs h-7 px-2'
      >
        EN
      </Button>
      <Button
        variant={locale === 'es' ? 'default' : 'outline'}
        size='sm'
        onClick={() => switchTo('es')}
        className='text-xs h-7 px-2'
      >
        ES
      </Button>
    </ButtonGroup>
  )
}
