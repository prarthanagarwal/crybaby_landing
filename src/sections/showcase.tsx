import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhotoCarousel from '@/components/photo-carousel';

export default function Showcase() {
  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-8 font-base">
      <div className="mx-auto max-w-[1200px] px-4">
        <Tabs defaultValue="screenshots" className="w-full">
          <TabsList className="mx-auto mb-4 w-full max-w-md grid grid-cols-2 p-1.5">
            <TabsTrigger
              value="screenshots"
              className="transition-transform active:translate-y-[2px] active:translate-x-[2px] active:shadow-none mx-0.5"
            >
              App Screenshots
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="transition-transform active:translate-y-[2px] active:translate-x-[2px] active:shadow-none mx-0.5"
            >
              Promo Video
            </TabsTrigger>
          </TabsList>

          <TabsContent value="screenshots" className="focus-visible:outline-none">
            <PhotoCarousel />
          </TabsContent>

          <TabsContent value="video" className="focus-visible:outline-none">
            <div className="flex justify-center py-6">
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark relative overflow-hidden rounded-base border-4 bg-white p-4 transition-transform active:translate-y-[3px] active:translate-x-[2px] active:shadow-none"
                style={{ maxWidth: '750px' }}
              >
                <video
                  className="w-full rounded-[5px] border-2 border-black"
                  controls
                  playsInline
                  poster="/images/poster.jpg"
                  preload="none"
                >
                  <source src="/images/CryBaby_Promo_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 