import { Transition } from "@headlessui/react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
export function Memetip({ src, children }:{
    src:string 
    children:React.ReactNode
}) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root
                delayDuration={300}
                onOpenChange={(isOpen) => {
                    setIsOpen(isOpen)
                }}>
                <TooltipPrimitive.Trigger asChild>
                    <button 
                        className={clsx("group-hover:text-blue-400 transition-colors rounded-md hover:!text-blue-600 focus:!text-blue-600",
                        FOCUS_VISIBLE_OUTLINE)}
                    >
                        {children}{" "}
                    </button>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content side="top" align="center" sideOffset={8}>
                    <Transition
                        show={isOpen}
                        appear={true}
                        enter="transform transition ease-in-out duration-200"
                        enterFrom="opacity-0 translate-y-1 scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="bg-gray-100 shadow-2xl rounded-xl"
                        style={{ fontSize: 0 }}
                    >
                        <Image
                            src={src}
                            alt="Image"
                            width={320}
                            height={200}
                            className="rounded-xl"
                            quality={60}
                        />
                    </Transition>
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}