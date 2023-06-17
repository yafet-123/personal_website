import { Suspense } from 'react';
import Image from 'next/image'
import HeroImageOne from '@/public/image1.png';

export default async function Bio() {
  
  return (
    <main className="flex flex-col items-center mt-32">
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Bio</h1>
          <p className="text-lg ">
           {`Daniel Mattar was born in Rio de Janeiro, Brazil, in 1971. He studied art and design at PUC Rio.<br/>
            His research in photography began in Tokyo, Japan, where he lived and worked in the nineties.<br/>
            For twenty-five years that photography is his form of expression,He has travelled through various fields such as fashion, 
            portraits and documentaries.<br/>
            Daniel's work is full of paradoxes: the technological camera to the intuitive gesture with the oil paint.<br/> 
            In his research, Daniel develops dialogues through photography that show multiple three dimensions on two-dimensional planes. 
            Through the use of oil paints and/or mineral pigments, the artist composes his images by intervening on small areas of packaging, 
            book images, ink cartridges, photos from personal files and several other surfaces related to image reproduction. Once finished, 
            his micro-spaces are immediately photographed at the height of freshness of the paints and then printed in large-scale works, 
            establishing a vast dimensional vocabulary of volumes and colours.<br/>
            Daniel holds individual and collective exhibitions since 1988, including the Rio de Janeiro Modern Art Museum (MAM-RJ), 
            the Banco do Brasil Cultural Center (CCBB) and the Sergio Porto Cultural Space.<br/>
            Today he lives in Lisbon, Portugal, where he develops his artistic work.<br/>`}
          </p>
        </div>

        <div className="">
          <Image
            src={HeroImageOne}
            alt="Bio Image"
            className="absolute object-cover object-center h-full w-full"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Exhibitions</h1>
        <p className="text-lg ">
          <span className="text-xl">2022</span> 
          {`Group exhibition "Forever is made up of many nows",Brisa Galeria, Lisbon - Portugal.
          Group exhibition "Arte Vivo",Tamayo museum - México.
          Group exhibition "Hiperficie",Brisa Galeria, Lisbon - Portugal.
          Group exhibition "Planicies Ressonantes",Brisa Galeria, Lisbon - Portugal.
          Group exhibition "What´s in a Tale" ,Tale Art Gallery , Vlierzeldorp - Belgium
          Solo show  - SP ARTE  art fairGaleria Marcia Barrozo do Amaral Both , Sao Paulo - Brazil
          Group exhibition "HAKANAI",Brisa Galeria, Lisbon - Portugal.`}
          
          <span className="text-xl">2021</span>
          {`Group exhibition Deji Art Museum,Nanjing  - China.
          Group exhibition "Pedágio de mim","Not A Museum" Artspace , Lisbon - Portugal.
          Group exhibition "Terra Estrangeira",Tryzy Gallery , Lisbon - Portugal.
          Group exhibition "Entre a Água e a Terra",Brisa Galeria, Lisbon - Portugal.
          Solo show  - ArteRio  art fairGaleria Marcia Barrozo do Amaral Both , Rio de Janeiro - Brazil
          Solo exhibition "Polaroids"."Artsy " digital platform`}
        </p>
      </div>
    </main>
  )
}