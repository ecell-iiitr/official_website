import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="bg-[#111111] text-[#6b7070] pl-20 pr-16 xl:pl-48 xl:pr-32">
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-16 lg:gap-0 pt-32 pb-20">
        <div>
          <h1 className="text-white text-lg sm:text-2xl font-body font-bold">
            E-CELL, IIIT RANCHI.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-10 lg:mb-16" />
          <p className="font-serif text-lg sm:text-2xl py-1">Ideate</p>
          <p className="font-serif text-lg sm:text-2xl py-1">Innovate</p>
          <p className="font-serif text-lg sm:text-2xl py-1">Incubate</p>
        </div>
        <div>
          <h1 className="text-white text-lg sm:text-2xl font-body font-bold">
            FOLLOW US.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-10 lg:mb-16" />
          <p className="font-serif text-lg sm:text-2xl py-1">Facebook</p>
          <p className="font-serif text-lg sm:text-2xl py-1">LinkedIn</p>
          <p className="font-serif text-lg sm:text-2xl py-1">Instagram</p>
          <p className="font-serif text-lg sm:text-2xl py-1">Twitter</p>
        </div>
        <div>
          <h1 className="text-white text-lg sm:text-2xl font-body font-bold">
            GET NOTIFIED.
          </h1>
          <div className="bg-[#3a3d3d] h-[1px] w-1/3 lg:w-1/2 mt-4 mb-8 lg:mt-10 lg:mb-16" />
          <p className="font-serif text-lg sm:text-2xl py-1">
            Be the first to know about the activities of E-Cell.
          </p>
          <div className="flex items-center rounded-lg my-12 lg:-ml-6 xl:mx-4">
            <input
              type="text"
              className="pl-4 sm:pl-6 lg:w-4/5 xl:pr-16 pr-0 py-4 sm:py-6 bg-black text-[#6b7070] outline-none placeholder:text-[#6b7070] text-sm sm:text-xl font-sans"
              placeholder="type email"
            />
            <div className="hidden xs:inline bg-zinc-800 py-1 px-2 cursor-pointer hover:opacity-95">
              <img src={mail} className="w-8 h-8 sm:w-12 sm:h-12 m-1 xl:m-2" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#6b7070] font-semibold pb-2 text-center text-sm sm:text-xl">
        With love from {"   "}
        <p className="text-white hover:text-orange-300 cursor-pointer inline-flex">
          E-Cell, IIIT Ranchi
        </p>
      </div>
    </div>
  );
};

export default Footer;
