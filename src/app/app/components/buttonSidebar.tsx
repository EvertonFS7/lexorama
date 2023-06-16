import { useState } from 'react'
import { useRouter } from 'next/navigation'

type sidebarOptionsProps = {
  icon: any
  description: string
  route: string
}

interface ButtonSidebarProps {
  sidebarOptions: sidebarOptionsProps[]
}

export function ButtonSidebar({ sidebarOptions, ...rest }: ButtonSidebarProps) {
  const { push } = useRouter()
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const handleOptionClick = (index: number, route: string) => {
    setSelectedOptionIndex(index)
    push(route)
  }

  return (
    <>
      {sidebarOptions?.map((data, index) => {
        const isSelected = selectedOptionIndex === index
        return (
          <>
            <div
              className={`flex items-center py-3 px-6 rounded-lg text-white hover:bg-slate-500
             cursor-pointer ${isSelected ? 'bg-white' : 'transparent'}`}
              onClick={() => handleOptionClick(index, data.route)}
              {...rest}
            >
              <span
                className={`mr-3  ${
                  isSelected ? 'fill-blue-950' : 'fill-white'
                }`}
              >
                {data.icon}
              </span>
              <p
                className={`font-semibold text-sm ${
                  isSelected ? 'text-blue-950' : 'text-white'
                }`}
              >
                {data.description}
              </p>
            </div>
          </>
        )
      })}
    </>
  )
}
