import CartIcon from "@/components/icons/cart"
import LikeIcon from "@/components/icons/like"
import SearchInput from "@/components/layout/header/search-input"

export default function HeaderIcons() {
  return (
    <div className='flex items-center space-x-4'>
      <SearchInput />
      <LikeIcon />
      <CartIcon />
    </div>
  )
}
