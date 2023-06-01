import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="container mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-1 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Jakareya
          </Link>
        </h1>
        <div className="flex flex-row items-center justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.facebook.com/profile.php?id=100077470063570"
            target="_blank"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/jakareya76"
            target="_blank"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/md-jakareya-ahmed-43a5251b1"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
