import List from '@/components/News/List';
import { Metadata } from 'next'
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'NEWS & PRESS',
  description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
}

async function fetchNews() {
  const response = await fetch(
    // fetch from our code repository
    process.env.URL + '/api/News',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  console.log(response)
  const news = await response.json();
  return news;
}

export default async function News() {
  const news = await fetchNews();
  console.log(news)
  return (
    <main className="flex flex-col items-center bg-white">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl ">Loading News Please Wait ...</div>}> 
        <List selectenews={news} />
      </Suspense>
    </main>
  )
}