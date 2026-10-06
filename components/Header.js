import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Full Stack Open Next.js</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/notes/culture/1">Culture Notes</Link>
      </nav>
    </header>
  );
}