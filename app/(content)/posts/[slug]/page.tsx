import type { Post, Tag } from '@/sanity/types'
import Article from '@/components/article'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { sanityClient } from '@/lib/sanity'

type TypedPost = Omit<Post, 'tags'> & { tags: Tag[] }

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sanityClient.fetch<TypedPost>(
    `*[_type == "post" && slug.current == $slug]{...,tags[]->}[0]`,
    {
      slug,
    },
    {
      next: {
        revalidate: Infinity,
      },
    },
  )

  if (!post) {
    return notFound()
  }

  return (
    <Article>
      <header>
        <h1>{post.title}</h1>
        <p>{format(new Date(post._createdAt), 'yyyy-MM-dd')}</p>
      </header>
      {post.body && (
        <div>
          <PortableText value={post.body} />
        </div>
      )}
      <p>
        <span>
          Tagged:{' '}
          {post.tags.map((tag) => (
            <span key={tag.title}>{tag.title}</span>
          ))}
        </span>
      </p>
    </Article>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sanityClient.fetch<TypedPost>(
    `*[_type == "post" && slug.current == $slug]{...,tags[]->}[0]`,
    {
      slug,
    },
    {
      next: {
        revalidate: Infinity,
      },
    },
  )

  if (post) {
    return {
      title: `${post.title} - Workshop`,
    }
  }
}

export default Page
