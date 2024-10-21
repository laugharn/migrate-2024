import Article from '@/components/article'
import Head from 'next/head'
import { NavContent } from '@/components/nav'
import type { Post } from '@/sanity/types'
import Posts from '@/components/posts'
import { sanityClient } from '@/lib/sanity'

interface Props {
  posts: Post[]
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch<Post[]>(`*[_type == "post"]`)

  return {
    props: {
      posts,
    },
  }
}

function Page({ posts }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>The Best Workshop Content in the World - Workshop</title>
      </Head>
      <NavContent />
      <Article>
        <h1>The Best Workshop Content in the World</h1>
        <Posts posts={posts} />
      </Article>
    </>
  )
}

export default Page
