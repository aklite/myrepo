import { createOgImage } from "@/lib/createOgImage"
import type { DefaultSeoProps } from "next-seo"

const title = `Ayush Kumar`
const description = `Welcome to my website I write blogs about things I learn.`
const domain = `aklite.netlify.app`
const twitter = `@aklite9`
const meta = `Frontend Developer`

export const seo: DefaultSeoProps = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
}