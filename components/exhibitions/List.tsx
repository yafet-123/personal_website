'use client'
import Exhibition from "./Exhibition";

export default function List({ exhibitions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-10">
      {exhibitions.map((data, index) => (
        <Work key={data.exhibition_id} exhibition={data} />
      ))}
    </div>
  );
}
