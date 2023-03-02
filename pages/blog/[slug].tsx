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
import Link from "next/link"
import { usePostViews } from "@/lib/usePostViews"
import { LoadingDots } from "@/ui/LoadingDots"
import { InlineMetric } from "@/ui/InlineMetric"
import { usePollIfInView } from "@/lib/usePollIfInView"

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
const Metrics = ({ slug }: { slug: string }) => {
  const interval = 5000
  const { shouldPoll, intersectionRef } = usePollIfInView(interval)


  const {
    views,
    isLoading: viewsIsLoading,
    isError: viewsIsError,
    increment: incrementViews,
  } = usePostViews(slug, {
    // Avoid fetching view count we *know* is stale since increment() mutation
    // returns view count
    revalidateOnMount: false,
    // Only poll when in view
    refreshInterval: shouldPoll ? interval : 0,
    // Override `usePostViews` default dedupingInterval for the polling usecase
    // (refresh interval can never be faster than deduping interval)
    dedupingInterval: interval,
  })



  React.useEffect(() => {
    incrementViews()
  }, [])

  return (
    <div ref={intersectionRef} className=" text-gray-500/90">
      <div>
        {viewsIsError || viewsIsLoading ? (
          <LoadingDots />
        ) : (
          <InlineMetric key={views} stat={views} text="views" />
        )}
      </div>


      
    </div>
  )
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
    description:post.description,
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
        <div>
          <h1 className="text-2xl font-medium text-rose-100/80 sm:text-4xl">
            {post.title}
          </h1>
          <h3 className="text-2xl font-medium text-rose-100/80 sm:text-2xl my-5">
            {post.description}
          </h3>
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
          <div className="mt-2">
              <Metrics slug={post.slug} />
            </div>
          <div className="mt-10 text-lg text-rose-100/70">
            <MDXContent
              components={{
                ...components,
              }}
            />
          </div>
        </div>
      </Layout>    
      </>
  )
}