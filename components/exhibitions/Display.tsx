import Image from "next/image";
import Link from "next/link";

export default function SelectedExhibitionsIndividualDisplay({ exhibition }) {
  const image = exhibition.Image
  console.log(image)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
      
    </div>
  );
}
