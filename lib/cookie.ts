interface CookieOptions {
  maxAge?: number
  expires?: Date
  httpOnly?: boolean
  secure?: boolean
  domain?: string
  path?: string
  sameSite?: 'strict' | 'lax' | 'none'
}

export function serializeCookie(name: string, value: string, options: CookieOptions = {}): string {
  const encodedValue = encodeURIComponent(value)
  let cookieString = `${name}=${encodedValue}`

  if (options.maxAge) {
    cookieString += `; Max-Age=${options.maxAge}`
  }

  if (options.expires) {
    cookieString += `; Expires=${options.expires.toUTCString()}`
  }

  if (options.httpOnly) {
    cookieString += '; HttpOnly'
  }

  if (options.secure) {
    cookieString += '; Secure'
  }

  if (options.domain) {
    cookieString += `; Domain=${options.domain}`
  }

  if (options.path) {
    cookieString += `; Path=${options.path}`
  }

  if (options.sameSite) {
    cookieString += `; SameSite=${options.sameSite}`
  }

  return cookieString
}
