import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
  children: React.ReactNode
}

export default function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <div className={cn(`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`)}>
      {children}
    </div>
  )
}
