import { gql } from '@apollo/client'

export const LOGIN_GQL = gql`
	mutation Login($data: LoginInput!) {
		login(data: $data) {
			accessToken
			refreshToken
		}
	}
`
