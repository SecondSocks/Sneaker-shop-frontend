'use client'

import { LoginForm } from '@/components/elements/LoginForm'

import { useLogin } from './useLogin'

export function LoginContainer() {
	const props = useLogin()

	return (
		<div>
			<LoginForm {...props} />
		</div>
	)
}
