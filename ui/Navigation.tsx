import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import cx from "clsx"
import Link from "next/link"
import React from "react"
import TwitterIcon from "./TwitterIcon"

const Navigation = () => {
    return (
        <div className="flex items-center space-x-7 leading-none text-rose-100/90 sm:text-lg">
           <Link href="/blog" legacyBehavior>
            <a className={cx("group rounded-lg",FOCUS_VISIBLE_OUTLINE)}>
                Blogs 
            </a>
           </Link>
           <a className={cx("group rounded-lg",FOCUS_VISIBLE_OUTLINE)}
             href="https://twitter.com/aklite"
             target="_blank"
           >
            <TwitterIcon className="w-[18px] transform text-rose-100 transition delay-100 shadow-lg duration-500 ease-out hover:scale-110" />
            <div className="transition-colors hover:text-rose-200/90
            ">
                Twitter 
            </div>
           </a>
        </div>
    )
}
export default Navigation