import { format, parseISO } from "date-fns"
import Link from "next/link"
import React from "react"
import type { PostMeta } from "types/post"



export const BlogPreview = ({ post }: { post: PostMeta }) => {
  return (
       <div key={post.slug} className="my-8">
        <h2 className="text-xl font-bold">
            <Link href={`blog/${post.slug}`} legacyBehavior>
            <a className="text-gray-800 transition-colors hover:text-gray-600">
            {post.frontmatter.title}
            </a>
            </Link>
        </h2>
         
            
            <div className="text-sm text-gray-500">
            {/* {format(parseISO(post.frontmatter.publishedAt), "yyyy mm dd")} */}
            </div>
            <div className="mt-3 text-gray-700">{post.frontmatter.description}</div>
       </div >
   ) 
}