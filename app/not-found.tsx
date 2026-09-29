import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0f10] text-[#edf0ef]">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="mr-4 font-mono text-[#a5e3bd]">&gt;_</span>
            Ravi Joshi<span className="text-[#a5e3bd]">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-white/20 px-5 py-3 text-sm transition hover:border-[#a5e3bd]"
          >
            Back to home ↗
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-8 text-[#a5e3bd]">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#a5e3bd]" />
            Lost in the codebase
          </p>

          <h1 className="text-6xl font-bold leading-[1.05] tracking-[-0.07em] sm:text-7xl xl:text-8xl">
            Page not found.
            <br />
            <span className="text-[#a5e3bd]">Let&apos;s get back.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-[#9ba4a2]">
            The page you&apos;re looking for is not available ` probably the project dosent have a live url...``
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-lg bg-[#a5e3bd] px-7 py-4 font-medium text-[#0b0f10] transition hover:bg-[#c0efce]"
            >
              Go to homepage ↗
            </Link>
            <Link
              href="/#projects"
              className="rounded-lg border border-white/20 px-7 py-4 transition hover:border-[#a5e3bd]"
            >
              Explore my work ↗
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#34423b] bg-[#101715] shadow-2xl lg:rotate-[-2deg]">
          <div className="flex items-center justify-between border-b border-[#34423b] px-5 py-4 text-sm text-[#8e9c95]">
            <span className="flex gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-[#bc8176]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#d4c189]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#8dbba5]" />
            </span>
            <span>not-found.tsx</span>
            <span>&lt;/&gt;</span>
          </div>

          <div className="p-7 font-mono text-sm leading-8 sm:p-10 sm:text-base">
            <p>
              <span className="text-[#c5a1d4]">const</span> page = {"{"}
            </p>
            <p className="pl-6">
              status: <span className="text-[#a5e3bd]">404</span>,
            </p>
            <p className="pl-6">
              found: <span className="text-[#c5a1d4]">false</span>,
            </p>
            <p className="pl-6">
              nextStep: <span className="text-[#a5e3bd]">&quot;Go home&quot;</span>,
            </p>
            <p>{"};"}</p>
            <p className="mt-6 text-[#81958a]">
              // Every path leads somewhere new.
            </p>
          </div>

          <div className="flex justify-between border-t border-[#34423b] px-6 py-3 text-sm text-[#8e9c95]">
            <span>⑂ main</span>
            <span className="text-[#a5e3bd]">Ready to explore _</span>
          </div>
        </div>
      </section>
    </main>
  );
}