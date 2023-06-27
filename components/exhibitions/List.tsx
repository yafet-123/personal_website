import Exhibition from "./Exhibition";

export default function List({ exhibitions }) {
  console.log(exhibitions);
  // classify the exhibition in to two the first one is group and the second on e is solo exhibition
  return (
    <div className="exhibitions px-20">
      {exhibitions.map((data, index) => (
        <Exhibition key={data.exhibition_id} exhibition={data} />
      ))}
    </div>
  );
}
