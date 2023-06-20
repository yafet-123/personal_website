import { Suspense } from 'react';
import Image from 'next/image'
import Profile from '@/public/person1.jpg';

export default async function Bio() {
  
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col">
        <div className="bio-background w-full h-[20rem] relative">
          <Image
            src={Profile}
            width={300}
            height={300}
            className="border-8 border-[#355e3b] rounded-full absolute left-1/2 right-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0"
            alt="latest news image"
          />
        </div>
        <div className="flex flex-col w-full mt-48 px-5 lg:px-60">
          <h1 className="font-extrabold tracking-wide text-5xl lg:text-7xl my-5 text-center text-[#355e3b]">HELEN ZERAY</h1>
          <h2 className="font-extrabold tracking-wide text-3xl lg:text-5xl my-5 text-center text-[#355e3b]">ARTIST</h2>
          <h1 className="font-extrabold text-4xl mb-5 text-[#355e3b]">Biography</h1>
          <p className="text-lg lg:text-2xl writing-vertical text-vertical text-left flex flex-col justify-between items-center mb-10">
            <span className="">{`Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.
            Growing up in Addis Abeba, Ethiopia, she was captivated by the artistry of the world around her, which led her to pursue her passion for the arts through private classes in her youth.
            With a heart full of awe and reverence for the natural world, Helen creates stunning works of art that amplify the shapes, colors, and movements of the landscape. 
            Through her use of acrylic, she masterfully captures the essence of nature, revealing the hand of the divine in its splendor.`}</span>
            <span className=" mt-10 lg:mt-0">{`But Helen's artistry is not limited to the canvas. She is constantly seeking to expand her knowledge and philosophical understanding of the world beyond her artistic practice. 
            This thirst for knowledge drives her to explore new compositions, geometric shapes, forms, and colors, as she strives to deepen her connection with the natural world.
            In Helen's commitment to nonfigurative studies and her endless experimentation with techniques and forms, one can see a beautiful example of an artist's journey of growth and discovery. 
            Her passion for the arts and her reverence for nature are a testament to the transformative power of creativity and the wonders of the world around us.`}</span>
          </p>
        </div>
      </div>
    </main>
  )
}