import SearchIcon from "@/components/icons/search"
import { Input } from "@/components/ui/input"

export default function SearchInput() {
  return (
    <div className='relative w-64'>
      <Input
        type='text'
        placeholder='What are you looking for?'
        className='bg-[#F5F5F5] text-sm'
      />
      <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400' />
    </div>
  )
}
