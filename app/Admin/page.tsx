import Image from "next/image";
import type { Metadata } from "next";
import BarChart from "@/components/Admin/Home/BarChart";

export const metadata: Metadata = {
  title: 'Admin Home',
}

async function fetchExhibitionsCount() {
  const data = await fetch(
    process.env.URL + '/api/Exhibitions/Count',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const exhibitions = await data.json();
  return exhibitions;
}

async function fetchuserCount() {
  const data = await fetch(
    process.env.URL + '/api/User/Count',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const users = await data.json();
  return users;
}

async function fetchnewsCount() {
  const data = await fetch(
    process.env.URL + '/api/News/Count',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const news = await data.json();
  return news;
}

async function fetchWorkCount() {
  const data = await fetch(
    process.env.URL + '/api/Works/Count',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const works = await data.json();
  return works;
}

export default async function AdminHome() {
  const exhibitioncount = await fetchExhibitionsCount();
  const Workcount = await fetchWorkCount();
  const usercount = await fetchuserCount();
  const newscount = await fetchnewsCount();
  return (
    <section className="mt-32 flex flex-col w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 lg:px-10">
        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">User</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{usercount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">Works</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{Workcount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">News</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{newscount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">Exhibition</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{exhibitioncount}</h2>
        </div>
      </div>
      <BarChart work={Workcount} news={newscount} exhibition={exhibitioncount} user={usercount} />
    </section>
  );
}
