import { MotionPreset } from '@/components/ui/motion-preset'
import { BounceButton } from '@/components/ui/bounce-button'
import { InstagramIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='flex-1 overflow-hidden py-4 sm:py-6 lg:py-8'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-12 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        <div className='relative grid gap-12 lg:grid-cols-5'>
          <div className='flex flex-col justify-center gap-6 lg:col-span-3'>
            <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.3}>
              <h1 className='max-w-3xl text-3xl leading-[1.29167] font-bold sm:text-4xl lg:text-5xl'>
                SAVE THE PEOPLE WORLDWIDE
              </h1>
            </MotionPreset>
            <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.4}>
              <blockquote className='text-2xl italic text-muted-foreground'>
                "Do good for no reason."
                <footer className='text-lg mt-2 not-italic font-medium'>— Katharina Erdem</footer>
              </blockquote>
            </MotionPreset>
            <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.5}>
              <p className='text-muted-foreground text-lg'>
                At Save the People Worldwide, we believe that every human being has the power to make a difference.
                You don't need wealth, status, or special skills to help — every gesture, every contribution, every act of kindness matters.
              </p>
            </MotionPreset>
            <MotionPreset
              component='div'
              fade
              slide={{ offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.7}
              className='flex flex-wrap items-center gap-6'
            >
              <BounceButton>
                <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
                  <InstagramIcon className='size-5' />
                  Follow Us on Instagram
                </a>
              </BounceButton>
            </MotionPreset>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-184'>
              <MotionPreset
                component='div'
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.9}
                className='bg-muted group relative h-39 overflow-hidden rounded-md p-3'
              >
                <span className='text-muted-foreground text-xl font-medium'>Food & Nutrition</span>
                <div className='absolute end-3 bottom-3 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110'>
                  <img
                    src='/WhatsApp Image 2025-12-07 at 14.04.30 (1).jpeg'
                    alt='Food support'
                    className='w-24 h-24 object-cover rounded-md'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                component='div'
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1.0}
                className='bg-muted group relative h-39 overflow-hidden rounded-md p-3'
              >
                <span className='text-muted-foreground text-xl font-medium'>Healthcare Support</span>
                <div className='absolute end-3 bottom-3 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110'>
                  <img
                    src='/WhatsApp Image 2025-12-07 at 14.04.30 (5).jpeg'
                    alt='Healthcare'
                    className='w-24 h-24 object-cover rounded-md'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                component='div'
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1.1}
                className='bg-muted group relative h-39 overflow-hidden rounded-md p-3'
              >
                <span className='text-muted-foreground text-xl font-medium'>Education Programs</span>
                <div className='absolute end-3 bottom-3 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110'>
                  <img
                    src='/WhatsApp Image 2025-12-07 at 14.04.31.jpeg'
                    alt='Education'
                    className='w-24 h-24 object-cover rounded-md'
                  />
                </div>
              </MotionPreset>
            </div>
          </div>
          <MotionPreset
            component='div'
            fade
            slide={{ direction: 'right', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.5}
            className='relative flex items-center justify-center lg:col-span-2'
          >
            <img
              src='/logo.jpeg'
              alt='Save The People Worldwide Logo'
              className='size-full max-w-md object-contain'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
