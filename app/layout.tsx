import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Provider from "@/components/Admin/Common/Provider";

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <Provider className="flex flex-col">
          <div className="relative">
            <Navbar />
            <main className="absolute top-0 left-0 right-0">{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}