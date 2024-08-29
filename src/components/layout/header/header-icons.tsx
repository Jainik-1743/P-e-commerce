import LikeIcon from "@/components/icons/like"
import SearchInput from "@/components/layout/header/search-input"

import CartDetails from "./cart-details"

export default function HeaderIcons() {
  return (
    <div className='flex items-center space-x-4'>
      <SearchInput />
      <LikeIcon />
      <CartDetails />
    </div>
  )
}
