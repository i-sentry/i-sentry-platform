import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="font-dm-sans text-4xl font-bold text-[#fafafa] sm:text-5xl">
        Page Not Found
      </h2>
      <p className="mt-3 text-[#97a4b7]">Could not find requested resource</p>
      <Link
        href="/"
        className="border-secondary-700 text-secondary-300 mt-6 inline-block rounded-full border px-8 py-3.5"
      >
        Return Home
      </Link>
    </div>
  );
}
