import z from 'zod'

export const RegisterSchema = z.object({
	email: z.email(),
	password: z.string().min(6),
	name: z.string(),
	surname: z.string(),
	phone: z.string(),
	birthDate: z.date(),
	country: z.string(),
	city: z.string(),
	region: z.string(),
	address: z.string()
})

export type TRegisterSchema = z.infer<typeof RegisterSchema>
