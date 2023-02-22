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
// import Link from "next/link"
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
           <div
                    className="md:flex  md:mt-4 md:gap-12 md:space-x-2 md:text-gray-600 md:mb-8
                    hidden
                    "
                >
                    <Image
                        src="/ayush.jpg"
                        height={80}
                        width={80}
                        className="rounded-full"
                        alt="Ayush Kumar Icon"
                    /> 
                      <div>
                        <p className='text-xl font-light'>Ayush Kumar</p>
                        <p className='italic'>
                        I am a frontend developer. I love working in React Projects.
                        I keep on exploring frameworks,
                        Intrested in Open Source Projects, 
                        Hackathon enthusiast.
                        </p>
                    </div>
            </div>
          <h1 className="sm:text-[50px] leading-9 text-3xl font-medium text-black-600 mb-5">
            {post.title}
          </h1>
          <h2 className="sm:text-[27.5px] leading-10 text-2xl">
            {post.description}
          </h2>
          <div className="flex items-center mt-2 space-x-2 text-base text-black-100/90 top">
            
            <div>{post.publishedAt}</div>
            <div className="text-black-600 ">&middot;</div>
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
        </div>
      </Layout>
    </>
  )
}