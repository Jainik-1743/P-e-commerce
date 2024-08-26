"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navList } from "@/components/constants/navlist"
import { cn } from "@/lib/utils"

export default function NavLinks() {
  const pathName = usePathname()

  return (
    <ul className='flex items-center space-x-6'>
      {navList.map((link) => {
        const isActive = pathName === link.href

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                isActive
                  ? "border-gray-200 text-blue-600 underline underline-offset-4"
                  : "",
                "tracking-wide",
              )}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
