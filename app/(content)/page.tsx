import Article from '@/components/article'
import type { Post } from '@/sanity/types'
import Posts from '@/components/posts'
import { sanityClient } from '@/lib/sanity'
async function Page() {
  const posts = await sanityClient.fetch<Post[]>(
    `*[_type == "post"]`,
    {},
    {
      next: {
        revalidate: Infinity,
      },
    },
  )
  return (
    <Article>
      <h1>The Best Workshop Content in the World</h1>
      <Posts posts={posts} />
    </Article>
  )
}
export async function generateMetadata() {
  return {
    title: 'The Best Workshop Content in the World - Workshop',
  }
}
export default Page
