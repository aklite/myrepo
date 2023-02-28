import {Layout} from "@/ui/Layout"
import React from "react"
import type { InferGetStaticPropsType } from "next"
import { allBlogs } from "contentlayer/generated"
import { pick } from "contentlayer/client"
import { HiOutlineAnnotation } from "react-icons/hi"
import { BlogPostPreview } from "@/ui/BlogPostPreview"

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, [
      "slug",
      "title",
      "description",
      "publishedAt",
    ]),
    )

  return {
    props: {
      posts
    }
  }
}

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>
        <div className="flex items-center space-x-4">
          <HiOutlineAnnotation className="w-6 text-gray-600/90" />
          <div>
            <h1 className="text-2xl text-gray-500/90">Posts</h1>
          </div>
          <div className="mt-12 space-y-12 ">
                {posts.map((post) => (
                  <BlogPostPreview key={post.slug} {...post} />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}