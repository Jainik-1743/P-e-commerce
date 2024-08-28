import { Mail, Phone } from "lucide-react"
import Link from "next/link"

import ContactForm from "@/components/contact"
import Divider from "@/components/reusable-components/divider"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Contact() {
  return (
    <MaxWidthWrapper>
      <Breadcrumb className='my-10'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='mb-10'>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-3 h-[458px] rounded-lg px-[35px] pt-10 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]'>
            <div>
              <div className='flex items-center space-x-4'>
                <div className='rounded-full bg-subTitle p-2.5 text-white'>
                  <Phone className='h-5 w-5' />
                </div>
                <h2 className='text-base font-medium'>Call To Us</h2>
              </div>
              <p className='mt-6 text-sm'>
                We are available 24/7, 7 days a week.
              </p>
              <p className='mt-4 text-sm'>
                Number:&nbsp;
                <Link href='tel:+91 9909126589'>+91 9909126589</Link>
              </p>
            </div>

            <div className='my-8'>
              <Divider />
            </div>

            <div className='max-w-[250px]'>
              <div className='flex items-center space-x-4'>
                <div className='rounded-full bg-subTitle p-2.5 text-white'>
                  <Mail className='h-5 w-5' />
                </div>
                <h2 className='text-base font-medium'>Write To US</h2>
              </div>
              <p className='mt-6 text-sm'>
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className='mt-4 text-sm'>
                Email:&nbsp;
                <Link href='mailto:jainikpatel1743@gmail.com'>
                  customer@peru.com
                </Link>
              </p>
              <p className='mt-4 text-sm'>
                Email:&nbsp;
                <Link href='mailto:support@gmail.com'>support@peru.com</Link>
              </p>
            </div>
          </div>
          <div className='col-span-9 h-[458px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]'>
            <ContactForm />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
