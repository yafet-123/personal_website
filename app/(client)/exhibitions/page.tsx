import { Suspense } from 'react';
import Image from 'next/image'
import List from '@/components/exhibitions/List'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Helen Zeray : Exhibitions',
}
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
		<main className="w-full h-full py-24 bg-white">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl ">Loading Exhibitions Please Wait ...</div>}> 
        <List exhibitions={exhibitions} />
      </Suspense>
    </main>
	)
}