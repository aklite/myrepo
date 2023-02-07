import { components } from "@/ui/MdxComponents"
import { getAllPostsMeta, getPostBySlug } from "@/ui/mdx"
import { format, parseISO } from "date-fns"
import { getMDXComponent } from "mdx-bundler/client"
import React from "react"
import fs from 'fs'
import Layout from "@/ui/Layout"
import Image from "next/image"
import path from 'path'
import matter from 'gray-matter'
import { GetStaticProps } from "next"
import { PostMeta } from "types/post"
import { sl } from "date-fns/locale"
import Head from "next/dist/shared/lib/head"
export const getStaticPaths = () => {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = ({ params: slug }: { params: { slug: string } }) => {
  
    
    // const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
    // const post= matter(markdownWithMeta)
    return {
        props: { 
           post :"dskkjds"  as string 
        } 
    }
}

export default function PostPage(props:{props: {
    post: string;
}}) {
    return (
        <Layout>
            <Head>
                <title>Blog 1</title>
                <meta 
                name="description"
                content="Blogs are written in English"
                key="desc"
                />
            </Head>
            <div className="container max-w-3xl px-4 mx-auto mt-36">
           
                <div
                    className="flex items-center mt-4 space-x-2 text-gray-600"
                >
                    <Image
                        src="/ayush.jpg"
                        height={24}
                        width={24}
                        className="rounded-full"
                        alt=""
                    />
                    <div>Ayush Kumar</div>
                    <div></div>

                </div>
            </div>
        </Layout>
    )
}