import { SVGProps } from "react"

const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    fill='none'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M11 7c-2.761 0-5 2.216-5 4.95 0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C25.125 19.395 26 14.157 26 11.95 26 9.216 23.761 7 21 7s-5 3-5 3-2.239-3-5-3Z'
    />
  </svg>
)
export default LikeIcon
