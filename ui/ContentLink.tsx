import { format, parseISO } from "date-fns"
import Link from "next/link"
import React from "react"
import type { PostMeta } from "types/post"

export const ContentLink = ({ 
    title,
    href,
    text,
    meta 
 }: {
    href:string 
    title:string 
    text:string 
    meta:string[]
 }) => {
  return (
       <div key={href} className="my-8">
        <h2 className="text-xl font-bold">
            <Link href={`/blog/${href}`} legacyBehavior>
            <a className="text-gray-800 transition-colors hover:text-gray-600">
            {title}
            </a>
            </Link>
        </h2>
        <div className="text-sm text-gray-500">
            {meta}
        </div>
            <div className="mt-3 text-gray-700">{text}</div>
       </div>
   ) 
}