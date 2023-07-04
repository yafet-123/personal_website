"use client";
import Image from "next/image";
import Form from "@/components/Admin/Works/Form";
import Display from "@/components/Admin/Works/Display";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from 'react';
//  import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin Works',
// }
const WorksCardList = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((data) => (
        <Display key={data._id} Works={data} />
      ))}
    </div>
  );
};
 
export default function WorksHome() {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [allWorks, setAllWorks] = useState([]);
  const [Works, setWorks] = useState({
    title: "",
    exhibitions: "",
    image: "",
    description:""
  });
  const { data: session } = useSession();
  console.log(Works)
  async function imageUploadData() {
    const formData = new FormData();
    let imagesecureUrl = "";
    formData.append("file", Works.image);

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

  const createWorks = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const imageData = await imageUploadData()
    try {
      const response = await fetch("/api/Works/Add", {
        method: "POST",
        body: JSON.stringify({
          title: Works.title,
          image: imageData,
          Description: Works.description,
          user_id: session?.user.id,
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

  const fetchWorks = async () => {
    const response = await fetch("/api/Works");
    const data = await response.json();

    setAllWorks(data);
  };
  
  useEffect(() => {
    fetchWorks();
  }, []);
  return (
    <section className="w-full h-full lg:pt-24">
      <Form
        type="Create"
        typeofCategory="Works"
        Works={Works}
        setWorks={setWorks}
        submitting={submitting}
        handleSubmit={createWorks}
      />

      <Suspense fallback={<div className="w-full mt-20 flex items-center text-white">Loading Works Please Wait ...</div>}> 
        <WorksCardList data={allWorks} />
      </Suspense>
    </section>
  );
}
