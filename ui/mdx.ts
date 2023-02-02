import fs from "fs"
import glob from "glob"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import path from "path"
import remarkSlug from "remark-slug"
import type { PostMeta } from "types/post"
                                                        
const ROOT_PATH = process.cwd()
export const POSTS_PATH = path.join(ROOT_PATH, "posts")

export const getAllPostsMeta = () => {
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

export const getPostBySlug = async (slug: string) => {
  
}