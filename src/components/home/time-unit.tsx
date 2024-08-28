interface TimeUnitProps {
  label: string
  value: number
}

export default function TimeUnit({ label, value }: TimeUnitProps) {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-xs'>{label}</p>
      <span className='text-3xl font-bold'>{value}</span>
    </div>
  )
}
