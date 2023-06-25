"use client";

import moment from "moment";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Display = ({ Exhibitions, handleEdit, handleDelete }) => {
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
        <Image src={Exhibitions.Image} alt="Exhibitions Image" width={50} height={50} />
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {Exhibitions.descreption}
      </p>

        <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
   
    </div>
  );
};

export default Display;
