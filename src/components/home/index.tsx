"use client"

import { useState } from "react"

import { useKeenSlider } from "keen-slider/react"

import DotIcon from "@/components/icons/dot"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import "keen-slider/keen-slider.min.css"

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],
  )

  return (
    <MaxWidthWrapper className='relative'>
      <div>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide h-80 bg-red-200' />
          <div className='keen-slider__slide h-80 bg-green-200' />
          <div className='keen-slider__slide h-80 bg-blue-200' />
          <div className='keen-slider__slide h-80 bg-yellow-200' />
          <div className='keen-slider__slide h-80 bg-purple-200' />
          <div className='keen-slider__slide h-80 bg-pink-200' />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-center'>
          {Array.from(
            Array(instanceRef.current.track.details.slides.length).keys(),
          ).map((idx) => (
            <Button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={cn(
                currentSlide === idx ? "bg-subTitle" : "bg-gray-500",
                "m-1 mb-2 h-fit rounded-full p-0",
              )}
              type='button'
            >
              <DotIcon />
            </Button>
          ))}
        </div>
      )}
    </MaxWidthWrapper>
  )
}
