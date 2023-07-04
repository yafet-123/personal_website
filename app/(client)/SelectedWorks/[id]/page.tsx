import Image from "next/image";
import Display from '@/components/works/Display'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Helen Zerray : Selected Works',
}
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
    <section className="w-full h-full pt-32 bg-white">
      <Display work={work}/>
    </section>
  );
}

export async function generateStaticParams() {
  const selectedworksview = await fetch(process.env.URL + '/api/Works').then((res) => res.json());
  console.log(selectedworksview[1].selectedWorks_id)
  return selectedworksview.map((work) => ({
    worksId:work.selectedWorks_id,
  }));
}

