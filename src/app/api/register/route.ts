import { NextResponse } from 'next/server'

import { setAuthCookies } from '@/app/api/routes'
import { BACKEND_GRAPHQL_URL } from '@config/env'

export async function POST(req: Request) {
	const body = await req.json()

	const gqlRes = await fetch(BACKEND_GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
				mutation Register($data: RegisterInput!) {
					register(data: $data) {
						accessToken
						refreshToken
					}
				}		
			`,
			variables: { data: body }
		})
	})

	const { data, errors } = await gqlRes.json()
	if (errors?.length) return NextResponse.json({ errors }, { status: 400 })

	const { accessToken, refreshToken } = data.register
	const res = NextResponse.json({ ok: true })

	setAuthCookies(res, accessToken, refreshToken)

	return res
}
