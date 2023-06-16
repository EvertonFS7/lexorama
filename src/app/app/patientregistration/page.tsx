import Link from 'next/link'
import { Suspense } from 'react'

import { Breadcump } from '../components/breadcump'
import { Card } from '../components/card'
import { Button } from '../components/button'

const Edit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
  </svg>
)

export default async function PatientRegistration() {
  const response = await fetch('http://localhost:3001/patientRegister', {
    cache: 'no-store',
  })

  const data = await response.json()

  return (
    <div className="space-y-6">
      <Breadcump descriptionCurrentPage="Cadastro de Pacientes" />
      <div className="flex justify-end">
        <Link href="patientregistration/register">
          <Button title="Cadastrar Paciente" />
        </Link>
      </div>

      <Card title="Lista de pacientes">
        <Suspense fallback={<p>Loading...</p>}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nome paciente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CPF paciente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Idade paciente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nome responsável
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Celular resposável
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data: any, index: number) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.patient_name}
                    </th>
                    <td className="px-6 py-4"> {data.patient_cpf}</td>
                    <td className="px-6 py-4"> {data.patient_age}</td>
                    <td className="px-6 py-4"> {data.responsible_name}</td>
                    <td className="px-6 py-4"> {data.responsible_phone}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        <Edit />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Suspense>
      </Card>
    </div>
  )
}
