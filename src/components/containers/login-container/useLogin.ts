'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LoginSchema, TLoginSchema } from './login.schema'
import { LOGIN_GQL } from '@/graphql/mutations/auth/login.mutation'

export function useLogin() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange',
		resolver: zodResolver(LoginSchema)
	})
	const [login] = useMutation(LOGIN_GQL, {
		onError: () => console.log('ERROR LOGIN'),
		onCompleted: () => console.log('SUCCESS LOGIN')
	})

	const onSubmit: SubmitHandler<TLoginSchema> = async data => {
		await login({ variables: { data } })

		reset()
		router.push('/catalog')
	}
	return { register, handleSubmit, onSubmit, errors }
}
