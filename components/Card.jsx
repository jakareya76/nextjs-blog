import Link from "next/link";

export default function Card({ id, title, desc }) {
  return (
    <Link href={`/post/${id}`}>
      <div className="w-[280px] h-[180px] bg-slate-700 cursor-pointer rounded duration-200 hover:bg-slate-900">
        <div className="p-5">
          <h2 className="text-xl mb-2 text-slate-300">
            {title.substring(1, 20)}
          </h2>
          <p className="text-sm text-slate-400">{desc.substring(1, 160)}</p>
        </div>
      </div>
    </Link>
  );
}
