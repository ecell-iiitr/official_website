import img2 from "../assets/img2.svg";

const Vision = () => {
  return (
    <div className="bg-white py-8 sm:pt-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full xl:w-1/2 flex justify-end mb-12 xl:mb-0 xl:pr-6">
        <img src={img2} className="mx-auto xl:px-4" alt="" />
      </div>
      <div className="w-full xl:w-1/2">
        <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-8 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          Our Vision
        </h1>
        <p className="text-xs xs:text-sm md:text-lg lg:text-xl font-bold font-body text-black">
          The Entrepreneurship cell, IIIT Ranchi is a non-profit organization
          that advocates to inculcate entrepreneurial spirit among the budding
          young minds who have the ardour to pursue entrepreneurship and
          aggrandize the ideas that have the potential to excel. Keeping this
          ideology in mind, we not only provide a platform to young visionary
          entrepreneurs to share their ideas freely with the fellow aspiring
          companions but also help in nurturing their skills by providing them
          with resources and guidance.
        </p>
      </div>
    </div>
  );
};

export default Vision;
