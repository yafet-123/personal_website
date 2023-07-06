'use client'
import Exhibition from "./Exhibition";

export default function List({ exhibitions }) {
  // classify the exhibition in to two the first one is group and the second on e is solo exhibition
  const selfExhibitions = [];
  const groupExhibitions = [];
  for (const exhibition of exhibitions) {
    if (exhibition.type === "Solo") {
      selfExhibitions.push(exhibition);
    } else if (exhibition.type === "Group") {
      groupExhibitions.push(exhibition);
    }
  }
  console.log(selfExhibitions)
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl md:text-2xl text-black font-poppins">GROUP EXHIBITION</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {groupExhibitions.map((exhibition, index) => (
            <div className="flex flex-row justify-between">
              <h1 className="font-poppins font-semibold text-black text-xl md:text-2xl">{exhibition.date}</h1>
              <div className="flex flex-col text-left">
                <h2 className="font-normal font-poppins text-black text-lg md:text-xl">{exhibition.title}</h2>
                <span className="font-poppins font-normal text-md md:text-lg mt-5">{exhibition.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-xl md:text-2xl text-black font-poppins">SELF EXHIBITION</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {selfExhibitions.map((exhibition, index) => (
            <div className="flex flex-row">
              <h1 className="font-poppins font-bold text-black text-xl md:text-2xl">{exhibition.date}</h1>
              <div className="flex flex-col text-left">
                <h2 className="font-normal font-poppins text-black text-lg md:text-xl">{exhibition.title}</h2>
                <span className="font-poppins font-normal text-md md:text-lg mt-5"> at the {exhibition.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
