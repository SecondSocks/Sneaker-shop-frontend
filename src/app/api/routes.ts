import type { NextResponse } from 'next/server'

export const BACKEND_GRAPHQL_URL =
	process.env.BACKEND_GRAPHQL_URL ?? 'http://localhost:4200/graphql'

const COOKIE_BASE_OPTIONS = {
	httpOnly: true,
	secure: process.env.NODE_ENV === 'production',
	sameSite: 'lax' as const,
	path: '/'
}

export function setAuthCookies(
	res: NextResponse,
	accessToken: string,
	refreshToken: string
) {
	res.cookies.set('accessToken', accessToken, {
		...COOKIE_BASE_OPTIONS,
		maxAge: 60 * 60
	})

	res.cookies.set('refreshToken', refreshToken, {
		...COOKIE_BASE_OPTIONS,
		maxAge: 60 * 60 * 24 * 7
	})
}
