import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'

import { TLoginSchema } from '../containers/login-container/login.schema'

interface Props {
	register: UseFormRegister<TLoginSchema>
	handleSubmit: UseFormHandleSubmit<TLoginSchema>
	onSubmit: SubmitHandler<TLoginSchema>
	errors: FieldErrors<TLoginSchema>
}

export function LoginForm({ register, handleSubmit, onSubmit, errors }: Props) {
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='email'
				placeholder='Введите email'
				{...register('email')}
			/>
			{errors.email?.message && <p>{errors.email.message}</p>}

			<input
				type='password'
				placeholder='Введите пароль'
				{...register('password')}
			/>
			{errors.password?.message && <p>{errors.password.message}</p>}

			<button type='submit'>Submit</button>
		</form>
	)
}
