interface SubTitleProps {
  subTitle: string
}

export default function SubTitle({ subTitle }: SubTitleProps) {
  return (
    <div className='flex items-center'>
      <span className='mr-4 h-10 w-5 rounded bg-subTitle' />
      <h2 className='text-base font-semibold text-subTitle'>{subTitle}</h2>
    </div>
  )
}
