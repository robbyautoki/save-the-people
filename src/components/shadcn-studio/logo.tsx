// Util Imports
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('flex items-center gap-2.5', className)}>
      <img
        src='/logo.jpeg'
        alt='Save The People Worldwide'
        className='size-8.5 rounded-full object-cover'
      />
      <span className='text-xl font-semibold'>Save People Worldwide</span>
    </Link>
  )
}

export default Logo
