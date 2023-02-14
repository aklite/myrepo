import { useTheme } from "next-themes"
import { encode } from "qss"
import React from "react"
import { Portal, Transition } from "@headlessui/react"
import Image from "next/image"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import clsx from "clsx"
import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "./constants"
import {HiOutlineEllipsisHorizontalCircle} from "react-icons/hi2"

export const LinkPreview = ({
    children,
    url
}: {
    children: React.ReactNode
    url: string
}) => {
    const { resolvedTheme } = useTheme()

    const width = 200
    const height = 125
    const layout = "fixed"

    const params = encode({
        url,
        screenshot:true,
        meta:false,
        embed:"screenshot.url",
        colorScheme:resolvedTheme,
        "viewport.isMobile":true,

        "viewport.width":width*3,
        "viewport.height":height*3
    })
    const src=`https://api.microlink.io/?${params}`

    const [isOpen,setIsOpen]=React.useState(false)

    const [isMounted,setIsMounted]=React.useState(false)

    React.useEffect(()=>{
        setIsMounted(true)
    },[])
    return (
        <>
             {isMounted ? (
        <Portal>
          <div className="hidden">
            <Image
              src={src}
              width={width}
              height={height}
              layout={layout}
              priority={true}
              alt="Image"
            />
          </div>
        </Portal>
      ) : null}
      <HoverCardPrimitive.Root
      openDelay={50}
      onOpenChange={(open)=>{
        setIsOpen(open)
      }}
      >
        <HoverCardPrimitive.Trigger
          href={url}
          className={clsx(LINK_STYLES,FOCUS_VISIBLE_OUTLINE)}
        >
            {children}
            <HiOutlineEllipsisHorizontalCircle className="inline w-4 mb-0.5 ml-1"/>
        </HoverCardPrimitive.Trigger>
        <HoverCardPrimitive.Content 
         side="top"
         align="center"
         sideOffset={10}
         >
          <a href={url}>
            <Image
                  src={src}
                  width={width}
                  height={height}
                  layout={layout}
                  className="rounded-lg"
                  alt="Image"
                />
          </a>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
        </>
    )
}