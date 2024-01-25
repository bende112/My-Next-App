import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holiday places",
  description: "Nice place and thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Holidays</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/comments"></Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
