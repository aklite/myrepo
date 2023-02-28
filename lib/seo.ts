import { createOgImage } from "@/lib/createOgImage"
import type { DefaultSeoProps } from "next-seo"

const title = `Ayush Kumar`
const description = `Welcome to my website I share  about JavaScript Concepts,building full stack apps, frontend web applications and becoming a better developer.`
const domain = `aklite4.netlify.app`
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