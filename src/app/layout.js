import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhamad Amrizal",
  description: "Portofolio Muhamad Amrizal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
