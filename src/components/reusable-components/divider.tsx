import { cn } from "@/lib/utils"

interface DividerProps {
  vertical?: boolean
  borderWidth?: string
}

const Divider = ({ vertical = false, borderWidth = "1px" }: DividerProps) => {
  const dividerClass = cn({
    "w-full border-t": !vertical,
    "h-full border-l": vertical,
  })

  const borderStyle = {
    borderWidth,
  }

  return <div className={dividerClass} style={borderStyle} />
}

export default Divider
