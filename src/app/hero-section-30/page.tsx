import Header from '@/components/shadcn-studio/blocks/hero-section-30/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-30/hero-section-30'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

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
    title: 'About us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const testimonials = [
  {
    name: 'Zain Vetrovs',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    title: 'Enhanced Learning Experience'
  },
  {
    name: 'Sarah Johnson',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    title: 'Outstanding Design System'
  },
  {
    name: 'Michael Chen',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    title: 'Developer Experience Excellence'
  },
  {
    name: 'Emily Rodriguez',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    title: 'The platform saved me weeks of hiring struggles.'
  },
  {
    name: 'David Kim',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    title: 'Found a designer in 2 hours  amazing experience'
  },
  {
    name: 'Alex Turner',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    title: 'Hired my dream team without endless interviews.'
  },
  {
    name: 'Lisa Park',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    title: 'Transparent, quick, and full of talented professionals.'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection testimonials={testimonials} />
      </main>
    </div>
  )
}

export default HeroSectionPage
