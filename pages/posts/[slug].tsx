import type { Post, Tag } from '@/sanity/types'
import Article from '@/components/article'
import { format } from 'date-fns'
import { type GetStaticPaths } from 'next'
import Head from 'next/head'
import { NavContent } from '@/components/nav'
import { PortableText } from '@portabletext/react'
import { sanityClient } from '@/lib/sanity'

interface Props {
  post: TypedPost
}

type TypedPost = Omit<Post, 'tags'> & { tags: Tag[] }

export function getStaticPaths(): ReturnType<GetStaticPaths> {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string }
}): Promise<{ props: Props } | { notFound: true }> {
  const post = await sanityClient.fetch<TypedPost>(`*[_type == "post" && slug.current == $slug]{...,tags[]->}[0]`, {
    slug: params.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

function Page({ post }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{`${post.title} - Workshop`}</title>
      </Head>
      <NavContent />
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
    </>
  )
}

export default Page
