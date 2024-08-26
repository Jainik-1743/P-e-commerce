import Link from "next/link"

import SendIcon from "@/components/icons/send"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className='bg-black text-center text-white'>
      <MaxWidthWrapper>
        <div className='flex justify-between pb-14 pt-20'>
          <div className='w-full max-w-56'>
            <p className='text-start text-xl font-bold tracking-wider'>Peru</p>

            <div className='mt-6 flex flex-col items-start space-y-6 text-start text-sm'>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>

              <div className='relative'>
                <Input
                  placeholder='Enter your email'
                  className='border-white bg-black'
                />
                <SendIcon className='absolute right-4 top-1/2 -translate-y-1/2 transform' />
              </div>
            </div>
          </div>

          <div className='w-full max-w-[175px]'>
            <p className='text-start text-xl font-bold tracking-wider'>
              Support
            </p>

            <div className='mt-6 flex flex-col items-start space-y-4 text-start text-sm'>
              <Link href='mailto:jainikpatel1743@gmail.com'>
                jainikpatel1743@gmail.com
              </Link>
              <Link href='tel:+91 9909126589'>+91 9909126589</Link>
            </div>
          </div>

          <div className='w-full max-w-[175px]'>
            <p className='text-start text-xl font-bold tracking-wider'>
              Account
            </p>

            <div className='mt-6 flex flex-col items-start space-y-4 text-start text-sm'>
              <Link href='/my-account'>My Account</Link>
              <Link href='/login'>Login / Register</Link>
              <Link href='/cart'>Cart</Link>
              <Link href='/wishlist'>Wishlist</Link>
              <Link href='/shop'>Shop</Link>
            </div>
          </div>

          <div className='w-full max-w-[175px]'>
            <p className='text-start text-xl font-bold tracking-wider'>
              Quick Link
            </p>

            <div className='mt-6 flex flex-col items-start space-y-4 text-start text-sm'>
              <Link href='/privacy-policy'>Privacy Policy</Link>
              <Link href='/terms-conditions'>Terms & Conditions</Link>
              <Link href='/faqs'>FAQs</Link>
              <Link href='/contact'>Contact</Link>
            </div>
          </div>

          <div className='w-full max-w-[175px]'>
            <p className='text-start text-xl font-bold tracking-wider'>
              Follow Us
            </p>

            <div className='mt-6 flex flex-col items-start space-y-4 text-start text-sm'>
              <Link
                href='/'
                className='transition-all duration-300 hover:text-gray-400 hover:underline hover:underline-offset-4'
              >
                Facebook
              </Link>
              <Link
                href='/'
                className='transition-all duration-300 hover:text-gray-400 hover:underline hover:underline-offset-4'
              >
                Instagram
              </Link>
              <Link
                href='/'
                className='transition-all duration-300 hover:text-gray-400 hover:underline hover:underline-offset-4'
              >
                Twitter
              </Link>
              <Link
                href='/'
                className='transition-all duration-300 hover:text-gray-400 hover:underline hover:underline-offset-4'
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className='py-6'>
          <p className='text-center text-sm text-[#363738]'>
            © 2024 Peru. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
