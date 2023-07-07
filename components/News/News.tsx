import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Work({ news }) {
  const id = news.news_id;
  return (
    <Link
      href={news.link}
      className="w-full text-white flex flex-row justify-between cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 border shadow-2xl my-2"
      key={news.news_id}
    >
      { news.Image == "" ?
        <div className="h-[100px] lg:h-[250px] w-full">
          
        </div>
         : 
        <div className="relative h-[100px] lg:h-[250px] w-full">
          <Image
            src={news.Image}
            alt="Slide"
            className="h-full w-full"
            layout="fill"
          />
        </div>
      }

      <div className="flex flex-col pl-5">
        <h1 className="my-2 text-left font-poppins font-semibold text-xl md:text-2xl text-[#010101] text-left">
          {news.title}
        </h1>

        <p className="mb-5 font-poppins text-lg md:text-xl leading-[23px] font-normal w-full text-left text-[#505e66]">
          {news.description}
        </p>
      </div>
    </Link>
  );
}
