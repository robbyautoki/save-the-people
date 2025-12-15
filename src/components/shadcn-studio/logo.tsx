// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <img
        src='/WhatsApp Image 2025-12-07 at 14.04.30 (10).jpeg'
        alt='Save The People Worldwide'
        className='size-8.5 rounded-full object-cover'
      />
      <span className='text-xl font-semibold'>Save People Worldwide</span>
    </div>
  )
}

export default Logo
