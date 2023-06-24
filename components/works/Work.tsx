import Image from "next/image";
import Link from "next/link";

export default function Work({ work }) {
  const id = work._id;
  return (
    <Link
      href={`/SelectedWorks/${id}`}
      className="flex flex-col items-center text-white"
      key={work._id}
    >
      <div className="relative h-[15rem] w-full">
        <Image
          src={work.image}
          alt="Slide"
          className="object-cover h-full w-full border rounded-lg border-black"
          layout="fill"
        />
      </div>

      <h1 className="my-5 text-lg lg:text-2xl writing-vertical text-vertical text-left flex flex-col justify-between items-center">
        {work.title}
      </h1>
    </Link>
  );
}
