import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Logo() {
  return (
    <Link href='/' className={cn(`text-2xl font-bold tracking-wider`)}>
      Peru
    </Link>
  )
}
