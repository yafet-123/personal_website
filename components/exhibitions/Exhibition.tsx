import Image from 'next/image'
import Link from 'next/link'

export default function Exhibition({exhibition}) {
  const id = exhibition._id
  return (
    <Link href={`/SelectedWorks/${id}`} className="flex flex-col items-center" key={exhibition._id}>
      <div className="relative h-[20rem] w-full">
        <Image
          src={exhibition.image}
          alt="Slide"
          className="object-cover h-full w-full"
          layout="fill"
       />
      </div>

      <h1 className="my-5 text-2xl">{exhibition.title}</h1>
    </Link>
  )
}
