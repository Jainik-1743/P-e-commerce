import Link from "next/link"

import CartIcon from "@/components/icons/cart"
import LikeIcon from "@/components/icons/like"
import SearchIcon from "@/components/icons/search"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <MaxWidthWrapper>
      <div className='flex items-center justify-between py-4'>
        <Link href='/' className='text-2xl font-bold'>
          Peru
        </Link>

        <ul className='flex items-center space-x-6'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div className='flex items-center space-x-4'>
          <div className='relative w-64'>
            <Input
              type='text'
              placeholder='What are you looking for?'
              className='bg-[#F5F5F5] text-sm'
            />
            <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400' />
          </div>
          <LikeIcon />
          <CartIcon />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
