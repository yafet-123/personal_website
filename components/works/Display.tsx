import Image from "next/image";
import Link from "next/link";

export default function Display({ work }) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between px-2 lg:px-32 lg:pb-32 text-white ">
      <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
        <h1 className="text-black text-left font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[30px] leading-[26px] tracking-[0.25%] text-[#D0DFFF] mb-10">
          {work.title}
        </h1>
        <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[20px] leading-[23px] font-normal xl:w-[65%] sm:w-[75%] w-[100%] text-left text-[#505e66] mb-10">{work.description}</p>
        {/*<p className="flex flex-col text-[#505e66]">
          <span className="text-lg mb-5">EXHIBITIONS:</span>
          { work.exhibitions == "" ? <span className="lg:pl-10 text-lg mb-5">None</span> :
          <span className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal xl:w-[65%] sm:w-[75%] w-[100%] text-center text-[#505e66]">{work.exhibitions}</span>}
        </p>
*/}      </div>
      <div className="w-full !h-[30rem] relative justify-self-center mb-5 lg:mb-0">
        <Image
          src={work.Image}
          fill
          className="w-full !h-full"
          alt="latest news image"
        />
      </div>
    </div>
  );
}
