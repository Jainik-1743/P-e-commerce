"use client"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOff } from "lucide-react"
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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
})

export default function LoginForm() {
  const [visiblePassword, setVisiblePassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <div className='flex w-full flex-col items-start justify-center gap-6 py-20'>
      <h1 className='text-4xl tracking-wider'>Log in to Peru</h1>
      <p>Enter your details below to create an account.</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className='mt-4 flex w-full flex-col gap-6'
        >
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
                    className='rounded-none border-[0] border-b border-black px-0 text-base focus-visible:border-b focus-visible:border-blue-500 focus-visible:ring-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative'>
                    <Input
                      placeholder='Your Password'
                      type={visiblePassword ? "text" : "password"}
                      required
                      {...field}
                      className='rounded-none border-[0] border-b border-black px-0 text-base focus-visible:border-b focus-visible:border-blue-500 focus-visible:ring-0'
                    />
                    <Button
                      type='button'
                      variant='ghost'
                      onClick={handleVisiblePassword}
                      className='absolute right-0 top-1/2 h-fit -translate-y-1/2 p-0 hover:bg-transparent'
                    >
                      {visiblePassword ? (
                        <EyeIcon className='h-4 w-4' />
                      ) : (
                        <EyeOff className='h-4 w-4' />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='mt-4 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <Button
              type='submit'
              className='h-fit rounded-md bg-subTitle py-4 text-white hover:bg-subTitle'
            >
              Send Massage
            </Button>
            <Button
              variant='outline'
              className='h-fit rounded-md border-none py-4 text-subTitle'
            >
              Forgot Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
