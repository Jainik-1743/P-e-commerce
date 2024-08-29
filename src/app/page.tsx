"use client"

import { useState } from "react"

import { useKeenSlider } from "keen-slider/react"

import {
  IncludeQuantity,
  Product,
  saleProductsList,
} from "@/components/constants/sale-products-list"
import Slider from "@/components/home"
import Countdown from "@/components/home/count-down"
import LeftIcon from "@/components/icons/left"
import RightIcon from "@/components/icons/right"
import Divider from "@/components/reusable-components/divider"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import ProductCard from "@/components/reusable-components/product-card"
import SubTitle from "@/components/reusable-components/sub-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

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

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]",
    ) as IncludeQuantity[]

    const productIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === product.id,
    )

    if (productIndex !== -1) {
      const updatedCart = existingCart.map((cartItem, index) => {
        if (index === productIndex) {
          return {
            ...cartItem,
            quantity: Math.min(cartItem.quantity + 1, 9),
          }
        }
        return cartItem
      })

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      const event = new Event("cartUpdated")
      window.dispatchEvent(event)
    } else {
      const updatedCart = [...existingCart, { ...product, quantity: 1 }]

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      const event = new Event("cartUpdated")
      window.dispatchEvent(event)
    }
  }

  return (
    <main className='mt-10 min-h-dvh'>
      <Slider />

      <div className='relative mt-16'>
        <MaxWidthWrapper>
          <SubTitle subTitle="Today's" />

          <div className='mt-6 flex items-end justify-between'>
            <div className='flex items-end space-x-20'>
              <h1 className='text-4xl font-bold tracking-wider'>Flash Sale</h1>

              <Countdown />
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
          {saleProductsList.map((product) => (
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
                handleAddToCart={() => handleAddToCart(product)}
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
