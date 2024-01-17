import CTACard from '@/components/elements/cta-card'
import PostCard from '@/components/post/post-card'
import PaddingContainer from "@/components/layout/padding-container";
import Link from 'next/link'
import { DUMMY_POSTS } from '@/DUMMY_DATA'
import PostList from '@/components/post/post-lists'
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import { Post } from '@/types/collection';


export default async function Home() {

  const getAllPosts = async () => {
    try {
      const posts = await directus.request(readItems('post',{
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      }));
      return posts;

    } catch (error) {
      console.info(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  // console.log(posts)

  if (!posts) {
    notFound();
  }

  // const typeCorrectedPosts = posts as unknown as {
  //   id: string,
  //   title: string,
  //   description: string,
  //   slug: string,
  //   posts: Post[],
  // };

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList posts={posts.filter((_post, index) => index > 0 && index < 3)} />
        <PostCard reverse post={posts[3]} />
        <CTACard />
        <PostList posts={posts.filter((_post, index) => index > 3 && index < 6)} />
      </main>
    </PaddingContainer>
  )
}
