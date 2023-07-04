"use client";
 
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Admin/news/Form";
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin News Update',
// }
const Update = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

  const [news, setnews] = useState({
    title: "",
    description: "",
    link: ""
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`/api/News/${newsId}`);
      const data = await response.json();

      setnews({
        title: data.title,
        description:data.description,
        link:data.link
      });
    };

    if (newsId) getNews();
  }, [newsId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!newsId) return alert("Missing newsId!");

    try {
      const response = await fetch(`/api/News/${newsId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: news.title,
          description: news.description,
          link:news.link
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

  return (
    <section className="w-full h-full lg:pt-24">
      <Form
        type='Edit'
        news={news}
        setnews={setnews}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </section>
  );
};

export default Update;
