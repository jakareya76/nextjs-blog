import Card from "./Card";
import getPosts from "@/lib/getPosts";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <section className="container mx-auto py-4">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                desc={post.body}
                id={post.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
