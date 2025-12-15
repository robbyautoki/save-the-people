import Header from '@/components/shadcn-studio/blocks/hero-section-30/header'
import Footer from '@/components/shadcn-studio/blocks/footer-component-04/footer-component-04'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'About',
    href: '/#about'
  },
  {
    title: 'Our Impact',
    href: '/#impact'
  },
  {
    title: 'Mission',
    href: '/#mission'
  },
  {
    title: 'Contact',
    href: '/#contact'
  }
]

const ImprintPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <Header navigationData={navigationData} />
      <main className='flex-1 py-16 sm:py-24'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
          <h1 className='mb-12 text-3xl font-bold sm:text-4xl'>Imprint</h1>

          {/* Contact Address */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Contact Address</h2>
            <address className='not-italic text-muted-foreground'>
              <p className='font-medium text-foreground'>Save the People Worldwide</p>
              <p>Katharina Erdem</p>
              <p>Seestr. 194</p>
              <p>8820 Wädenswil</p>
              <p>Canton of Zurich / Switzerland</p>
            </address>
          </section>

          {/* Authorized Representative */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Authorized Representative</h2>
            <p className='text-muted-foreground'>
              Katharina Erdem, Founder
            </p>
          </section>

          {/* Disclaimer */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Disclaimer</h2>
            <p className='mb-4 text-muted-foreground'>
              The author assumes no responsibility for the accuracy, correctness, timeliness,
              reliability, or completeness of the information provided.
            </p>
            <p className='mb-4 text-muted-foreground'>
              Liability claims against the author for material or immaterial damages resulting from
              access to or use or non-use of the published information, through misuse of the connection,
              or due to technical malfunctions are excluded.
            </p>
            <p className='text-muted-foreground'>
              All offers are non-binding. The author expressly reserves the right to change, supplement,
              or delete parts of the pages or the entire offer without prior notice, or to temporarily
              or permanently cease publication.
            </p>
          </section>

          {/* Liability for Links */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Liability for Links</h2>
            <p className='text-muted-foreground'>
              References and links to third-party websites are outside our area of responsibility.
              Any responsibility for such websites is declined. Access to and use of such websites
              is at the user&apos;s own risk.
            </p>
          </section>

          {/* Copyright */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Copyright</h2>
            <p className='mb-4 text-muted-foreground'>
              The copyright and all other rights to content, images, photos, or other files on this
              website belong exclusively to Save the People Worldwide or the specifically named rights holders.
            </p>
            <p className='text-muted-foreground'>
              Written consent from the copyright holders must be obtained in advance for the reproduction
              of any elements.
            </p>
          </section>

          {/* Data Protection */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Data Protection</h2>
            <p className='mb-4 text-muted-foreground'>
              Based on Article 13 of the Swiss Federal Constitution and the data protection provisions
              of the Swiss Confederation (Data Protection Act, DSG), every person has the right to protection
              of their privacy and protection against misuse of their personal data.
            </p>
            <p className='mb-4 text-muted-foreground'>
              We comply with these provisions. Personal data is treated strictly confidentially and is
              neither sold nor passed on to third parties.
            </p>
            <p className='text-muted-foreground'>
              In close cooperation with our hosting providers, we strive to protect the databases as
              well as possible against unauthorized access, loss, misuse, or falsification.
            </p>
          </section>

          {/* Source */}
          <section className='border-t pt-8'>
            <p className='text-sm text-muted-foreground'>
              Source: <a href='https://www.swissanwalt.ch' target='_blank' rel='noopener noreferrer' className='underline hover:text-foreground'>SwissAnwalt</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ImprintPage
