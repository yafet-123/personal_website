import Image from "next/image";
import SelectedExhibitionsIndividualDisplay from '@/components/SelectedExhibitionsIndividualDisplay'

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
    <section className="w-full h-full lg:pt-24">
      <SelectedExhibitionsIndividualDisplay exhibition={exhibition}/>
    </section>
  );
}

export async function generateStaticParams() {
  const selectedExhibitionsview = await fetch(process.env.URL + '/api/Exhibitions').then((res) => res.json());
 
  return selectedExhibitionsview.map((exhibition) => ({
    exhibitionsId: exhibition._id.toString(),
  }));
}

