import Image from "next/image";
import Display from '@/components/exhibitions/Display'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Exhibitions',
  description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
}
const fetchIndividualExhibition = async(id : string) => {
  const data = await fetch(process.env.URL + `/api/Exhibitions/${id}`,
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const exhibition = await data.json();
  return exhibition
}

export default async function SelectedExhibitionView({params : {id} }) {
  const exhibition  = await fetchIndividualExhibition(id);
  console.log(id)
  return (
    <section className="w-full h-full lg:py-24 bg-black">
      <Display exhibition={exhibition}/>
    </section>
  );
}

export async function generateStaticParams() {
  const selectedExhibitionsview = await fetch(process.env.URL + '/api/Exhibitions').then((res) => res.json());
 
  return selectedExhibitionsview.map((exhibition) => ({
    exhibitionsId: exhibition.exhibition_id,
  }));
}

