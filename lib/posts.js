import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Combine the data with the id 
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
   const contentHtml=processedContent.toString()
  return {
    ...matterResult.data,
    contentHtml,
  };
}
export function getSortedPostsData() {
  // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx/, ''),
      },
    };
  });
}