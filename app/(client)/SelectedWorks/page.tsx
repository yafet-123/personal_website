import { Suspense } from 'react';
import List from '@/components/works/List'

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
    <main className="w-full h-full lg:pt-24 bg-[#3C3E3F]">
      <Suspense fallback={<div className="w-full flex items-center justify-center text-2xl ">Loading Works Please Wait ...</div>}> 
        <List selectedWorks={Works} />
      </Suspense>
    </main>
  )
}