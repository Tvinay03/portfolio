import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thota Govindu Vinay | Full Stack Developer",
  description:
    "Premium portfolio of Thota Govindu Vinay, a Full Stack Developer building scalable web, mobile, and AI-enabled products with React, Next.js, Java, Spring Boot, Node.js, React Native, and Google Cloud.",
  keywords: [
    "Thota Govindu Vinay",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Java",
    "Spring Boot",
    "React Native",
    "Node.js",
    "Google Cloud Platform",
    "OpenAI GPT",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
