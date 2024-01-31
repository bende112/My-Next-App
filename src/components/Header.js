import Link from "next/link";
import "@/styles/header.css";

export default function Header() {
  return (
    <header>
      <h1>Holidays</h1>
      <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">Add new destination</Link>
      </nav>
    </header>

  )
}
