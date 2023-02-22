import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import cx from "clsx"
import Link from "next/link"
import React, { ElementType } from "react"

export function ContentLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={cx(
          "block rounded-2xl bg-white/[2%] p-7 shadow-surface-elevation-low transition duration-300 hover:bg-black hover:text-white hover:shadow-surface-elevation-medium",
          FOCUS_VISIBLE_OUTLINE,
        )}
      >
        {children}
      </a>
    </Link>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl transition duration-300 text-black-500 line-clamp-2 hover:text-black-400">
      {children}
    </h3>
  )
}



function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-lg text-gray-400/90 line-clamp-3">{children}</p>
  )
}



ContentLink.Title = Title

ContentLink.Text = Text