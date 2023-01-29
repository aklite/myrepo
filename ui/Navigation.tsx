import cx from "clsx"
import Link from "next/link"
import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
import { HighlightOnHover } from "./HighlightOnHover"
const Navigation=()=>{
    return (
        <div className="container px-4 mx-auto mt-4 mb-4 lg:mt-8 lg:mb-20">
            <div className="lg:flex lg:items-center lg:justify-between">
                <Link href="/"
                className={cx("font-medium tracking-wider transition-colors text-gray-600 hover:text-gray-800 focus:text-gray-800 uppercase rounded-sm",
                FOCUS_VISIBLE_OUTLINE)}
                >
                    
                </Link>
                <HighlightOnHover>Ayush Kumar</HighlightOnHover>
            </div>
        </div>
    )
}
export default Navigation