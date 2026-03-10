import ShowcaseMedia from '@/components/showcase-media'

export default function Showcase() {
  return (
    <section className="section-shell border-t-2 border-t-border bg-bg py-14 font-base dark:border-t-darkBorder dark:bg-darkBg sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <ShowcaseMedia />
      </div>
    </section>
  )
}