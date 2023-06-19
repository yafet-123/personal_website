import Image from 'next/image'
import Link from 'next/link'

interface ImageType{
  id: Int;
  image:String;
}

export default function SelectedWorksDisplay({selectedWorks}) {
  return (
  	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20 mt-32">
      {selectedWorks.map((data,index)=>(
            <Link href="/" className="flex flex-col items-center" key={data._id}>
              <div className="relative h-[20rem] w-full">
                <Image
                  src={data.image}
                  alt="Slide"
                  className="object-cover h-full w-full"
                  layout="fill"
                />
              </div>

              <h1 className="my-5 text-2xl">{data.title}</h1>
            </Link>
        ))}
    </div>
  )
}
