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
    <div className="flex flex-col px-5 lg:px-10">
      <Exhibition exhibition={exhibition} />
    </div>
  );
}
