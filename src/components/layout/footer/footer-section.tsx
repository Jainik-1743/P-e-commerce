import { ReactNode } from "react"

interface FooterSectionProps {
  title: string
  children: ReactNode
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className='w-full max-w-[175px]'>
      <p className='text-start text-xl font-bold tracking-wider'>{title}</p>
      <div className='mt-6 flex flex-col items-start space-y-4 text-start text-sm'>
        {children}
      </div>
    </div>
  )
}
