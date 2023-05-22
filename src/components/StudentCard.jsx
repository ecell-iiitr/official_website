import mail from "../assets/mail2.svg";
import twitter from "../assets/twitter2.svg";
import linkedin from "../assets/linkedin2.svg";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StudentCard = ({ name, image }) => {
  return (
    <div className="xs:mx-4">
      <img src={image} className="mx-auto rounded-full border-[3px] border-[#3498D9] w-2/3 lg:w-3/4" alt="" />
      <h1 className="text-[#3498D9] font-body text-center font-bold pt-1 text-lg sm:text-xl">
        {name}
      </h1>
      <p className="text-[#3498D9] font-body text-center font-semibold pt-1 text-xs sm:text-sm">
        (Senior Manager)
      </p>
      <div className="flex items-center justify-between mx-16 sm:mx-4 xl:mx-8 mt-8">
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={mail}
          className="cursor-pointer hover:opacity-80"
          alt=""
        />
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={twitter}
          className="cursor-pointer hover:opacity-80"
          alt=""
        />
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          src={linkedin}
          className="cursor-pointer hover:opacity-80"
          alt=""
        />
      </div>
    </div>
  );
};

export default StudentCard;
