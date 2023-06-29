import ReachUs from "@/components/contactus/ReachUs";
import ContactForm from "@/components/contactus/ContactForm";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
  description: "This is contact page for Helen ",
}

const ContactUsPage = () => {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center px-2 lg:px-10 py-32 bg-white">
        <ContactForm />
      </div>
  );
};

export default ContactUsPage;