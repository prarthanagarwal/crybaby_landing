import Features from '@/sections/features'
import Header from '@/sections/header'
import Showcase from '@/sections/showcase'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'CryBaby',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  description:
    'Track, understand, and celebrate your crying sessions. A unique emotional wellness app.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: undefined,
  author: {
    '@type': 'Person',
    name: 'Prarthan Agarwal',
    url: 'https://prarthanagarwal.me',
  },
  url: 'https://crybaby.app',
  installUrl: [
    'https://apps.apple.com/in/app/crybaby/id6743213528',
    'https://play.google.com/store/apps/details?id=dev.prarthanagarwal.crybaby',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Showcase />
      <Features />
      <Footer />
      <ScrollToTop />
    </>
  )
}
