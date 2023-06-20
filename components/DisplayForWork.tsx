import Image from 'next/image'
import Link from 'next/link'

export default function Display({work}) {
  const id = work._id
  return (
    <Link href={`/SelectedWorks/${id}`} className="flex flex-col items-center" key={work._id}>
      <div className="relative h-[20rem] w-full">
        <Image
          src={work.image}
          alt="Slide"
          className="object-cover h-full w-full"
          layout="fill"
       />
      </div>

      <h1 className="my-5 text-2xl">{work.title}</h1>
    </Link>
  )
}
