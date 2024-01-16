import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-lists";

export const generateStaticParams = async () => {
   return DUMMY_CATEGORIES.map((category) => {
    return { 
      category: category.slug
    };
   });
};

const Page = ({ params }: {
  params: {
    category: string
  }
}) => {

  const category = DUMMY_CATEGORIES.find((category) => category.slug === params.category);

  const posts = DUMMY_POSTS.filter((post) => post.category.title.toLocaleLowerCase() === params.category);

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="font-semibold text-4xl">{category?.title}</h1>
        <p className="text-lg text-neutral-600 mt-2">{category?.description}</p>
      </div>
      <PostList posts={posts} />
    </PaddingContainer>
  )
}

export default Page