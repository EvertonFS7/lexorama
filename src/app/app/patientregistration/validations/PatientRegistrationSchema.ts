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
})
