import Link from "next/link"

export default function Notification() {
  return (
    <div className='w-full bg-black text-white'>
      <div className='flex items-center justify-center space-x-4 p-3'>
        <p className='text-sm'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href='/shop' className='text-white underline'>
          Shop Now
        </Link>
      </div>
    </div>
  )
}
