'use client'

import { useEffect, useRef, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const btnRef = useRef<HTMLButtonElement>(null)

  const onScroll = useCallback(() => {
    const btn = btnRef.current
    if (!btn) return
    btn.dataset.visible = window.scrollY > 300 ? 'true' : 'false'
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <button
      ref={btnRef}
      data-visible="false"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-main border-2 border-black rounded-base text-black shadow-light dark:shadow-dark hover:bg-main/90 transition-[opacity,transform] duration-300 data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
} 