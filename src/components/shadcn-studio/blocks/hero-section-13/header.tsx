'use client'

import { useEffect, useState } from 'react'

import { InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import {
  HeroNavigation01,
  HeroNavigation01SmallScreen,
  type Navigation
} from '@/components/shadcn-studio/blocks/hero-navigation-01'

import { cn } from '@/lib/utils'

import Logo from '@/components/shadcn-studio/logo'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full border-b transition-all duration-300',
        {
          'bg-card/75 backdrop-blur': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Logo className='gap-3' />
        </a>

        {/* Navigation */}
        <HeroNavigation01 navigationData={navigationData} />

        {/* Actions */}
        <div className='flex gap-3'>
          <Button className='max-sm:hidden' asChild>
            <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
              <InstagramIcon className='size-4' />
              Instagram
            </a>
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size='icon' className='sm:hidden' asChild>
                <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon />
                  <span className='sr-only'>Instagram</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Instagram</TooltipContent>
          </Tooltip>

          <HeroNavigation01SmallScreen navigationData={navigationData} />
        </div>
      </div>
    </header>
  )
}

export default Header
