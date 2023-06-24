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
    <main className="w-full h-full pt-32 bg-black">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl ">Loading Works Please Wait ...</div>}> 
        <List selectedWorks={Works} />
      </Suspense>
    </main>
  )
}