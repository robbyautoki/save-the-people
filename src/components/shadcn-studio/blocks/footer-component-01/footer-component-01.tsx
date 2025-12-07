import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='#'>
          <Logo className='gap-3' />
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          <a href='#about' className='text-muted-foreground hover:text-foreground'>
            About
          </a>
          <a href='#impact' className='text-muted-foreground hover:text-foreground'>
            Our Impact
          </a>
          <a href='#mission' className='text-muted-foreground hover:text-foreground'>
            Mission
          </a>
          <a href='#contact' className='text-muted-foreground hover:text-foreground'>
            Contact
          </a>
        </div>

        <div className='flex items-center gap-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground'>
            <FacebookIcon className='size-5' />
            <span className='sr-only'>Facebook</span>
          </a>
          <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground'>
            <InstagramIcon className='size-5' />
            <span className='sr-only'>Instagram</span>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground'>
            <TwitterIcon className='size-5' />
            <span className='sr-only'>Twitter</span>
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground'>
            <YoutubeIcon className='size-5' />
            <span className='sr-only'>YouTube</span>
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} Save The People Worldwide. Your support matters — today and every day.
        </p>
      </div>
    </footer>
  )
}

export default Footer
