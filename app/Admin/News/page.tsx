"use client";
import Image from "next/image";
import Form from "@/components/Admin/news/Form";
import Display from "@/components/Admin/news/Display";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from 'react';
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin News',
// }
const NewsCardList = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((data) => (
        <Display key={data._id} news={data} />
      ))}
    </div>
  );
};
 
export default function NewsHome() {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [allnews, setallnews] = useState([]);
  const [news, setnews] = useState({
    title: "",
    description: "",
    link: "",
    image:""
  });
  const { data: session } = useSession();
  console.log(news)
  async function imageUploadData() {
    const formData = new FormData();
    let imagesecureUrl = "";
    formData.append("file", news.image);

    formData.append("upload_preset", "my_upload");

    const imageUpload = await fetch(
      `https://api.cloudinary.com/v1_1/df7hlpjcj/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    imagesecureUrl = imageUpload.secure_url;
    return imagesecureUrl;
  }

  const createnews = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const imageData = await imageUploadData()
    try {
      const response = await fetch("/api/News/Add", {
        method: "POST",
        body: JSON.stringify({
          title: news.title,
          image: imageData,
          description: news.description,
          link:news.link,
          user_id: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/Admin/News");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchnews = async () => {
    const response = await fetch("/api/News");
    const data = await response.json();

    setallnews(data);
  };
  
  useEffect(() => {
    fetchnews();
  }, []);
  return (
    <section className="w-full h-full lg:pt-24">
      <Form
        type="Create"
        typeofCategory="news"
        news={news}
        setnews={setnews}
        submitting={submitting}
        handleSubmit={createnews}
      />

      <Suspense fallback={<div className="w-full mt-20 flex items-center text-white">Loading news Please Wait ...</div>}> 
        <NewsCardList data={allnews} />
      </Suspense>
    </section>
  );
}
