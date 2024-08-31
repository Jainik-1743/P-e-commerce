import Image from "next/image"

import SignUpForm from "@/components/sign-up/sign-up-form"

export default function SignUpPage() {
  return (
    <div className='py-10'>
      <div className='flex max-w-[1343px] justify-between space-x-20'>
        <Image
          src='/images/side-image-login.png'
          alt='Side Image'
          objectFit='cover'
          width={805}
          height={780}
          className='h-[780px] min-w-[805px]'
        />
        <SignUpForm />
      </div>
    </div>
  )
}
