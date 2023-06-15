import { z } from 'zod'

export const PatientRegistrationFormSchema = z.object({
  patient_name: z
    .string()
    .min(3, {
      message: 'O campo usuário precisa ter no mínimo menos 3 letras.',
    })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hífens.',
    })
    .transform((username) => username.toLowerCase()),
  patient_cpf: z
    .string()
    .min(11, 'O campo CPF deve ter no mínimo 11 caracteres')
    .max(11, 'O campo CPF deve ter no máximo 11 caracteres'),
  patient_age: z.string(),
  patient_gender: z.string(),

  responsible_name: z.string(),
  responsible_cpf: z
    .string()
    .min(11, 'O campo CPF deve ter no mínimo 11 caracteres')
    .max(11, 'O campo CPF deve ter no máximo 11 caracteres'),
  responsible_age: z.string(),
  responsible_gender: z.string(),
  Degree_kinship_responsible: z.string(),
  responsible_phone: z.string(),
})
