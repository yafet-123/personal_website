import Hero from '@/components/Bio/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Helen Zerray : Biography',
}
export default async function Bio() {
  return (
    <main className="flex flex-col items-center bg-white">
      <Hero />
    </main>
  )
}