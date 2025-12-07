import * as motion from 'motion/react-client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import Collaboration from '@/components/shadcn-studio/blocks/bento-grid-07/collaboration'
import WorkflowAutomation from '@/components/shadcn-studio/blocks/bento-grid-07/workflow-automation'
import SmartData from '@/components/shadcn-studio/blocks/bento-grid-07/smart-data'
import ShieldCheck from '@/assets/svg/shield-check'

const BentoGrid = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-4 text-center'>
          <MotionPreset
            component='h2'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
          >
            What We Do
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} delay={0.3} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground text-xl'>
              From food to healthcare — we bring hope and support to communities in need across the globe.
            </p>
          </MotionPreset>
        </div>

        <MotionPreset fade blur transition={{ duration: 0.5 }} delay={0.6}>
          <div className='bg-muted grid grid-cols-1 gap-6 rounded-xl p-6 max-sm:p-2 sm:grid-cols-2 lg:grid-cols-6'>
            {/* Smart Data Insights */}
            <MotionPreset
              fade
              blur
              slide={{ offset: 15 }}
              transition={{ duration: 0.5 }}
              className='h-full sm:col-span-2 lg:col-span-3'
              delay={0.7}
            >
              <Card className='border-none shadow-none'>
                <CardContent>
                  <SmartData />
                </CardContent>
                <CardHeader className='mt-4 gap-4'>
                  <CardTitle className='text-2xl'>Food & Nutrition</CardTitle>
                  <CardDescription className='text-lg font-medium'>
                    Providing essential meals and nutrition support to children and families in need.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Modular Dashboards */}
            <MotionPreset
              fade
              blur
              slide={{ offset: 15 }}
              transition={{ duration: 0.5 }}
              className='h-full lg:col-span-3'
              delay={0.85}
            >
              <Card className='justify-between border-none shadow-none lg:col-span-3'>
                <CardContent>
                  <div className='max-h-90 w-full overflow-hidden rounded-lg'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-1.png'
                      alt='Modular Dashboards'
                      className='w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105 dark:invert'
                    />
                  </div>
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Healthcare Support</CardTitle>
                  <CardDescription className='text-lg font-medium'>
                    Supporting hospitals, clinics, and providing emergency medical care to underserved communities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Live Collaboration */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              transition={{ duration: 0.5 }}
              className='h-full lg:col-span-2'
              delay={1}
            >
              <Card className='h-full justify-between border-none shadow-none'>
                <CardContent className='relative flex h-60 w-full items-center justify-center'>
                  <motion.svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 247 247'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-61.5'
                    initial='hidden'
                    animate='visible'
                  >
                    <motion.circle
                      strokeOpacity={0.2}
                      cx='123.5'
                      cy='123.5'
                      r='122.31'
                      fill='var(--card)'
                      stroke='var(--border)'
                      strokeWidth='1.62'
                      variants={{
                        visible: {
                          scale: [1, 0.85, 1],
                          transition: {
                            scale: { duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                          }
                        }
                      }}
                    />
                    <motion.circle
                      strokeOpacity={0.4}
                      cx='123.5'
                      cy='123.5'
                      r='104.69'
                      fill='var(--card)'
                      stroke='var(--border)'
                      strokeWidth='1.35'
                      variants={{
                        visible: {
                          scale: [1, 0.85, 1],
                          transition: {
                            scale: { delay: 0.12, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                          }
                        }
                      }}
                    />
                    <motion.circle
                      strokeOpacity={0.6}
                      cx='123.5'
                      cy='123.5'
                      r='87.3127'
                      fill='var(--card)'
                      stroke='var(--border)'
                      strokeWidth='1.125'
                      variants={{
                        visible: {
                          scale: [1, 0.85, 1],
                          transition: {
                            scale: { delay: 0.24, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                          }
                        }
                      }}
                    />
                    <motion.circle
                      strokeOpacity={0.8}
                      cx='123.5'
                      cy='123.5'
                      r='69.8801'
                      fill='var(--card)'
                      stroke='var(--border)'
                      strokeWidth='1.125'
                      variants={{
                        visible: {
                          scale: [1, 0.85, 1],
                          transition: {
                            scale: { delay: 0.36, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                          }
                        }
                      }}
                    />
                    <motion.circle
                      strokeOpacity={1}
                      cx='123.5'
                      cy='123.5'
                      r='53.0625'
                      fill='var(--card)'
                      stroke='var(--border)'
                      strokeWidth='1.125'
                      variants={{
                        visible: {
                          scale: [1, 0.85, 1],
                          transition: {
                            scale: { delay: 0.48, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  <Collaboration />
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Community & Collaboration</CardTitle>
                  <CardDescription className='text-lg font-medium'>
                    Building networks of volunteers and supporters to reach those who need help most.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Workflow Automation */}
            <MotionPreset
              fade
              blur
              slide={{ offset: 15 }}
              transition={{ duration: 0.5 }}
              className='h-full lg:col-span-2'
              delay={1.15}
            >
              <Card className='h-full justify-between border-none shadow-none lg:col-span-2'>
                <CardContent>
                  <WorkflowAutomation />
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Emergency Response</CardTitle>
                  <CardDescription className='text-lg font-medium'>
                    Fast-response aid in crisis situations — delivering help when it matters most.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Integrated Data Security */}
            <MotionPreset
              fade
              blur
              slide={{ offset: 15 }}
              transition={{ duration: 0.5 }}
              className='h-full lg:col-span-2'
              delay={1.3}
            >
              <Card className='h-full justify-between border-none shadow-none lg:col-span-2'>
                <CardContent className='flex items-center'>
                  <ShieldCheck className='max-h-50 w-full sm:max-h-69' />
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Protection & Safety</CardTitle>
                  <CardDescription className='text-lg font-medium'>
                    Creating safe spaces where every child is seen, supported, and protected.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
