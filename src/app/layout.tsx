import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import QueryProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const buttonStyle: string =
  "mx-1 my-10 px-1 border rounded border-black border-solid hover:bg-cyan-300";

export const metadata: Metadata = {
  title: "Yeonjin's NEXT CRUD",
  description: "Generated by Yeonjin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <nav className="flex flex-row justify-center">
            <Link href="/" className={buttonStyle}>
              Home
            </Link>
            <Link href="/about" className={buttonStyle}>
              About
            </Link>
            <Link href="/report" className={buttonStyle}>
              Report
            </Link>
            <Link href="/ssr" className={buttonStyle}>
              SSR
            </Link>
            <Link href="/csr" className={buttonStyle}>
              CSR
            </Link>
          </nav>
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
