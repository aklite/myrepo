import cx from "clsx"
import Link from "next/link"
import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
const Navigation = () => {
    return (
        <div className="container px-4 mx-auto  mb-4 py-6 lg:mb-20">
            <div className="lg:flex lg:items-center lg:justify-between">
                <Link href="/" legacyBehavior>
                    <a
                        className={cx("font-medium tracking-wider transition-colors text-gray-700 hover:text-gray-800 focus:text-gray-800 uppercase rounded-sm",
                            FOCUS_VISIBLE_OUTLINE)}>
                        Ayush Kumar
                    </a>
                </Link>
                <div className=" flex flex-wrap -ml-5 text-gray-700 lg:-ml-8">
                    <Link href="/#about" legacyBehavior>
                        <a
                            className="font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded"
                        >
                            About
                        </a>
                    </Link>
                    <Link href="/#projects" legacyBehavior>
                        <a
                            className={cx("font-medium block transition-colors  mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded",
                                FOCUS_VISIBLE_OUTLINE,
                            )}
                        >
                            Projects
                        </a>
                    </Link>
                    <Link href="/blog" legacyBehavior>
                        <a
                            className={cx("font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded", FOCUS_VISIBLE_OUTLINE)}>
                            Blog
                        </a>
                    </Link>
                    <Link href="/#contact" legacyBehavior>
                        <a
                            className={cx(
                                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded",
                                FOCUS_VISIBLE_OUTLINE,
                            )}
                        >
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navigation