import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Work({ work }) {
  const id = work.selectedWorks_id;
  return (
    <div
      className="text-white flex rounded-[20px] bg-pro-black-2 flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300"
      key={work.selectedWorks_id}
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={work.Image[0]}
          alt="Slide"
          className="object-cover h-full w-full border rounded-lg"
          layout="fill"
        />
      </div>
 
      <div className="flex flex-col p-[2rem]">
        <h1 className="text-center font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-[#D0DFFF]">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 via-purple-600 to-purple-800">{work.title}</span>
        </h1>
        <div className="flex flex-row justify-between items-center w-full mt-5">
          <Link 
            className="font-poppins font-semibold flex justify-center items-center text-[14px] leading-[16px] text-white rounded-full cursor-pointer bg-[#2190FF] py-3 px-10 w-fit min-h-[48px] hover:scale-110 transition-transform duration-300"
            href={`/SelectedWorks/${id}`}
          >
            View
          </Link>

          <p className="flex flex-row items-center text-white dark:text-white hover:text-[#009688] font-bold py-2 hover:scale-110 duration-1000 ease-in-out rounded ">
            <AiOutlineEye size={20} />
            <span className="ml-3 text-md">{work.view}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
