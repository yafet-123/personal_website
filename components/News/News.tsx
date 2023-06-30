import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Work({ news }) {
  const id = news.news_id;
  return (
    <Link
      href={`/SelectedWorks/${id}`}
      className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 border shadow-2xl"
      key={news.news_id}
    >
      <div className="relative h-[400px] w-full">
        <Image
          src={news.Image[0]}
          alt="Slide"
          className="h-full w-full"
          layout="fill"
        />
      </div>
 
      <h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
        {news.title}
      </h1>
    </Link>
  );
}
