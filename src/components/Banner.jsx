import logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <div className="bg-banner py-16 flex flex-col bg-opacity-50 justify-center items-center">
      <div className="space-y-2 sm:space-y-6 lg:space-y-12">
        <img
          src={logo}
          className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 xl:w-60 xl:h-60 mx-auto"
          alt=""
        />
        <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-5xl xl:text-8xl text-center font-bold text-[#3498D9]">
          ENTREPRENEURSHIP CELL <br /> IIIT RANCHI
        </h1>
        <div className="text-center pt-0 xs:pt-4 sm:pt-8 xl:pt-16 text-base sm:text-xl lg:text-3xl text-white uppercase">
          “create, manifest, and guiding the entrepreneurial spirit”
        </div>
      </div>
    </div>
  );
}

export default Banner