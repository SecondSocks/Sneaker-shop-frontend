import { gql } from '@apollo/client'

export const REGISTER_GQL = gql`
	mutation Register($data: RegisterInput!) {
		register(data: $data) {
			accessToken
			refreshToken
		}
	}
`
