import Hero from '@/components/Bio/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Biography',
  description: "Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.",
}
export default async function Bio() {
  return (
    <main className="flex flex-col items-center bg-white">
      <Hero />
    </main>
  )
}