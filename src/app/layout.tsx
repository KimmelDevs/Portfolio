import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kimmel Delector | Full-Stack Developer",
  description: "Personal portfolio of Kimmel Aldrich Tan Delector — Full-Stack Developer, CS Student, Civil Service Passer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
