import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg py-10 sm:py-16">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark rounded-base border-2 bg-white p-8 text-center">
          <h1 className="text-4xl font-heading mb-6">📝 Blog</h1>
          
          <div className="max-w-[600px] mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-heading mb-4">Coming Soon!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We&apos;re preparing some amazing content about emotional well-being, the science of crying, 
                and stories from our community. Stay tuned!
              </p>
            </div>

            <div className="border-2 border-dashed border-black/20 rounded-base p-6 mb-8">
              <h3 className="text-xl font-heading mb-4">What to Expect</h3>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-xl">🎭</span>
                  <span>Personal stories and experiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🧠</span>
                  <span>The psychology of emotional release</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  <span>Tips for emotional well-being</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <span>Achievement showcases</span>
                </li>
              </ul>
            </div>

            <Link href="/" className="block">
              <Button
                size="lg"
                variant="neutral"
                className="w-full max-w-sm font-heading"
              >
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 