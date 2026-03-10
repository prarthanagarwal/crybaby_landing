'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const screenshots = [
  { id: 1, src: '/screencaps/1.webp', alt: 'Log your Cry — emotion picker and intensity slider' },
  { id: 2, src: '/screencaps/2.webp', alt: 'Session details — timing, relief level, journal entry' },
  { id: 3, src: '/screencaps/3.webp', alt: 'Achievement unlocked celebration with confetti' },
  { id: 4, src: '/screencaps/4.webp', alt: 'Time Machine history and Memory Lane calendar' },
  { id: 5, src: '/screencaps/5.webp', alt: 'Lock screen wellness check-in notifications' },
  { id: 6, src: '/screencaps/6.webp', alt: 'Trophy Case — gold, silver, and bronze progress' },
]

type Pos = 'left' | 'center' | 'right' | 'hidden'

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const total = screenshots.length
  const prevIdx = activeIndex === 0 ? total - 1 : activeIndex - 1
  const nextIdx = activeIndex === total - 1 ? 0 : activeIndex + 1

  const nextImage = useCallback(
    () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1)),
    [total]
  )

  const prevImage = useCallback(
    () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1)),
    [total]
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startX = 0
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX }
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextImage() : prevImage()
      }
    }

    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchend', onEnd)
    }
  }, [nextImage, prevImage])

  const getPosition = (index: number): Pos => {
    if (index === activeIndex) return 'center'
    if (index === prevIdx) return 'left'
    if (index === nextIdx) return 'right'
    return 'hidden'
  }

  return (
    <div className="relative px-4 py-2">
      <div
        ref={containerRef}
        className="relative mx-auto flex max-w-5xl items-center justify-center overflow-hidden"
        style={{ height: 620 }}
      >
        {screenshots.map((screenshot, index) => {
          const pos = getPosition(index)
          const isCenter = pos === 'center'

          return (
            <div
              key={screenshot.id}
              className={cn(
                'absolute transition-[transform,opacity,filter] duration-500 ease-in-out will-change-[transform,opacity,filter]',
                isCenter && 'z-20 translate-x-0 scale-100 opacity-100 blur-0',
                pos === 'left' && 'z-10 -translate-x-[110%] scale-[0.75] opacity-35 blur-[3px]',
                pos === 'right' && 'z-10 translate-x-[110%] scale-[0.75] opacity-35 blur-[3px]',
                pos === 'hidden' && 'pointer-events-none z-0 scale-[0.6] opacity-0 blur-[6px]',
              )}
            >
              <div
                className={cn(
                  'overflow-hidden rounded-base transition-[border-width,box-shadow] duration-500 bg-white dark:bg-secondaryBlack border-border dark:border-darkBorder',
                  isCenter
                    ? 'border-4 shadow-light dark:shadow-dark'
                    : 'border-2 shadow-none'
                )}
              >
                <div className="relative h-[500px] w-[231px] sm:h-[600px] sm:w-[277px]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    sizes="277px"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={prevImage}
        className="border-border dark:border-darkBorder shadow-light dark:shadow-dark absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border-2 bg-white p-2 transition-transform duration-150 hover:scale-105 active:scale-95 dark:bg-secondaryBlack sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextImage}
        className="border-border dark:border-darkBorder shadow-light dark:shadow-dark absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border-2 bg-white p-2 transition-transform duration-150 hover:scale-105 active:scale-95 dark:bg-secondaryBlack sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-3 w-3 rounded-full border-2 border-black transition-[background-color,transform] duration-300 active:scale-90',
              activeIndex === index ? 'bg-main' : 'bg-gray-200'
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
