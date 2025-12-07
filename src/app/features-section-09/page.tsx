import { ProportionsIcon, ShieldCheckIcon, ChartSplineIcon, CloudUploadIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-09/features-section-09'

const tabsData = [
  {
    name: 'Upload Files',
    icon: CloudUploadIcon,
    value: 'upload-files',
    content: {
      buttonIcon: CloudUploadIcon,
      title: 'Upload files Easy-peasy',
      description:
        'Effortlessly upload your files using our intuitive drag-and-drop interface or by simply clicking to select files. Enjoy a secure, fast upload process with real-time progress indicators and automatic file type validation for a seamless experience.',
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-6.png',
      documentationLink: '#'
    }
  },
  {
    name: 'Email Notifications',
    icon: ProportionsIcon,
    value: 'email-notifications',
    content: {
      buttonIcon: ProportionsIcon,
      title: 'Email Notification Super simple!',
      description:
        'You can easily upload your files through our user-friendly drag-and-drop feature or by clicking to choose files. Experience a secure and speedy upload process with real-time progress updates and automatic validation of file types for a smooth experience.',
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-15.png',
      documentationLink: '#'
    }
  },
  {
    name: 'Field Validations',
    icon: ShieldCheckIcon,
    value: 'field-validations',
    content: {
      buttonIcon: ShieldCheckIcon,
      title: 'Validation Alert Please check all fields!',
      description:
        'You can easily upload your files through our user-friendly drag-and-drop feature or by clicking to choose files. Experience a secure and speedy upload process with real-time progress updates and automatic validation of file types for a smooth experience.',
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-10.png',
      documentationLink: '#'
    }
  },
  {
    name: 'Auto Responses',
    icon: ChartSplineIcon,
    value: 'auto-responses',
    content: {
      buttonIcon: ChartSplineIcon,
      title: 'Check fields for accuracy!',
      description:
        'Thank you for reaching out! You can quickly upload your files using our simple drag-and-drop feature or by selecting files with a click. Enjoy a fast and secure upload process with real-time progress updates and automatic file type validation for a hassle-free experience.',
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-9.png',
      documentationLink: '#'
    }
  }
]

const FeaturesPage = () => {
  return <Features tabs={tabsData} />
}

export default FeaturesPage
