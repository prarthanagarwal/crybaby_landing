import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123')

export async function POST(request: Request) {
  try {
    const { email, reason } = await request.json()

    // Basic validation
    if (!email || !reason) {
      return NextResponse.json(
        { error: 'Email and reason are required' },
        { status: 400 }
      )
    }

    // Get the reason label from the ID
    const reasons = {
      'too-happy': "I&apos;m too happy now 🌈",
      'found-therapist': "Found a real therapist (traitor! 😤)",
      'no-more-tears': "Ran out of tears to cry 💧",
      'cat-therapist': "My cat is a better therapist 🐱",
      'other': "Other (it&apos;s not you, it&apos;s me... 💔)",
    }

    const reasonLabel = reasons[reason as keyof typeof reasons] || reason

    // Create a nicely formatted email
    const emailContent = `
🚨 Delete Account Request

👤 User Details
---------------
Email: ${email}
Reason: ${reasonLabel}

⏰ Request Time: ${new Date().toLocaleString()}

This is an automated message from CryBaby.
Please review and process this deletion request.

Note: This user's data should be handled according to our privacy policy and data retention guidelines.
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'CryBaby <onboarding@resend.dev>',
      to: 'assistance.crybaby@gmail.com',
      subject: `🗑️ Delete Account Request - ${email}`,
      text: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send email')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete account error:', error)
    return NextResponse.json(
      { error: 'Failed to process delete request' },
      { status: 500 }
    )
  }
} 