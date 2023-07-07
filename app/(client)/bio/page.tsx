import Hero from '@/components/Bio/Hero';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Helen Zerray : Biography',
}
export default async function Bio() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <h1 className="font-sans font-extralight text-[2.1rem] leading-[2.35rem] text-left text-[#010101] w-full lg:w-[55%] tracking-[0.16rem] mb-10">BIo</h1>
      <Hero />
    </main>
  )
}