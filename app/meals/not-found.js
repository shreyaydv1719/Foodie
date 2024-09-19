import Link from "next/link";

export default function Notfound() {
  return (
    <main className="not-found">
      <h1>meal not found</h1>
      <p>
        Go back to <Link href="/">home page</Link>
      </p>
    </main>
  );
}
