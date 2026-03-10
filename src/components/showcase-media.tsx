'use client'

import { Play } from 'lucide-react'
import { useRef, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PhotoCarousel from '@/components/photo-carousel'

const PROMO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_CRYBABY_PROMO_VIDEO_URL ?? '/images/CryBaby_Promo_1.mp4'

function PromoVideoPlayer() {
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div className="flex justify-center py-4">
      <div className="border-border dark:border-darkBorder shadow-light dark:shadow-dark w-full max-w-[750px] overflow-hidden rounded-base border-2 bg-white p-3 dark:bg-secondaryBlack sm:p-4">
        {hasStarted ? (
          <video
            ref={videoRef}
            className="w-full rounded-base"
            controls
            playsInline
            preload="metadata"
            autoPlay
          >
            <source src={PROMO_VIDEO_SRC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setHasStarted(true)}
            className="group relative block w-full overflow-hidden rounded-base"
            aria-label="Play CryBaby promo video"
          >
            <div className="relative aspect-video w-full bg-gradient-to-b from-[#88aaee]/30 via-[#dfe5f2] to-white dark:from-[#5e79b8]/30 dark:via-[#272933] dark:to-[#0f1117]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="border-border shadow-light dark:shadow-dark inline-flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white text-black transition-transform duration-200 group-hover:scale-105 group-active:scale-95 dark:bg-secondaryBlack dark:text-darkText">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
                <p className="text-lg font-heading sm:text-xl">
                  Watch CryBaby in action
                </p>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default function ShowcaseMedia() {
  return (
    <Tabs defaultValue="screenshots" className="w-full">
      <TabsList className="mx-auto mb-6 w-full max-w-md p-1.5">
        <TabsTrigger value="screenshots" className="flex-1 mx-0.5">
          App Screenshots
        </TabsTrigger>
        <TabsTrigger value="video" className="flex-1 mx-0.5">
          Promo Video
        </TabsTrigger>
      </TabsList>

      <TabsContent value="screenshots" className="focus-visible:outline-none">
        <PhotoCarousel />
      </TabsContent>

      <TabsContent value="video" className="focus-visible:outline-none">
        <PromoVideoPlayer />
      </TabsContent>
    </Tabs>
  )
}
