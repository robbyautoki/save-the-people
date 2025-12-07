import Header from '@/components/shadcn-studio/blocks/hero-section-03/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-03/hero-section-03'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import type { AvatarItem } from '@/components/shadcn-studio/blocks/hero-section-03/hero-section-03'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const avatars: AvatarItem[] = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Howard Lloyd',
    fallback: 'HL'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Jenny Wilson',
    fallback: 'JW'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Hallie Richards',
    fallback: 'HR'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection avatars={avatars} />
      </main>
    </div>
  )
}

export default HeroSectionPage
