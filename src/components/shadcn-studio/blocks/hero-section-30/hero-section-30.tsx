import Users from '@/assets/svg/users'
import Medal from '@/assets/svg/medal'
import Support from '@/assets/svg/support'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'

const features = [
  { img: <Users />, label: '5,000+ Children Helped' },
  { img: <Medal />, label: 'Daily Meals Distributed' },
  { img: <Support />, label: 'Communities Supported' }
]

type Testimonial = {
  name: string
  avatar: string
  title: string
}

const HeroSection = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className='flex-1 py-8 sm:py-16 lg:py-24'>
      <BackgroundRippleEffect cellSize={60} rows={11} cols={32} />
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center gap-8 text-center'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='z-10'
            >
              <Badge className='text-sm font-normal'>Making a Difference</Badge>
            </MotionPreset>

            <MotionPreset
              component='h1'
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='z-10 text-2xl font-semibold sm:text-3xl lg:text-5xl lg:font-bold'
            >
              Saving Lives, One Child at a Time
            </MotionPreset>

            <MotionPreset
              component='p'
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.5}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-muted-foreground z-10 max-w-4xl text-xl'
            >
              We provide food, shelter, and hope to children in need. <br className='max-sm:hidden' /> Join us in
              making the world a better place for everyone.
            </MotionPreset>
          </div>
          <MotionPreset
            component='div'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.7}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='z-10 flex items-center gap-3 p-2'
          >
            <Button
              size='lg'
              className='relative w-fit overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              asChild
            >
              <a href='https://instagram.com/save_the_people_worldwide'>Follow Us</a>
            </Button>
          </MotionPreset>

          <div className='grid grid-cols-2 items-center gap-14 sm:grid-cols-3'>
            {features.map((feature, index) => (
              <MotionPreset
                component='div'
                key={`${feature.label}-${index}`}
                fade
                blur
                slide={{ direction: 'down', offset: 30 }}
                transition={{ duration: 0.45 }}
                delay={0.8 + index * 0.2}
                className='group z-10 flex flex-col items-center gap-5 max-sm:last:col-span-full sm:max-w-30'
              >
                <div className='transition-all duration-300 group-hover:scale-115'>{feature.img}</div>
                <div className='text-muted-foreground text-sm'>{feature.label}</div>
              </MotionPreset>
            ))}
          </div>
        </div>
      </div>

      <MotionPreset
        component='div'
        fade
        blur
        slide={{ direction: 'down', offset: 30 }}
        transition={{ duration: 0.45 }}
        delay={1.1}
        className='relative z-10 mt-12 w-full overflow-hidden sm:mt-16 lg:mt-24'
      >
        <Marquee pauseOnHover duration={50} gap={1.5} className='pb-5'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='max-w-md transition-shadow duration-500 hover:shadow-xl'>
              <CardContent className='flex gap-6 sm:items-center'>
                <Avatar className='size-27.5 rounded-lg'>
                  <AvatarImage src={`${testimonial.avatar}?width=176&height=176&format=auto`} alt={testimonial.name} />
                  <AvatarFallback className='rounded-lg'>
                    {testimonial.name
                      .split(' ', 2)
                      .map(n => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div className='flex-1 space-y-2'>
                  <p className='-mb-4 text-3xl'>&ldquo;</p>
                  <h3 className='text-lg font-medium'>{testimonial.title}</h3>
                  <h4 className='text-muted-foreground text-sm'>{testimonial.name}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </MotionPreset>
    </section>
  )
}

export default HeroSection
