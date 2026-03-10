import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how CryBaby collects, uses, and protects your personal data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg py-20">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark rounded-base border-2 bg-white p-8">
          <h1 className="text-4xl font-heading mb-8">🔒 CryBaby Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-heading mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              CryBaby (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>

            <h2 className="text-2xl font-heading mt-8 mb-4">2. Data Collection</h2>
            <h3 className="text-xl font-heading mt-6 mb-3">2.1 Information We Collect</h3>
            <h4 className="text-lg font-heading mt-4 mb-2">Account Information</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Google account email</li>
              <li>Display name</li>
              <li>Profile settings</li>
              <li>Account preferences</li>
            </ul>

            <h4 className="text-lg font-heading mt-4 mb-2">Crying Session Data</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Duration of sessions</li>
              <li>Volume levels</li>
              <li>Emotion tags</li>
              <li>Timestamps</li>
              <li>Optional notes and photos</li>
              <li>Location (if enabled)</li>
            </ul>

            <h2 className="text-2xl font-heading mt-8 mb-4">3. Data Protection</h2>
            <p className="mb-4">
              We implement robust security measures to protect your data, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>End-to-end encryption</li>
              <li>Secure authentication</li>
              <li>Regular security audits</li>
              <li>Access controls</li>
            </ul>

            <h2 className="text-2xl font-heading mt-8 mb-4">4. Contact Information</h2>
            <p className="mb-4">
              For privacy-related inquiries:<br />
              Email: privacy@crybaby.app<br />
              Website: www.crybaby.app/privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 