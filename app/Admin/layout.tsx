import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import VerticalNavbar from "@/components/Admin/Common/VerticalNavbar";
import Navbar from "@/components/Admin/Common/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Admin/Common/Provider";

export const metadata = {
  title: "Helen Zeray : Admin",
};


export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col bg-white w-full h-full">
      <Provider>
        <div className="flex flex-col lg:flex-row">
          
            {/* @ts-ignore */}
            <VerticalNavbar />
          
          <div className="w-full h-full px-2 lg:px-10">{children}</div>
        </div>
      </Provider>
    </section>
  );
}
