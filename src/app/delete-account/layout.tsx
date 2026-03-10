import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Request deletion of your CryBaby account and data.',
  robots: { index: false, follow: false },
}

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
