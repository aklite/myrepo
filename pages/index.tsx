import About from "@/ui/About"
import Contact from "@/ui/Contact"
import Layout from "@/ui/Layout"
import Projects from "@/ui/Projects"
import Skills from "@/ui/Skills"
import Words from "@/ui/Words"
import { ContentLink } from "@/ui/ContentLink"
import Head from "next/head"
// import { getAllPostsMeta } from "@/ui/mdx"
import React from "react"
import type { PostMeta } from "types/post"
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from "date-fns"
import type { InferGetStaticPropsType } from 'next'


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
 const posts=allBlogs.sort((a,b)=>{
  return compareDesc(new Date(a.publishedAt),new Date(b.publishedAt))
 })
 return {
  props:{
    posts 
  }
 }
 
}

export default function Home({ 
  posts 
}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
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
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="blog">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Blogs</h2>
            <h4 className="text-gray-700 lg:text-lg">
              Thoughts on what I&apos;m learning and building in web development
            </h4>
             {posts.map((post)=>{
              return <ContentLink 
              key={post.slug}
              title={post.title}
              text={post.description}
              href={post.slug}
              
              />
             })}
            <div className="mt-8 space-y-12">
              
            </div>
          </div>
        </div>

        <div id="projects">
          <Projects />
        </div>
        <div id="words">
          <Words />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Layout>
  )
}