import Image from "next/image"

import { cn } from "@/lib/utils"

import EyeIcon from "../icons/eye"
import LikeIcon from "../icons/like"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

interface ProductCardProps {
  className?: string
  imageSrc: string
  productName: string
  productDescription: string
  productPrice: number
  percentageOfSale?: number
  handleAddToCart?: () => void
}

export default function ProductCard({
  className,
  imageSrc,
  productName,
  productDescription,
  productPrice,
  percentageOfSale,
  handleAddToCart,
}: ProductCardProps) {
  return (
    <div className={cn("group rounded shadow-sm", className)}>
      <div className='relative flex h-[250px] items-center justify-center rounded-t-lg bg-[#F5F5F5]'>
        <Image
          src={imageSrc}
          alt={productName}
          layout='cover'
          className='rounded-t-lg object-cover'
        />
        <Button
          variant='default'
          className='absolute right-2 top-4 rounded-full bg-white p-2 text-black hover:bg-transparent'
        >
          <LikeIcon className='h-6 w-6' />
        </Button>
        <Button
          variant='default'
          className='absolute right-2 top-16 h-fit rounded-full bg-white p-2 hover:bg-transparent'
        >
          <EyeIcon className='h-6 w-6' />
        </Button>

        {percentageOfSale && (
          <Badge className='absolute left-4 top-4 bg-subTitle'>
            {percentageOfSale}% OFF
          </Badge>
        )}

        <Button
          onClick={handleAddToCart}
          variant='default'
          className='absolute bottom-[-20px] left-0 right-0 h-fit transform rounded-none py-1.5 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100'
        >
          Add to Cart
        </Button>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{productName}</h3>
        <p className='text-sm text-gray-500'>{productDescription}</p>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-lg font-semibold'>{productPrice}</span>
        </div>
      </div>
    </div>
  )
}
