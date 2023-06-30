"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
 
import Form from "@/components/Admin/Exhibitions/Form";

const Update = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const exhibitionsId = searchParams.get("id");

  const [Exhibitions, setExhibitions] = useState({
    title: "",
    descreption: "",
    date:""
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getExhibitions = async () => {
      const response = await fetch(`/api/Exhibitions/${exhibitionsId}`);
      const data = await response.json();

      setExhibitions({
        title: data.title,
        descreption: data.descreption,
        date:data.date
      });
    };

    if (exhibitionsId) getExhibitions();
  }, [exhibitionsId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!exhibitionsId) return alert("Missing exhibitionsId!");

    try {
      const response = await fetch(`/api/Exhibitions/${exhibitionsId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: Exhibitions.title,
          descreption: Exhibitions.descreption,
          date:Exhibitions.date,
        }),
      });

      if (response.ok) {
        router.push("/Admin/Exhibitions");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      Exhibitions={Exhibitions}
      setExhibitions={setExhibitions}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default Update;
