import {
    ComputedFields,
    defineDocumentType,
    makeSource,
  } from "contentlayer/source-files"
  import { format, parseISO } from "date-fns"
  import rehypeAutolinkHeadings from "rehype-autolink-headings"
  import rehypeSlug from "rehype-slug"
  import remarkGfm from "remark-gfm"
  import { HEADING_LINK_ANCHOR } from "./lib/constants"
  
  const computedFields: ComputedFields = {
   
    
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  }
  
  const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "posts/*.mdx",
    contentType: "mdx",
    fields: {
      title: { type: "string", required: true },
      publishedAt: { type: "string", required: true },
      description: { type: "string", required: true },
      // image: { type: "string", required: true },
    },
    computedFields,
  }))
  
  const contentLayerConfig = makeSource({
    contentDirPath: "data",
    documentTypes: [Blog],
  
    mdx: {
      esbuildOptions(options) {
        options.target = "esnext"
        return options
      },
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: [HEADING_LINK_ANCHOR],
            },
          },
        ],
      ],
    },
  })
  
  export default contentLayerConfig