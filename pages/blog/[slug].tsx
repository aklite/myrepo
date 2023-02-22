import { components } from "@/ui/MdxComponents"
// import { getAllPostsMeta, getPostBySlug } from "@/ui/mdx"
// import { format, parseISO } from "date-fns"
// import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from "react"
import Layout from "@/ui/Layout"
import Image from "next/image"
// import { getPostData,getAllPostIds } from '@/lib/posts';
import { ParsedUrlQuery } from 'querystring'
import { readingTime } from "@/lib/readingtime"
import { NextSeo } from 'next-seo'
import { FiEdit } from "react-icons/fi"
import { createOgImage } from '@/lib/createOgImage'
import { allBlogs, type Blog } from 'contentlayer/generated'

import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
interface Data {
  title: string
  description: string
  publishedAt: string
}
interface Props {
  data: Data
  slug: string
}
interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  post: Blog
}> = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug)!
  return {
    props: {
      post
    }
  }
}

export default function PostPage(
  {
    post
  }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const MDXContent = useMDXComponent(post.body.code)
  const url = `https://aklite.study/blog/${post.slug}`
  const title = `${post.title} | aklite.study`
  const minutesToRead = readingTime(post.body.raw)

  const ogImage = createOgImage({
    title: post.title,
    meta: "aklite.study . " + post.publishedAt
  })

  return (
    <>
      <meta
        name="author"
        content="Ayush Kumar"
      />
      <meta
        name="keywords"
        content="Ayush Kumar blogs ChatGPT SSR Rendering SSG Rendering Static Site Generation
        Tools I like to use NextJs Tailwind css ReactQuery"
      />
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={url}
        openGraph={{
          url,
          title,
          description: post.description,
          images: [
            {
              url: ogImage,
              width: 1600,
              height: 836,
              alt: post.title,
            },
          ],
        }}
      />
      <Layout>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium sm:text-4xl text-black-600 ">
            {post.title}
          </h1>

          <div className="flex items-center mt-2 space-x-2 text-base text-black-100/90">
            <div className="text-rose-100/30">&middot;</div>
            <div>{post.publishedAt}</div>
            <div>{minutesToRead} min read</div>
          </div>

          <div className="mt-10 text-lg text-black-600">
            <MDXContent
              components={
                {
                  ...components
                }
              }
            />
          </div>
          <hr />
          <div className='flex gap-4 mt-5 items-center'>
            <a href={`https://github.com/aklite/myrepo/tree/main/data/post/${post.slug}.md`}
              target="_blank"
              rel="noreferrer"
            >
              <FiEdit className='' />
              <p className=''>Edit on Github</p>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}