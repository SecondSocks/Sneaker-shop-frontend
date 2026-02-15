import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
	uri: '/api/graphql',
	credentials: 'include'
})

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})
