import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Work({ work }) {
  const id = work.selectedWorks_id;
  return (
    <Link
      href={`/SelectedWorks/${id}`}
      className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 shadow-2xl"
      key={work.selectedWorks_id}
    >
      <div className="relative h-[400px] w-full">
        <Image
          src={work.Image[0]}
          alt="Slide"
          className="h-full w-full"
          layout="fill"
        />
      </div>
 
      <h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
        {work.title}
      </h1>
    </Link>
  );
}
