"use client"

import { useEffect, useState } from "react"

import { useKeenSlider } from "keen-slider/react"

import ProductSrc from "@/components/assets/gaming-mouse.png"
import Slider from "@/components/home"
import LeftIcon from "@/components/icons/left"
import RightIcon from "@/components/icons/right"
import Divider from "@/components/reusable-components/divider"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import ProductCard from "@/components/reusable-components/product-card"
import SubTitle from "@/components/reusable-components/sub-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SaleProductsList = [
  {
    id: 1,
    imageSrc: ProductSrc,
    productName: "Gaming Mouse",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 29.99,
    percentageOfSale: -20,
  },
  {
    id: 2,
    imageSrc: ProductSrc,
    productName: "Gaming Keyboard",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 49.99,
  },
  {
    id: 3,
    imageSrc: ProductSrc,
    productName: "Gaming Headset",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 39.99,
    percentageOfSale: -30,
  },
  {
    id: 4,
    imageSrc: ProductSrc,
    productName: "Gaming Monitor",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 79.99,
    percentageOfSale: -40,
  },
  {
    id: 5,
    imageSrc: ProductSrc,
    productName: "Chair",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 32.99,
  },
  {
    id: 6,
    imageSrc: ProductSrc,
    productName: "Table",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 59.99,
  },
  {
    id: 7,
    imageSrc: ProductSrc,
    productName: "Sofa",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 89.99,
  },
  {
    id: 8,
    imageSrc: ProductSrc,
    productName: "Bed",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 69.99,
  },
  {
    id: 9,
    imageSrc: ProductSrc,
    productName: "Lamp",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 19.99,
  },
  {
    id: 10,
    imageSrc: ProductSrc,
    productName: "Curtains",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 24.99,
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",

    slides: {
      perView: 4.5,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    const saleEndDate = new Date("2024-09-10")

    const calculateRemainingTime = () => {
      const currentTime = new Date()
      const timeDifference = saleEndDate.getTime() - currentTime.getTime()

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        )
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setRemainingTime({ days, hours, minutes, seconds })
      }
    }

    const timer = setInterval(calculateRemainingTime, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <main className='mt-10 min-h-dvh'>
      <Slider />

      <div className='relative mt-16'>
        <MaxWidthWrapper>
          <SubTitle subTitle="Today's" />

          <div className='mt-6 flex items-end justify-between'>
            <div className='flex items-end space-x-20'>
              <h1 className='text-4xl font-bold tracking-wider'>Flash Sale</h1>

              <div className='flex items-center'>
                <div>
                  <p className='text-xs'>Days</p>
                  <span className='text-3xl font-bold'>
                    {remainingTime.days}
                  </span>
                </div>
                <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>
                  :
                </span>
                <div>
                  <p className='text-xs'>Hours</p>
                  <span className='text-3xl font-bold'>
                    {remainingTime.hours}
                  </span>
                </div>
                <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>
                  :
                </span>

                <div>
                  <p className='text-xs'>Minutes</p>
                  <span className='text-3xl font-bold'>
                    {remainingTime.minutes}
                  </span>
                </div>
                <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>
                  :
                </span>

                <div>
                  <p className='text-xs'>Seconds</p>
                  <span className='text-3xl font-bold'>
                    {remainingTime.seconds}
                  </span>
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <div className='flex items-center space-x-6'>
                <Button
                  variant='ghost'
                  onClick={() => instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                  className='h-fit rounded-full bg-slate-100 p-2.5'
                >
                  <LeftIcon />
                </Button>

                <Button
                  variant='ghost'
                  onClick={() => instanceRef.current?.next()}
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 4
                  }
                  className='h-fit rounded-full bg-slate-100 p-2.5'
                >
                  <RightIcon />
                </Button>
              </div>
            )}
          </div>
        </MaxWidthWrapper>

        <div
          ref={ref}
          className={cn(
            currentSlide > 0 ? "pl-0" : "pl-[128px]",
            "keen-slider mt-10",
          )}
        >
          {SaleProductsList.map((product) => (
            <div
              key={product.id}
              className='keen-slider__slide group rounded-lg bg-white shadow-lg'
            >
              <ProductCard
                imageSrc={product.imageSrc}
                productName={product.productName}
                productDescription={product.productDescription}
                productPrice={product.productPrice}
                percentageOfSale={product.percentageOfSale}
              />
            </div>
          ))}
        </div>

        <MaxWidthWrapper>
          <div className='flex w-full items-center justify-center py-16'>
            <Button className='bg-subTitle hover:bg-subTitle'>
              View All Products
            </Button>
          </div>

          <div className='mb-10'>
            <Divider />
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  )
}
