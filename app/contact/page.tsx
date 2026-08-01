import Link from "next/link";
import {
  
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const image = "/git.png";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="text-green-500 tracking-widest uppercase">
        <span>//05.</span> Contact
      </p>

      <h2 className="mt-3 text-5xl md:text-6xl font-bold">
        Get In Touch
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        I'm currently looking for new opportunities and exciting
        projects. Whether you have a question, a collaboration in
        mind, or simply want to say hello, I'd love to hear from you.
      </p>

      <Link target="_blank"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=joshiravi96123@gmail.com"
        className="group mt-12 flex items-center gap-3 rounded-xl border border-green-500 px-8 py-4 text-lg transition-all duration-300 hover:bg-green-500 hover:text-black"
      >
        <Mail size={20} />
        Say Hello
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

      <p className="mt-10 text-gray-500">
        joshiravi96123@gmail.com
      </p>

      <div className="mt-10 flex gap-8">
        <Link
  href="https://github.com/yourusername"
  target="_blank"
  className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:border-green-500 hover:-translate-y-1"
>
  <Image
    src="/git.png"
    alt="GitHub"
    width={32}
    height={32}
    className="object-contain bg-white rounded-2xl"
  />
</Link>

       <Link
  href="https://linkedin.com/in/yourusername"
  target="_blank"
  className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:border-green-500 hover:-translate-y-1"
>
  <Image
    src="/linkden.png"
    alt="LinkedIn"
    width={32}
    height={32}
    className="object-contain bg-white rounded-2xl"
  />
</Link>
      </div>

      <div className="mt-20 h-px w-40 bg-zinc-700" />

      <p className="mt-8 text-sm text-gray-500">
        Designed & Built by{" "}
        <span className="text-green-500">Ravi Joshi</span>
      </p>
    </section>
  );
}