import { InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <footer id='contact'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex flex-col items-center gap-6 py-8 text-center sm:py-16 md:py-24'>
          <h2 className='max-w-5xl text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Join us in making a difference — every hand can give hope!
          </h2>
          <Button size='lg' className='rounded-lg text-base' asChild>
            <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
              <InstagramIcon className='size-5' />
              Follow Us on Instagram
            </a>
          </Button>
        </div>

        <div className='flex items-center justify-between gap-4 py-6 max-md:flex-col'>
          <a href='#'>
            <Logo className='gap-3' />
          </a>
          <div className='flex items-center gap-5 whitespace-nowrap'>
            <a href='#about'>About</a>
            <a href='#impact'>Our Impact</a>
            <a href='#mission'>Mission</a>
            <a href='#contact'>Contact</a>
          </div>
          <div className='flex items-center gap-4'>
            <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon className='size-5' />
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 max-sm:flex-col sm:px-6'>
        <p className='text-balance max-sm:text-center'>
          {`©${new Date().getFullYear()}`} <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer'>Save The People Worldwide</a>, Made with ❤️ for a better world.
        </p>

        <div className='flex items-center gap-6 text-nowrap'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
