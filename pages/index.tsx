import About from "@/ui/About"
import Contact from "@/ui/Contact"
import { Layout } from "@/ui/Layout"
import Projects from "@/ui/Projects"
import Skills from "@/ui/Skills"
import Words from "@/ui/Words"
import { seo } from "@/lib/seo"
import { ContentLink } from "@/ui/ContentLink"
import Head from "next/head"
// import { getAllPostsMeta } from "@/ui/mdx"
import React from "react"
import type { PostMeta } from "types/post"
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import type { InferGetStaticPropsType } from 'next'
import { BlogPostPreview } from "@/ui/BlogPostPreview"
import { useIntersection } from "react-use"
import ProfileImage from "@/ui/ProfileImage"
import Navigation from "@/ui/Navigation"

export function getStaticProps() {
  // const files=fs.readdirSync(path.join('posts'))
  // const posts=files.map((fileName)=>{
  //   const slug=fileName.replace('.mdx','')
  //   const markdownWithMeta=fs.readFileSync(path.join('posts',fileName),'utf-8') 
  //   const {data:frontmatter,content}=matter(markdownWithMeta) 
  //   return { 
  //     slug,
  //     frontmatter,
  //     content 
  //   }
  // })
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return {
    props: {
      posts
    }
  }

}

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null
  })
  let showNav = false
  if (intersection && !intersection.isIntersecting) {
    showNav = true
  }
  return (
    <Layout showNav={showNav}>
      <Head>
        <meta name="google-site-verification" content="NEMpabu1y5ceBmoMuGfgVTxyfYsT0myWYoVuCw2XpR0" />
        <meta
          name="author"
          content="Ayush Kumar"
        />
        <meta
          name="keywords"
          content="Ayush Kumar blogs ChatGPT SSR Rendering SSG Rendering Static Site Generation
        Tools I like to use NextJs Tailwind css ReactQuery"
        />
      </Head>
      <div>
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center space-x-6">
            <ProfileImage size="large" />
            <div ref={intersectionRef}>
              <h1 className="text-4xl font-medium text-rose-50/80">Ayush</h1>
              <h2 className="text-lg text-rose-100/60">
               Final Year Student At LPU 
              </h2>
            </div>
          </div>
          <p className="text-lg text-rose-100/80">{seo.description}</p>
          <Navigation />
        </div>
      </div>
      <div className="mt-12 space-y-12">
        {posts.map((post) => (
                <BlogPostPreview key={post.slug} {...post} />
              ))}
      </div>
    </Layout>
  )
}