import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 
         focus:outline-none uppercase"
      {...rest}
    >
      {title}
    </button>
  )
}
