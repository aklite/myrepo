import { components } from "@/ui/MdxComponents"
// import { getAllPostsMeta, getPostBySlug } from "@/ui/mdx"
// import { format, parseISO } from "date-fns"
// import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from "react"
import{ Layout }from "@/ui/Layout"
import Image from "next/image"
// import { getPostData,getAllPostIds } from '@/lib/posts';
import { ParsedUrlQuery } from 'querystring'
import { readingTime } from "@/lib/readingtime"
import { NextSeo } from 'next-seo'
import { FiEdit } from "react-icons/fi"
import { createOgImage } from '@/lib/createOgImage'
import { allBlogs, type Blog } from 'contentlayer/generated'

import { useMDXComponent } from "next-contentlayer/hooks"
import { useIntersection } from "react-use"
import { useEnabledOnFirstIntersection } from "@/lib/useEnabledOnFirstIntersection"
import Link from "next/link"
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
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null
  })
  let showNav = false
  if (intersection && !intersection.isIntersecting) {
    showNav = true
  }

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
          <h1 className="text-2xl font-medium text-rose-100/80 sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between text-lg text-rose-100/40">
            
          <div className="flex mt-2 space-x-2">
              <div>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-rose-200/90">Ayush</a>
                </Link>
              </div>

              <div className="text-rose-100/30">&middot;</div>

              <div>{post.publishedAt}</div>
            </div>
          </div>

          {
            post.image ? 
            <div>
              <Image src={post.image}
              alt="Closures in JavaScript"
              height={700}
              width={900}
              className="mb-4 mt-8"
              />
            </div>:null
            
          }
          <h2 className="sm:text-[27.5px] leading-10 text-2xl">
            {post.description}
          </h2>
          
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