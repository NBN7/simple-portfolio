import { Separator } from '@/components/ui/separator'

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center gap-4'>
      <h2 className='text-lg font-bold shrink-0'>{children}</h2>
      <Separator className='flex-1' />
    </div>
  )
}
