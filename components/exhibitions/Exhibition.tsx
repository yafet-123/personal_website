import Image from "next/image";
import Link from "next/link";

export default function Exhibition({ exhibition }) {
  const id = exhibition.exhibition_id;
  return (
    <Link
      href={`/SelectedWorks/${id}`}
      className="flex flex-col items-center"
      key={exhibition.exhibition_id}
    >
      <div className="relative h-[15rem] w-full">
        <Image
          src={exhibition.image}
          alt="Slide"
          className="object-cover h-full w-full border rounded-lg border-black"
          layout="fill"
        />
      </div>

      <h1 className="my-5 text-lg lg:text-2xl writing-vertical text-vertical text-left flex flex-col justify-between items-center">
        {exhibition.title}
      </h1>
    </Link>
  );
}
