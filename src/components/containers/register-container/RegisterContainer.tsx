import { RegisterForm } from '@/components/elements/RegisterForm'

import { useRegister } from './useRegister'

export function RegisterContainer() {
	const props = useRegister()

	return <RegisterForm {...props} />
}
