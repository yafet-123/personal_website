import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import VerticalNavbar from "@/components/Admin/Common/VerticalNavbar";
import Navbar from "@/components/Admin/Common/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Admin/Common/Provider";

export const metadata = {
  title: "Admin",
  description: "Admin page for creating updating and deleting the project",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col bg-[#212325]">
      <Provider>
        <div className="flex flex-col lg:flex-row">
          
            {/* @ts-ignore */}
            <VerticalNavbar />
          
          <div className="w-full px-2 lg:px-20">{children}</div>
        </div>
      </Provider>
    </section>
  );
}
