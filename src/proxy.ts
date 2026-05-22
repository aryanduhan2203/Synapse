import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'nl']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  // Check if Dutch is preferred
  if (acceptLanguage.toLowerCase().includes('nl')) {
    return 'nl'
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for public assets or internal Next.js paths
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return
  }

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to language sub-path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Match all pathnames except for internal next files and assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
