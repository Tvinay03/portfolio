import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thota Govindu Vinay - Full Stack Developer",
  description: "Full Stack Developer proficient in React.js, Next.js, Node.js, and AI-driven development. Building scalable web and mobile applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "AI", "GCP"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
