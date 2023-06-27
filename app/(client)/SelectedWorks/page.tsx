import { Suspense } from 'react';
import List from '@/components/works/List'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Selected Works',
  description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
}
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
    <main className="w-full h-full py-32 bg-custom-color bg-opacity-100">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl ">Loading Works Please Wait ...</div>}> 
        <List selectedWorks={Works} />
      </Suspense>
    </main>
  )
}