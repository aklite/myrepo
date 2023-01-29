import { Memetip } from "@/ui/Memetip"

import React from "react"
import clsx from "clsx"

const data:{
  title:string 
  items:{text:string; src?:string}[][]}[] = [
  {
    title: "Design",
    items: [
     [
      {
        text: "Figma",
        src: "/figma.jpg"
      },
    ],
      [{
        text: "Tailwind",
        src: "/tailwind.jpg"
      },],
     [ { text: "Design systems" },],
     [ { text: "User research" },]
     
    ],
  },
  {
    title: "Front-end",
    items: [
      [
        { text: "Accessible HTML",}
        ,{ text:"CSS" }
      ],
      [
        {text: "JavaScript",
          src:"/javascript.png"
      },{text:"TypeScript",
        src:"/typescript.png"
    }
      ],
      [
        {
          text: "React",
           src: "/react.jpg"
        },
        {
          text: "Next.js",
          src: "/next.jpg"
        },
        {
          text: "CRA",
          src: "/cra.jpg"
        },
      ],
      [{ text: "CSS-in-JS" }],
    ],
  },
  {
    title: "Back-end",
    items: [
      [{ text: "Node.js" }],
      [{ text: "REST & GraphQL APIs" }],
      [{ text: "MySQL & PostgreSQL" }],
      [{
        text: "Prisma",
        src: "/prisma.jpg"
      }],
    ],
  },
  {
    title: "Other",
    items: [
     [
          {
            text: "Vercel",
             src: "/vercel.jpg"
          },
          {
            text: "AWS",
            src: "/aws.gif",
          },
          { text: "Heroku" },
     ],
      
      [{ text: "Testing (Jest)" }],
      [{
        text: "Zapier & Airtable",
        src: "/nocode.jpg",
      }],
      [{ text: "Scrum & Kanban" }],
    ],
  },
]

const Skills:React.FC = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Skills and tools</h2>
      <h4 className="text-gray-700 lg:text-lg">
        Some of the languages, tools and concepts I have experience with.
      </h4>
      
        <div className="flex flex-wrap mt-5 -mx-4">
          {
            data.map((field,fieldIndex)=>{
              return (
                <div key={fieldIndex} className="w-1/2 px-4 mt-4 lg:w-1/4">
                  <div className="text-lg font-bold text-gray-800">
                    {field.title}
                  </div>
                  <ul className="mt-2 space-y-1 text-sm te">
                    {field.items.map((item,itemIndex)=>{
                      return (
                        <li 
                        key={itemIndex}
                        className="leading-8" 
                        >
                          {
                            item.map((child,childIndex)=>{
                              const prefix=childIndex === 0
                              ? null
                              : item.length > 1 &&
                                item.length - 1 === childIndex
                              ? " & "
                              : ", "
                              return (
                                <React.Fragment key={childIndex}>
                                  {prefix}
                                  {child.src ? (
                                    <Memetip src={child.src}>
                                      {child.text}
                                    </Memetip>
                                  ):(
                                    child.text 
                                  )}
                                </React.Fragment>
                              )
                            })
                          }
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })
          }
        </div>
      
    </div>
  )
}

export default Skills 