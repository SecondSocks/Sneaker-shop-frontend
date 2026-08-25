import { NextRequest, NextResponse } from 'next/server'

import { setAuthCookies } from '@/app/api/routes'
import { BACKEND_GRAPHQL_URL } from '@config/env'

type GraphQLPayload = {
	operationName?: string
	query?: string
	variables?: Record<string, unknown>
}

type AuthTokens = {
	accessToken: string
	refreshToken: string
}

export async function POST(req: NextRequest) {
	const requestBody = (await req.json()) as GraphQLPayload
	const accessToken = req.cookies.get('accessToken')?.value

	const headers: HeadersInit = {
		'Content-Type': 'application/json'
	}

	if (accessToken) {
		headers.Authorization = `Bearer ${accessToken}`
	}

	const upstreamResponse = await fetch(BACKEND_GRAPHQL_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody)
	})

	const responseBody = await upstreamResponse.json()
	const res = NextResponse.json(responseBody, { status: upstreamResponse.status })

	const authPayload =
		requestBody.operationName === 'Login'
			? (responseBody?.data?.login as AuthTokens | undefined)
			: requestBody.operationName === 'Register'
				? (responseBody?.data?.register as AuthTokens | undefined)
				: undefined

	if (authPayload?.accessToken && authPayload?.refreshToken) {
		setAuthCookies(res, authPayload.accessToken, authPayload.refreshToken)
	}

	return res
}
