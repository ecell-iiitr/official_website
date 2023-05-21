import mail from "../assets/mail2.svg";
import twitter from "../assets/twitter2.svg";
import linkedin from "../assets/linkedin2.svg";
import student from "../assets/student.svg";
import { motion } from "framer-motion";

const StudentCard = () => {
  return (
    <div className="xs:mx-4">
      <img src={student} className="mx-auto w-2/3 lg:w-3/4" alt="" />
      <h1 className="text-[#3498D9] font-body text-center font-bold pt-1 text-lg sm:text-xl">
        Yash Raj
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
