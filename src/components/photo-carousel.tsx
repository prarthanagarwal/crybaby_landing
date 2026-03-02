'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Updated screenshots data to point to the correct path
const screenshots = [
  {
    id: 1,
    src: '/screencaps/IMG_0077.PNG',
    alt: 'CryBaby App Dashboard',
  },
  {
    id: 2,
    src: '/screencaps/IMG_0078.PNG',
    alt: 'CryBaby App Mood Tracking',
  },
  {
    id: 3,
    src: '/screencaps/IMG_0079.PNG',
    alt: 'CryBaby App Journal Feature',
  },
  {
    id: 4,
    src: '/screencaps/IMG_0080.PNG',
    alt: 'CryBaby App Analytics',
  },
  {
    id: 5,
    src: '/screencaps/IMG_0081.PNG',
    alt: 'CryBaby App User Profile',
  },
  {
    id: 6,
    src: '/screencaps/IMG_0082.PNG',
    alt: 'CryBaby App Settings',
  },
  {
    id: 7,
    src: '/screencaps/IMG_0083.PNG',
    alt: 'CryBaby App Statistics',
  },
  {
    id: 8,
    src: '/screencaps/IMG_0084.PNG',
    alt: 'CryBaby App Calendar View',
  },
  {
    id: 9,
    src: '/screencaps/screenshot 1.PNG',
    alt: 'CryBaby App Overview',
  },
]

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    )
  }

  // Function to get the indices for the three visible images
  const getVisibleIndices = () => {
    const totalImages = screenshots.length

    // Previous image (left)
    const prevIndex = activeIndex === 0 ? totalImages - 1 : activeIndex - 1

    // Current image (center)
    const currentIndex = activeIndex

    // Next image (right)
    const nextIndex = activeIndex === totalImages - 1 ? 0 : activeIndex + 1

    return [prevIndex, currentIndex, nextIndex]
  }

  const [prevIndex, currentIndex, nextIndex] = getVisibleIndices()

  // Calculate aspect ratio for iPhone screenshots (1200 x 2500 = 0.48)
  const aspectRatio = 1200 / 2500

  return (
    <div className="relative px-4 py-2">
      {/* Main carousel container */}
      <div className="relative mx-auto flex h-auto max-w-5xl items-center justify-center overflow-hidden py-4">
        {/* Previous image (left, blurred) */}
        <div className="absolute left-0 z-10 hidden sm:flex h-full w-1/3 items-center justify-center overflow-hidden px-2">
          <div
            className="relative w-full overflow-hidden rounded-base border-2 border-black opacity-50 blur-[1px] transition-all"
            style={{
              height: '450px',
              width: `${450 * aspectRatio}px` // Width based on aspect ratio
            }}
          >
            <Image
              src={screenshots[prevIndex].src}
              alt={screenshots[prevIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Current image (center, focused) */}
        <div
          className="border-border dark:border-darkBorder shadow-light dark:shadow-dark relative z-20 flex items-center justify-center overflow-hidden rounded-base border-4 bg-white"
        >
          {/* Responsive container for both mobile and desktop */}
          <div
            className="relative h-[450px] w-[var(--w-mobile)] max-h-[80vh] max-w-[80vw] sm:h-[600px] sm:w-[var(--w-desktop)] sm:max-h-none sm:max-w-none"
            style={{
              '--w-mobile': `${450 * aspectRatio}px`,
              '--w-desktop': `${600 * aspectRatio}px`,
            } as React.CSSProperties}
          >
            <Image
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Next image (right, blurred) */}
        <div className="absolute right-0 z-10 hidden sm:flex h-full w-1/3 items-center justify-center overflow-hidden px-2">
          <div
            className="relative w-full overflow-hidden rounded-base border-2 border-black opacity-50 blur-[1px] transition-all"
            style={{
              height: '450px',
              width: `${450 * aspectRatio}px` // Width based on aspect ratio
            }}
          >
            <Image
              src={screenshots[nextIndex].src}
              alt={screenshots[nextIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Navigation buttons - hidden on mobile */}
      <button
        onClick={prevImage}
        className="border-border dark:border-darkBorder shadow-light dark:shadow-dark absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 bg-white p-2 dark:bg-secondaryBlack transition-transform active:translate-x-[3px] active:translate-y-[2px] active:shadow-none hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextImage}
        className="border-border dark:border-darkBorder shadow-light dark:shadow-dark absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 bg-white p-2 dark:bg-secondaryBlack transition-transform active:translate-x-[3px] active:translate-y-[2px] active:shadow-none hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination indicators */}
      <div className="mt-2 flex justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-3 w-3 rounded-full border-2 border-black transition-transform active:scale-90",
              activeIndex === index
                ? "bg-main"
                : "bg-gray-200"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 