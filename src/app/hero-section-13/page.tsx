import {
  BookOpenIcon,
  GraduationCapIcon,
  CodeIcon,
  SmartphoneIcon,
  PaletteIcon,
  RocketIcon,
  TrophyIcon,
  AwardIcon,
  UserIcon,
  FileTextIcon,
  ClockIcon
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import Header from '@/components/shadcn-studio/blocks/hero-section-13/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-13/hero-section-13'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-01'

const navigationData: Navigation[] = [
  {
    title: 'Courses',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Popular Courses',
        items: [
          {
            title: 'Web Development',
            href: '#',
            description: 'Learn modern web technologies from scratch',
            icon: <CodeIcon className='size-4' />,
            badge: (
              <Badge className='border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400'>
                Popular
              </Badge>
            )
          },
          {
            title: 'Data Science',
            href: '#',
            description: 'Master data analysis and machine learning',
            icon: <GraduationCapIcon className='size-4' />
          },
          {
            title: 'Mobile Development',
            href: '#',
            description: 'Build native and cross-platform mobile apps',
            icon: <SmartphoneIcon className='size-4' />
          },
          {
            title: 'Design Fundamentals',
            href: '#',
            description: 'UI/UX design principles and best practices',
            icon: <PaletteIcon className='size-4' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Learning Paths',
        items: [
          {
            title: 'Beginner Track',
            href: '#',
            description: 'Start your learning journey with basics',
            icon: <RocketIcon className='size-4' />
          },
          {
            title: 'Advanced Track',
            href: '#',
            description: 'Deep dive into advanced concepts',
            icon: <TrophyIcon className='size-4' />
          },
          {
            title: 'Career Ready',
            href: '#',
            description: 'Get job-ready with industry projects',
            icon: <AwardIcon className='size-4' />
          },
          {
            title: 'Certification Prep',
            href: '#',
            description: 'Prepare for professional certifications',
            icon: <FileTextIcon className='size-4' />
          }
        ]
      }
    ]
  },
  {
    title: 'Docs',
    href: '#'
  },
  {
    title: 'Resources',
    contentClassName: '!w-38',
    items: [
      { title: 'Learning Materials', href: '#' },
      { title: 'Student Support', href: '#' }
    ]
  },
  {
    title: 'Manage Account',
    contentClassName: '!w-70',
    items: [
      {
        title: 'My Learning',
        href: '#',
        description: 'Track your progress and courses',
        icon: <ClockIcon className='size-4' />
      },
      {
        title: 'Certificates',
        href: '#',
        description: 'View and download your certificates',
        icon: <AwardIcon className='size-4' />
      },
      {
        title: 'Profile Settings',
        href: '#',
        description: 'Manage your account preferences',
        icon: <UserIcon className='size-4' />
      },
      {
        title: 'Saved Courses',
        href: '#',
        description: 'Access your bookmarked content',
        icon: <BookOpenIcon className='size-4' />
      }
    ]
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
