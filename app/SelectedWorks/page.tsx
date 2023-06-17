import { Suspense } from 'react';
import SelectedWorksDisplay from '@/components/SelectedWorksDisplay'

async function fetchImages() {
  const response = await fetch(
    // fetch from our code repository
    process.env.url + '/api/PullImage',
    {   
      next: {
        revalidate: 60,
      },
    }
  );

  const repos = await response.json(); // change file response json file
  return repos;
}

export default async function SelectedWorks() {
  const images = await fetchImages();
  console.log(images)
  return (
    <main className="">
      <Suspense fallback={<div className="w-full flex items-center justify-center mt-96 text-2xl">Loading Works Please Wait ...</div>}> 
        <SelectedWorksDisplay CardHeo={images} />
      </Suspense>
    </main>
  )
}