"use client"

import { useEffect, useState } from "react"

import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { IncludeQuantity } from "@/components/constants/sale-products-list"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<IncludeQuantity[]>([])

  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(
        localStorage.getItem("cart") || "[]",
      ) as IncludeQuantity[]
      setCartItems(existingCart)
    }

    if (typeof window !== "undefined") {
      updateCartCount()
      window.addEventListener("cartUpdated", updateCartCount)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cartUpdated", updateCartCount)
      }
    }
  }, [])

  const handleRemoveFromCart = (productId: number) => {
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]",
    ) as IncludeQuantity[]

    const updatedCart = existingCart.filter(
      (cartItem) => cartItem.id !== productId,
    )

    localStorage.setItem("cart", JSON.stringify(updatedCart))

    const event = new Event("cartUpdated")
    window.dispatchEvent(event)
  }

  const routeToHomePage = () => {
    router.push("/")
  }

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: number,
  ) => {
    let newQuantity = parseInt(e.target.value, 10)
    if (Number.isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1
    } else if (newQuantity > 9) {
      newQuantity = 9
    }

    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]",
    ) as IncludeQuantity[]

    const updatedCart = existingCart.map((cartItem) => {
      if (cartItem.id === productId) {
        return {
          ...cartItem,
          quantity: newQuantity,
        }
      }
      return cartItem
    })

    localStorage.setItem("cart", JSON.stringify(updatedCart))

    const event = new Event("cartUpdated")
    window.dispatchEvent(event)
  }

  return (
    <MaxWidthWrapper>
      <Breadcrumb className='my-10'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className='mb-10'>
        {cartItems.length === 0 ? (
          <div className='flex h-96 flex-col items-center justify-center space-y-10'>
            <h2 className='text-2xl font-bold'>Your cart is empty</h2>
            <Button
              onClick={routeToHomePage}
              className='rounded bg-subTitle hover:bg-subTitle'
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className='cart flex items-center justify-start px-10 py-6 shadow-md'>
              <p className='w-1/4 text-left'>Product</p>
              <p className='w-1/4 text-center'>Price</p>
              <p className='w-1/4 text-center'>Quantity</p>
              <p className='w-1/4 text-center'>Subtotal</p>
            </div>
            <ul className='mt-8 flex flex-col space-y-6'>
              {cartItems.map((product) => (
                <li
                  key={product.id}
                  className='cart flex items-center justify-start px-10 py-6 shadow-md'
                >
                  <div className='relative flex w-1/4 items-center space-x-4'>
                    <div className='relative'>
                      <Image
                        src={product.imageSrc}
                        alt={product.productName}
                        className='h-12 w-12'
                        objectFit='cover'
                      />
                      <Button
                        className='absolute left-0 top-0 h-fit rounded-full bg-red-500 p-0.5 text-white'
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <X className='h-3 w-3' />
                      </Button>
                    </div>
                    <p className='text-left'>{product.productName}</p>
                  </div>
                  <p className='w-1/4 text-center'>
                    ${product.productPrice.toFixed(2)}
                  </p>
                  <Input
                    type='number'
                    className='w-1/4 text-center'
                    value={product.quantity}
                    min='1'
                    max='9'
                    onChange={(e) => handleQuantityChange(e, product.id)}
                  />
                  <p className='w-1/4 text-center'>
                    ${(product.productPrice * product.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </MaxWidthWrapper>
  )
}
