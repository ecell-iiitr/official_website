import logo from "../assets/logo.svg";
import ContactForm from "./ContactForm";
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import mail from "../assets/mail.svg"
import insta from "../assets/insta.svg"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#414141] scroll-m-12 py-8 sm:pt-16 sm:pb-8 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row"
    >
      <div className="w-full hidden py-8 lg:flex items-center xl:block xl:w-2/5">
        <img src={logo} className="w-full mt-8 pr-24 pb-8" alt="" />
        <h1 className="text-white font-body font-extrabold text-xl mt-8">
          Indian Institute of Information Technology (IIIT) Ranchi, at JUT,
          Science and Technology Campus, Namkum, Ranchi, Jharkhand 834010
        </h1>
      </div>
      <div className="w-full xl:w-3/5 xl:pl-20">
        <h1 className="text-white text-2xl sm:text-4xl mb-12">Contact Us</h1>
        <ContactForm />
        <div className="flex justify-end gap-4 sm:gap-8 pt-16">
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={linkedin}
            className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
            alt=""
          />
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={facebook}
            className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
            alt=""
          />
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={twitter}
            className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
            alt=""
          />
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={mail}
            className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
            alt=""
          />
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={insta}
            className="hover:opacity-80 cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact