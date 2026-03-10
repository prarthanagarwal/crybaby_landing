const features = [
  {
    title: 'Crying Session Tracking',
    text: 'Log each session with the trigger, emotion, duration, and intensity so the story behind the moment stays clear.',
  },
  {
    title: 'Achievements System',
    text: 'Progress feels playful with unlocks and streaks that reward consistency without turning self-reflection into a chore.',
  },
  {
    title: 'Insights & Analytics',
    text: 'Weekly summaries and visual trends make it easier to spot patterns in relief, timing, and emotional load.',
  },
  {
    title: 'Privacy & Sync',
    text: 'Your logs stay personal while syncing across devices, so the app feels dependable without getting in the way.',
  },
]

const marqueeItems = [
  'Track your cry',
  'Understand the pattern',
  'Celebrate the progress',
  'Private by default',
]

export default function Features() {

  return (
    <div>
      <section className="section-shell border-t-2 border-t-border bg-bg bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:20px_20px] py-12 font-base dark:border-t-darkBorder dark:bg-darkBg dark:bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] sm:py-16 lg:py-[100px]">
        <h2 className="mb-8 sm:mb-12 lg:mb-20 px-4 sm:px-5 text-center text-2xl sm:text-3xl lg:text-4xl font-heading">
          Turn Your Tears into Triumphs
        </h2>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-5">
            {features.map((feature, i) => {
              return (
                <div
                  className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-2 sm:gap-3 rounded-base border-2 bg-white p-4 sm:p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300"
                  key={i}
                >
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-heading">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="border-y-2 border-y-border bg-white py-2 font-base dark:border-y-darkBorder dark:bg-secondaryBlack sm:py-3 lg:py-5">
        <div className="marquee-fade relative overflow-hidden">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((text, id) => (
              <div className="flex items-center" key={`${text}-${id}`}>
                <span className="mx-4 text-lg font-heading sm:mx-6 sm:text-xl lg:mx-8 lg:text-4xl">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
