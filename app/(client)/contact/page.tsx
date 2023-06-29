import ReachUs from "@/components/contactus/ReachUs";
import ContactForm from "@/components/contactus/ContactForm";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
  description: "This is contact page for Helen ",
}

const ContactUsPage = () => {
  return (
      <div className="w-full h-full flex flex-col px-10 py-32 bg-white">
        <h1 className="font-poppins sm:leading-[52px] text-2xl md:text-5xl leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-left text-[#010101]">
          Contact
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <ContactForm />
          <ReachUs />
        </div>
      </div>
  );
};

export default ContactUsPage;