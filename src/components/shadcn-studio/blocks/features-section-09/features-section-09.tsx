import type { ComponentType } from 'react'

import { InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { MotionPreset } from '@/components/ui/motion-preset'

type Content = {
  buttonIcon: ComponentType
  title: string
  description: string
  image: string
  documentationLink: string
}

type tabsData = {
  name: string
  icon: ComponentType
  value: string
  content: Content
}[]

const Features = ({ tabs }: { tabs: tabsData }) => {
  return (
    <section id='impact' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-6 flex items-center justify-between gap-9 max-sm:flex-col'>
          <div className='max-w-3xl'>
            <MotionPreset
              component='h2'
              className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'
              fade
              slide={{ direction: 'left', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
            >
              Our Work in Action
            </MotionPreset>
            <MotionPreset
              component='p'
              className='text-muted-foreground text-xl'
              fade
              blur
              slide={{ direction: 'left', offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
            >
              See how we make a difference every day. From feeding children to building communities,
              every action brings hope and transforms lives around the world.
            </MotionPreset>
          </div>

          {/* Logo */}
          <MotionPreset
            fade
            blur
            zoom={{ initialScale: 0.75 }}
            delay={0.4}
            transition={{ duration: 0.5 }}
            className='mx-auto flex'
          >
            <div className='relative flex size-36 items-center justify-center'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <img
                  src='/logo.jpeg'
                  className='z-1 size-32 rounded-4xl object-cover'
                  alt='Save The People Worldwide'
                />
              </div>
              <div className='absolute inset-0'>
                <div className='border-primary absolute inset-12 animate-ping rounded-3xl border-2'></div>
                <div className='border-primary/60 absolute inset-8 animate-ping rounded-3xl border-2'></div>
                <div className='border-primary/40 absolute inset-6 animate-ping rounded-3xl border-2'></div>
              </div>
            </div>
          </MotionPreset>
        </div>

        <Tabs defaultValue='food' className='gap-8 sm:gap-16 lg:gap-24'>
          <MotionPreset fade blur slide={{ direction: 'left', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <TabsList className='h-full max-sm:w-full max-sm:flex-col'>
              {tabs.map(({ icon: Icon, name, value }) => (
                <TabsTrigger key={value} value={value} className='flex items-center gap-1 px-2.5 max-sm:w-full sm:px-3'>
                  <Icon />
                  {name}
                </TabsTrigger>
              ))}
            </TabsList>
          </MotionPreset>

          {tabs.map(tab => {
            const IconComponent = tab.content.buttonIcon

            return (
              <TabsContent key={tab.value} value={tab.value}>
                <div className='flex flex-col items-center justify-between gap-11 lg:flex-row'>
                  <MotionPreset fade slide={{ direction: 'down', offset: 70 }} blur transition={{ duration: 0.7 }}>
                    <div className='flex flex-col gap-4 lg:w-2xl'>
                      <Avatar className='border-primary border'>
                        <AvatarFallback className='text-primary bg-transparent [&>svg]:size-4'>
                          <IconComponent />
                        </AvatarFallback>
                      </Avatar>

                      <p className='text-primary font-medium uppercase'>{tab.name}</p>

                      <h3 className='text-card-foreground text-2xl font-semibold'>{tab.content.title}</h3>

                      <p className='text-muted-foreground'>{tab.content.description}</p>

                      <Button className='group w-fit rounded-full text-base has-[>svg]:px-6' size='lg' asChild>
                        <a href={tab.content.documentationLink} target='_blank' rel='noopener noreferrer'>
                          <InstagramIcon className='size-5' />
                          Follow Us on Instagram
                        </a>
                      </Button>
                    </div>
                  </MotionPreset>

                  <MotionPreset fade blur zoom={{ initialScale: 0.75 }} transition={{ duration: 0.7 }}>
                    <img src={tab.content.image} alt={tab.name} className='h-103 w-118 rounded-2xl object-cover' />
                  </MotionPreset>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}

export default Features
