"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.string().length(10, { message: "Invalid phone number." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      number: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto grid w-full gap-4 p-10'
        noValidate
      >
        <div className='grid grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative'>
                    <Input
                      placeholder='Your Name'
                      type='text'
                      {...field}
                      className='h-12 bg-[#F5F5F5] text-base'
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Your Email'
                    type='email'
                    required
                    {...field}
                    className='h-12 bg-[#F5F5F5] text-base'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='number'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Your Phone'
                    type='tel'
                    required
                    {...field}
                    className='h-12 bg-[#F5F5F5] text-base'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Your Message'
                    required
                    {...field}
                    className='h-12 min-h-52 bg-[#F5F5F5] text-base'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex justify-end'>
          <Button
            type='submit'
            className='rounded-md bg-subTitle px-4 py-2 text-white hover:bg-subTitle'
          >
            Send Massage
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
