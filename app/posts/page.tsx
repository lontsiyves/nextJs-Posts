import PostList from "@/components/PostList";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const metadata: Metadata = {
  title: "Post List",
};

const getPost = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/posts`);
    if (!res.ok) {
      return notFound();
    }
    const posts: IPost[] = await res.json();
    return { posts };
  } catch (error) {}
};
export default async function PostsPage() {
  const posts = await getPost();
  // console.log("POST: ", posts);
  return (
    <main className="md:p-6 md:pt-10 px-2 pt-6">
      <h1 className="text-amber-400 text-center uppercase font-bold">
        LISTE DES POSTS
      </h1>
      <div>
        <Suspense fallback={"Loading..."}>
          <PostList posts={posts} />
        </Suspense>
      </div>
    </main>
  );
}
