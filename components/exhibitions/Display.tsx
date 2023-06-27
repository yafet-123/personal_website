import Image from "next/image";
import Link from "next/link";

export default function SelectedExhibitionsIndividualDisplay() {
  const urls = [
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270597/Portfolio/1678035177677_uvj2hw.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270596/Portfolio/1678034994062_wsfiim.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270596/Portfolio/1682442244761_o11ima.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270589/Portfolio/1679393536675_brovgv.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270598/Portfolio/1684064940757_fac5j1.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270589/Portfolio/1684064996025_lfipfz.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270570/Portfolio/1679394165496_beiv27.png",
      "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270562/Portfolio/1677856003880_wlb30g.png",
    ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-2 md:px-10 lg:px-20">
      {urls.map((data, index) => (
        <div className="relative h-[300px] w-full" key={index} >
          <Image
            src={data}
            alt="Slide"
            className="object-cover h-full w-full border rounded-lg border-transparent"
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
}
