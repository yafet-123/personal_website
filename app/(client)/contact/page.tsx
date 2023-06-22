import ReachUs from "@/components/contactus/ReachUs";
import ContactForm from "@/components/contactus/ContactForm";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
  description: "This is contact page for Helen ",
}

const ContactUsPage = () => {
  return (
      <div className="w-full h-full md:h-screen flex flex-col md:flex-row md:justify-around gap-10 px-10 py-10 md:py-28 bg-black text-white">
        <ContactForm />
        <ReachUs />
      </div>
  );
};

export default ContactUsPage;