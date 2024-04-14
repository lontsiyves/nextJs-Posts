import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const getPost = async (id: number) => {
  try {
    const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      return notFound();
    }

    const post = await res.json();

    return { post };
  } catch (error) {}
};

export default async function PostDetailPage({ params }: any) {
  const id = await Number(params.id);

  const post = await getPost(id);
  console.log("Item: ", post);

  return (
    <main className="md:p-6 md:pt-10 px-2 pt-6">
      <h1 className="text-amber-400 text-center uppercase font-bold">
        Detail Post
      </h1>
      <div>
        <Suspense fallback={"Loading ..."}>
          <div className="text-red-600 p-4">{post?.post.title}</div>
          <p>{post?.post.body}</p>
        </Suspense>
      </div>
    </main>
  );
}
