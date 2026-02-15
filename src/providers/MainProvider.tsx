import { ApolloProvider } from '@apollo/client/react'
import { ReactNode } from 'react'

import { TUser } from '@/types/user.interface'

import { apolloClient } from '@/api/apollo.api'

import { UserProvider } from './UserProvider'

interface Props {
	children: ReactNode
	user: TUser | null
}

export function MainProvider({ children, user }: Readonly<Props>) {
	return (
		<ApolloProvider client={apolloClient}>
			<UserProvider user={user}>{children}</UserProvider>
		</ApolloProvider>
	)
}
