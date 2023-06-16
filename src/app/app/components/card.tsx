import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="w-full bg-white shadow-md  p-8 rounded-md">
      <h2 className="text-lg font-medium text-black">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  )
}
