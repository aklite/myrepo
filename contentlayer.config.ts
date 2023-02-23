import {
    ComputedFields,
    defineDocumentType,
    makeSource,
  } from "contentlayer/source-files"
  import remarkGfm from 'remark-gfm'
  import rehypePrettyCode from "rehype-pretty-code"
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
      image: { type: "string", },
    },
    computedFields,
  }))
  
  const contentLayerConfig = makeSource({
    contentDirPath: "data",
    documentTypes: [Blog],
  
    mdx: {
      rehypePlugins:[[rehypePrettyCode]],
      remarkPlugins:[remarkGfm]
    },
  })
  
  export default contentLayerConfig