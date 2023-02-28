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
          "block rounded-2xl bg-white/[2%] p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/[5%] hover:shadow-surface-elevation-medium",
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
    <h3 className="text-xl transition duration-300 text-rose-100/80 line-clamp-2 hover:text-rose-100/90">
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