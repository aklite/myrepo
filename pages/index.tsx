import About from "@/ui/About"
import Contact from "@/ui/Contact"
import Layout from "@/ui/Layout"
import Projects from "@/ui/Projects"
import Skills from "@/ui/Skills"
import Words from "@/ui/Words"
import { BlogPreview } from "@/ui/BlogPreview"
// import { getAllPostsMeta } from "@/ui/mdx"
import React from "react"
import type { PostMeta } from "types/post"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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

export default function Home({ posts}:{posts:PostMeta[]}) {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>

        <div id="blog">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">Posts</h2>
            <h4 className="text-gray-700 lg:text-lg">
              Thoughts on what I&apos;m learning and building in web development
            </h4>
             {posts.map((post)=>{
              return <BlogPreview key={post.slug} post={post}/>
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