import Image from "next/image"

import SideImage from "@/components/assets/side-image-login.png"
import SignUpForm from "@/components/sign-up/sign-up-form"

export default function SignUpPage() {
  return (
    <div className='py-10'>
      <div className='flex max-w-[1343px] justify-between space-x-20'>
        <Image
          src={SideImage}
          alt='Side Image'
          className='h-[780px] min-w-[805px]'
        />
        <SignUpForm />
      </div>
    </div>
  )
}
