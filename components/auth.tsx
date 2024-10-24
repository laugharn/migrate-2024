'use client'

import { useEffect, useState } from 'react'
import Link from './link'
import { logout } from '@/lib/auth'
import { parseCookies } from 'nookies'
import { usePathname, useRouter } from 'next/navigation'

function Auth() {
  const asPath = usePathname()
  const { push } = useRouter()

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()

  useEffect(() => {
    const cookies = parseCookies()

    setIsAuthenticated(!!cookies.workshop_auth)
  }, [asPath])

  if (isAuthenticated) {
    return (
      <button
        className="text-[rgb(0,87,255)] hover:text-[blue]"
        onClick={async () => {
          await logout()

          if (asPath === '/dashboard') {
            push('/login')
          }
        }}
      >
        Logout.
      </button>
    )
  }

  if (isAuthenticated === false) {
    return (
      <Link href="/login" prefetch={false}>
        Login.
      </Link>
    )
  }

  return null
}

export default Auth
