import Link from './link'

export function NavAuth() {
  return (
    <nav className="flex justify-between">
      <Link href="/">Workshop</Link>
    </nav>
  )
}

export function NavContent() {
  return (
    <nav className="flex justify-between">
      <Link href="/">Workshop</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  )
}
