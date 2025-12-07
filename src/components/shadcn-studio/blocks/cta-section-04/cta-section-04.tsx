import { InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative rounded-3xl border-none bg-black py-16 shadow-none'>
          <CardContent className='flex items-center gap-16 px-6 sm:max-lg:flex-col md:px-12'>
            <div className='relative w-full flex flex-col gap-4 max-sm:hidden lg:absolute lg:left-12 lg:-translate-y-1/2'>
              <MotionPreset
                fade
                motionProps={{
                  animate: {
                    y: [0, -8, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0
                    }
                  }
                }}
              >
                <img
                  src='/WhatsApp Image 2025-12-07 at 14.04.30 (5).jpeg'
                  alt='Children smiling'
                  className='max-h-36 w-auto rounded-2xl object-cover shadow-lg'
                />
              </MotionPreset>
              <MotionPreset
                fade
                motionProps={{
                  animate: {
                    y: [0, -10, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.3
                    }
                  }
                }}
              >
                <img
                  src='/WhatsApp Image 2025-12-07 at 14.04.29.jpeg'
                  alt='Mother and child'
                  className='max-h-40 w-auto rounded-2xl object-cover shadow-lg'
                />
              </MotionPreset>
              <MotionPreset
                fade
                motionProps={{
                  animate: {
                    y: [0, -6, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.6
                    }
                  }
                }}
              >
                <img
                  src='/WhatsApp Image 2025-12-07 at 14.04.30 (6).jpeg'
                  alt='Helping hands'
                  className='max-h-36 w-auto rounded-2xl object-cover shadow-lg'
                />
              </MotionPreset>
            </div>
            <div className='space-y-4 xl:justify-self-end'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                Everyone Can Help
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-white'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Whether it&apos;s a donation, spreading the message, or simply caring — every person can lift another. Every hand can give hope. Together, we can transform lives.
              </MotionPreset>

              <MotionPreset
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                <Button asChild size='lg' variant='secondary' className='rounded-lg text-base has-[>svg]:px-6'>
                  <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
                    <InstagramIcon className='size-5' />
                    Follow Us on Instagram
                  </a>
                </Button>
              </MotionPreset>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
