import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Header} from "@/widgets/header";
import {Footer} from "@/widgets/footer";


export const metadata: Metadata = {
    title: "Book Store",
    description: "Search and save books",
};

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-screen mx-auto p-4 flex items-center">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
