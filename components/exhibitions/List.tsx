import Exhibition from "./Exhibition";

export default function List({ exhibitions }) {
  console.log(exhibitions);
  // classify the exhibition in to two the first one is group and the second on e is solo exhibition
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
      {exhibitions.map((data, index) => (
        <Exhibition key={data.exhibition_id} exhibition={data} />
      ))}
    </div>
  );
}
