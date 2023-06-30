import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai'

export default function Exhibition({ exhibition }) {
  const id = exhibition.exhibition_id;
  return (
    <div
      className="text-white p-[2rem] flex rounded-[20px] bg-[#F7F7F7] flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" 
      key={exhibition.exhibition_id}
    >
      <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black py-5">{exhibition.date}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5">
        <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{exhibition.title}</h2>
        <span className="font-poppins font-normal xs:text-[14px] xs:leading-[20px] text-[20px] leading-[16.89px] tracking-[0.5%] text-[#6B707B] mt-1 text-right">{exhibition.type}</span>
      </div>

      <p className="mb-5 font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal w-full text-left text-[#505e66] mt-4">
        {exhibition.description}
      </p>
    </div>
  );
}
