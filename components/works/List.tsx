import Work from "./Work";
export default function List({ selectedWorks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-10">
      {selectedWorks.map((data, index) => (
        <Work key={data.selectedWorks_id} work={data} />
      ))}
    </div>
  );
}
