import { Card, CardContent } from "../ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Card className='group h-56 cursor-pointer rounded-lg border border-gray-400 px-12 py-8 transition duration-300 hover:bg-subTitle hover:text-white hover:shadow-lg'>
      <CardContent className='flex flex-col items-center space-y-4'>
        <div className='rounded-full bg-gray-300 p-2 transition duration-300 group-hover:bg-red-300'>
          <div className='rounded-full bg-black p-2.5 text-white transition duration-300 group-hover:bg-white group-hover:text-black'>
            {icon}
          </div>
        </div>
        <h2 className='text-3xl font-medium'>{title}</h2>
        <p className='text-sm'>{description}</p>
      </CardContent>
    </Card>
  )
}
