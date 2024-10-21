import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Auth from '@/components/auth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="grid w-full grid-cols-1 gap-10 p-5">
      <Component {...pageProps} />
      <footer>
        &copy;{new Date().getFullYear()}, all rights reserved. <Auth />
      </footer>
    </main>
  )
}
