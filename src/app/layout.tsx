import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "WebCore Solutions",
  description: "Building Digital Excellence",
  icons: {
    icon: "/web.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}