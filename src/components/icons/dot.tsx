import { SVGProps } from "react"

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={12}
    fill='none'
    {...props}
  >
    <circle cx={6} cy={6} r={6} fill='#fff' opacity={0.5} />
  </svg>
)
export default DotIcon
