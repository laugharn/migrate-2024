import Link from './link'
import type { Post } from '@/sanity/types'

function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post._id}>
            <Link href={`/posts/${post.slug!.current}`}>{post.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts
