import Image from "next/image";
import SelectedWorksIndividualDisplay from '@/components/SelectedWorksIndividualDisplay'
const fetchIndividualWorks = async(id : string) => {
  const data = await fetch(process.env.URL + `/api/Works/${id}`,
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const work = await data.json();
  return work
}

export default async function SelectedWorksView({params : {id} }) {
  const work  = await fetchIndividualWorks(id);
  console.log(id)
  return (
    <section className="w-full h-full lg:pt-24">
      <SelectedWorksIndividualDisplay work={work}/>
    </section>
  );
}

export async function generateStaticParams() {
  const selectedworksview = await fetch(process.env.URL + '/api/Works').then((res) => res.json());
 
  return selectedworksview.map((work) => ({
    worksId: work._id.toString(),
  }));
}

