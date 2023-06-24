import Work from "./Work";
export default function List({ selectedWorks }) {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20">
      {selectedWorks.map((data, index) => (
        <Work key={data.selectedWorks_id} work={data} />
      ))}
    </div>
  );
}
