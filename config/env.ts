const apiUrl = process.env.API_URL

if (!apiUrl) throw new Error('API_URL is not defined')

export const BACKEND_GRAPHQL_URL = `${apiUrl}/graphql`