"use client"

import { useKeenSlider } from "keen-slider/react"

import Slider from "@/components/home"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import SubTitle from "@/components/reusable-components/sub-title"

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4.5,
      spacing: 15,
    },
  })

  return (
    <main className='mt-10 min-h-dvh'>
      <Slider />

      <div className='mt-16'>
        <MaxWidthWrapper>
          <SubTitle subTitle="Today's" />
        </MaxWidthWrapper>

        <div ref={ref} className='keen-slider'>
          <div className='keen-slider__slide h-20 bg-red-500'>1</div>
          <div className='keen-slider__slide h-20 bg-green-500'>2</div>
          <div className='keen-slider__slide h-20 bg-blue-500'>3</div>
          <div className='keen-slider__slide h-20 bg-yellow-500'>4</div>
          <div className='keen-slider__slide h-20 bg-purple-500'>5</div>
          <div className='keen-slider__slide h-20 bg-amber-500'>6</div>
        </div>
      </div>
    </main>
  )
}
