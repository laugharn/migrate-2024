import { cookies } from 'next/headers'
import { generateRandomMetrics } from '@/lib/random'
import { redirect } from 'next/navigation'

async function Page() {
  const workshop_auth = (await cookies()).get('workshop_auth')?.value
  if (!workshop_auth) {
    return redirect('/login?returnTo=/dashboard')
  }
  const data = generateRandomMetrics()
  return (
    <>
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

export const dynamic = 'force-dynamic'

export default Page
