import { useEffect, useState } from "react"

import TimeUnit from "@/components/home/time-unit"

export default function Countdown() {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const saleEndDate = new Date("2025-09-10")

    const calculateRemainingTime = () => {
      const currentTime = new Date()
      const timeDifference = saleEndDate.getTime() - currentTime.getTime()

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        )
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setRemainingTime({ days, hours, minutes, seconds })
      }
    }

    const timer = setInterval(calculateRemainingTime, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className='flex items-center'>
      <TimeUnit label='Days' value={remainingTime.days} />
      <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>:</span>
      <TimeUnit label='Hours' value={remainingTime.hours} />
      <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>:</span>
      <TimeUnit label='Minutes' value={remainingTime.minutes} />
      <span className='mt-2.5 px-2 text-3xl font-bold text-subTitle'>:</span>
      <TimeUnit label='Seconds' value={remainingTime.seconds} />
    </div>
  )
}
