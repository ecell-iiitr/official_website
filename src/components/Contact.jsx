import logo from "../assets/logo.svg";
import ContactForm from "./ContactForm";
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import mail from "../assets/mail.svg"
import insta from "../assets/insta.svg"

const Contact = () => {
  return (
    <div id="contact" className="bg-[#414141] py-8 sm:pt-16 sm:pb-8 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full hidden lg:flex items-center xl:block xl:w-2/5 py-8">
        <img src={logo} className="w-full mt-8 pr-24 pb-8" alt="" />
        <h1 className="text-white font-body font-extrabold text-3xl mt-8">
          Indian Institute of Information Technology (IIIT) Ranchi, at JUT,
          Science and Technology Campus, Namkum, Ranchi, Jharkhand 834010
        </h1>
      </div>
      <div className="w-full xl:w-3/5 xl:pl-20">
        <h1 className="text-white text-3xl sm:text-5xl mb-16">Contact Us</h1>
        <ContactForm />
        <div className="flex justify-end gap-4 sm:gap-8 pt-16">
            <img src={linkedin} className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12 md:h-14 md:w-14" alt="" />
            <img src={facebook} className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12 md:h-14 md:w-14" alt="" />
            <img src={twitter} className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12 md:h-14 md:w-14" alt="" />
            <img src={mail} className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12 md:h-14 md:w-14" alt="" />
            <img src={insta} className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12 md:h-14 md:w-14" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact