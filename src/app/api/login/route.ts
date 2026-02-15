import { NextResponse } from 'next/server'

import { BACKEND_GRAPHQL_URL, setAuthCookies } from '@/app/api/routes'

export async function POST(req: Request) {
	const body = await req.json()

	const gqlRes = await fetch(BACKEND_GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
				mutation Login($data: LoginInput!) {
					login(data: $data) {
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

	const { accessToken, refreshToken } = data.login
	const res = NextResponse.json({ ok: true })

	setAuthCookies(res, accessToken, refreshToken)

	return res
}
