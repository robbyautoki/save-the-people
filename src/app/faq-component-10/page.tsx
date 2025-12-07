import FAQ from '@/components/shadcn-studio/blocks/faq-component-10/faq-component-10'

const faqData = [
  {
    question: 'What services does your travel agency provide?',
    answer:
      "We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance, and customized itineraries. Whether you're planning a vacation, romantic getaway, or business trip, we've got you covered!"
  },
  {
    question: 'Can you help with group travel arrangements?',
    answer:
      'Absolutely! We specialize in group travel and can coordinate everything from transportation to accommodations and activities, ensuring a seamless experience for everyone involved.'
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit cards, debit cards, PayPal, and bank transfers to provide flexibility for our customers.'
  },
  {
    question: 'Do you assist with travel insurance?',
    answer:
      'Yes, we provide assistance in selecting and purchasing travel insurance to ensure that our clients are covered for unexpected events.'
  },
  {
    question: 'Can you help with group travel arrangements?',
    answer:
      'Absolutely! We specialize in group travel arrangements, offering tailored packages for corporate events, family gatherings, and school trips.'
  },
  {
    question: 'Do you offer any travel discounts or promotions?',
    answer:
      'Yes, we frequently have special offers and discounts on various travel packages, including early booking discounts, group rates, and seasonal promotions. Be sure to subscribe to our newsletter to stay updated!'
  },
  {
    question: 'How can I contact your agency for more information?',
    answer:
      'You can reach us through our website, by phone, or via email. Our customer service team is available to assist you with any inquiries and provide the information you need.'
  },
  {
    question: 'What payment options do you accept?',
    answer:
      'We accept various payment methods including credit cards, PayPal, and bank transfers. Our aim is to make the payment process as convenient as possible for our clients.'
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "Our cancellation policy varies depending on the service booked. Generally, we offer flexible cancellation options, but it's always best to check the specific terms for your booking to understand any fees or conditions."
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqData} />
}

export default FAQPage
