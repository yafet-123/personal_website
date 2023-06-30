"use client";

import moment from "moment";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Display = ({ news }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  console.log(news);
  const handleCopy = () => {
    setCopied(news.title);
    navigator.clipboard.writeText(news.title);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleEdit = (news_id) => {
    console.log(news_id);
    router.push(`/Admin/News/Update?id=${news_id}`);
  };

  const handleDelete = async (news_id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this News?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/News/${news_id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/Admin/News");
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
            {moment(news.ModifiedDate).utc().format("YYYY-MM-DD")}
          </p>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === news.title
                ? "/icons/tick.svg"
                : "/icons/copy.svg"
            }
            alt={copied === news.title ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {news.title}
        </p>
        <Image src={news.Image[0]} alt="news Image" width={50} height={50} />
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {news.link}
      </p>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {news.description}
      </p>

      <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          onClick={() => handleEdit(news.news_id)}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={() => handleDelete(news.news_id)}
        >
          Delete
        </p>
      </div>
   
    </div>
  );
};

export default Display;
