import Image from 'next/image'
import Link from 'next/link'

export default function Display({work}) {
  return (
  	<div className="flex flex-col-reverse lg:flex-row justify-between px-5 lg:px-32 mt-20 text-white ">
      <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
        <h1 className="font-medium tracking-wide text-3xl lg:text-6xl mb-5 lg:mb-10">{work.title}</h1>
        <p className="text-xl lg:text-2xl mb-5 lg:mb-10">{work.descreption}</p>
        <p className="flex flex-col">
          <span className="text-lg my-5">EXHIBITIONS:</span>
          <span className="lg:pl-10 text-lg mb-5">{work.exhibitions}</span>
        </p>
      </div>
     <div className="w-full h-96 lg:!h-[35rem] relative justify-self-center mb-5 lg:mb-0">
        <Image
            src={work.image}
            fill
            className="!bg-cover w-full !h-full"
            alt="latest news image"
        />
      </div>
    </div>
  )
}
