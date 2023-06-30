import News from "./News";
export default function List({ selectenews }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 lg:px-10">
      {selectenews.map((data, index) => (
        <News key={data.news_id} news={data} />
      ))}
    </div>
  );
}
