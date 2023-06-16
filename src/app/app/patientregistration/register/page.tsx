'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { Card } from '../../components/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormTextField } from '../../components/textfield'
import { Button } from '../../components/button'
import { PatientRegistrationFormData } from '../@types/PatientRegistration'
import { PatientRegistrationFormSchema } from '../validations/PatientRegistrationSchema'
import { Breadcump } from '../../components/breadcump'
import useToast from '../../hooks/useToast'
import { useRouter } from 'next/navigation'

export default function PatientRegistration() {
  const { showToast } = useToast()
  const router = useRouter()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PatientRegistrationFormData>({
    resolver: zodResolver(PatientRegistrationFormSchema),
  })

  const { append, fields, remove } = useFieldArray<any>({
    control,
    name: 'learning_disability',
  })

  async function handlePatientRegistration(data: PatientRegistrationFormData) {
    try {
      await fetch('http://localhost:3001/patientRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      showToast('Paciente cadastrado com sucesso!', {
        type: 'success',
        autoClose: 3000,
      })
      router.back()
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handlePatientRegistration)}>
      <div className="space-y-6">
        <Breadcump
          descriptionPreviousPage="Listagem de Pacientes"
          descriptionCurrentPage="Cadastro de Pacientes"
        />
        <Card title="Cadastro de pacientes">
          <div className="space-y-4">
            <div className="md:flex gap-2">
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Nome"
                  name="patient_name"
                />
              </div>

              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="CPF"
                  name="patient_cpf"
                />
              </div>

              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Idade"
                  name="patient_age"
                />
              </div>
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Gênero"
                  name="patient_gender"
                />
              </div>
            </div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <FormTextField
                    control={control}
                    errors={errors}
                    label="Transtorno"
                    name={`learning_disability.${field.id}.disorder`}
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => remove(index)}
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4
                 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 
                  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              )
            })}
            <div className="mt-2 flex justify-end">
              <Button
                title="Adicionar transtorno"
                onClick={() =>
                  append({
                    disorder: '',
                  })
                }
              />
            </div>
          </div>
        </Card>

        <Card title="Dados do responsável">
          <div className="space-y-4">
            <div className="md:flex gap-2">
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Nome"
                  name="responsible_name"
                />
              </div>

              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="CPF"
                  name="responsible_cpf"
                />
              </div>

              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Idade"
                  name="responsible_age"
                />
              </div>
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Gênero"
                  name="responsible_gender"
                />
              </div>
            </div>
            <div className="md:flex gap-2">
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Grau de parentesco"
                  name="Degree_kinship_responsible"
                />
              </div>
              <div className="w-full">
                <FormTextField
                  control={control}
                  errors={errors}
                  label="Telefone"
                  name="responsible_phone"
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button title="Enviar" type="submit" />
        </div>
      </div>
    </form>
  )
}
