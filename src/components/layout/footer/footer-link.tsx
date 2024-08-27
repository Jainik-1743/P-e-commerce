import { ReactNode } from "react"

import Link from "next/link"

interface FooterLinkProps {
  href: string
  children: ReactNode
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className='transition-all duration-300 hover:text-gray-400'
    >
      {children}
    </Link>
  )
}
