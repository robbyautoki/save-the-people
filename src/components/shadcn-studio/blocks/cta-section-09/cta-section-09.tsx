import { InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative overflow-hidden rounded-3xl border-none bg-black py-8 shadow-none sm:py-16 lg:py-24'>
          <CardContent className='px-8 sm:px-16 lg:px-24'>
            <div className='space-y-4 md:max-w-96 xl:max-w-md'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
                fade
                blur
                slide
                transition={{ duration: 0.5 }}
              >
                Everyone Can Help
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-white'
                fade
                blur
                slide
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Whether it's a donation, spreading the message, or simply caring — every person can lift another. Every hand can give hope.
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-lg text-white/80'
                fade
                blur
                slide
                delay={0.4}
                transition={{ duration: 0.5 }}
              >
                Together, we can transform lives. Together, we can build a future where every child is seen, supported, and protected.
              </MotionPreset>

              <MotionPreset
                component='div'
                className='text-xl font-bold text-white pt-4'
                fade
                blur
                slide
                delay={0.5}
                transition={{ duration: 0.5 }}
              >
                <p>Join us.</p>
                <p>Stand with us.</p>
                <p>Help us save lives.</p>
              </MotionPreset>

              <MotionPreset fade blur slide delay={0.6} transition={{ duration: 0.5 }}>
                <Button size='lg' variant='secondary' className='rounded-lg text-base has-[>svg]:px-6' asChild>
                  <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
                    <InstagramIcon className='size-5' />
                    Follow Us on Instagram
                  </a>
                </Button>
              </MotionPreset>
            </div>

            <MotionPreset
              className='absolute -top-20 -right-20 scale-120 max-lg:-bottom-9 max-lg:hidden xl:right-0'
              fade
              blur
              slide={{ direction: 'right' }}
              delay={0.6}
              transition={{ duration: 0.7 }}
            >
              <img
                src='/WhatsApp Image 2025-12-07 at 14.04.29.jpeg'
                alt='Mother and child'
                className='max-h-173 w-full rounded-2xl object-cover'
              />
            </MotionPreset>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
