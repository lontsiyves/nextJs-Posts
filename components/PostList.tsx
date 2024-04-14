import Link from "next/link";

interface Iprops {
  posts: any;
}
export default function PostList({ posts }: Iprops) {
  const data = posts.posts;
  return (
    <div>
      {data.map((p) => {
        return (
          <Link href={`/posts/${p.id}`} key={p.id}>
            <h4 className="text-gray-600 p-4">{p.title}</h4>
          </Link>
        );
      })}
    </div>
  );
}
