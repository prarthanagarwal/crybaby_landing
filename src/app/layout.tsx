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
  title: 'CryBaby — Track, Understand & Celebrate Your Tears',
  description:
    'CryBaby is a unique mobile app that helps you track, understand, and find joy in your crying sessions. Available on iOS and Android.',
  metadataBase: new URL('https://crybaby.app'),
  openGraph: {
    title: 'CryBaby — Track, Understand & Celebrate Your Tears',
    description:
      'Turn your emotional moments into a journey of self-discovery.',
    siteName: 'CryBaby',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryBaby',
    description:
      'Turn your emotional moments into a journey of self-discovery.',
    creator: '@prarthanagarwal',
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
