import { motion } from "framer-motion";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="bg-[#111111] text-[#6b7070] pl-20 pr-16 xl:pl-48 xl:pr-32">
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-16 lg:gap-0 pt-20 pb-20">
        <div>
          <h1 className="text-white text-base sm:text-xl font-body font-bold">
            E-CELL, IIIT RANCHI.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-8 lg:mb-12" />
          <p className="font-serif text-base sm:text-xl py-1">Ideate</p>
          <p className="font-serif text-base sm:text-xl py-1">Innovate</p>
          <p className="font-serif text-base sm:text-xl py-1">Incubate</p>
        </div>
        <div>
          <h1 className="text-white text-base sm:text-xl font-body font-bold">
            FOLLOW US.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-8 lg:mb-12" />
          <p className="font-serif text-base sm:text-xl py-1">Facebook</p>
          <p className="font-serif text-base sm:text-xl py-1">LinkedIn</p>
          <p className="font-serif text-base sm:text-xl py-1">Instagram</p>
          <p className="font-serif text-base sm:text-xl py-1">Twitter</p>
        </div>
        <div>
          <h1 className="text-white text-base sm:text-xl font-body font-bold">
            GET NOTIFIED.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-8 lg:mb-12" />
          <p className="font-serif text-base sm:text-xl py-1">
            Be the first to know about the activities of E-Cell.
          </p>
          <div className="flex items-center rounded-xl my-12 lg:-ml-6 xl:mx-4">
            <input
              type="text"
              className="w-28 rounded-l-xl xs:w-full pl-4 sm:pl-6 lg:w-4/5 xl:pr-16 pr-0 py-2 sm:py-4 bg-black text-[#6b7070] outline-none placeholder:text-[#6b7070] text-xs xs:text-sm sm:text-lg font-sans"
              placeholder="type email"
            />
            <div className="bg-orange-600 rounded-r-xl py-1 px-2 cursor-pointer hover:opacity-95">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                src={mail}
                className="h-6 w-6 xs:w-7 xs:h-7 md:w-10 md:h-10 sm:m-1.5 sm:ml-0 xs:mr-2 lg:m-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#6b7070] font-semibold pb-2 text-center text-xs sm:text-base">
        With love from {"   "}
        <p className="text-white hover:text-orange-300 cursor-pointer inline-flex">
          E-Cell, IIIT Ranchi
        </p>
      </div>
    </div>
  );
};

export default Footer;
