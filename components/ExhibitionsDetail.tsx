import Image from 'next/image'
import Link from 'next/link'

export default function ExhibitionsDetail({exhibitions}) {
  console.log(exhibitions)
  return (
  	<div className="my-10">
      <h1 className="font-bold text-xl lg:text-3xl mb-5">{exhibitions.id}</h1>
      {exhibitions.exhibitions?.map((data,index)=>(
          <div key={index} className={`flex ${ data.id % 2 == 0 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"} items-center w-full mb-5`}>
            <p className={`${ data.id % 2 == 0 ? 'text-left lg:text-right':'text-left '} w-full my-5 lg:my-0`}>{data.detail}</p>
            <div className="w-full lg:w-[50%] h-96 lg:!h-72 relative">
              <Image
                  src={data.image}
                  fill
                  className="!bg-cover w-full !h-full"
                  alt="latest news image"
              />
            </div>
          </div> 
      ))}
    </div>
  )
}
