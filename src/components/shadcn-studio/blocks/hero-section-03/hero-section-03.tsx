import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='from-primary/20 to-background flex min-h-screen flex-1 flex-col bg-linear-to-bl to-50%'>
      <div className='mx-auto grid w-full max-w-7xl flex-1 gap-19 px-4 sm:px-6 lg:grid-cols-2 lg:px-8'>
        {/* Left Content */}
        <div className='flex max-w-2xl flex-col justify-center gap-10 pt-28 pb-12'>
          <div className='flex flex-col items-start gap-8'>
            <MotionPreset
              fade
              slide
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2'
            >
              <Badge>Charity</Badge>
              <span className='text-muted-foreground'>Making a difference worldwide</span>
            </MotionPreset>

            <MotionPreset
              component='h1'
              fade
              slide
              delay={0.3}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
            >
              SAVE THE PEOPLE WORLDWIDE
            </MotionPreset>

            <MotionPreset
              component='p'
              fade
              slide
              delay={0.6}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-muted-foreground'
            >
              At Save the People Worldwide, we believe that every human being has the power to make a difference.
              You don&apos;t need wealth, status, or special skills to help — every gesture, every contribution, every act of kindness matters.
            </MotionPreset>

            <MotionPreset
              fade
              slide
              delay={0.9}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='flex flex-wrap items-center gap-4'
            >
              <Button size='lg' asChild>
                <a href='https://instagram.com/save_the_people_worldwide' target='_blank' rel='noopener noreferrer'>Follow Us on Instagram</a>
              </Button>
              <Button size='lg' asChild className='bg-primary/10 hover:bg-primary/20 text-primary'>
                <a href='#about'>Learn More</a>
              </Button>
            </MotionPreset>
          </div>

          <hr className='border-dashed' />

          <MotionPreset
            fade
            slide
            delay={1.5}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex items-center gap-3'
          >
            {/* Avatar Group */}
            <div className='flex -space-x-4'>
              {avatars.map((avatar, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                      <AvatarImage src={avatar.src} alt={avatar.name} />
                      <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{avatar.name}</TooltipContent>
                </Tooltip>
              ))}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                    <AvatarFallback className='text-xs'>+39k</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>Many more</TooltipContent>
              </Tooltip>
            </div>

            <div className='space-y-1'>
              {/* Ratings */}
              <div className='flex gap-0.5'>
                <Rating readOnly variant='yellow' size={24} value={4.5} precision={0.5} />
              </div>

              <span className='text-sm'>From Our Supporters</span>
            </div>
          </MotionPreset>
        </div>

        {/* Right Content */}
        <MotionPreset
          fade
          blur
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='grid grid-cols-2 max-lg:hidden'
        >
          <Marquee vertical pauseOnHover duration={20} gap={1.5} className='h-screen min-h-182 overflow-hidden'>
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (1).jpeg'
              alt='Children receiving help'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (2).jpeg'
              alt='Community support'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (3).jpeg'
              alt='Volunteers helping'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (4).jpeg'
              alt='Making a difference'
              className='rounded-2xl object-cover'
            />
          </Marquee>

          <Marquee vertical pauseOnHover duration={22} gap={1.5} reverse className='h-screen min-h-182 overflow-hidden'>
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (5).jpeg'
              alt='Helping families'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (6).jpeg'
              alt='Food distribution'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (7).jpeg'
              alt='Community care'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (8).jpeg'
              alt='Supporting children'
              className='rounded-2xl object-cover'
            />
            <img
              src='/WhatsApp Image 2025-12-07 at 14.04.30 (9).jpeg'
              alt='Building hope'
              className='rounded-2xl object-cover'
            />
          </Marquee>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
