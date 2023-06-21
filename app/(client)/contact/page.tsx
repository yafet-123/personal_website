import ReachUs from "@/components/contactus/ReachUs";
import ContactForm from "@/components/contactus/ContactForm";


const ContactUsPage = () => {
  return (
      <div className="flex flex-col md:flex-row md:justify-around  gap-10 px-10 py-10 md:py-28 bg-[#646464] text-white">
        <ContactForm />
        <ReachUs />
      </div>
  );
};

export default ContactUsPage;