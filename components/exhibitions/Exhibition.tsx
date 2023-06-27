import Image from "next/image";
import Link from "next/link";

export default function Exhibition({ exhibition }) {
  const id = exhibition.exhibition_id;
  return (
    <div
      className="exhibition text-white" 
      key={exhibition.exhibition_id}
    >
      <h1 class="date py-5">{exhibition.date}</h1>
      <div class="exhibition-info py-5">
        <h2 class="title">{exhibition.date}</h2>
        <span class="type">exhibition.type</span>
      </div>

      <p className="py-5">
        {exhibition.description}
      </p>

      <div className="flex items-center justify-center">
        <Link 
          className=""
          href={`/exhibitions/${id}`}
        >
          View Photo
        </Link>
      </div>
    </div>
  );
}
