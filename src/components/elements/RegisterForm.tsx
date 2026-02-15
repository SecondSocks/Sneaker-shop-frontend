import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'

import { TRegisterSchema } from '../containers/register-container/register.schema'

interface Props {
	register: UseFormRegister<TRegisterSchema>
	handleSubmit: UseFormHandleSubmit<TRegisterSchema>
	onSubmit: SubmitHandler<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
}

export function RegisterForm({
	register,
	handleSubmit,
	onSubmit,
	errors
}: Props) {
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

			<input
				type='text'
				placeholder='Введите имя'
				{...register('name')}
			/>
			{errors.name?.message && <p>{errors.name.message}</p>}

			<input
				type='text'
				placeholder='Введите фамилию'
				{...register('surname')}
			/>
			{errors.surname?.message && <p>{errors.surname.message}</p>}

			<input
				type='date'
				placeholder='ДД.ММ.ГГГГ'
				{...register('birthDate')}
			/>
			{errors.birthDate?.message && <p>{errors.birthDate.message}</p>}

			<input
				type='text'
				placeholder='Введите телефон'
				{...register('phone')}
			/>
			{errors.phone?.message && <p>{errors.phone.message}</p>}

			<input
				type='text'
				placeholder='Введите страну'
				{...register('country')}
			/>
			{errors.country?.message && <p>{errors.country.message}</p>}

			<input
				type='text'
				placeholder='Введите город'
				{...register('city')}
			/>
			{errors.city?.message && <p>{errors.city.message}</p>}

			<input
				type='text'
				placeholder='Введите регион'
				{...register('region')}
			/>
			{errors.region?.message && <p>{errors.region.message}</p>}

			<input
				type='text'
				placeholder='Введите адрес'
				{...register('address')}
			/>
			{errors.address?.message && <p>{errors.address.message}</p>}
			<button type='submit'>Submit</button>
		</form>
	)
}
