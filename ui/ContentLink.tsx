import Link from "next/link"
import React,{ElementType} from "react"
export const ContentLink = ({ 
   href,
   children 
 }: {
    href:string 
    children:React.ReactNode
 }) => {
  return (
       <div key={href} className="my-8">
        <h2 className="text-xl font-bold">
            <Link href={`/blog/${href}`} legacyBehavior>
            <a className="text-gray-800 transition-colors hover:text-gray-600">
            {href}
            </a>
            </Link>
        </h2>
        <div className="text-sm text-gray-500">
           
        </div>
            <div className="mt-3 text-gray-700">{text}</div>
       </div>
   ) 
}

function Title({
    children
}:{
    children:React.ReactNode
}){
    return (
        <h3 className="text-xl transition duration-300 text-rose-100/80 line-clamp-2 hover:text-rose-100/90">
            {children}
        </h3>
    )
}
 function Text(
    {children}:{
        children:React.ReactNode
    }){
    return (
      <p className="mt-4 text-lg text-gray-400/90 line-clamp-3">
        {children}
      </p>
    )
 }
 ContentLink.Title=Title 
 ContentLink.Text=Text 