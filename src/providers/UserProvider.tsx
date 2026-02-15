import { ReactNode, useEffect } from 'react'

import { TUser } from '@/types/user.interface'

import useUserStore from '@/store/user/user.store'

interface Props {
	children: ReactNode
	user: TUser | null
}

export function UserProvider({ children, user }: Props) {
	const setUser = useUserStore(s => s.setUser)

	useEffect(() => {
		setUser(user)
	}, [user, setUser])

	return <div>UserProvider</div>
}
