"use client"

import { MutableRefObject } from "react"

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      vertical: true,
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  )

  return (
    <MaxWidthWrapper className='flex h-[600px] w-[700px] flex-row-reverse'>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide bg-red-400'>1</div>
        <div className='keen-slider__slide bg-blue-400'>2</div>
        <div className='keen-slider__slide bg-green-400'>3</div>
        <div className='keen-slider__slide bg-yellow-400'>4</div>
        <div className='keen-slider__slide bg-purple-500'>5</div>
        <div className='keen-slider__slide bg-orange-500'>6</div>
      </div>

      <div
        ref={thumbnailRef}
        className='keen-slider thumbnail mr-[30px] max-w-[170px]'
      >
        <div className='keen-slider__slide bg-red-400'>1</div>
        <div className='keen-slider__slide bg-blue-400'>2</div>
        <div className='keen-slider__slide bg-green-400'>3</div>
        <div className='keen-slider__slide bg-yellow-400'>4</div>
        <div className='keen-slider__slide bg-purple-500'>5</div>
        <div className='keen-slider__slide bg-orange-500'>6</div>
      </div>
    </MaxWidthWrapper>
  )
}
