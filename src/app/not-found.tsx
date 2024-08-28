"use client"

import { useRouter } from "next/navigation"

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

export default function NotFound() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
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
            <BreadcrumbPage>Not Found</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='mb-10'>
        <div className='flex h-96 flex-col items-center justify-center space-y-10'>
          <h1 className='text-8xl font-bold tracking-widest'>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Button
            onClick={handleBack}
            className='rounded bg-subTitle hover:bg-subTitle'
          >
            Back to home page
          </Button>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
