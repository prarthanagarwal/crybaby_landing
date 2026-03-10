'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const reasons = [
  { id: 'too-happy', label: "I am too happy now 🌈" },
  { id: 'found-therapist', label: "Found a real therapist (traitor! 😤)" },
  { id: 'no-more-tears', label: "Ran out of tears to cry 💧" },
  { id: 'cat-therapist', label: "My cat is a better therapist 🐱" },
  { id: 'other', label: "Other (it's not you, it's me... 💔)" },
]

export default function DeleteAccount() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, reason }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit request')
      }

      setStatus('success')
      setEmail('')
      setReason('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg container mx-auto px-4 py-10 sm:py-16 max-w-2xl">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="text-4xl font-bold mb-2">Goodbye Friend 👋</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">We&apos;ll miss your emotional moments...</p>

        {status === 'success' ? (
          <div className="text-center p-8 space-y-4">
            <h2 className="text-2xl font-bold text-green-500">Request Submitted! 📧</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We&apos;ve received your request and will process it soon. You&apos;ll receive a confirmation email shortly.
            </p>
            <Button
              onClick={() => setStatus('idle')}
              className="mt-4 bg-black hover:bg-gray-800 text-white"
            >
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-bold">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                placeholder="your@email.com"
                disabled={status === 'loading'}
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-bold">Why are you leaving us? 😢</Label>
              <RadioGroup 
                value={reason} 
                onValueChange={setReason} 
                className="space-y-3"
                disabled={status === 'loading'}
              >
                {reasons.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.id}
                      id={item.id}
                      className="border-2 border-black dark:border-white"
                    />
                    <Label htmlFor={item.id} className="text-base">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {status === 'error' && (
              <div className="p-4 border-2 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-base text-red-600 dark:text-red-400">
                {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-red-500 hover:bg-red-600 text-white border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Processing... 🤔' : 'Delete My Account 😭'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
} 