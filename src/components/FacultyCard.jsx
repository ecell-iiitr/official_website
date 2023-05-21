import faculty from "../assets/faculty.svg";
import mail from "../assets/mail1.svg";
import linkedin from "../assets/linkedin1.svg";
import twitter from "../assets/twitter1.svg";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="bg-[#3498D9] rounded-[60px] pb-10 pt-2 px-16 xl:px-10">
      <img src={faculty} className="mx-auto w-full" alt="" />
      <h1 className="text-white font-body text-center font-bold text-lg sm:text-2xl">
        Dr. Shalini Mahato
      </h1>
      <p className="text-white font-body text-center font-semibold pt-2 text-sm sm:text-base">
        Faculty at IIIT Ranchi
      </p>
      <div className="flex items-center justify-between sm:mt-20 mt-12 sm:mx-10 mx-0">
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={mail}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={twitter}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={linkedin}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card