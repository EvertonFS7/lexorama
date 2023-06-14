import { PatientRegistrationFormSchema } from '../validations/PatientRegistrationSchema'
import { z } from 'zod'

export type PatientRegistrationFormData = z.infer<
  typeof PatientRegistrationFormSchema
>
