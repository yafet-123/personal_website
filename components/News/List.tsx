import News from "./News";
export default function List({ selectenews }) {
  return (
    <div className="flex flex-col gap-5 px-2 lg:px-10">
      {selectenews.map((data, index) => (
        <News key={data.news_id} news={data} />
      ))}
    </div>
  );
}
