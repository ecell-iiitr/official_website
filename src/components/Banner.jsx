import logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <div className="bg-banner flex flex-col justify-center items-center">
      <div className="py-16 bg-black bg-opacity-50 w-full">
        <div className="space-y-2 sm:space-y-6 lg:space-y-12">
          <img
            src={logo}
            className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 xl:w-48 xl:h-48 mx-auto"
            alt=""
          />
          <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-5xl xl:text-6xl text-center font-bold text-white">
            ENTREPRENEURSHIP CELL <br /> IIIT RANCHI
          </h1>
          <div className="text-center pt-0 xs:pt-4 sm:pt-8 xl:pt-16 text-sm sm:text-lg lg:text-2xl text-white uppercase">
            “create, manifest, and guiding the entrepreneurial spirit”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
