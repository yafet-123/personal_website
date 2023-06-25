import Exhibition from "./Exhibition";

export default function List({ exhibitions }) {
  console.log(exhibitions);
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20">
      {exhibitions.map((data, index) => (
        <Exhibition key={data.exhibition_id} exhibition={data} />
      ))}
    </div>
  );
}
