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
import { LogoJsonLd, NextSeo } from 'next-seo'
import { createOgImage } from '@/lib/createOgImage'
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
         slug
          }
        }
}

export default function PostPage(
{
    data,
    slug
}:
{
    data:Data,
    slug:string 
}
) {
    const url=`https://aklite4.netlify.app/blog/${slug}`
    const title=`${data.title} | aklite.netlify.app`
    const ogImage=createOgImage({
        title:data.title, 
        meta:"aklite.netlify.app . " + data.publishedAt
    }) 
    return (
        <Layout>
            <NextSeo
            title={data.title}
            description={data.description}
            canonical={url}
            openGraph={{
                url,
                title,
                description:data.description,
                images:[
                   {
                     url:ogImage,
                     width:1600,
                     height:836,
                     alt:data.title,
                },
                ],
            }}
            />
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