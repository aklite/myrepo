import { BlogPreview } from "@/ui/BlogPreview"
import Layout from "@/ui/Layout"
import React from "react"
import type { PostMeta } from "types/post"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from "next/dist/shared/lib/head"
export function getStaticProps() {
  const files=fs.readdirSync(path.join('posts'))
  const posts=files.map((fileName)=>{
    const slug=fileName.replace('.mdx','')
    const markdownWithMeta=fs.readFileSync(path.join('posts',fileName),'utf-8') 
    const {data:frontmatter,content}=matter(markdownWithMeta) 
    return { 
      slug,
      frontmatter,
      content 
    }
  })
 
  return {
    props:{
      posts
    }
  }
}

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
  return (
    <Layout>
      <Head>
        <title>Blogs by Ayush</title>
        <meta 
        name="description"
        content="Blogs on Web Development, latest trends, Learn about Nextjs,React"
        />
        <meta 
        name="keywords"
        content="Ayush Kumar blogs ChatGPT SSR Rendering SSG Rendering Static Site Generation
        Tools I like to use NextJs Tailwind css ReactQuery"
        />
      </Head>
      <div className="container max-w-3xl px-4 mx-auto mt-36">
        <h1 className="text-5xl font-extrabold text-gray-800">Blog</h1>
        <h4 className="mt-2 text-gray-700 lg:text-lg">
          Thoughts on what I&apos;m learning and building in web development
        </h4>
        <div className="mt-12 space-y-12">
          {posts.map((post) => (
            <BlogPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}