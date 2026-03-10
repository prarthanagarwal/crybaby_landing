import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from '@/components/navbar'
import { PageWrapper } from '@/components/page-wrapper'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://crybaby.app'),
  title: {
    default: 'CryBaby — Track, Understand & Celebrate Your Tears',
    template: '%s | CryBaby',
  },
  description:
    'CryBaby is a unique mobile app that helps you track, understand, and find joy in your crying sessions. Available on iOS and Android.',
  keywords: [
    'CryBaby',
    'crying tracker',
    'emotional wellness',
    'mood tracker',
    'mental health app',
    'self-discovery',
    'iOS app',
    'Android app',
    'cry journal',
    'emotional health',
  ],
  authors: [{ name: 'Prarthan Agarwal', url: 'https://prarthanagarwal.me' }],
  creator: 'Prarthan Agarwal',
  publisher: 'CryBaby',
  applicationName: 'CryBaby',
  category: 'Health & Wellness',
  openGraph: {
    title: 'CryBaby — Track, Understand & Celebrate Your Tears',
    description:
      'Turn your emotional moments into a journey of self-discovery. Track your crying sessions, unlock achievements, and understand your patterns.',
    siteName: 'CryBaby',
    locale: 'en_US',
    type: 'website',
    url: 'https://crybaby.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryBaby — Track, Understand & Celebrate Your Tears',
    description:
      'Turn your emotional moments into a journey of self-discovery.',
    creator: '@prarthanagarwal',
    site: '@prarthanagarwal',
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/images/site.webmanifest',
  alternates: {
    canonical: 'https://crybaby.app',
  },
  appLinks: {
    ios: {
      app_store_id: '6743213528',
      app_name: 'CryBaby',
      url: 'https://apps.apple.com/in/app/crybaby/id6743213528',
    },
    android: {
      package: 'dev.prarthanagarwal.crybaby',
      app_name: 'CryBaby',
      url: 'https://play.google.com/store/apps/details?id=dev.prarthanagarwal.crybaby',
    },
    web: {
      url: 'https://crybaby.app',
      should_fallback: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} bg-bg dark:bg-darkBg`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="crybaby-theme"
        >
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
          <ThemeSwitcher />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
