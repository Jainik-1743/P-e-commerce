import { BadgeDollarSign } from "lucide-react"
import Image from "next/image"

import ServiceCard from "@/components/about/service-card"
import AboutImage from "@/components/assets/about.png"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function About() {
  return (
    <>
      <MaxWidthWrapper>
        <Breadcrumb className='my-10'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </MaxWidthWrapper>
      <div className='py-10'>
        <div className='ml-[127px] flex items-center justify-between space-x-20'>
          <div className='w-full'>
            <h1 className='text-5xl font-semibold tracking-wider'>Our Story</h1>
            <p className='mt-10'>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className='mt-6'>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <Image
            src={AboutImage}
            alt='Side Image'
            objectFit='cover'
            className='h-[600px] min-w-[700px]'
          />
        </div>
      </div>

      <MaxWidthWrapper>
        <section className='grid grid-cols-4 gap-4 py-10'>
          <ServiceCard
            icon={<BadgeDollarSign />}
            title='10.5k+'
            description='Sailers active our site'
          />
          <ServiceCard
            icon={<BadgeDollarSign />}
            title='10.5k+'
            description='Monthly Product Sale'
          />
          <ServiceCard
            icon={<BadgeDollarSign />}
            title='10.5k+'
            description='Jainik'
          />
          <ServiceCard
            icon={<BadgeDollarSign />}
            title='10.5k+'
            description='Jainik'
          />
        </section>
      </MaxWidthWrapper>
    </>
  )
}
