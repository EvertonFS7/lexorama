import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="w-full bg-white shadow-lg p-8 rounded-md">
      <h2>{title}</h2>

      <div className="mt-2">{children}</div>
    </div>
  )
}
