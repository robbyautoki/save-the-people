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

const ImpressumPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <Header navigationData={navigationData} />
      <main className='flex-1 py-16 sm:py-24'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
          <h1 className='mb-12 text-3xl font-bold sm:text-4xl'>Impressum</h1>

          {/* Kontaktadresse */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Kontaktadresse</h2>
            <address className='not-italic text-muted-foreground'>
              <p className='font-medium text-foreground'>Save the People Worldwide</p>
              <p>Katharina Erdem</p>
              <p>Seestr. 194</p>
              <p>8820 Wädenswil</p>
              <p>Kanton Zürich / Schweiz</p>
            </address>
          </section>

          {/* Vertretungsberechtigte Person */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Vertretungsberechtigte Person</h2>
            <p className='text-muted-foreground'>
              Katharina Erdem, Gründerin
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Haftungsausschluss</h2>
            <p className='mb-4 text-muted-foreground'>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
              Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p className='mb-4 text-muted-foreground'>
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
              oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder
              durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p className='text-muted-foreground'>
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
              gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung
              zeitweise oder endgültig einzustellen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Haftung für Links</h2>
            <p className='text-muted-foreground'>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche
              Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf
              eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          {/* Urheberrechte */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Urheberrechte</h2>
            <p className='mb-4 text-muted-foreground'>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website
              gehören ausschliesslich Save the People Worldwide oder den speziell genannten Rechtsinhabern.
            </p>
            <p className='text-muted-foreground'>
              Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus
              einzuholen.
            </p>
          </section>

          {/* Datenschutz */}
          <section className='mb-10'>
            <h2 className='mb-4 text-xl font-semibold'>Datenschutz</h2>
            <p className='mb-4 text-muted-foreground'>
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen
              des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
              Schutz vor Missbrauch ihrer persönlichen Daten.
            </p>
            <p className='mb-4 text-muted-foreground'>
              Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an
              Dritte verkauft noch weitergegeben.
            </p>
            <p className='text-muted-foreground'>
              In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich
              vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
            </p>
          </section>

          {/* Quelle */}
          <section className='border-t pt-8'>
            <p className='text-sm text-muted-foreground'>
              Quelle: <a href='https://www.swissanwalt.ch' target='_blank' rel='noopener noreferrer' className='underline hover:text-foreground'>SwissAnwalt</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ImpressumPage
