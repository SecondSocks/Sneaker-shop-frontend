'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { RegisterSchema, TRegisterSchema } from './register.schema'
import { REGISTER_GQL } from '@/graphql/mutations/auth/register.mutation'

export function useRegister() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange',
		resolver: zodResolver(RegisterSchema)
	})
	const [registerUser] = useMutation(REGISTER_GQL, {
		onError: () => console.log('ERROR REGISTER'),
		onCompleted: () => console.log('SUCCESS REGISTER')
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		await registerUser({ variables: { data } })

		reset()
		router.push('/catalog')
	}

	return { register, handleSubmit, errors, onSubmit }
}
