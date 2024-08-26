import NavLinks from "@/components/layout/header/nav-links"
import Logo from "@/components/reusable-components/logo"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"

import HeaderIcons from "./header-icons"

export default function Header() {
  return (
    <header className='border-b border-gray-200'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between pb-4 pt-8'>
          <Logo />

          <NavLinks />

          <HeaderIcons />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
