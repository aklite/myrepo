// import { components } from "@/ui/MdxComponents"
// import { getAllPostsMeta, getPostBySlug } from "@/ui/mdx"
// import { format, parseISO } from "date-fns"
// import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from 'next'
import React from "react"
import fs from 'fs'
import Layout from "@/ui/Layout"
import Image from "next/image"
import path from 'path'
import matter from 'gray-matter'
import { PostMeta  } from "types/post"
import { getPostData,getAllPostIds } from '@/lib/posts';

import { ParsedUrlQuery } from 'querystring'
import Head from "next/dist/shared/lib/head"
import { LogoJsonLd } from 'next-seo'
interface Data{
    title:string
    description:string
    publishedAt:string
    contentHtml:string;
}
interface IParams extends ParsedUrlQuery {
    slug: string;
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  
  

  export const  getStaticProps:GetStaticProps=async({params})=> {
    const {slug}=params as IParams 
    const data=await getPostData(slug)
    console.log("content is ",data)
    return {  
       props:{
         data,
          }
        }
}

export default function PostPage(
{
    data 
}:
{
    data:Data
}
) {
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
                <meta 
                name="description"
                content={data.description}
                key="desc"
                />
                <meta 
                name="keywords"
                content="Ayush Kumar Ayush Kumar blogs ChatGPT SSR Rendering SSG Rendering Static Site Generation
                Tools I like to use NextJs Tailwind css ReactQuery 
                "
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
                        alt="Ayush Kumar Icon"
                    />
                    <div>
                        <h1
                        className='text-4xl font-bold'
                        >{data.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}