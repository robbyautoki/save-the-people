import { HeartIcon, UsersIcon, HomeIcon, HandshakeIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-30/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-30/hero-section-30'
import SocialProof from '@/components/shadcn-studio/blocks/social-proof-05/social-proof-05'
import Features from '@/components/shadcn-studio/blocks/features-section-09/features-section-09'
import FAQ from '@/components/shadcn-studio/blocks/faq-component-10/faq-component-10'
import Footer from '@/components/shadcn-studio/blocks/footer-component-04/footer-component-04'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Our Impact',
    href: '#impact'
  },
  {
    title: 'Mission',
    href: '#mission'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]

const testimonials = [
  {
    name: 'Volunteer',
    avatar: '/WhatsApp Image 2025-12-07 at 14.04.30 (1).jpeg',
    title: 'Together we change lives'
  },
  {
    name: 'Supporter',
    avatar: '/WhatsApp Image 2025-12-07 at 14.04.30 (2).jpeg',
    title: 'Every bit of help counts'
  },
  {
    name: 'Helper',
    avatar: '/WhatsApp Image 2025-12-07 at 14.04.30 (3).jpeg',
    title: 'Hope for children worldwide'
  },
  {
    name: 'Partner',
    avatar: '/WhatsApp Image 2025-12-07 at 14.04.30 (4).jpeg',
    title: 'Together we are strong'
  },
  {
    name: 'Donor',
    avatar: '/WhatsApp Image 2025-12-07 at 14.04.30 (5).jpeg',
    title: 'Giving smiles to those in need'
  }
]

const tabsData = [
  {
    name: 'Food Distribution',
    icon: HeartIcon,
    value: 'food',
    content: {
      buttonIcon: HeartIcon,
      title: 'Feeding Children Every Day',
      description: 'We provide nutritious meals to children in need, ensuring they have the energy to learn, play, and grow. Every meal is prepared with care and distributed with love.',
      image: '/WhatsApp Image 2025-12-07 at 14.04.30 (1).jpeg',
      documentationLink: 'https://instagram.com/save_the_people_worldwide'
    }
  },
  {
    name: 'Community Support',
    icon: UsersIcon,
    value: 'community',
    content: {
      buttonIcon: UsersIcon,
      title: 'Building Stronger Communities',
      description: 'We work hand-in-hand with local communities to create sustainable support systems. Together, we empower families and neighborhoods to thrive.',
      image: '/WhatsApp Image 2025-12-07 at 14.04.30 (2).jpeg',
      documentationLink: 'https://instagram.com/save_the_people_worldwide'
    }
  },
  {
    name: 'Shelter & Care',
    icon: HomeIcon,
    value: 'shelter',
    content: {
      buttonIcon: HomeIcon,
      title: 'Providing Safe Spaces',
      description: 'Every child deserves a safe place to call home. We work to provide shelter, protection, and care for those who need it most.',
      image: '/WhatsApp Image 2025-12-07 at 14.04.30 (3).jpeg',
      documentationLink: 'https://instagram.com/save_the_people_worldwide'
    }
  },
  {
    name: 'Partnership',
    icon: HandshakeIcon,
    value: 'partnership',
    content: {
      buttonIcon: HandshakeIcon,
      title: 'Working Together for Change',
      description: 'Through partnerships with local organizations and volunteers worldwide, we multiply our impact and reach more people in need.',
      image: '/WhatsApp Image 2025-12-07 at 14.04.30 (4).jpeg',
      documentationLink: 'https://instagram.com/save_the_people_worldwide'
    }
  }
]

const faqData = [
  {
    question: 'How can I help?',
    answer: 'There are many ways to help! You can follow us on Instagram to spread awareness, share our posts, or simply show love and support to those in need. Every gesture counts.'
  },
  {
    question: 'Where do donations go?',
    answer: 'Every donation goes directly to helping children and families in need. We use funds for food distribution, shelter support, healthcare, and emergency relief programs.'
  },
  {
    question: 'How do you distribute food?',
    answer: 'We work with local partners and volunteers to distribute nutritious meals directly to children and families. Our team ensures food reaches those who need it most, with care and dignity.'
  },
  {
    question: 'Can I volunteer?',
    answer: 'Yes! We welcome volunteers from all over the world. Whether you can help locally or remotely, there is always a way to contribute. Reach out to us on Instagram to learn more.'
  },
  {
    question: 'Which countries do you operate in?',
    answer: 'We operate in multiple countries across Africa, Asia, and the Middle East. Our reach continues to grow as we partner with local organizations to help more communities.'
  },
  {
    question: 'How can I stay updated?',
    answer: 'Follow us on Instagram @save_the_people_worldwide for daily updates, stories from the field, and ways to get involved. Your support means everything to us.'
  }
]

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <Header navigationData={navigationData} />
      <main className='flex flex-col'>
        <HeroSection testimonials={testimonials} />
        <SocialProof />
        <Features tabs={tabsData} />
        <FAQ faqItems={faqData} />
      </main>
      <Footer />
    </div>
  )
}
