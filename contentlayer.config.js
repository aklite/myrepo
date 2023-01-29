import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const computedFields = {
    url: {
        type: 'string',
        resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/*.md`,
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        tags: { type: 'string' },
        image: { type: 'string' },
        id:{type:'string',required:true}
    },
    wordCount: {
      type: 'number',
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Post],
})