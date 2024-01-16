import { Post } from "@/types/collection";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
    post: Post;
}

const PostHero = ({post}: PostHeroProps) => {
  return (
    <div>
        <PostContent isPostPage post={post} />
        <Image src={post.image} alt={post.title} width={1920} height={1080} className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"/>
    </div>
  )
}

export default PostHero