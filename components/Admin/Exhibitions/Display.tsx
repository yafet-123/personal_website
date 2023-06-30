"use client";

import moment from "moment";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Display = ({ Exhibitions }) => {
  console.log(Exhibitions)
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  console.log(Exhibitions);
  const handleCopy = () => {
    setCopied(Exhibitions.title);
    navigator.clipboard.writeText(Exhibitions.title);
    setTimeout(() => setCopied(false), 3000);
  };
 
  const handleEdit = (exhibition_id) => {
    console.log(exhibition_id);
    router.push(`/Admin/Exhibitions/Update?id=${exhibition_id}`);
  };

  const handleDelete = async (exhibition_id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Exhibitions?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/Exhibitions/${exhibition_id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/Admin/Exhibitions");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5 mb-5">
        <div className="flex-1 flex justify-between items-center gap-3 cursor-pointer">
          <p className="font-inter text-sm text-gray-500">
            {moment(Exhibitions.ModifiedDate).utc().format("YYYY-MM-DD")}
          </p>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === Exhibitions.title
                ? "/icons/tick.svg"
                : "/icons/copy.svg"
            }
            alt={copied === Exhibitions.title ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {Exhibitions.title}
        </p>
        
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {Exhibitions.date}
        </p>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {Exhibitions.type}
      </p>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {Exhibitions.descreption}
      </p>

      <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          onClick={() => handleEdit(Exhibitions.exhibition_id)}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={() => handleDelete(Exhibitions.exhibition_id)}
        >
          Delete
        </p>
      </div>
   
    </div>
  );
};

export default Display;
