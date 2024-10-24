import '@/styles/globals.css'
import Footer from '@/components/footer'
import { NavAuth } from '@/components/nav'
import type { ReactNode } from 'react'
function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid w-full grid-cols-1 gap-10 p-5">
      <NavAuth />
      {children}
      <Footer />
    </main>
  )
}
export default Layout
