'use client'

import { Button } from '@/components/ui/button'

const EmailButton = ({ type, children }: { type: string; children: React.ReactNode }) => {
  const handleClick = () => {
    window.location.href = `mailto:${type}@crybaby.app?subject=${type.charAt(0).toUpperCase() + type.slice(1)} Request`
  }

  return (
    <Button
      variant="neutral"
      className="w-full hover:-translate-y-1 transition-transform"
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default function Feedback() {
  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg py-10 sm:py-16">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark rounded-base border-2 bg-white p-8">
          <h1 className="text-4xl font-heading mb-6 text-center">💭 Share Your Thoughts</h1>
          
          <div className="max-w-[600px] mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
              Your feedback helps make CryBaby better! Whether you have a feature request, found a bug, 
              or just want to share your experience, we&apos;re all ears.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="border-2 border-black rounded-base p-6 shadow-light dark:shadow-dark">
                <h3 className="text-xl font-heading mb-3 flex items-center gap-2">
                  <span>✨</span>
                  Feature Requests
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Have an idea that would make CryBaby even better? We&apos;d love to hear it!
                </p>
                <EmailButton type="features">
                  Suggest Feature
                </EmailButton>
              </div>

              <div className="border-2 border-black rounded-base p-6 shadow-light dark:shadow-dark">
                <h3 className="text-xl font-heading mb-3 flex items-center gap-2">
                  <span>🐛</span>
                  Bug Reports
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Found something not working as expected? Help us fix it!
                </p>
                <EmailButton type="bugs">
                  Report Bug
                </EmailButton>
              </div>

              <div className="border-2 border-black rounded-base p-6 shadow-light dark:shadow-dark">
                <h3 className="text-xl font-heading mb-3 flex items-center gap-2">
                  <span>💌</span>
                  General Feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Want to share your experience or have other thoughts? We&apos;re listening!
                </p>
                <EmailButton type="feedback">
                  Share Feedback
                </EmailButton>
              </div>
            </div>

            <div className="border-2 border-dashed border-black/20 rounded-base p-6">
              <h3 className="text-xl font-heading mb-3">Other Ways to Connect</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:contact@crybaby.app" className="underline hover:text-black dark:hover:text-white transition-colors">contact@crybaby.app</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>🌐</span>
                  <a href="https://x.com/prarthanagarwal" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">Twitter: @prarthanagarwal</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>💻</span>
                  <a href="https://github.com/prarthanagarwal" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">GitHub: prarthanagarwal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 