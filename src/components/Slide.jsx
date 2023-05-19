import img3 from "../assets/img3.svg";

const Slide = () => {
  return (
    <div className="bg-white rounded-lg py-8 sm:py-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full xl:w-2/5 flex justify-end mb-12 xl:mb-0 xl:pr-16">
        <img src={img3} className="mx-auto rounded-lg" alt="" />
      </div>
      <div className="w-full xl:w-3/5">
        <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-4 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          Startup Master Class
        </h1>
        <h6 className="text-[#AFB0B0] text-sm xs:text-base md:text-lg lg:text-xl font-bold font-body pb-6">May 2023 by Anuj Kr. Gupta</h6>
        <p className="text-xs xs:text-sm md:text-xl lg:text-2xl font-bold font-body text-black">
          This is an Innovative, Intense, and brainstorming event which
          encourages new and modern ideas to solve the real-life issues. It
          provides a platform to shape the future with true potential and
          creativity. Few genuine ideas will be given a one time opportunity to
          get incubated
        </p>
      </div>
    </div>
  );
}

export default Slide