import { type ReactNode } from 'react'

function Article({ children }: { children: ReactNode }) {
  return <article className="grid w-full grid-cols-1 gap-5">{children}</article>
}

export default Article
