import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Share Feedback',
  description:
    'Help make CryBaby better — submit feature requests, bug reports, or general feedback.',
  alternates: { canonical: '/feedback' },
}

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
