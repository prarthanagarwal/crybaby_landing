import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the terms and conditions for using the CryBaby application.',
  alternates: { canonical: '/terms' },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg py-20">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark rounded-base border-2 bg-white p-8">
          <h1 className="text-4xl font-heading mb-8">📜 CryBaby Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-heading mt-8 mb-4">1. Service Terms</h2>
            <h3 className="text-xl font-heading mt-6 mb-3">1.1 Acceptance of Terms</h3>
            <p className="mb-4">
              By accessing or using the CryBaby application (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access or use the App.
            </p>

            <h3 className="text-xl font-heading mt-6 mb-3">1.2 User Eligibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>You must be at least 13 years of age to use the App</li>
              <li>If you are under 18, you must have parental consent</li>
              <li>You must be able to form a legally binding contract</li>
              <li>You must not be barred from using the App under applicable law</li>
            </ul>

            <h2 className="text-2xl font-heading mt-8 mb-4">2. User Guidelines</h2>
            <h3 className="text-xl font-heading mt-6 mb-3">2.1 Acceptable Use</h3>
            <p className="mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Use the App for personal purposes</li>
              <li>Respect privacy settings</li>
              <li>Follow community guidelines</li>
            </ul>

            <h2 className="text-2xl font-heading mt-8 mb-4">3. Achievement System Rules</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Achievements must be earned legitimately</li>
              <li>Manipulation of achievement systems is prohibited</li>
              <li>Achievement progress cannot be transferred</li>
              <li>Some achievements may be time-limited</li>
            </ul>

            <h2 className="text-2xl font-heading mt-8 mb-4">4. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms:<br />
              Email: legal@crybaby.app<br />
              Website: www.crybaby.app/legal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 