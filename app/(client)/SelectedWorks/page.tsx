import { Suspense } from 'react';
import SelectedWorksDisplay from '@/components/SelectedWorksDisplay'

async function fetchSelectedWorks() {
  const response = await fetch(
    // fetch from our code repository
    process.env.URL + '/api/Works',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  console.log(response)
  const works = await response.json();
  return works;
}

export default async function SelectedWorks() {
  const Works = await fetchSelectedWorks();
  console.log(Works)
  return (
    <main className="">
      <Suspense fallback={<div className="w-full flex items-center justify-center mt-96 text-2xl">Loading Works Please Wait ...</div>}> 
        <SelectedWorksDisplay selectedWorks={Works} />
      </Suspense>
    </main>
  )
}