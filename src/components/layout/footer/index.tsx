import SendIcon from "@/components/icons/send"
import FooterLink from "@/components/layout/footer/footer-link"
import FooterSection from "@/components/layout/footer/footer-section"
import MaxWidthWrapper from "@/components/reusable-components/max-width-wrapper"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className='bg-black text-center text-white'>
      <MaxWidthWrapper>
        <div className='flex justify-between pb-14 pt-20'>
          <div className='w-full max-w-56'>
            <p className='text-start text-xl font-bold tracking-wider'>Peru</p>

            <div className='mt-6 flex flex-col items-start space-y-6 text-start text-sm'>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>

              <div className='relative'>
                <Input
                  placeholder='Enter your email'
                  className='border-white bg-black'
                />
                <SendIcon className='absolute right-4 top-1/2 -translate-y-1/2 transform' />
              </div>
            </div>
          </div>

          <FooterSection title='Support'>
            <FooterLink href='mailto:jainikpatel1743@gmail.com'>
              jainikpatel1743@gmail.com
            </FooterLink>
            <FooterLink href='tel:+91 9909126589'>+91 9909126589</FooterLink>
          </FooterSection>

          <FooterSection title='Account'>
            <FooterLink href='/my-account'>My Account</FooterLink>
            <FooterLink href='/login'>Login / Register</FooterLink>
            <FooterLink href='/cart'>Cart</FooterLink>
            <FooterLink href='/wishlist'>Wishlist</FooterLink>
            <FooterLink href='/shop'>Shop</FooterLink>
          </FooterSection>

          <FooterSection title='Quick Link'>
            <FooterLink href='/privacy-policy'>Privacy Policy</FooterLink>
            <FooterLink href='/terms-conditions'>Terms & Conditions</FooterLink>
            <FooterLink href='/faqs'>FAQs</FooterLink>
            <FooterLink href='/contact'>Contact</FooterLink>
          </FooterSection>

          <FooterSection title='Follow Us'>
            <FooterLink href='/'>Facebook</FooterLink>
            <FooterLink href='/'>Instagram</FooterLink>
            <FooterLink href='/'>Twitter</FooterLink>
            <FooterLink href='/'>LinkedIn</FooterLink>
          </FooterSection>
        </div>

        <div className='py-6'>
          <p className='text-center text-sm text-[#363738]'>
            © 2024 Peru. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
