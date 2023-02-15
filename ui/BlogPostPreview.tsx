import { useEnabledOnFirstIntersection } from "@/lib/useEnabledOnFirstIntersection"
import type {Blog} from "contentlayer/generated"
import { ContentLink } from "@/ui/ContentLink"

const Metrics=({slug}:{slug:string})=>{
    const {
        views,
        isLoading:viewIsLoading 
        isError:viewIsError}=usePostViews(slug);
    }
}

export const BlogPostPreview=(
    post:Pick<Blog,"slug" | "title" | "description">
)=>{
    const {enabled,intersectionRef}=useEnabledOnFirstIntersection()
    return (
        <div ref={intersectionRef}>
           <ContentLink 
           key={post.slug}
           href={`/blog/${post.slug}`}
           >
            <div>
                <ContentLink.Title>{post.title}</ContentLink.Title>
                {enabled ? <Metrics slug={post.slug}/>:null}
            </div>
            <ContentLink.Text>{post.description}</ContentLink.Text>
           </ContentLink>
        </div>
    )
}