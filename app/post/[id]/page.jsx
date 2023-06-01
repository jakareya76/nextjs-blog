import getPost from "@/lib/getPost";
import Link from "next/link";

export default async function page({ params: { id } }) {
  const post = await getPost(id);

  return (
    <section className="container mx-auto py-14">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-center text-slate-300 underline font-bold">
            {post.title}
          </h2>
          <p className="max-w-xl text-center text-slate-500 py-6">
            {post.body}
          </p>
          <Link
            href="/"
            className="bg-slate-600 text-center py-2 rounded text-slate-300 duration-200 hover:bg-slate-900"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
}
