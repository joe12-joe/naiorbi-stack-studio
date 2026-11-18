import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center text-zinc-300 antialiased">
      <p className="font-mono text-7xl font-extrabold text-emerald-400">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">This page doesn't exist (yet).</h1>
      <p className="mt-2 max-w-md text-sm text-zinc-500">Maybe it moved, maybe it was never built — exactly what we prevent for our clients. Meanwhile, let's get you back on track.</p>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row">
        <Link href="/" className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300">Back to home</Link>
        <Link href="/work" className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700">See our work</Link>
      </div>
    </main>
  );
}
