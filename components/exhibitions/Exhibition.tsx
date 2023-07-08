import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Exhibition({ exhibition }) {
  console.log(exhibition)
  
  return (
    <div
      className="py-5 flex flex-row text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" 
      key={exhibition.exhibition_id}
    >
      <div className="flex flex-col w-full">
        <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black py-5">{exhibition.date}</h1>
        <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{exhibition.title}</h2>
      </div>
      <h1 className="font-poppins font-normal xs:text-[14px] xs:leading-[20px] text-[20px] leading-[16.89px] tracking-[0.5%] text-[#6B707B] mt-1 text-right">{exhibition.type}</h1>
    </div>
  );
}
