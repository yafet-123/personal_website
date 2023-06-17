import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center mt-96'>
      <Image
        src='/loader.svg'
        width={100}
        height={100}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
