// import { components } from "@/ui/MdxComponents"
// import { getAllPostsMeta, getPostBySlug } from "@/ui/mdx"
// import { format, parseISO } from "date-fns"
// import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from 'next'
import { useReadingTime } from "react-reading-time-estimator";
import React from "react"
import fs from 'fs'
import Layout from "@/ui/Layout"
import Image from "next/image"
import path from 'path'
import matter from 'gray-matter'
// import { PostMeta  } from "types/post"
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
        meta:"aklite4.netlify.app . " + data.publishedAt
    }) 
    const {
        text
      } = useReadingTime(data.contentHtml);
    return (
        <>
        <meta 
         name="author"
         content="Ayush Kumar"
         />
             <meta 
        name="keywords"
        content="Ayush Kumar blogs ChatGPT SSR Rendering SSG Rendering Static Site Generation
        Tools I like to use NextJs Tailwind css ReactQuery"
        />
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
        <Layout>
            <div className="container max-w-3xl px-4 mx-auto mt-12 ">
                <div
                    className="md:flex  md:mt-4 md:gap-12 md:space-x-2 md:text-gray-600 md:mb-4
                    hidden
                    "
                >
                    <Image
                        src="/ayush.jpg"
                        height={80}
                        width={80}
                        className="rounded-full"
                        alt="Ayush Kumar Icon"
                    /> 
                    <div>
                        <p className='text-xl font-light'>Ayush Kumar</p>
                        <p className='italic'>
                        I am a frontend developer. I love working in React Projects.
                        I keep on exploring frameworks,
                        Intrested in Open Source Projects, 
                        Hackathon enthusiast.
                        </p>
                    </div>
                    </div>
                        <div>
                            <h1
                            className='text-4xl font-semibold mb-4'
                            >{data.title}
                            </h1>
                            <p className='font-light my-3'>{data.publishedAt} . {text}</p>
                            <div className='text-xl font-normal leading-8' dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                        </div>
            </div>
        </Layout>
        </>
    )
}