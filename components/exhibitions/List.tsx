import Display from "./Display";

export default function List({ exhibitions }) {
  console.log(exhibitions);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20 mt-32">
      {exhibitions.map((data, index) => (
        <Display key={data._id} exhibition={data} />
      ))}
    </div>
  );
}
