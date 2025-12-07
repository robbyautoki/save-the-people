'use client'

// React Imports
import { useRef } from 'react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

// SVG Imports
import Logo from '@/assets/svg/logo'

const Collaboration = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLSpanElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='absolute inset-0 z-1 flex w-full flex-col justify-center gap-9.5 px-6'>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span1Ref} className='bg-card flex size-8 shrink-0 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
            alt='avatar'
            className='size-8 rounded-full outline'
          />
        </span>
        <span ref={span4Ref} className='bg-card flex size-8 shrink-0 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png'
            alt='avatar'
            className='size-8 rounded-full outline'
          />
        </span>
      </div>
      <div className='flex items-center justify-between gap-6'>
        <span ref={span2Ref} className='bg-card flex size-8 shrink-0 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png'
            alt='avatar'
            className='size-8 rounded-full outline'
          />
        </span>
        <span ref={logoRef}>
          <Logo className='size-16' />
        </span>
        <span ref={span5Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png'
            alt='avatar'
            className='size-8 shrink-0 rounded-full outline'
          />
        </span>
      </div>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span3Ref} className='bg-card flex size-8 shrink-0 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png'
            alt='avatar'
            className='size-full rounded-full outline'
          />
        </span>
        <span ref={span6Ref} className='bg-card flex size-8 shrink-0 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png'
            alt='avatar'
            className='size-full rounded-full outline'
          />
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span6Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
        reverse
      />
    </div>
  )
}

export default Collaboration
