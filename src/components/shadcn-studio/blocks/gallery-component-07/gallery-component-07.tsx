import { Marquee } from '@/components/ui/marquee'

const Gallery = ({ data }: { data: string[] }) => {
  return (
    <section className='space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Our Impact Around the World</h2>
        <p className='text-muted-foreground text-xl'>
          Real moments from our charity work — bringing hope to communities across the globe.
        </p>
      </div>

      <div className='relative'>
        <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-gradient-to-r to-transparent max-sm:hidden' />
        <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-gradient-to-l to-transparent max-sm:hidden' />
        <div className='w-full overflow-hidden'>
          <Marquee pauseOnHover duration={20} gap={1.5}>
            {data.slice(0, 6).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className='h-68.5 w-67 rounded-lg' />
            ))}
          </Marquee>
        </div>
        <div className='w-full overflow-hidden'>
          <Marquee pauseOnHover duration={20} gap={1.5} reverse>
            {data.slice(6).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className='h-68.5 w-67 rounded-lg' />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Gallery
