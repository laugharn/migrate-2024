import { generateRandomMetrics } from '@/lib/random'
import { type GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { NavContent } from '@/components/nav'
import nookies from 'nookies'

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const cookies = nookies.get(context)

  if (!!cookies['workshop_auth']) {
    return {
      props: {
        data: generateRandomMetrics(),
      },
    }
  }

  return {
    redirect: {
      destination: '/login?returnTo=/dashboard',
      permanent: false,
    },
  }
}

function Page({ data }: { data: [string, number][] }) {
  return (
    <>
      <Head>
        <title>Dashboard - Workshop</title>
      </Head>
      <NavContent />
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
        {data.map(([title, value], index) => (
          <div key={index}>
            <ul>
              <li>{title}</li>
              <li className="opacity-50">{value}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page
