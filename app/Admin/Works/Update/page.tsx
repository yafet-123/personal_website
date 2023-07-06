"use client";
 
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Admin/Works/Form";
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin Works Update',
// } 
const Update = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const worksId = searchParams.get("id");

  const [Works, setWorks] = useState({
    title: "",
    exhibitions: "",
    image: "",
    description:""
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getWork = async () => {
      const response = await fetch(`/api/Works/${worksId}`);
      const data = await response.json();

      setWorks({
        title: data.title,
        description:data.description
      });
    };

    if (worksId) getWork();
  }, [worksId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!worksId) return alert("Missing worksId!");

    try {
      const response = await fetch(`/api/Works/${worksId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: Works.title,
          description: Works.description,
        }),
      });

      if (response.ok) {
        router.push("/Admin/Works");
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
        Works={Works}
        setWorks={setWorks}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </section>
  );
};

export default Update;
