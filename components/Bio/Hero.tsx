import Image from "next/image";
import Profile from "@/public/person1.jpg";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bio-background w-full h-[25rem] relative">
        <Image
          src={Profile}
          width={350}
          height={350}
          className="border-[10px] lg:border-[15px] border-[#355e3b] object-cover rounded-full absolute left-1/2 right-1/2 transform -translate-x-1/2 translate-y-1/4 bottom-0"
          alt="latest news image"
          priority
        />
      </div>
      <div className="flex flex-col items-center opacity 100 transform-none mt-32 px-5 mb-5">
        <h1 className="font-poppins dark:text-white font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
          Helen Zeray
        </h1>
        <p className="font-poppins xs:leading-[27px] text-xl leading-[23px] font-normal xl:w-[65%] sm:w-[75%] w-[100%] text-center text-[#505e66] mt-4">
          <span className="">{`Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.
          Growing up in Addis Abeba, Ethiopia, she was captivated by the artistry of the world around her, which led her to pursue her passion for the arts through private classes in her youth.
          With a heart full of awe and reverence for the natural world, Helen creates stunning works of art that amplify the shapes, colors, and movements of the landscape. 
          Through her use of acrylic, she masterfully captures the essence of nature, revealing the hand of the divine in its splendor.`}</span>
          <span className=" mt-10">{`But Helen's artistry is not limited to the canvas. She is constantly seeking to expand her knowledge and philosophical understanding of the world beyond her artistic practice. 
          This thirst for knowledge drives her to explore new compositions, geometric shapes, forms, and colors, as she strives to deepen her connection with the natural world.
          In Helen's commitment to nonfigurative studies and her endless experimentation with techniques and forms, one can see a beautiful example of an artist's journey of growth and discovery. 
          Her passion for the arts and her reverence for nature are a testament to the transformative power of creativity and the wonders of the world around us.`}</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
