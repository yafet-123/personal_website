"use client";
import Image from "next/image";
import Form from "@/components/Admin/Exhibitions/Form";
import Display from "@/components/Admin/Exhibitions/Display";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from 'react';
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin Exhibitions',
// }

const ExhibitionsCardList = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((data) => (
        <Display key={data._id} Exhibitions={data} />
      ))}
    </div>
  );
};
 
export default function ExhibitionsHome() {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [allExhibitions, setAllExhibitions] = useState([]);
  const [typechange , settypechange] = useState(true)
  const [Exhibitions, setExhibitions] = useState({
    title: "",
    descreption: "",
    image: "",
    date:"",
    type:""
  });
  const { data: session } = useSession();
  console.log(Exhibitions)
  async function imageUploadData() {
    const formData = new FormData();
    let imagesecureUrl = "";
    formData.append("file", Exhibitions.image);

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

  const createExhibitions = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const imageData = await imageUploadData()
    try {
      const response = await fetch("/api/Exhibitions/Add", {
        method: "POST",
        body: JSON.stringify({
          title: Exhibitions.title,
          image: imageData,
          date: Exhibitions.date,
          Description: Exhibitions.descreption,
          type: Exhibitions.type,
          user_id: session?.user.id,
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

  const fetchExhibitions = async () => {
    const response = await fetch("/api/Exhibitions");
    const data = await response.json();

    setAllExhibitions(data);
  };

  useEffect(() => {
    fetchExhibitions();
  }, []);
  return (
    <section className="w-full h-full lg:pt-24">
      <Form
        type="Create"
        typeofCategory="Exhibitions"
        Exhibitions={Exhibitions}
        setExhibitions={setExhibitions}
        submitting={submitting}
        handleSubmit={createExhibitions}
        typechange={typechange}
        settypechange={settypechange}
      />

      <Suspense fallback={<div className="w-full mt-20 flex items-center text-white">Loading Exhibitions Please Wait ...</div>}> 
        <ExhibitionsCardList data={allExhibitions} />
      </Suspense>
    </section>
  );
}
