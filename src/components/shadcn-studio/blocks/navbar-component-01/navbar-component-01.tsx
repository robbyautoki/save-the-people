import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Logo from '@/components/shadcn-studio/logo'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-4 pt-4'>
      <div className='mx-auto flex max-w-4xl items-center justify-between gap-8 px-8 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg shadow-black/5'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          {navigationData.slice(0, 2).map((item, index) => (
            <a key={index} href={item.href} className='hover:text-primary max-md:hidden'>
              {item.title}
            </a>
          ))}
          <a href='#'>
            <Logo className='text-foreground gap-3' />
          </a>
          {navigationData.slice(2).map((item, index) => (
            <a key={index + 2} href={item.href} className='hover:text-primary max-md:hidden'>
              {item.title}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
