import Image from "next/image";
import Profile from "@/public/person1.jpg";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <p className="flex flex-col font-sans font-extralight text-[1.45rem] leading-[3.1rem] text-left text-[#010101] w-full lg:w-[55%] mt-10 lg:mt-0">
        <span className="">{`Helen Zeray's artistic journey is one that is filled with wonder and admiration for the beauty of nature.
        Growing up in Addis Abeba, Ethiopia, she was captivated by the artistry of the world around her, which led her to pursue her passion for the arts through private classes in her youth.
        With a heart full of awe and reverence for the natural world, Helen creates stunning works of art that amplify the shapes, colors, and movements of the landscape. 
        Through her use of acrylic, she masterfully captures the essence of nature, revealing the hand of the divine in its splendor.`}</span>
        <span className="mt-10">{`But Helen's artistry is not limited to the canvas. She is constantly seeking to expand her knowledge and philosophical understanding of the world beyond her artistic practice. 
        This thirst for knowledge drives her to explore new compositions, geometric shapes, forms, and colors, as she strives to deepen her connection with the natural world.
        In Helen's commitment to nonfigurative studies and her endless experimentation with techniques and forms, one can see a beautiful example of an artist's journey of growth and discovery. 
        Her passion for the arts and her reverence for nature are a testament to the transformative power of creativity and the wonders of the world around us.`}</span>
      </p>

      <div className="w-full lg:w-[45%] h-[25rem] lg:h-[35rem] relative lg:ml-10">
        <Image
          src={Profile}
          fill
          className="w-full h-full"
          alt="latest news image"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
