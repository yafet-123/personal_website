import { Suspense } from 'react';
import SampleImageOne from '@/public/Sample/Sample1.jpg';
import SampleImageTwo from '@/public/Sample/Sample2.png';
import SampleImageThree from '@/public/Sample/Sample3.jpg';
import SampleImageFour from '@/public/Sample/Sample4.jpg'; 
import SampleImageFive from '@/public/Sample/Sample5.jpg'; 
import SampleImageSix from '@/public/Sample/Sample6.jpg'; 
import SampleImageSeven from '@/public/Sample/Sample7.jpg'; 
import SampleImageEight from '@/public/Sample/Sample8.jpg'; 
import SampleImageNine from '@/public/Sample/Sample9.jpg'; 
import SelectedWorksDisplay from '@/components/SelectedWorksDisplay'
export default function SelectedWorks() {
  return (
    <main className="">
      <Suspense fallback={<div className="text-2xl">Loading Works Please Wait ...</div>}> 
        <SelectedWorksDisplay CardHeo={CardHeo} />
      </Suspense>
    </main>
  )
}

const CardHeo = [
  {
    id: 1,
    image: SampleImageOne,
  },
  {
    id: 2,
    image: SampleImageTwo,
  },
  {
    id: 3,
    image: SampleImageThree,
  },
  {
    id: 4,
    image: SampleImageFour,
  },
  {
    id: 5,
    image: SampleImageFive,
  },
  {
    id: 6,
    image: SampleImageSix,
  },
  {
    id: 7,
    image: SampleImageSeven,
  },
  {
    id: 8,
    image: SampleImageEight,
  },
  {
    id: 9,
    image: SampleImageNine,
  },
];


