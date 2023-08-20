import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Forums",
  description: "Reddit-Clone",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialised">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
