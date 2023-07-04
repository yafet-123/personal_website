import ReachUs from "@/components/contactus/ReachUs";
import ContactForm from "@/components/contactus/ContactForm";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
}

const ContactUsPage = () => {
  return (
      <div className="w-full h-full px-2 lg:px-10 py-32 bg-white">
        <ContactForm />
      </div>
  );
};

export default ContactUsPage;