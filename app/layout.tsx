import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Provider from "@/components/Admin/Common/Provider";

export const metadata = {
  title: "Helen Zerray : Home",
  description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },
  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
  openGraph: {
    title: 'Helen Zeray Portfolio',
    description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
    url: 'https://helen-zeray-website.vercel.app/',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
        </Provider>
      </body>
    </html>
  );
}