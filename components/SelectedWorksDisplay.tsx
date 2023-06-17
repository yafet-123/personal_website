import Image from 'next/image'
import Link from 'next/link'

interface ImageType{
  id: Int;
  image:String;
}

export default function SelectedWorksDisplay({CardHeo}) {
  return (
  	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20 mt-32">
      {CardHeo.map((data,index)=>(
            <Link href="/" className="relative h-[20rem] w-full" key={data.asset_id}>
              <Image
                src={data.url}
                alt="Slide"
                className="object-cover h-full w-full"
                layout="fill"
              />
            </Link>
        ))}
    </div>
  )
}
