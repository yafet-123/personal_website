import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Work({ work }) {
  const id = work.selectedWorks_id;
  return (
    <Link
      href={`/SelectedWorks/${id}`}
      className="text-white flex rounded-[20px] bg-[#e1edfa] flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300"
      key={work.selectedWorks_id}
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={work.Image[0]}
          alt="Slide"
          className="object-cover h-full w-full border rounded-lg border-transparent"
          layout="fill"
        />
      </div>
 
      <div className="flex flex-col p-[2rem]">
        <h1 className="text-center font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-[#D0DFFF]">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 via-purple-600 to-purple-800">{work.title}</span>
        </h1>
      </div>
    </Link>
  );
}
