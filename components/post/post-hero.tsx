import { Post } from "@/types/collection";
import Image from "next/image";
import PostContent from "./post-content";

interface PostHeroProps {
  post: Post;
}
const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        // src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`}
        width={1920}
        height={1080}
        alt={post.title}
      />
    </div>
  );
};

export default PostHero;