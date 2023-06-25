import { Suspense } from 'react';
import Image from 'next/image'
import List from '@/components/exhibitions/List'

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
		<main className="w-full h-full pt-32 bg-[#494B4D]">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl ">Loading Works Please Wait ...</div>}> 
        <List exhibitions={exhibitions} />
      </Suspense>
    </main>
	)
}