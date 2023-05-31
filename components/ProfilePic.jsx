import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        className="w-[200px] h-[200px] object-cover border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/profile.png"
        width={200}
        height={200}
        alt="profile"
        priority={true}
      />
    </section>
  );
}
