import { Suspense } from 'react';
import Image from 'next/image'
import ExhibitionsDetail from '@/components/ExhibitionsDetail'

async function fetchExhibitions() {
  const response = await fetch(
    // fetch from our code repository
    process.env.URL + '/api/Exhibitions',
    {   
      next: {
        revalidate: 60,
      },
    }
  );

  const exhibitions = await response.json();
  return exhibitions;
}

export default async function Exhibitions() {
	const exhibitions = await fetchExhibitions();
    console.log(exhibitions)
	return(
		<main className="flex flex-col mt-32 px-5 lg:px-10">
        	<h1 className="font-bold text-4xl mb-5">Exhibitions</h1>
        	{ exhibitions?.map((exhibition,index)=>(
        		<ExhibitionsDetail key={index} exhibitions={exhibition} />
        	))}
      </main>
	)
}