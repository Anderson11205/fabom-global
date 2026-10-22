import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-white">
      <p className="font-display text-[7rem] font-bold leading-none text-gold md:text-[9rem]">
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-bold md:text-3xl">
        This page seems to be missing
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
        The page you are looking for may have been moved or never existed.
        Everything about FABOM GLOBAL — services, portfolio, process and
        contact — is on the main site.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center bg-gold px-7 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
        >
          Back to the homepage
        </Link>
        <Link
          href="/#contact"
          className="inline-flex h-12 items-center justify-center border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
        >
          Contact FABOM GLOBAL
        </Link>
      </div>
    </main>
  );
}
