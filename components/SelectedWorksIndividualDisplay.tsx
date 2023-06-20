import Image from 'next/image'
import Link from 'next/link'

export default function SelectedWorksIndividualDisplay({work}) {
  return (
  	<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 px-3 mt-32">
      <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide">
        <h1 className="font-medium tracking-wide text-3xl lg:text-5xl mb-5 lg:mb-20">{work.title}</h1>
        <p className="text-xl lg:text-2xl mb-5 lg:mb-10">{work.descreption}</p>
        <p className="text-lg lg:text-xl mb-5 lg:mb-10">{work.exhibitions}</p>
        <p className="flex flex-col">
          <span className="text-xl my-5">EXHIBITIONS</span>
          <span className="text-lg mb-5">{work.exhibitions}</span>
        </p>
      </div>
     <div className="w-full lg:w-[75%] h-96 lg:!h-[40rem] relative justify-self-center">
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
