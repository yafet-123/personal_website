"use client";

import moment from "moment";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Display = ({ Works }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  console.log(Works);
  const handleCopy = () => {
    setCopied(Works.title);
    navigator.clipboard.writeText(Works.title);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleEdit = (works_id) => {
    console.log(works_id);
    router.push(`/Admin/Works/Update?id=${works_id}`);
  };

  const handleDelete = async (works_id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Work?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/Works/${works_id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/Admin/Works");
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
            {moment(Works.ModifiedDate).utc().format("YYYY-MM-DD")}
          </p>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === Works.title
                ? "/icons/tick.svg"
                : "/icons/copy.svg"
            }
            alt={copied === Works.title ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {Works.title}
        </p>
        <Image src={Works.Image} alt="Works Image" width={50} height={50} />
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {Works.description}
      </p>

      <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          onClick={() => handleEdit(Works.selectedWorks_id)}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={() => handleDelete(Works.selectedWorks_id)}
        >
          Delete
        </p>
      </div>
   
    </div>
  );
};

export default Display;
