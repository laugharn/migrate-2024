import Article from '@/components/article'
import Head from 'next/head'
import { NavAuth } from '@/components/nav'
import { useRouter } from 'next/router'

function Page() {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <NavAuth />
      <Article>
        <form
          onSubmit={(e) => {
            e.preventDefault()

            fetch('/api/login').then(async (res) => {
              const data = await res.json()

              if (data.isAuthenticated === true) {
                const url = new URL(window.location.href)

                push(url.searchParams.get('returnTo') ?? '/')
              }
            })
          }}
        >
          <input className="w-full appearance-none bg-transparent" placeholder="Name" type="text" />
          <input className="w-full appearance-none bg-transparent" placeholder="Password" type="password" />
          <button className="text-[rgb(0,87,255)] hover:text-[blue]" type="submit">
            Submit
          </button>
        </form>
      </Article>
    </>
  )
}

export default Page
