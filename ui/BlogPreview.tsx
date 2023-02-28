import type {Blog} from "contentlayer/generated"
import { ContentLink } from "@/ui/ContentLink"
import { usePostViews } from "@/lib/usePostViews"
import { LoadingDots } from "@/ui/LoadingDots"
import { InlineMetric } from "@/ui/InlineMetric"
const Metrics=({
    slug
}:{
    slug:string
})=>{
    const {
        views,
        isLoading:viewIsLoading,
        isError:viewIsError
    }=usePostViews(slug);
    return (
        <div className="flex space-x-2 text-gray-500/90">
            <div>
                {
                    viewIsError || viewIsLoading ? (
                    <LoadingDots/>
                    ) : (
                     <InlineMetric key={views} stat={views} text="views"/>
                    )
                } 
            </div>
        </div>
    )
}


export const BlogPostPreview=(
    post:Pick<Blog,"slug" | "title" | "description">
)=>{

    return (
      <div>
        <ContentLink key={post.slug} href={`blog/${post.slug}`}>
          <ContentLink.Title>{post.title}</ContentLink.Title>
          <ContentLink.Text>{post.description}</ContentLink.Text>
        </ContentLink>
      </div>
    )
  }